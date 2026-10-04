export interface RestaurantDish {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  originRegion: string;
  priceAED: number;
  originalPriceAED?: number;
  caloriesKcal: number;
  preparationMinutes: number;
  servesPersons: number;
  executiveChef: {
    name: string;
    title: string;
    accolades: string;
  };
  dietaryTags: string[];
  isSignature: boolean;
  isPreOrderOnly: boolean;
  sommelierPairing: string;
  rating: number;
  reviewsCount: number;
  heroImage: string;
  gallery: string[];
  flavorProfile: string;
  shortDescription: string;
  tastingNotes: string[];
  ingredients: string[];
  tableServiceProtocol: string[];
}

export const RESTAURANT_CATALOG: RestaurantDish[] = [
  {
    "id": "AS-001",
    "title": "The Royal Imperial Saffron & Cardamom Braised Camel Loin with 24K Gold Leaves — Series A",
    "slug": "royal-emirati-heritage-as-001",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 85,
    "caloriesKcal": 320,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 47,
    "heroImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-002",
    "title": "The Périgord Black Winter Truffle & Pan-Seared Duck Liver Rossini — Series B",
    "slug": "royal-emirati-heritage-as-002",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 90,
    "caloriesKcal": 365,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 52,
    "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-003",
    "title": "The A5 Kagoshima Wagyu Tenderloin with Smoked Miso & Binchotan Char — Series C",
    "slug": "royal-emirati-heritage-as-003",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 95,
    "caloriesKcal": 410,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 57,
    "heroImage": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-004",
    "title": "The Wild Oman Rock Lobster Thermidor with Gruyère & Dijonnaise Glaze — Series D",
    "slug": "royal-emirati-heritage-as-004",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 95,
    "caloriesKcal": 455,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 62,
    "heroImage": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-005",
    "title": "The Royal Imperial Beluga Caviar Tasting Flight (50g) with Traditional Accoutrements — Series E",
    "slug": "royal-emirati-heritage-as-005",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 100,
    "caloriesKcal": 500,
    "preparationMinutes": 40,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 67,
    "heroImage": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-006",
    "title": "The 45-Day Himalayan Salt Dry-Aged Tomahawk 1.2kg with Bone Marrow Jus — Series F",
    "slug": "royal-emirati-heritage-as-006",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 105,
    "originalPriceAED": 120,
    "caloriesKcal": 545,
    "preparationMinutes": 45,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 72,
    "heroImage": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-007",
    "title": "The Bluefin Tuna Flight: Akami, Chutoro & Otoro with Fresh Shizuoka Wasabi — Series A",
    "slug": "royal-emirati-heritage-as-007",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 110,
    "caloriesKcal": 590,
    "preparationMinutes": 50,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 77,
    "heroImage": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-008",
    "title": "The Royal Harees with Slow-Cooked Milk-Fed Veal & Clarified Camel Ghee — Series B",
    "slug": "royal-emirati-heritage-as-008",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 115,
    "caloriesKcal": 635,
    "preparationMinutes": 55,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 82,
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-009",
    "title": "The Wild Mediterranean Turbot Roasted on the Bone with Capers & Brown Butter — Series C",
    "slug": "royal-emirati-heritage-as-009",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 115,
    "caloriesKcal": 680,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 87,
    "heroImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-010",
    "title": "The Brittany Diver Scallops with Cauliflower Velouté & Oscietra Caviar — Series D",
    "slug": "royal-emirati-heritage-as-010",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 120,
    "caloriesKcal": 725,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 92,
    "heroImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-011",
    "title": "The 24K Pure Gold Leaf Ribeye Steak (350g) with Black Truffle Butter — Series E",
    "slug": "royal-emirati-heritage-as-011",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 125,
    "caloriesKcal": 770,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 97,
    "heroImage": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-012",
    "title": "The Wood-Fired King Crab Legs with Yuzu Kosho Butter & Shiso — Series F",
    "slug": "royal-emirati-heritage-as-012",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 130,
    "caloriesKcal": 815,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 102,
    "heroImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-013",
    "title": "The Signature 12-Course Chef Table Gastronomic Symphony with Pairings — Series A",
    "slug": "royal-emirati-heritage-as-013",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 135,
    "caloriesKcal": 860,
    "preparationMinutes": 40,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 107,
    "heroImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-014",
    "title": "The Damascus Rose & Raspberry Meringue Pavlova with Pistachio Chantilly — Series B",
    "slug": "royal-emirati-heritage-as-014",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 135,
    "caloriesKcal": 905,
    "preparationMinutes": 45,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 112,
    "heroImage": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-015",
    "title": "The Valrhona 72% Dark Chocolate Sphere with Warm Salted Caramel Pour — Series C",
    "slug": "royal-emirati-heritage-as-015",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 140,
    "caloriesKcal": 950,
    "preparationMinutes": 50,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 117,
    "heroImage": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-016",
    "title": "The Artisanal 24K Gold Saffron Cappuccino & Royal Medjool Date Selection — Series D",
    "slug": "royal-emirati-heritage-as-016",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 145,
    "caloriesKcal": 345,
    "preparationMinutes": 55,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 122,
    "heroImage": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-017",
    "title": "The Slow-Smoked Australian Wagyu Brisket Machboos with Loomi Essence — Series E",
    "slug": "royal-emirati-heritage-as-017",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 150,
    "originalPriceAED": 180,
    "caloriesKcal": 390,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 127,
    "heroImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-018",
    "title": "The Japanese Hokkaido Sea Urchin (Uni) & Tartare of A5 Wagyu with Brioche — Series F",
    "slug": "royal-emirati-heritage-as-018",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 155,
    "caloriesKcal": 435,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 132,
    "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-019",
    "title": "The Mediterranean Carabinero Red Prawns Carpaccio with Citrus Oil & Sea Salt — Series A",
    "slug": "royal-emirati-heritage-as-019",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 155,
    "originalPriceAED": 180,
    "caloriesKcal": 480,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 137,
    "heroImage": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-020",
    "title": "The Royal Majlis 8-Course Private Banquet for VIP Dignitaries & Families — Series B",
    "slug": "royal-emirati-heritage-as-020",
    "categoryId": "royal-emirati-heritage",
    "categoryName": "Royal Emirati & Khaleeji Haute Cuisine",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 160,
    "caloriesKcal": 525,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 142,
    "heroImage": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-021",
    "title": "The Royal Imperial Saffron & Cardamom Braised Camel Loin with 24K Gold Leaves — Series A",
    "slug": "french-haute-gastronomy-as-021",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 95,
    "originalPriceAED": 110,
    "caloriesKcal": 320,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 147,
    "heroImage": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-022",
    "title": "The Périgord Black Winter Truffle & Pan-Seared Duck Liver Rossini — Series B",
    "slug": "french-haute-gastronomy-as-022",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 100,
    "originalPriceAED": 120,
    "caloriesKcal": 365,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 152,
    "heroImage": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-023",
    "title": "The A5 Kagoshima Wagyu Tenderloin with Smoked Miso & Binchotan Char — Series C",
    "slug": "french-haute-gastronomy-as-023",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 105,
    "originalPriceAED": 120,
    "caloriesKcal": 410,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 157,
    "heroImage": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-024",
    "title": "The Wild Oman Rock Lobster Thermidor with Gruyère & Dijonnaise Glaze — Series D",
    "slug": "french-haute-gastronomy-as-024",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 110,
    "caloriesKcal": 455,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 162,
    "heroImage": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-025",
    "title": "The Royal Imperial Beluga Caviar Tasting Flight (50g) with Traditional Accoutrements — Series E",
    "slug": "french-haute-gastronomy-as-025",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 115,
    "originalPriceAED": 140,
    "caloriesKcal": 500,
    "preparationMinutes": 40,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 167,
    "heroImage": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-026",
    "title": "The 45-Day Himalayan Salt Dry-Aged Tomahawk 1.2kg with Bone Marrow Jus — Series F",
    "slug": "french-haute-gastronomy-as-026",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 120,
    "caloriesKcal": 545,
    "preparationMinutes": 45,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 172,
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-027",
    "title": "The Bluefin Tuna Flight: Akami, Chutoro & Otoro with Fresh Shizuoka Wasabi — Series A",
    "slug": "french-haute-gastronomy-as-027",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 125,
    "caloriesKcal": 590,
    "preparationMinutes": 50,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 177,
    "heroImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-028",
    "title": "The Royal Harees with Slow-Cooked Milk-Fed Veal & Clarified Camel Ghee — Series B",
    "slug": "french-haute-gastronomy-as-028",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 130,
    "caloriesKcal": 635,
    "preparationMinutes": 55,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 182,
    "heroImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-029",
    "title": "The Wild Mediterranean Turbot Roasted on the Bone with Capers & Brown Butter — Series C",
    "slug": "french-haute-gastronomy-as-029",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 135,
    "originalPriceAED": 160,
    "caloriesKcal": 680,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 187,
    "heroImage": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-030",
    "title": "The Brittany Diver Scallops with Cauliflower Velouté & Oscietra Caviar — Series D",
    "slug": "french-haute-gastronomy-as-030",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 140,
    "originalPriceAED": 170,
    "caloriesKcal": 725,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 192,
    "heroImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-031",
    "title": "The 24K Pure Gold Leaf Ribeye Steak (350g) with Black Truffle Butter — Series E",
    "slug": "french-haute-gastronomy-as-031",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 145,
    "originalPriceAED": 170,
    "caloriesKcal": 770,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 197,
    "heroImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-032",
    "title": "The Wood-Fired King Crab Legs with Yuzu Kosho Butter & Shiso — Series F",
    "slug": "french-haute-gastronomy-as-032",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 150,
    "caloriesKcal": 815,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 202,
    "heroImage": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-033",
    "title": "The Signature 12-Course Chef Table Gastronomic Symphony with Pairings — Series A",
    "slug": "french-haute-gastronomy-as-033",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 155,
    "originalPriceAED": 180,
    "caloriesKcal": 860,
    "preparationMinutes": 40,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 207,
    "heroImage": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-034",
    "title": "The Damascus Rose & Raspberry Meringue Pavlova with Pistachio Chantilly — Series B",
    "slug": "french-haute-gastronomy-as-034",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 160,
    "caloriesKcal": 905,
    "preparationMinutes": 45,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 212,
    "heroImage": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-035",
    "title": "The Valrhona 72% Dark Chocolate Sphere with Warm Salted Caramel Pour — Series C",
    "slug": "french-haute-gastronomy-as-035",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 165,
    "originalPriceAED": 190,
    "caloriesKcal": 950,
    "preparationMinutes": 50,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 217,
    "heroImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-036",
    "title": "The Artisanal 24K Gold Saffron Cappuccino & Royal Medjool Date Selection — Series D",
    "slug": "french-haute-gastronomy-as-036",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 170,
    "caloriesKcal": 345,
    "preparationMinutes": 55,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 222,
    "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-037",
    "title": "The Slow-Smoked Australian Wagyu Brisket Machboos with Loomi Essence — Series E",
    "slug": "french-haute-gastronomy-as-037",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 175,
    "caloriesKcal": 390,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 227,
    "heroImage": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-038",
    "title": "The Japanese Hokkaido Sea Urchin (Uni) & Tartare of A5 Wagyu with Brioche — Series F",
    "slug": "french-haute-gastronomy-as-038",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 180,
    "originalPriceAED": 210,
    "caloriesKcal": 435,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 232,
    "heroImage": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-039",
    "title": "The Mediterranean Carabinero Red Prawns Carpaccio with Citrus Oil & Sea Salt — Series A",
    "slug": "french-haute-gastronomy-as-039",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 185,
    "caloriesKcal": 480,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 237,
    "heroImage": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-040",
    "title": "The Royal Majlis 8-Course Private Banquet for VIP Dignitaries & Families — Series B",
    "slug": "french-haute-gastronomy-as-040",
    "categoryId": "french-haute-gastronomy",
    "categoryName": "French Haute Gastronomy & Truffle Atelier",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 190,
    "caloriesKcal": 525,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 242,
    "heroImage": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-041",
    "title": "The Royal Imperial Saffron & Cardamom Braised Camel Loin with 24K Gold Leaves — Series A",
    "slug": "japanese-omakase-wagyu-as-041",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 165,
    "caloriesKcal": 320,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 247,
    "heroImage": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-042",
    "title": "The Périgord Black Winter Truffle & Pan-Seared Duck Liver Rossini — Series B",
    "slug": "japanese-omakase-wagyu-as-042",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 175,
    "caloriesKcal": 365,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 252,
    "heroImage": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-043",
    "title": "The A5 Kagoshima Wagyu Tenderloin with Smoked Miso & Binchotan Char — Series C",
    "slug": "japanese-omakase-wagyu-as-043",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 185,
    "caloriesKcal": 410,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 257,
    "heroImage": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-044",
    "title": "The Wild Oman Rock Lobster Thermidor with Gruyère & Dijonnaise Glaze — Series D",
    "slug": "japanese-omakase-wagyu-as-044",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 190,
    "originalPriceAED": 220,
    "caloriesKcal": 455,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 262,
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-045",
    "title": "The Royal Imperial Beluga Caviar Tasting Flight (50g) with Traditional Accoutrements — Series E",
    "slug": "japanese-omakase-wagyu-as-045",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 200,
    "originalPriceAED": 240,
    "caloriesKcal": 500,
    "preparationMinutes": 40,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 267,
    "heroImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-046",
    "title": "The 45-Day Himalayan Salt Dry-Aged Tomahawk 1.2kg with Bone Marrow Jus — Series F",
    "slug": "japanese-omakase-wagyu-as-046",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 210,
    "caloriesKcal": 545,
    "preparationMinutes": 45,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 272,
    "heroImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-047",
    "title": "The Bluefin Tuna Flight: Akami, Chutoro & Otoro with Fresh Shizuoka Wasabi — Series A",
    "slug": "japanese-omakase-wagyu-as-047",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 220,
    "originalPriceAED": 260,
    "caloriesKcal": 590,
    "preparationMinutes": 50,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 277,
    "heroImage": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-048",
    "title": "The Royal Harees with Slow-Cooked Milk-Fed Veal & Clarified Camel Ghee — Series B",
    "slug": "japanese-omakase-wagyu-as-048",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 230,
    "caloriesKcal": 635,
    "preparationMinutes": 55,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 282,
    "heroImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-049",
    "title": "The Wild Mediterranean Turbot Roasted on the Bone with Capers & Brown Butter — Series C",
    "slug": "japanese-omakase-wagyu-as-049",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 235,
    "caloriesKcal": 680,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 287,
    "heroImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-050",
    "title": "The Brittany Diver Scallops with Cauliflower Velouté & Oscietra Caviar — Series D",
    "slug": "japanese-omakase-wagyu-as-050",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 245,
    "caloriesKcal": 725,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 292,
    "heroImage": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-051",
    "title": "The 24K Pure Gold Leaf Ribeye Steak (350g) with Black Truffle Butter — Series E",
    "slug": "japanese-omakase-wagyu-as-051",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 255,
    "caloriesKcal": 770,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 297,
    "heroImage": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-052",
    "title": "The Wood-Fired King Crab Legs with Yuzu Kosho Butter & Shiso — Series F",
    "slug": "japanese-omakase-wagyu-as-052",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 265,
    "originalPriceAED": 310,
    "caloriesKcal": 815,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 302,
    "heroImage": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-053",
    "title": "The Signature 12-Course Chef Table Gastronomic Symphony with Pairings — Series A",
    "slug": "japanese-omakase-wagyu-as-053",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 275,
    "caloriesKcal": 860,
    "preparationMinutes": 40,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 307,
    "heroImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-054",
    "title": "The Damascus Rose & Raspberry Meringue Pavlova with Pistachio Chantilly — Series B",
    "slug": "japanese-omakase-wagyu-as-054",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 280,
    "caloriesKcal": 905,
    "preparationMinutes": 45,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 312,
    "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-055",
    "title": "The Valrhona 72% Dark Chocolate Sphere with Warm Salted Caramel Pour — Series C",
    "slug": "japanese-omakase-wagyu-as-055",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 290,
    "caloriesKcal": 950,
    "preparationMinutes": 50,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 317,
    "heroImage": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-056",
    "title": "The Artisanal 24K Gold Saffron Cappuccino & Royal Medjool Date Selection — Series D",
    "slug": "japanese-omakase-wagyu-as-056",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 300,
    "caloriesKcal": 345,
    "preparationMinutes": 55,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 322,
    "heroImage": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-057",
    "title": "The Slow-Smoked Australian Wagyu Brisket Machboos with Loomi Essence — Series E",
    "slug": "japanese-omakase-wagyu-as-057",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 310,
    "originalPriceAED": 370,
    "caloriesKcal": 390,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 327,
    "heroImage": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-058",
    "title": "The Japanese Hokkaido Sea Urchin (Uni) & Tartare of A5 Wagyu with Brioche — Series F",
    "slug": "japanese-omakase-wagyu-as-058",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 320,
    "caloriesKcal": 435,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 332,
    "heroImage": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-059",
    "title": "The Mediterranean Carabinero Red Prawns Carpaccio with Citrus Oil & Sea Salt — Series A",
    "slug": "japanese-omakase-wagyu-as-059",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 325,
    "caloriesKcal": 480,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 337,
    "heroImage": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-060",
    "title": "The Royal Majlis 8-Course Private Banquet for VIP Dignitaries & Families — Series B",
    "slug": "japanese-omakase-wagyu-as-060",
    "categoryId": "japanese-omakase-wagyu",
    "categoryName": "Japanese Omakase & Robatayaki Grill",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 335,
    "caloriesKcal": 525,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 342,
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-061",
    "title": "The Royal Imperial Saffron & Cardamom Braised Camel Loin with 24K Gold Leaves — Series A",
    "slug": "mediterranean-seafood-as-061",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 115,
    "caloriesKcal": 320,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 347,
    "heroImage": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-062",
    "title": "The Périgord Black Winter Truffle & Pan-Seared Duck Liver Rossini — Series B",
    "slug": "mediterranean-seafood-as-062",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 120,
    "caloriesKcal": 365,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 352,
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-063",
    "title": "The A5 Kagoshima Wagyu Tenderloin with Smoked Miso & Binchotan Char — Series C",
    "slug": "mediterranean-seafood-as-063",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 125,
    "caloriesKcal": 410,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 357,
    "heroImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-064",
    "title": "The Wild Oman Rock Lobster Thermidor with Gruyère & Dijonnaise Glaze — Series D",
    "slug": "mediterranean-seafood-as-064",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 135,
    "originalPriceAED": 160,
    "caloriesKcal": 455,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 362,
    "heroImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-065",
    "title": "The Royal Imperial Beluga Caviar Tasting Flight (50g) with Traditional Accoutrements — Series E",
    "slug": "mediterranean-seafood-as-065",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 140,
    "caloriesKcal": 500,
    "preparationMinutes": 40,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 367,
    "heroImage": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-066",
    "title": "The 45-Day Himalayan Salt Dry-Aged Tomahawk 1.2kg with Bone Marrow Jus — Series F",
    "slug": "mediterranean-seafood-as-066",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 145,
    "originalPriceAED": 170,
    "caloriesKcal": 545,
    "preparationMinutes": 45,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 372,
    "heroImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-067",
    "title": "The Bluefin Tuna Flight: Akami, Chutoro & Otoro with Fresh Shizuoka Wasabi — Series A",
    "slug": "mediterranean-seafood-as-067",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 150,
    "caloriesKcal": 590,
    "preparationMinutes": 50,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 377,
    "heroImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-068",
    "title": "The Royal Harees with Slow-Cooked Milk-Fed Veal & Clarified Camel Ghee — Series B",
    "slug": "mediterranean-seafood-as-068",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 155,
    "caloriesKcal": 635,
    "preparationMinutes": 55,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 382,
    "heroImage": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-069",
    "title": "The Wild Mediterranean Turbot Roasted on the Bone with Capers & Brown Butter — Series C",
    "slug": "mediterranean-seafood-as-069",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 165,
    "caloriesKcal": 680,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 387,
    "heroImage": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-070",
    "title": "The Brittany Diver Scallops with Cauliflower Velouté & Oscietra Caviar — Series D",
    "slug": "mediterranean-seafood-as-070",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 170,
    "originalPriceAED": 200,
    "caloriesKcal": 725,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 392,
    "heroImage": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-071",
    "title": "The 24K Pure Gold Leaf Ribeye Steak (350g) with Black Truffle Butter — Series E",
    "slug": "mediterranean-seafood-as-071",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 175,
    "originalPriceAED": 210,
    "caloriesKcal": 770,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 397,
    "heroImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-072",
    "title": "The Wood-Fired King Crab Legs with Yuzu Kosho Butter & Shiso — Series F",
    "slug": "mediterranean-seafood-as-072",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 180,
    "originalPriceAED": 210,
    "caloriesKcal": 815,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 402,
    "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-073",
    "title": "The Signature 12-Course Chef Table Gastronomic Symphony with Pairings — Series A",
    "slug": "mediterranean-seafood-as-073",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 185,
    "originalPriceAED": 220,
    "caloriesKcal": 860,
    "preparationMinutes": 40,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 407,
    "heroImage": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-074",
    "title": "The Damascus Rose & Raspberry Meringue Pavlova with Pistachio Chantilly — Series B",
    "slug": "mediterranean-seafood-as-074",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 195,
    "caloriesKcal": 905,
    "preparationMinutes": 45,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 412,
    "heroImage": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-075",
    "title": "The Valrhona 72% Dark Chocolate Sphere with Warm Salted Caramel Pour — Series C",
    "slug": "mediterranean-seafood-as-075",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 200,
    "originalPriceAED": 240,
    "caloriesKcal": 950,
    "preparationMinutes": 50,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 417,
    "heroImage": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-076",
    "title": "The Artisanal 24K Gold Saffron Cappuccino & Royal Medjool Date Selection — Series D",
    "slug": "mediterranean-seafood-as-076",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 205,
    "caloriesKcal": 345,
    "preparationMinutes": 55,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 422,
    "heroImage": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-077",
    "title": "The Slow-Smoked Australian Wagyu Brisket Machboos with Loomi Essence — Series E",
    "slug": "mediterranean-seafood-as-077",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 210,
    "caloriesKcal": 390,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 427,
    "heroImage": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-078",
    "title": "The Japanese Hokkaido Sea Urchin (Uni) & Tartare of A5 Wagyu with Brioche — Series F",
    "slug": "mediterranean-seafood-as-078",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 215,
    "originalPriceAED": 250,
    "caloriesKcal": 435,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 432,
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-079",
    "title": "The Mediterranean Carabinero Red Prawns Carpaccio with Citrus Oil & Sea Salt — Series A",
    "slug": "mediterranean-seafood-as-079",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 225,
    "caloriesKcal": 480,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 437,
    "heroImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-080",
    "title": "The Royal Majlis 8-Course Private Banquet for VIP Dignitaries & Families — Series B",
    "slug": "mediterranean-seafood-as-080",
    "categoryId": "mediterranean-seafood",
    "categoryName": "Mediterranean Coastal & Shellfish Bar",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 230,
    "originalPriceAED": 270,
    "caloriesKcal": 525,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 442,
    "heroImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-081",
    "title": "The Royal Imperial Saffron & Cardamom Braised Camel Loin with 24K Gold Leaves — Series A",
    "slug": "caviar-beluga-flights-as-081",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 280,
    "originalPriceAED": 330,
    "caloriesKcal": 320,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 447,
    "heroImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-082",
    "title": "The Périgord Black Winter Truffle & Pan-Seared Duck Liver Rossini — Series B",
    "slug": "caviar-beluga-flights-as-082",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 290,
    "caloriesKcal": 365,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 452,
    "heroImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-083",
    "title": "The A5 Kagoshima Wagyu Tenderloin with Smoked Miso & Binchotan Char — Series C",
    "slug": "caviar-beluga-flights-as-083",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 305,
    "caloriesKcal": 410,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 457,
    "heroImage": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-084",
    "title": "The Wild Oman Rock Lobster Thermidor with Gruyère & Dijonnaise Glaze — Series D",
    "slug": "caviar-beluga-flights-as-084",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 315,
    "originalPriceAED": 370,
    "caloriesKcal": 455,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 462,
    "heroImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-085",
    "title": "The Royal Imperial Beluga Caviar Tasting Flight (50g) with Traditional Accoutrements — Series E",
    "slug": "caviar-beluga-flights-as-085",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 330,
    "caloriesKcal": 500,
    "preparationMinutes": 40,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 467,
    "heroImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-086",
    "title": "The 45-Day Himalayan Salt Dry-Aged Tomahawk 1.2kg with Bone Marrow Jus — Series F",
    "slug": "caviar-beluga-flights-as-086",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 340,
    "originalPriceAED": 400,
    "caloriesKcal": 545,
    "preparationMinutes": 45,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 472,
    "heroImage": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-087",
    "title": "The Bluefin Tuna Flight: Akami, Chutoro & Otoro with Fresh Shizuoka Wasabi — Series A",
    "slug": "caviar-beluga-flights-as-087",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 350,
    "originalPriceAED": 410,
    "caloriesKcal": 590,
    "preparationMinutes": 50,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 477,
    "heroImage": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-088",
    "title": "The Royal Harees with Slow-Cooked Milk-Fed Veal & Clarified Camel Ghee — Series B",
    "slug": "caviar-beluga-flights-as-088",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 365,
    "originalPriceAED": 430,
    "caloriesKcal": 635,
    "preparationMinutes": 55,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 482,
    "heroImage": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-089",
    "title": "The Wild Mediterranean Turbot Roasted on the Bone with Capers & Brown Butter — Series C",
    "slug": "caviar-beluga-flights-as-089",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 375,
    "caloriesKcal": 680,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 487,
    "heroImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-090",
    "title": "The Brittany Diver Scallops with Cauliflower Velouté & Oscietra Caviar — Series D",
    "slug": "caviar-beluga-flights-as-090",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 390,
    "caloriesKcal": 725,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 492,
    "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-091",
    "title": "The 24K Pure Gold Leaf Ribeye Steak (350g) with Black Truffle Butter — Series E",
    "slug": "caviar-beluga-flights-as-091",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 400,
    "caloriesKcal": 770,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 497,
    "heroImage": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-092",
    "title": "The Wood-Fired King Crab Legs with Yuzu Kosho Butter & Shiso — Series F",
    "slug": "caviar-beluga-flights-as-092",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 410,
    "caloriesKcal": 815,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 502,
    "heroImage": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-093",
    "title": "The Signature 12-Course Chef Table Gastronomic Symphony with Pairings — Series A",
    "slug": "caviar-beluga-flights-as-093",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 425,
    "caloriesKcal": 860,
    "preparationMinutes": 40,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 507,
    "heroImage": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-094",
    "title": "The Damascus Rose & Raspberry Meringue Pavlova with Pistachio Chantilly — Series B",
    "slug": "caviar-beluga-flights-as-094",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 435,
    "originalPriceAED": 510,
    "caloriesKcal": 905,
    "preparationMinutes": 45,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 512,
    "heroImage": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-095",
    "title": "The Valrhona 72% Dark Chocolate Sphere with Warm Salted Caramel Pour — Series C",
    "slug": "caviar-beluga-flights-as-095",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 450,
    "caloriesKcal": 950,
    "preparationMinutes": 50,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 517,
    "heroImage": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-096",
    "title": "The Artisanal 24K Gold Saffron Cappuccino & Royal Medjool Date Selection — Series D",
    "slug": "caviar-beluga-flights-as-096",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 460,
    "caloriesKcal": 345,
    "preparationMinutes": 55,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 522,
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-097",
    "title": "The Slow-Smoked Australian Wagyu Brisket Machboos with Loomi Essence — Series E",
    "slug": "caviar-beluga-flights-as-097",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 470,
    "originalPriceAED": 550,
    "caloriesKcal": 390,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 527,
    "heroImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-098",
    "title": "The Japanese Hokkaido Sea Urchin (Uni) & Tartare of A5 Wagyu with Brioche — Series F",
    "slug": "caviar-beluga-flights-as-098",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 485,
    "caloriesKcal": 435,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 532,
    "heroImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-099",
    "title": "The Mediterranean Carabinero Red Prawns Carpaccio with Citrus Oil & Sea Salt — Series A",
    "slug": "caviar-beluga-flights-as-099",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 495,
    "caloriesKcal": 480,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 537,
    "heroImage": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-100",
    "title": "The Royal Majlis 8-Course Private Banquet for VIP Dignitaries & Families — Series B",
    "slug": "caviar-beluga-flights-as-100",
    "categoryId": "caviar-beluga-flights",
    "categoryName": "Royal Imperial Caviar & Beluga Service",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 510,
    "originalPriceAED": 600,
    "caloriesKcal": 525,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 542,
    "heroImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-101",
    "title": "The Royal Imperial Saffron & Cardamom Braised Camel Loin with 24K Gold Leaves — Series A",
    "slug": "dry-aged-prime-cuts-as-101",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 145,
    "originalPriceAED": 170,
    "caloriesKcal": 320,
    "preparationMinutes": 20,
    "servesPersons": 2,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 547,
    "heroImage": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-102",
    "title": "The Périgord Black Winter Truffle & Pan-Seared Duck Liver Rossini — Series B",
    "slug": "dry-aged-prime-cuts-as-102",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 155,
    "originalPriceAED": 180,
    "caloriesKcal": 365,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 552,
    "heroImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-103",
    "title": "The A5 Kagoshima Wagyu Tenderloin with Smoked Miso & Binchotan Char — Series C",
    "slug": "dry-aged-prime-cuts-as-103",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 160,
    "caloriesKcal": 410,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 557,
    "heroImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-104",
    "title": "The Wild Oman Rock Lobster Thermidor with Gruyère & Dijonnaise Glaze — Series D",
    "slug": "dry-aged-prime-cuts-as-104",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 170,
    "caloriesKcal": 455,
    "preparationMinutes": 35,
    "servesPersons": 2,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 562,
    "heroImage": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-105",
    "title": "The Royal Imperial Beluga Caviar Tasting Flight (50g) with Traditional Accoutrements — Series E",
    "slug": "dry-aged-prime-cuts-as-105",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 175,
    "caloriesKcal": 500,
    "preparationMinutes": 40,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": false,
    "isPreOrderOnly": true,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 567,
    "heroImage": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-106",
    "title": "The 45-Day Himalayan Salt Dry-Aged Tomahawk 1.2kg with Bone Marrow Jus — Series F",
    "slug": "dry-aged-prime-cuts-as-106",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 185,
    "caloriesKcal": 545,
    "preparationMinutes": 45,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 572,
    "heroImage": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-107",
    "title": "The Bluefin Tuna Flight: Akami, Chutoro & Otoro with Fresh Shizuoka Wasabi — Series A",
    "slug": "dry-aged-prime-cuts-as-107",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 195,
    "caloriesKcal": 590,
    "preparationMinutes": 50,
    "servesPersons": 2,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 577,
    "heroImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-108",
    "title": "The Royal Harees with Slow-Cooked Milk-Fed Veal & Clarified Camel Ghee — Series B",
    "slug": "dry-aged-prime-cuts-as-108",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 200,
    "caloriesKcal": 635,
    "preparationMinutes": 55,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 582,
    "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-109",
    "title": "The Wild Mediterranean Turbot Roasted on the Bone with Capers & Brown Butter — Series C",
    "slug": "dry-aged-prime-cuts-as-109",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 210,
    "caloriesKcal": 680,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": true,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 587,
    "heroImage": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-110",
    "title": "The Brittany Diver Scallops with Cauliflower Velouté & Oscietra Caviar — Series D",
    "slug": "dry-aged-prime-cuts-as-110",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 215,
    "originalPriceAED": 250,
    "caloriesKcal": 725,
    "preparationMinutes": 25,
    "servesPersons": 2,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 592,
    "heroImage": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-111",
    "title": "The 24K Pure Gold Leaf Ribeye Steak (350g) with Black Truffle Butter — Series E",
    "slug": "dry-aged-prime-cuts-as-111",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 225,
    "caloriesKcal": 770,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 597,
    "heroImage": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-112",
    "title": "The Wood-Fired King Crab Legs with Yuzu Kosho Butter & Shiso — Series F",
    "slug": "dry-aged-prime-cuts-as-112",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 235,
    "caloriesKcal": 815,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 602,
    "heroImage": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-113",
    "title": "The Signature 12-Course Chef Table Gastronomic Symphony with Pairings — Series A",
    "slug": "dry-aged-prime-cuts-as-113",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 240,
    "caloriesKcal": 860,
    "preparationMinutes": 40,
    "servesPersons": 2,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 607,
    "heroImage": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-114",
    "title": "The Damascus Rose & Raspberry Meringue Pavlova with Pistachio Chantilly — Series B",
    "slug": "dry-aged-prime-cuts-as-114",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 250,
    "originalPriceAED": 300,
    "caloriesKcal": 905,
    "preparationMinutes": 45,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 612,
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-115",
    "title": "The Valrhona 72% Dark Chocolate Sphere with Warm Salted Caramel Pour — Series C",
    "slug": "dry-aged-prime-cuts-as-115",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 255,
    "caloriesKcal": 950,
    "preparationMinutes": 50,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 617,
    "heroImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-116",
    "title": "The Artisanal 24K Gold Saffron Cappuccino & Royal Medjool Date Selection — Series D",
    "slug": "dry-aged-prime-cuts-as-116",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 265,
    "originalPriceAED": 310,
    "caloriesKcal": 345,
    "preparationMinutes": 55,
    "servesPersons": 2,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 622,
    "heroImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-117",
    "title": "The Slow-Smoked Australian Wagyu Brisket Machboos with Loomi Essence — Series E",
    "slug": "dry-aged-prime-cuts-as-117",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 275,
    "originalPriceAED": 320,
    "caloriesKcal": 390,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": false,
    "isPreOrderOnly": true,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 627,
    "heroImage": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-118",
    "title": "The Japanese Hokkaido Sea Urchin (Uni) & Tartare of A5 Wagyu with Brioche — Series F",
    "slug": "dry-aged-prime-cuts-as-118",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 280,
    "originalPriceAED": 330,
    "caloriesKcal": 435,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 632,
    "heroImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-119",
    "title": "The Mediterranean Carabinero Red Prawns Carpaccio with Citrus Oil & Sea Salt — Series A",
    "slug": "dry-aged-prime-cuts-as-119",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 290,
    "caloriesKcal": 480,
    "preparationMinutes": 30,
    "servesPersons": 2,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 637,
    "heroImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-120",
    "title": "The Royal Majlis 8-Course Private Banquet for VIP Dignitaries & Families — Series B",
    "slug": "dry-aged-prime-cuts-as-120",
    "categoryId": "dry-aged-prime-cuts",
    "categoryName": "45-Day Dry-Aged Steaks & 24K Gold Cuts",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 295,
    "caloriesKcal": 525,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 642,
    "heroImage": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-121",
    "title": "The Royal Imperial Saffron & Cardamom Braised Camel Loin with 24K Gold Leaves — Series A",
    "slug": "haute-pastry-cafe-as-121",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 35,
    "caloriesKcal": 320,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 647,
    "heroImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-122",
    "title": "The Périgord Black Winter Truffle & Pan-Seared Duck Liver Rossini — Series B",
    "slug": "haute-pastry-cafe-as-122",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 40,
    "caloriesKcal": 365,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 652,
    "heroImage": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-123",
    "title": "The A5 Kagoshima Wagyu Tenderloin with Smoked Miso & Binchotan Char — Series C",
    "slug": "haute-pastry-cafe-as-123",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 40,
    "caloriesKcal": 410,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 657,
    "heroImage": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-124",
    "title": "The Wild Oman Rock Lobster Thermidor with Gruyère & Dijonnaise Glaze — Series D",
    "slug": "haute-pastry-cafe-as-124",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 45,
    "caloriesKcal": 455,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 662,
    "heroImage": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-125",
    "title": "The Royal Imperial Beluga Caviar Tasting Flight (50g) with Traditional Accoutrements — Series E",
    "slug": "haute-pastry-cafe-as-125",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 45,
    "caloriesKcal": 500,
    "preparationMinutes": 40,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 667,
    "heroImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-126",
    "title": "The 45-Day Himalayan Salt Dry-Aged Tomahawk 1.2kg with Bone Marrow Jus — Series F",
    "slug": "haute-pastry-cafe-as-126",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 50,
    "originalPriceAED": 60,
    "caloriesKcal": 545,
    "preparationMinutes": 45,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 672,
    "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-127",
    "title": "The Bluefin Tuna Flight: Akami, Chutoro & Otoro with Fresh Shizuoka Wasabi — Series A",
    "slug": "haute-pastry-cafe-as-127",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 50,
    "caloriesKcal": 590,
    "preparationMinutes": 50,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 677,
    "heroImage": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-128",
    "title": "The Royal Harees with Slow-Cooked Milk-Fed Veal & Clarified Camel Ghee — Series B",
    "slug": "haute-pastry-cafe-as-128",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 55,
    "caloriesKcal": 635,
    "preparationMinutes": 55,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 682,
    "heroImage": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-129",
    "title": "The Wild Mediterranean Turbot Roasted on the Bone with Capers & Brown Butter — Series C",
    "slug": "haute-pastry-cafe-as-129",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 55,
    "caloriesKcal": 680,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 687,
    "heroImage": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-130",
    "title": "The Brittany Diver Scallops with Cauliflower Velouté & Oscietra Caviar — Series D",
    "slug": "haute-pastry-cafe-as-130",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 60,
    "caloriesKcal": 725,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 692,
    "heroImage": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-131",
    "title": "The 24K Pure Gold Leaf Ribeye Steak (350g) with Black Truffle Butter — Series E",
    "slug": "haute-pastry-cafe-as-131",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 60,
    "caloriesKcal": 770,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 697,
    "heroImage": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-132",
    "title": "The Wood-Fired King Crab Legs with Yuzu Kosho Butter & Shiso — Series F",
    "slug": "haute-pastry-cafe-as-132",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 65,
    "caloriesKcal": 815,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 702,
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-133",
    "title": "The Signature 12-Course Chef Table Gastronomic Symphony with Pairings — Series A",
    "slug": "haute-pastry-cafe-as-133",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 65,
    "originalPriceAED": 80,
    "caloriesKcal": 860,
    "preparationMinutes": 40,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 707,
    "heroImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-134",
    "title": "The Damascus Rose & Raspberry Meringue Pavlova with Pistachio Chantilly — Series B",
    "slug": "haute-pastry-cafe-as-134",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 70,
    "caloriesKcal": 905,
    "preparationMinutes": 45,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 712,
    "heroImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-135",
    "title": "The Valrhona 72% Dark Chocolate Sphere with Warm Salted Caramel Pour — Series C",
    "slug": "haute-pastry-cafe-as-135",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 70,
    "originalPriceAED": 80,
    "caloriesKcal": 950,
    "preparationMinutes": 50,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 717,
    "heroImage": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-136",
    "title": "The Artisanal 24K Gold Saffron Cappuccino & Royal Medjool Date Selection — Series D",
    "slug": "haute-pastry-cafe-as-136",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 75,
    "originalPriceAED": 90,
    "caloriesKcal": 345,
    "preparationMinutes": 55,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 722,
    "heroImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-137",
    "title": "The Slow-Smoked Australian Wagyu Brisket Machboos with Loomi Essence — Series E",
    "slug": "haute-pastry-cafe-as-137",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 75,
    "caloriesKcal": 390,
    "preparationMinutes": 20,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 727,
    "heroImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-138",
    "title": "The Japanese Hokkaido Sea Urchin (Uni) & Tartare of A5 Wagyu with Brioche — Series F",
    "slug": "haute-pastry-cafe-as-138",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 80,
    "caloriesKcal": 435,
    "preparationMinutes": 25,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 732,
    "heroImage": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-139",
    "title": "The Mediterranean Carabinero Red Prawns Carpaccio with Citrus Oil & Sea Salt — Series A",
    "slug": "haute-pastry-cafe-as-139",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 80,
    "caloriesKcal": 480,
    "preparationMinutes": 30,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": false,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 737,
    "heroImage": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-140",
    "title": "The Royal Majlis 8-Course Private Banquet for VIP Dignitaries & Families — Series B",
    "slug": "haute-pastry-cafe-as-140",
    "categoryId": "haute-pastry-cafe",
    "categoryName": "Artisanal Pastry, Haute Desserts & 24K Gold Café",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 85,
    "caloriesKcal": 525,
    "preparationMinutes": 35,
    "servesPersons": 1,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": false,
    "isPreOrderOnly": false,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 742,
    "heroImage": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-141",
    "title": "The Royal Imperial Saffron & Cardamom Braised Camel Loin with 24K Gold Leaves — Series A",
    "slug": "private-dining-majlis-as-141",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 450,
    "caloriesKcal": 320,
    "preparationMinutes": 20,
    "servesPersons": 8,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 747,
    "heroImage": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-142",
    "title": "The Périgord Black Winter Truffle & Pan-Seared Duck Liver Rossini — Series B",
    "slug": "private-dining-majlis-as-142",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 485,
    "caloriesKcal": 365,
    "preparationMinutes": 25,
    "servesPersons": 12,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 752,
    "heroImage": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-143",
    "title": "The A5 Kagoshima Wagyu Tenderloin with Smoked Miso & Binchotan Char — Series C",
    "slug": "private-dining-majlis-as-143",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 520,
    "originalPriceAED": 610,
    "caloriesKcal": 410,
    "preparationMinutes": 30,
    "servesPersons": 8,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 757,
    "heroImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-144",
    "title": "The Wild Oman Rock Lobster Thermidor with Gruyère & Dijonnaise Glaze — Series D",
    "slug": "private-dining-majlis-as-144",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 555,
    "caloriesKcal": 455,
    "preparationMinutes": 35,
    "servesPersons": 12,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 762,
    "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-145",
    "title": "The Royal Imperial Beluga Caviar Tasting Flight (50g) with Traditional Accoutrements — Series E",
    "slug": "private-dining-majlis-as-145",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 590,
    "caloriesKcal": 500,
    "preparationMinutes": 40,
    "servesPersons": 8,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 767,
    "heroImage": "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-146",
    "title": "The 45-Day Himalayan Salt Dry-Aged Tomahawk 1.2kg with Bone Marrow Jus — Series F",
    "slug": "private-dining-majlis-as-146",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 625,
    "caloriesKcal": 545,
    "preparationMinutes": 45,
    "servesPersons": 12,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 772,
    "heroImage": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-147",
    "title": "The Bluefin Tuna Flight: Akami, Chutoro & Otoro with Fresh Shizuoka Wasabi — Series A",
    "slug": "private-dining-majlis-as-147",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 660,
    "caloriesKcal": 590,
    "preparationMinutes": 50,
    "servesPersons": 8,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 777,
    "heroImage": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-148",
    "title": "The Royal Harees with Slow-Cooked Milk-Fed Veal & Clarified Camel Ghee — Series B",
    "slug": "private-dining-majlis-as-148",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 695,
    "caloriesKcal": 635,
    "preparationMinutes": 55,
    "servesPersons": 12,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 782,
    "heroImage": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-149",
    "title": "The Wild Mediterranean Turbot Roasted on the Bone with Capers & Brown Butter — Series C",
    "slug": "private-dining-majlis-as-149",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 730,
    "caloriesKcal": 680,
    "preparationMinutes": 20,
    "servesPersons": 8,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 787,
    "heroImage": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-150",
    "title": "The Brittany Diver Scallops with Cauliflower Velouté & Oscietra Caviar — Series D",
    "slug": "private-dining-majlis-as-150",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 765,
    "caloriesKcal": 725,
    "preparationMinutes": 25,
    "servesPersons": 12,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 792,
    "heroImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-151",
    "title": "The 24K Pure Gold Leaf Ribeye Steak (350g) with Black Truffle Butter — Series E",
    "slug": "private-dining-majlis-as-151",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 800,
    "originalPriceAED": 940,
    "caloriesKcal": 770,
    "preparationMinutes": 30,
    "servesPersons": 8,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 797,
    "heroImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-152",
    "title": "The Wood-Fired King Crab Legs with Yuzu Kosho Butter & Shiso — Series F",
    "slug": "private-dining-majlis-as-152",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 835,
    "originalPriceAED": 990,
    "caloriesKcal": 815,
    "preparationMinutes": 35,
    "servesPersons": 12,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 802,
    "heroImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-153",
    "title": "The Signature 12-Course Chef Table Gastronomic Symphony with Pairings — Series A",
    "slug": "private-dining-majlis-as-153",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Arabian Gulf & Fujairah Coast, UAE",
    "priceAED": 870,
    "caloriesKcal": 860,
    "preparationMinutes": 40,
    "servesPersons": 8,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 4.9,
    "reviewsCount": 807,
    "heroImage": "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Arabian Gulf & Fujairah Coast, UAE prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-154",
    "title": "The Damascus Rose & Raspberry Meringue Pavlova with Pistachio Chantilly — Series B",
    "slug": "private-dining-majlis-as-154",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "San Sebastián & Galicia, Spain",
    "priceAED": 905,
    "caloriesKcal": 905,
    "preparationMinutes": 45,
    "servesPersons": 12,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 812,
    "heroImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using San Sebastián & Galicia, Spain prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-155",
    "title": "The Valrhona 72% Dark Chocolate Sphere with Warm Salted Caramel Pour — Series C",
    "slug": "private-dining-majlis-as-155",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Black Forest & Piedmont, Italy",
    "priceAED": 940,
    "originalPriceAED": 1110,
    "caloriesKcal": 950,
    "preparationMinutes": 50,
    "servesPersons": 8,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Organic Ingredients"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 817,
    "heroImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Black Forest & Piedmont, Italy prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-156",
    "title": "The Artisanal 24K Gold Saffron Cappuccino & Royal Medjool Date Selection — Series D",
    "slug": "private-dining-majlis-as-156",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Ras Al Khaimah Heritage Farms, UAE",
    "priceAED": 975,
    "caloriesKcal": 345,
    "preparationMinutes": 55,
    "servesPersons": 12,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Vegetarian Option"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 822,
    "heroImage": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Ras Al Khaimah Heritage Farms, UAE prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-157",
    "title": "The Slow-Smoked Australian Wagyu Brisket Machboos with Loomi Essence — Series E",
    "slug": "private-dining-majlis-as-157",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Hokkaido Cold Waters, Japan",
    "priceAED": 1010,
    "caloriesKcal": 390,
    "preparationMinutes": 20,
    "servesPersons": 8,
    "executiveChef": {
      "name": "Chef Matteo Bertolini",
      "title": "Executive Seafood & Mediterranean Master",
      "accolades": "Gambero Rosso Top Italian Chef Dubai"
    },
    "dietaryTags": [
      "Halal Certified",
      "Chef Gold Signature"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 827,
    "heroImage": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Hokkaido Cold Waters, Japan prime provisions and prepared under the supervision of Chef Matteo Bertolini.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-158",
    "title": "The Japanese Hokkaido Sea Urchin (Uni) & Tartare of A5 Wagyu with Brioche — Series F",
    "slug": "private-dining-majlis-as-158",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Kagoshima Prefecture, Japan",
    "priceAED": 1045,
    "caloriesKcal": 435,
    "preparationMinutes": 25,
    "servesPersons": 12,
    "executiveChef": {
      "name": "Chef Tariq Al-Mansoor",
      "title": "Executive Culinary Director — Royal Emirati Heritage",
      "accolades": "Michelin Star Mentor & Dubai Golden Fork Laureate"
    },
    "dietaryTags": [
      "Dairy",
      "Gluten Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 5,
    "reviewsCount": 832,
    "heroImage": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Kagoshima Prefecture, Japan prime provisions and prepared under the supervision of Chef Tariq Al-Mansoor.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-159",
    "title": "The Mediterranean Carabinero Red Prawns Carpaccio with Citrus Oil & Sea Salt — Series A",
    "slug": "private-dining-majlis-as-159",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Périgord & Brittany, France",
    "priceAED": 1080,
    "caloriesKcal": 480,
    "preparationMinutes": 30,
    "servesPersons": 8,
    "executiveChef": {
      "name": "Chef Jean-Luc Mercier",
      "title": "Master Chef de Cuisine — Haute French Gastronomy",
      "accolades": "Former 3-Star Michelin Sous Chef, Paris & Monaco"
    },
    "dietaryTags": [
      "Halal Certified",
      "Nut Free"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Sparkling French Vintage Date Nectar & Elderflower Infusion",
    "rating": 5,
    "reviewsCount": 837,
    "heroImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Périgord & Brittany, France prime provisions and prepared under the supervision of Chef Jean-Luc Mercier.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  },
  {
    "id": "AS-160",
    "title": "The Royal Majlis 8-Course Private Banquet for VIP Dignitaries & Families — Series B",
    "slug": "private-dining-majlis-as-160",
    "categoryId": "private-dining-majlis",
    "categoryName": "Private Salons, Royal Majlis & Chef Table",
    "originRegion": "Caspian Sea Basin (Sustainable Certified)",
    "priceAED": 1115,
    "originalPriceAED": 1320,
    "caloriesKcal": 525,
    "preparationMinutes": 35,
    "servesPersons": 12,
    "executiveChef": {
      "name": "Chef Kenji Takahashi",
      "title": "Omakase Grand Master & Wagyu Sommelier",
      "accolades": "20+ Yrs Ginza Tokyo & Dubai DIFC"
    },
    "dietaryTags": [
      "Halal Certified",
      "Contains Shellfish"
    ],
    "isSignature": true,
    "isPreOrderOnly": true,
    "sommelierPairing": "Smoked Omani Frankincense Mocktail with Bergamot Mist",
    "rating": 4.9,
    "reviewsCount": 842,
    "heroImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "flavorProfile": "Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish",
    "shortDescription": "An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using Caspian Sea Basin (Sustainable Certified) prime provisions and prepared under the supervision of Chef Kenji Takahashi.",
    "tastingNotes": [
      "First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.",
      "Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.",
      "Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke."
    ],
    "ingredients": [
      "Ethically sourced grade-A seasonal provisions",
      "Pure Iranian Negin saffron threads",
      "Clarified grass-fed butter & cold-pressed virgin olive oil",
      "24-Karat edible gold leaf flakes (Florence certified)",
      "Maldon smoked sea salt crystals & wild mountain thyme"
    ],
    "tableServiceProtocol": [
      "Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware",
      "Tableside presentation with dry-ice botanical smoke or custom torching",
      "Sommelier guidance on aroma progression and palate cleansing"
    ]
  }
];
