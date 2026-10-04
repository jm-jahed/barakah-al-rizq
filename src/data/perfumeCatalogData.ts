export interface PerfumeItem {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  priceAED: number;
  originalPriceAED?: number;
  bottleVolume: string;
  concentration: string;
  longevityHours: number;
  sillage: string;
  masterPerfumer: {
    name: string;
    title: string;
    accolades: string;
  };
  rating: number;
  reviewsCount: number;
  isBestseller: boolean;
  isLimitedEdition: boolean;
  isComplimentaryEngraving: boolean;
  heroImage: string;
  gallery: string[];
  scentFamily: string;
  scentProfile: string;
  shortDescription: string;
  pyramid: {
    topNotes: string[];
    heartNotes: string[];
    baseNotes: string[];
  };
  layeringRecommendation: string;
  packagingSpecs: string[];
}

export const PERFUME_CATALOG: PerfumeItem[] = [
  {
    "id": "OR-001",
    "title": "Oud Al-Sultan 30-Year Vintage Kalakassi Extrait — Edition A",
    "slug": "royal-aged-oud-or-001",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 2800,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 14,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 44,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-002",
    "title": "Rose Impériale de Grasse & Saffron Velvet — Edition B",
    "slug": "royal-aged-oud-or-002",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 3050,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 17,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 50,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-003",
    "title": "Ambre Royal de la Reine 40% Haute Extrait — Edition C",
    "slug": "royal-aged-oud-or-003",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 3275,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 20,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 56,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-004",
    "title": "Hojari Noir Smoked Frankincense & Cuir — Edition D",
    "slug": "royal-aged-oud-or-004",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 3525,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 23,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 62,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-005",
    "title": "Dehn Al Oud Hindi Qadeem Pure Tola — Edition E",
    "slug": "royal-aged-oud-or-005",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 3750,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 26,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 68,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-006",
    "title": "Santal Blanc de Mysore & Silk Cashmere — Edition F",
    "slug": "royal-aged-oud-or-006",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 4000,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 29,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 74,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-007",
    "title": "Vanille Bourbon Royale & Tonka Absolue — Edition G",
    "slug": "royal-aged-oud-or-007",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 4250,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 32,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 80,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-008",
    "title": "Taif Bloom & Golden Kashmiri Saffron Attar — Edition H",
    "slug": "royal-aged-oud-or-008",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 4475,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 35,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 86,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-009",
    "title": "Cuir Saharien Smoked Leather & Ambergris — Edition A",
    "slug": "royal-aged-oud-or-009",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 4725,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 38,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 92,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-010",
    "title": "Bakhoor Al-Majlis Royal Wild Agarwood Muattar — Edition B",
    "slug": "royal-aged-oud-or-010",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 4950,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 41,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 98,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-011",
    "title": "Nuit d’Arabie 24K Gold Infused Extrait Flacon — Edition C",
    "slug": "royal-aged-oud-or-011",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 5200,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 14,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 104,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-012",
    "title": "Fleur de Tabac & Smoked Cedarwood — Edition D",
    "slug": "royal-aged-oud-or-012",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 5450,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 17,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 110,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-013",
    "title": "Cambodian Wild Agarwood Oil 1994 Harvest — Edition E",
    "slug": "royal-aged-oud-or-013",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 5675,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 20,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 116,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-014",
    "title": "Musk Al-Ghazal Royal Black Ambergris Elixir — Edition F",
    "slug": "royal-aged-oud-or-014",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 5925,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 23,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 122,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-015",
    "title": "Damascus Rose Water & White Oud Mist — Edition G",
    "slug": "royal-aged-oud-or-015",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 6150,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 26,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 128,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-016",
    "title": "Leathery Oud & Bergamot Twilight Extrait — Edition H",
    "slug": "royal-aged-oud-or-016",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 6400,
    "originalPriceAED": 7675,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 29,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 134,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-017",
    "title": "Prestige Crystal Coffret 4-Piece Master Discovery — Edition A",
    "slug": "royal-aged-oud-or-017",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 6650,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 32,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 140,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-018",
    "title": "Smoky Birch Tar & Royal Frankincense Tears — Edition B",
    "slug": "royal-aged-oud-or-018",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 6875,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 35,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 146,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-019",
    "title": "Soleil d’Orient Cardamom & Saffron Breeze — Edition C",
    "slug": "royal-aged-oud-or-019",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 7125,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 38,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 152,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-020",
    "title": "Imperial Sovereign 24K Hand-Blown Crystal Decanter 100ml — Edition D",
    "slug": "royal-aged-oud-or-020",
    "categoryId": "royal-aged-oud",
    "categoryName": "Royal Aged Dehn Al Oud & Pure Oils",
    "priceAED": 7350,
    "originalPriceAED": 8825,
    "bottleVolume": "12ml Pure Tola",
    "concentration": "100% Pure Distilled Oil (Tola)",
    "longevityHours": 41,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 158,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Aged Dehn Al Oud",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-021",
    "title": "Oud Al-Sultan 30-Year Vintage Kalakassi Extrait — Edition A",
    "slug": "french-oriental-extrait-or-021",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 1450,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 14,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 164,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-022",
    "title": "Rose Impériale de Grasse & Saffron Velvet — Edition B",
    "slug": "french-oriental-extrait-or-022",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 1550,
    "originalPriceAED": 1850,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 17,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 170,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-023",
    "title": "Ambre Royal de la Reine 40% Haute Extrait — Edition C",
    "slug": "french-oriental-extrait-or-023",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 1625,
    "originalPriceAED": 1950,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 20,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 176,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-024",
    "title": "Hojari Noir Smoked Frankincense & Cuir — Edition D",
    "slug": "french-oriental-extrait-or-024",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 1725,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 23,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 182,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-025",
    "title": "Dehn Al Oud Hindi Qadeem Pure Tola — Edition E",
    "slug": "french-oriental-extrait-or-025",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 1800,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 26,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 188,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-026",
    "title": "Santal Blanc de Mysore & Silk Cashmere — Edition F",
    "slug": "french-oriental-extrait-or-026",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 1900,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 29,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 194,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-027",
    "title": "Vanille Bourbon Royale & Tonka Absolue — Edition G",
    "slug": "french-oriental-extrait-or-027",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 2000,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 32,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 200,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-028",
    "title": "Taif Bloom & Golden Kashmiri Saffron Attar — Edition H",
    "slug": "french-oriental-extrait-or-028",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 2075,
    "originalPriceAED": 2500,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 35,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 206,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-029",
    "title": "Cuir Saharien Smoked Leather & Ambergris — Edition A",
    "slug": "french-oriental-extrait-or-029",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 2175,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 38,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 212,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-030",
    "title": "Bakhoor Al-Majlis Royal Wild Agarwood Muattar — Edition B",
    "slug": "french-oriental-extrait-or-030",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 2250,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 41,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 218,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-031",
    "title": "Nuit d’Arabie 24K Gold Infused Extrait Flacon — Edition C",
    "slug": "french-oriental-extrait-or-031",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 2350,
    "originalPriceAED": 2825,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 14,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 224,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-032",
    "title": "Fleur de Tabac & Smoked Cedarwood — Edition D",
    "slug": "french-oriental-extrait-or-032",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 2450,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 17,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 230,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-033",
    "title": "Cambodian Wild Agarwood Oil 1994 Harvest — Edition E",
    "slug": "french-oriental-extrait-or-033",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 2525,
    "originalPriceAED": 3025,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 20,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 236,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-034",
    "title": "Musk Al-Ghazal Royal Black Ambergris Elixir — Edition F",
    "slug": "french-oriental-extrait-or-034",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 2625,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 23,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 242,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-035",
    "title": "Damascus Rose Water & White Oud Mist — Edition G",
    "slug": "french-oriental-extrait-or-035",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 2700,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 26,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 248,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-036",
    "title": "Leathery Oud & Bergamot Twilight Extrait — Edition H",
    "slug": "french-oriental-extrait-or-036",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 2800,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 29,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 254,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-037",
    "title": "Prestige Crystal Coffret 4-Piece Master Discovery — Edition A",
    "slug": "french-oriental-extrait-or-037",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 2900,
    "originalPriceAED": 3475,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 32,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 260,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-038",
    "title": "Smoky Birch Tar & Royal Frankincense Tears — Edition B",
    "slug": "french-oriental-extrait-or-038",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 2975,
    "originalPriceAED": 3575,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 35,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 266,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-039",
    "title": "Soleil d’Orient Cardamom & Saffron Breeze — Edition C",
    "slug": "french-oriental-extrait-or-039",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 3075,
    "originalPriceAED": 3700,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 38,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 272,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-040",
    "title": "Imperial Sovereign 24K Hand-Blown Crystal Decanter 100ml — Edition D",
    "slug": "french-oriental-extrait-or-040",
    "categoryId": "french-oriental-extrait",
    "categoryName": "French Oriental Extraits de Parfum",
    "priceAED": 3150,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 41,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 278,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "French Oriental Extraits de Parfum",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-041",
    "title": "Oud Al-Sultan 30-Year Vintage Kalakassi Extrait — Edition A",
    "slug": "taif-damascus-rose-or-041",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 1200,
    "originalPriceAED": 1450,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 14,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 284,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-042",
    "title": "Rose Impériale de Grasse & Saffron Velvet — Edition B",
    "slug": "taif-damascus-rose-or-042",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 1275,
    "originalPriceAED": 1525,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 17,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 290,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-043",
    "title": "Ambre Royal de la Reine 40% Haute Extrait — Edition C",
    "slug": "taif-damascus-rose-or-043",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 1350,
    "originalPriceAED": 1625,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 20,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 296,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-044",
    "title": "Hojari Noir Smoked Frankincense & Cuir — Edition D",
    "slug": "taif-damascus-rose-or-044",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 1450,
    "originalPriceAED": 1750,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 23,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 302,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-045",
    "title": "Dehn Al Oud Hindi Qadeem Pure Tola — Edition E",
    "slug": "taif-damascus-rose-or-045",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 1525,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 26,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 308,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-046",
    "title": "Santal Blanc de Mysore & Silk Cashmere — Edition F",
    "slug": "taif-damascus-rose-or-046",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 1600,
    "originalPriceAED": 1925,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 29,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 314,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-047",
    "title": "Vanille Bourbon Royale & Tonka Absolue — Edition G",
    "slug": "taif-damascus-rose-or-047",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 1675,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 32,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 320,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-048",
    "title": "Taif Bloom & Golden Kashmiri Saffron Attar — Edition H",
    "slug": "taif-damascus-rose-or-048",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 1750,
    "originalPriceAED": 2100,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 35,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 326,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-049",
    "title": "Cuir Saharien Smoked Leather & Ambergris — Edition A",
    "slug": "taif-damascus-rose-or-049",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 1850,
    "originalPriceAED": 2225,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 38,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 332,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-050",
    "title": "Bakhoor Al-Majlis Royal Wild Agarwood Muattar — Edition B",
    "slug": "taif-damascus-rose-or-050",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 1925,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 41,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 338,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-051",
    "title": "Nuit d’Arabie 24K Gold Infused Extrait Flacon — Edition C",
    "slug": "taif-damascus-rose-or-051",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 2000,
    "originalPriceAED": 2400,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 14,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 344,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-052",
    "title": "Fleur de Tabac & Smoked Cedarwood — Edition D",
    "slug": "taif-damascus-rose-or-052",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 2075,
    "originalPriceAED": 2500,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 17,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 350,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-053",
    "title": "Cambodian Wild Agarwood Oil 1994 Harvest — Edition E",
    "slug": "taif-damascus-rose-or-053",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 2150,
    "originalPriceAED": 2575,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 20,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 356,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-054",
    "title": "Musk Al-Ghazal Royal Black Ambergris Elixir — Edition F",
    "slug": "taif-damascus-rose-or-054",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 2250,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 23,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 362,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-055",
    "title": "Damascus Rose Water & White Oud Mist — Edition G",
    "slug": "taif-damascus-rose-or-055",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 2325,
    "originalPriceAED": 2800,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 26,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 368,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-056",
    "title": "Leathery Oud & Bergamot Twilight Extrait — Edition H",
    "slug": "taif-damascus-rose-or-056",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 2400,
    "originalPriceAED": 2875,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 29,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 374,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-057",
    "title": "Prestige Crystal Coffret 4-Piece Master Discovery — Edition A",
    "slug": "taif-damascus-rose-or-057",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 2475,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 32,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 380,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-058",
    "title": "Smoky Birch Tar & Royal Frankincense Tears — Edition B",
    "slug": "taif-damascus-rose-or-058",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 2550,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 35,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 386,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-059",
    "title": "Soleil d’Orient Cardamom & Saffron Breeze — Edition C",
    "slug": "taif-damascus-rose-or-059",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 2650,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 38,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 392,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-060",
    "title": "Imperial Sovereign 24K Hand-Blown Crystal Decanter 100ml — Edition D",
    "slug": "taif-damascus-rose-or-060",
    "categoryId": "taif-damascus-rose",
    "categoryName": "Taif Mountain Rose & Saffron Attars",
    "priceAED": 2725,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 41,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 398,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Taif Mountain Rose",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-061",
    "title": "Oud Al-Sultan 30-Year Vintage Kalakassi Extrait — Edition A",
    "slug": "smoky-leather-frankincense-or-061",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 850,
    "originalPriceAED": 1025,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 14,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 404,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-062",
    "title": "Rose Impériale de Grasse & Saffron Velvet — Edition B",
    "slug": "smoky-leather-frankincense-or-062",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 925,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 17,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 410,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-063",
    "title": "Ambre Royal de la Reine 40% Haute Extrait — Edition C",
    "slug": "smoky-leather-frankincense-or-063",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 975,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 20,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 416,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-064",
    "title": "Hojari Noir Smoked Frankincense & Cuir — Edition D",
    "slug": "smoky-leather-frankincense-or-064",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 1050,
    "originalPriceAED": 1250,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 23,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 422,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-065",
    "title": "Dehn Al Oud Hindi Qadeem Pure Tola — Edition E",
    "slug": "smoky-leather-frankincense-or-065",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 1100,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 26,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 428,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-066",
    "title": "Santal Blanc de Mysore & Silk Cashmere — Edition F",
    "slug": "smoky-leather-frankincense-or-066",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 1175,
    "originalPriceAED": 1400,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 29,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 434,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-067",
    "title": "Vanille Bourbon Royale & Tonka Absolue — Edition G",
    "slug": "smoky-leather-frankincense-or-067",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 1250,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 32,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 440,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-068",
    "title": "Taif Bloom & Golden Kashmiri Saffron Attar — Edition H",
    "slug": "smoky-leather-frankincense-or-068",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 1300,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 35,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 446,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-069",
    "title": "Cuir Saharien Smoked Leather & Ambergris — Edition A",
    "slug": "smoky-leather-frankincense-or-069",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 1375,
    "originalPriceAED": 1650,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 38,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 452,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-070",
    "title": "Bakhoor Al-Majlis Royal Wild Agarwood Muattar — Edition B",
    "slug": "smoky-leather-frankincense-or-070",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 1425,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 41,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 458,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-071",
    "title": "Nuit d’Arabie 24K Gold Infused Extrait Flacon — Edition C",
    "slug": "smoky-leather-frankincense-or-071",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 1500,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 14,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 464,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-072",
    "title": "Fleur de Tabac & Smoked Cedarwood — Edition D",
    "slug": "smoky-leather-frankincense-or-072",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 1575,
    "originalPriceAED": 1900,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 17,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 470,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-073",
    "title": "Cambodian Wild Agarwood Oil 1994 Harvest — Edition E",
    "slug": "smoky-leather-frankincense-or-073",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 1625,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 20,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 476,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-074",
    "title": "Musk Al-Ghazal Royal Black Ambergris Elixir — Edition F",
    "slug": "smoky-leather-frankincense-or-074",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 1700,
    "originalPriceAED": 2050,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 23,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 482,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-075",
    "title": "Damascus Rose Water & White Oud Mist — Edition G",
    "slug": "smoky-leather-frankincense-or-075",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 1750,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 26,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 488,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-076",
    "title": "Leathery Oud & Bergamot Twilight Extrait — Edition H",
    "slug": "smoky-leather-frankincense-or-076",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 1825,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 29,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 494,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-077",
    "title": "Prestige Crystal Coffret 4-Piece Master Discovery — Edition A",
    "slug": "smoky-leather-frankincense-or-077",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 1900,
    "originalPriceAED": 2275,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 32,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 500,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-078",
    "title": "Smoky Birch Tar & Royal Frankincense Tears — Edition B",
    "slug": "smoky-leather-frankincense-or-078",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 1950,
    "originalPriceAED": 2350,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 35,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 506,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-079",
    "title": "Soleil d’Orient Cardamom & Saffron Breeze — Edition C",
    "slug": "smoky-leather-frankincense-or-079",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 2025,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 38,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 512,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-080",
    "title": "Imperial Sovereign 24K Hand-Blown Crystal Decanter 100ml — Edition D",
    "slug": "smoky-leather-frankincense-or-080",
    "categoryId": "smoky-leather-frankincense",
    "categoryName": "Royal Hojari Frankincense & Tuscan Leather",
    "priceAED": 2075,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 41,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 518,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Hojari Frankincense",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-081",
    "title": "Oud Al-Sultan 30-Year Vintage Kalakassi Extrait — Edition A",
    "slug": "gourmand-amber-vanilla-or-081",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 850,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 14,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 524,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-082",
    "title": "Rose Impériale de Grasse & Saffron Velvet — Edition B",
    "slug": "gourmand-amber-vanilla-or-082",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 925,
    "originalPriceAED": 1100,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 17,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 530,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-083",
    "title": "Ambre Royal de la Reine 40% Haute Extrait — Edition C",
    "slug": "gourmand-amber-vanilla-or-083",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 975,
    "originalPriceAED": 1175,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 20,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 536,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-084",
    "title": "Hojari Noir Smoked Frankincense & Cuir — Edition D",
    "slug": "gourmand-amber-vanilla-or-084",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 1050,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 23,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 542,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-085",
    "title": "Dehn Al Oud Hindi Qadeem Pure Tola — Edition E",
    "slug": "gourmand-amber-vanilla-or-085",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 1100,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 26,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 548,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-086",
    "title": "Santal Blanc de Mysore & Silk Cashmere — Edition F",
    "slug": "gourmand-amber-vanilla-or-086",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 1175,
    "originalPriceAED": 1400,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 29,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 554,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-087",
    "title": "Vanille Bourbon Royale & Tonka Absolue — Edition G",
    "slug": "gourmand-amber-vanilla-or-087",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 1250,
    "originalPriceAED": 1500,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 32,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 560,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-088",
    "title": "Taif Bloom & Golden Kashmiri Saffron Attar — Edition H",
    "slug": "gourmand-amber-vanilla-or-088",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 1300,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 35,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 566,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-089",
    "title": "Cuir Saharien Smoked Leather & Ambergris — Edition A",
    "slug": "gourmand-amber-vanilla-or-089",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 1375,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 38,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 572,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-090",
    "title": "Bakhoor Al-Majlis Royal Wild Agarwood Muattar — Edition B",
    "slug": "gourmand-amber-vanilla-or-090",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 1425,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 41,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 578,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-091",
    "title": "Nuit d’Arabie 24K Gold Infused Extrait Flacon — Edition C",
    "slug": "gourmand-amber-vanilla-or-091",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 1500,
    "originalPriceAED": 1800,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 14,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 584,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-092",
    "title": "Fleur de Tabac & Smoked Cedarwood — Edition D",
    "slug": "gourmand-amber-vanilla-or-092",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 1575,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 17,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 590,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-093",
    "title": "Cambodian Wild Agarwood Oil 1994 Harvest — Edition E",
    "slug": "gourmand-amber-vanilla-or-093",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 1625,
    "originalPriceAED": 1950,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 20,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 596,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-094",
    "title": "Musk Al-Ghazal Royal Black Ambergris Elixir — Edition F",
    "slug": "gourmand-amber-vanilla-or-094",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 1700,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 23,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 602,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-095",
    "title": "Damascus Rose Water & White Oud Mist — Edition G",
    "slug": "gourmand-amber-vanilla-or-095",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 1750,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 26,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 608,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-096",
    "title": "Leathery Oud & Bergamot Twilight Extrait — Edition H",
    "slug": "gourmand-amber-vanilla-or-096",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 1825,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 29,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 614,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-097",
    "title": "Prestige Crystal Coffret 4-Piece Master Discovery — Edition A",
    "slug": "gourmand-amber-vanilla-or-097",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 1900,
    "originalPriceAED": 2275,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 32,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 620,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-098",
    "title": "Smoky Birch Tar & Royal Frankincense Tears — Edition B",
    "slug": "gourmand-amber-vanilla-or-098",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 1950,
    "originalPriceAED": 2350,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 35,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 626,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-099",
    "title": "Soleil d’Orient Cardamom & Saffron Breeze — Edition C",
    "slug": "gourmand-amber-vanilla-or-099",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 2025,
    "originalPriceAED": 2425,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 38,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 632,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-100",
    "title": "Imperial Sovereign 24K Hand-Blown Crystal Decanter 100ml — Edition D",
    "slug": "gourmand-amber-vanilla-or-100",
    "categoryId": "gourmand-amber-vanilla",
    "categoryName": "Madagascar Bourbon Vanilla & Warm Ambers",
    "priceAED": 2075,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 41,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 638,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Madagascar Bourbon Vanilla",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-101",
    "title": "Oud Al-Sultan 30-Year Vintage Kalakassi Extrait — Edition A",
    "slug": "woody-sandalwood-cedar-or-101",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 850,
    "originalPriceAED": 1025,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 14,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 644,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-102",
    "title": "Rose Impériale de Grasse & Saffron Velvet — Edition B",
    "slug": "woody-sandalwood-cedar-or-102",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 925,
    "originalPriceAED": 1100,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 17,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 650,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-103",
    "title": "Ambre Royal de la Reine 40% Haute Extrait — Edition C",
    "slug": "woody-sandalwood-cedar-or-103",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 975,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 20,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 656,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-104",
    "title": "Hojari Noir Smoked Frankincense & Cuir — Edition D",
    "slug": "woody-sandalwood-cedar-or-104",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 1050,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 23,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 662,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-105",
    "title": "Dehn Al Oud Hindi Qadeem Pure Tola — Edition E",
    "slug": "woody-sandalwood-cedar-or-105",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 1100,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 26,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 668,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-106",
    "title": "Santal Blanc de Mysore & Silk Cashmere — Edition F",
    "slug": "woody-sandalwood-cedar-or-106",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 1175,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 29,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 674,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-107",
    "title": "Vanille Bourbon Royale & Tonka Absolue — Edition G",
    "slug": "woody-sandalwood-cedar-or-107",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 1250,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 32,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 680,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-108",
    "title": "Taif Bloom & Golden Kashmiri Saffron Attar — Edition H",
    "slug": "woody-sandalwood-cedar-or-108",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 1300,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 35,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 686,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-109",
    "title": "Cuir Saharien Smoked Leather & Ambergris — Edition A",
    "slug": "woody-sandalwood-cedar-or-109",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 1375,
    "originalPriceAED": 1650,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 38,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 692,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-110",
    "title": "Bakhoor Al-Majlis Royal Wild Agarwood Muattar — Edition B",
    "slug": "woody-sandalwood-cedar-or-110",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 1425,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 41,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 698,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-111",
    "title": "Nuit d’Arabie 24K Gold Infused Extrait Flacon — Edition C",
    "slug": "woody-sandalwood-cedar-or-111",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 1500,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 14,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 704,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-112",
    "title": "Fleur de Tabac & Smoked Cedarwood — Edition D",
    "slug": "woody-sandalwood-cedar-or-112",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 1575,
    "originalPriceAED": 1900,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 17,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 710,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-113",
    "title": "Cambodian Wild Agarwood Oil 1994 Harvest — Edition E",
    "slug": "woody-sandalwood-cedar-or-113",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 1625,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 20,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 716,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-114",
    "title": "Musk Al-Ghazal Royal Black Ambergris Elixir — Edition F",
    "slug": "woody-sandalwood-cedar-or-114",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 1700,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 23,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 722,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-115",
    "title": "Damascus Rose Water & White Oud Mist — Edition G",
    "slug": "woody-sandalwood-cedar-or-115",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 1750,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 26,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 728,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-116",
    "title": "Leathery Oud & Bergamot Twilight Extrait — Edition H",
    "slug": "woody-sandalwood-cedar-or-116",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 1825,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 29,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 734,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-117",
    "title": "Prestige Crystal Coffret 4-Piece Master Discovery — Edition A",
    "slug": "woody-sandalwood-cedar-or-117",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 1900,
    "originalPriceAED": 2275,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 32,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 740,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-118",
    "title": "Smoky Birch Tar & Royal Frankincense Tears — Edition B",
    "slug": "woody-sandalwood-cedar-or-118",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 1950,
    "originalPriceAED": 2350,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 35,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 746,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-119",
    "title": "Soleil d’Orient Cardamom & Saffron Breeze — Edition C",
    "slug": "woody-sandalwood-cedar-or-119",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 2025,
    "originalPriceAED": 2425,
    "bottleVolume": "100ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 38,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 752,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-120",
    "title": "Imperial Sovereign 24K Hand-Blown Crystal Decanter 100ml — Edition D",
    "slug": "woody-sandalwood-cedar-or-120",
    "categoryId": "woody-sandalwood-cedar",
    "categoryName": "Mysore Sandalwood & Atlas Mountain Cedar",
    "priceAED": 2075,
    "bottleVolume": "50ml Flacon",
    "concentration": "Extrait de Parfum (35%)",
    "longevityHours": 41,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 758,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Mysore Sandalwood",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-121",
    "title": "Oud Al-Sultan 30-Year Vintage Kalakassi Extrait — Edition A",
    "slug": "royal-bakhoor-incense-or-121",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 750,
    "originalPriceAED": 900,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 14,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 764,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-122",
    "title": "Rose Impériale de Grasse & Saffron Velvet — Edition B",
    "slug": "royal-bakhoor-incense-or-122",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 800,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 17,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 770,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-123",
    "title": "Ambre Royal de la Reine 40% Haute Extrait — Edition C",
    "slug": "royal-bakhoor-incense-or-123",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 875,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 20,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 776,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-124",
    "title": "Hojari Noir Smoked Frankincense & Cuir — Edition D",
    "slug": "royal-bakhoor-incense-or-124",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 925,
    "originalPriceAED": 1100,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 23,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 782,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-125",
    "title": "Dehn Al Oud Hindi Qadeem Pure Tola — Edition E",
    "slug": "royal-bakhoor-incense-or-125",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 1000,
    "originalPriceAED": 1200,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 26,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 788,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-126",
    "title": "Santal Blanc de Mysore & Silk Cashmere — Edition F",
    "slug": "royal-bakhoor-incense-or-126",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 1050,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 29,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 794,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-127",
    "title": "Vanille Bourbon Royale & Tonka Absolue — Edition G",
    "slug": "royal-bakhoor-incense-or-127",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 1100,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 32,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 800,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-128",
    "title": "Taif Bloom & Golden Kashmiri Saffron Attar — Edition H",
    "slug": "royal-bakhoor-incense-or-128",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 1175,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 35,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 806,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-129",
    "title": "Cuir Saharien Smoked Leather & Ambergris — Edition A",
    "slug": "royal-bakhoor-incense-or-129",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 1225,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 38,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 812,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-130",
    "title": "Bakhoor Al-Majlis Royal Wild Agarwood Muattar — Edition B",
    "slug": "royal-bakhoor-incense-or-130",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 1300,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 41,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 818,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-131",
    "title": "Nuit d’Arabie 24K Gold Infused Extrait Flacon — Edition C",
    "slug": "royal-bakhoor-incense-or-131",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 1350,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 14,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 824,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-132",
    "title": "Fleur de Tabac & Smoked Cedarwood — Edition D",
    "slug": "royal-bakhoor-incense-or-132",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 1400,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 17,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 830,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-133",
    "title": "Cambodian Wild Agarwood Oil 1994 Harvest — Edition E",
    "slug": "royal-bakhoor-incense-or-133",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 1475,
    "originalPriceAED": 1775,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 20,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 836,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-134",
    "title": "Musk Al-Ghazal Royal Black Ambergris Elixir — Edition F",
    "slug": "royal-bakhoor-incense-or-134",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 1525,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 23,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 842,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-135",
    "title": "Damascus Rose Water & White Oud Mist — Edition G",
    "slug": "royal-bakhoor-incense-or-135",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 1600,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 26,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 848,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-136",
    "title": "Leathery Oud & Bergamot Twilight Extrait — Edition H",
    "slug": "royal-bakhoor-incense-or-136",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 1650,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 29,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 854,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-137",
    "title": "Prestige Crystal Coffret 4-Piece Master Discovery — Edition A",
    "slug": "royal-bakhoor-incense-or-137",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 1700,
    "originalPriceAED": 2050,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 32,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 860,
    "isBestseller": true,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-138",
    "title": "Smoky Birch Tar & Royal Frankincense Tears — Edition B",
    "slug": "royal-bakhoor-incense-or-138",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 1775,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 35,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 866,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-139",
    "title": "Soleil d’Orient Cardamom & Saffron Breeze — Edition C",
    "slug": "royal-bakhoor-incense-or-139",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 1825,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 38,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 872,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-140",
    "title": "Imperial Sovereign 24K Hand-Blown Crystal Decanter 100ml — Edition D",
    "slug": "royal-bakhoor-incense-or-140",
    "categoryId": "royal-bakhoor-incense",
    "categoryName": "Royal Agarwood Muattar & Saffron Bakhoor",
    "priceAED": 1900,
    "bottleVolume": "100g Crystal Jar",
    "concentration": "A-Grade Muattar Chips",
    "longevityHours": 41,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 878,
    "isBestseller": false,
    "isLimitedEdition": false,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "Royal Agarwood Muattar",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-141",
    "title": "Oud Al-Sultan 30-Year Vintage Kalakassi Extrait — Edition A",
    "slug": "bespoke-flacon-coffrets-or-141",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 4500,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 14,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 884,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-142",
    "title": "Rose Impériale de Grasse & Saffron Velvet — Edition B",
    "slug": "bespoke-flacon-coffrets-or-142",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 4850,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 17,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 890,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-143",
    "title": "Ambre Royal de la Reine 40% Haute Extrait — Edition C",
    "slug": "bespoke-flacon-coffrets-or-143",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 5200,
    "originalPriceAED": 6250,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 20,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 896,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-144",
    "title": "Hojari Noir Smoked Frankincense & Cuir — Edition D",
    "slug": "bespoke-flacon-coffrets-or-144",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 5550,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 23,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 902,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-145",
    "title": "Dehn Al Oud Hindi Qadeem Pure Tola — Edition E",
    "slug": "bespoke-flacon-coffrets-or-145",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 5900,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 26,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 908,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-146",
    "title": "Santal Blanc de Mysore & Silk Cashmere — Edition F",
    "slug": "bespoke-flacon-coffrets-or-146",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 6250,
    "originalPriceAED": 7500,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 29,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 914,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-147",
    "title": "Vanille Bourbon Royale & Tonka Absolue — Edition G",
    "slug": "bespoke-flacon-coffrets-or-147",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 6600,
    "originalPriceAED": 7925,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 32,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 920,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-148",
    "title": "Taif Bloom & Golden Kashmiri Saffron Attar — Edition H",
    "slug": "bespoke-flacon-coffrets-or-148",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 6950,
    "originalPriceAED": 8350,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 35,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 926,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-149",
    "title": "Cuir Saharien Smoked Leather & Ambergris — Edition A",
    "slug": "bespoke-flacon-coffrets-or-149",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 7300,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 38,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 932,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-150",
    "title": "Bakhoor Al-Majlis Royal Wild Agarwood Muattar — Edition B",
    "slug": "bespoke-flacon-coffrets-or-150",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 7650,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 41,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 938,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-151",
    "title": "Nuit d’Arabie 24K Gold Infused Extrait Flacon — Edition C",
    "slug": "bespoke-flacon-coffrets-or-151",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 8000,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 14,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 4.9,
    "reviewsCount": 944,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-152",
    "title": "Fleur de Tabac & Smoked Cedarwood — Edition D",
    "slug": "bespoke-flacon-coffrets-or-152",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 8350,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 17,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 950,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-153",
    "title": "Cambodian Wild Agarwood Oil 1994 Harvest — Edition E",
    "slug": "bespoke-flacon-coffrets-or-153",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 8700,
    "originalPriceAED": 10450,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 20,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 4.9,
    "reviewsCount": 956,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-154",
    "title": "Musk Al-Ghazal Royal Black Ambergris Elixir — Edition F",
    "slug": "bespoke-flacon-coffrets-or-154",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 9050,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 23,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 4.9,
    "reviewsCount": 962,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-155",
    "title": "Damascus Rose Water & White Oud Mist — Edition G",
    "slug": "bespoke-flacon-coffrets-or-155",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 9400,
    "originalPriceAED": 11275,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 26,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 968,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-156",
    "title": "Leathery Oud & Bergamot Twilight Extrait — Edition H",
    "slug": "bespoke-flacon-coffrets-or-156",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 9750,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 29,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 5,
    "reviewsCount": 974,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-157",
    "title": "Prestige Crystal Coffret 4-Piece Master Discovery — Edition A",
    "slug": "bespoke-flacon-coffrets-or-157",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 10100,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 32,
    "sillage": "Enveloping & Heavy",
    "masterPerfumer": {
      "name": "Aurelien Guichard",
      "title": "Founder & 7th-Generation Grasse Perfumer",
      "accolades": "World Perfumery Congress Keynote Master"
    },
    "rating": 5,
    "reviewsCount": 980,
    "isBestseller": true,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Aurelien Guichard.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-158",
    "title": "Smoky Birch Tar & Royal Frankincense Tears — Edition B",
    "slug": "bespoke-flacon-coffrets-or-158",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 10450,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 35,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Antoine Maisondieu",
      "title": "Master Parfumeur — Grasse & Paris",
      "accolades": "Prix François Coty Laureate"
    },
    "rating": 5,
    "reviewsCount": 986,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Antoine Maisondieu.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-159",
    "title": "Soleil d’Orient Cardamom & Saffron Breeze — Edition C",
    "slug": "bespoke-flacon-coffrets-or-159",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 10800,
    "originalPriceAED": 12950,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 38,
    "sillage": "Monumental / Nuclear",
    "masterPerfumer": {
      "name": "Nasser Al-Ghamdi",
      "title": "Grand Master Attar Alchemist — Taif & Dubai",
      "accolades": "4th Generation Gulf Distiller"
    },
    "rating": 5,
    "reviewsCount": 992,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Nasser Al-Ghamdi.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  },
  {
    "id": "OR-160",
    "title": "Imperial Sovereign 24K Hand-Blown Crystal Decanter 100ml — Edition D",
    "slug": "bespoke-flacon-coffrets-or-160",
    "categoryId": "bespoke-flacon-coffrets",
    "categoryName": "24K Gold Inlaid Flacons & Master Coffrets",
    "priceAED": 11150,
    "bottleVolume": "4 x 30ml Coffret",
    "concentration": "High-Concentration Extrait (42%)",
    "longevityHours": 41,
    "sillage": "Sophisticated & Intimate",
    "masterPerfumer": {
      "name": "Dominique Ropion",
      "title": "Grand Master of Modern Oriental Extraits",
      "accolades": "Chevalier de l’Ordre des Arts et des Lettres"
    },
    "rating": 4.9,
    "reviewsCount": 998,
    "isBestseller": false,
    "isLimitedEdition": true,
    "isComplimentaryEngraving": true,
    "heroImage": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80"
    ],
    "scentFamily": "24K Gold Inlaid Flacons",
    "scentProfile": "Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices",
    "shortDescription": "A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of Dominique Ropion.",
    "pyramid": {
      "topNotes": [
        "Bergamot Reggio",
        "Saffron Threads",
        "Pink Peppercorn",
        "Cardamom Pods"
      ],
      "heartNotes": [
        "Taif Centifolia Rose",
        "Smoked Frankincense Tears",
        "Cistus Labdanum",
        "Orris Butter"
      ],
      "baseNotes": [
        "30-Year Kalakassi Oud",
        "Ambergris Tincture",
        "Mysore Sandalwood",
        "Madagascar Bourbon Vanilla"
      ]
    },
    "layeringRecommendation": "Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.",
    "packagingSpecs": [
      "Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap",
      "Signature silk-lined wooden presentation box with gold foil stamping",
      "Custom calligraphy brass nameplate with optional complimentary engraving"
    ]
  }
];
