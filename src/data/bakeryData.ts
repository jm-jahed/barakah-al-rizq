export interface BakeryProduct {
  id: string;
  name: string;
  frenchName?: string;
  category: 
    | 'Celebration Cakes' 
    | 'Birthday Cakes' 
    | 'Wedding Cakes' 
    | 'Signature Cakes' 
    | 'Cupcakes' 
    | 'Pastries' 
    | 'Cookies' 
    | 'Dessert Boxes' 
    | 'Chocolates' 
    | 'Gift Hampers';
  description: string;
  price: number;
  servingSize: string;
  flavor: string;
  dietary: ('Egg-Free' | 'Nut-Free' | 'Gluten-Free' | 'Dairy-Free' | 'Vegan' | 'Vegetarian' | 'Halal' | 'Chef Special')[];
  prepTime: string;
  image: string;
  isBestseller?: boolean;
  isNew?: boolean;
  tiers?: number;
  filling?: string;
}

export interface IngredientItem {
  id: string;
  name: string;
  frenchName?: string;
  category: 'Chocolate' | 'Vanilla & Spices' | 'Fruits & Berries' | 'Nuts & Praline' | 'Dairy & Cream';
  flavorProfile: string;
  origin: string;
  commonPairings: string[];
  image: string;
}

export interface BakeryReview {
  id: string;
  guestName: string;
  rating: number;
  occasion: string;
  favoriteItem: string;
  comment: string;
  notice: string;
}

export interface BakeryFAQ {
  id: string;
  question: string;
  answer: string;
}

export const BAKERY_BRAND_INFO = {
  name: "Maison Crème",
  tagline: "Made For The Moments Worth Celebrating.",
  address: "DIFC Gate Avenue, Building 05, Level Ground, Dubai, UAE",
  phone: "+971 4 888 7766",
  whatsapp: "https://wa.me/971500000000?text=Hello%20Maison%20Cr%C3%A8me%20Bakery,%20I%20would%20like%20to%20inquire%20about%20a%20custom%20cake.",
  hours: {
    weekdays: "8:00 AM – 10:00 PM",
    weekends: "8:00 AM – 11:30 PM",
    delivery: "Same-Day Delivery 10:00 AM – 9:00 PM Across Dubai"
  },
  conceptNotice: "Concept Project / Sample Build — Fictional Bakery Portfolio Showcase",
  packageBadge: "Premium AED 799–2,499 Agency Architecture",
};

export const BAKERY_CATEGORIES = [
  'All',
  'Celebration Cakes',
  'Birthday Cakes',
  'Wedding Cakes',
  'Signature Cakes',
  'Cupcakes',
  'Pastries',
  'Cookies',
  'Dessert Boxes',
  'Chocolates',
  'Gift Hampers',
];

export const BAKERY_PRODUCTS: BakeryProduct[] = [
  // 1. Signature Cakes
  {
    id: "sig-1",
    name: "Royal Pistachio & Raspberry Entremet",
    frenchName: "Entremet Pistache & Framboise",
    category: "Signature Cakes",
    description: "Layers of Sicilian pistachio sponge, raspberry compote, white chocolate pistachio mousse, and a ruby glaze.",
    price: 180,
    servingSize: "6–8 Servings (6 inch)",
    flavor: "Pistachio & Raspberry",
    dietary: ["Vegetarian", "Halal", "Chef Special"],
    prepTime: "2 Hours Prep",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
    isBestseller: true,
    filling: "Raspberry Compote & Pistachio Mousse"
  },
  {
    id: "sig-2",
    name: "Valrhona Triple Dark Chocolate Truffle",
    frenchName: "Gâteau au Chocolat Valrhona",
    category: "Signature Cakes",
    description: "70% Valrhona Guanaja dark chocolate ganache layered with moist chocolate sponge and cacao nib crunch.",
    price: 210,
    servingSize: "8–10 Servings (8 inch)",
    flavor: "Dark Chocolate",
    dietary: ["Vegetarian", "Halal", "Nut-Free"],
    prepTime: "Same Day Available",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
    isBestseller: true,
    filling: "Valrhona Ganache & Cacao Nib Crunch"
  },
  {
    id: "sig-3",
    name: "Rose Water & Saffron Milk Cake",
    frenchName: "Tres Leches au Safran & Rose",
    category: "Signature Cakes",
    description: "Light sponge cake soaked in saffron milk, topped with rose whipped cream and edible 24K gold leaf.",
    price: 165,
    servingSize: "6–8 Servings",
    flavor: "Saffron & Rose",
    dietary: ["Vegetarian", "Halal", "Chef Special"],
    prepTime: "3 Hours Prep",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=800&auto=format&fit=crop",
    isNew: true,
    filling: "Saffron Milk Infusion & Rose Cream"
  },

  // 2. Birthday Cakes
  {
    id: "bday-1",
    name: "Golden Confetti Velvet Birthday Cake",
    frenchName: "Gâteau d'Anniversaire Confetti",
    category: "Birthday Cakes",
    description: "Fluffy vanilla bean sponge studded with pastel sprinkles, Madagascar vanilla buttercream, and golden macarons.",
    price: 240,
    servingSize: "10–12 Servings (8 inch)",
    flavor: "Vanilla Bean",
    dietary: ["Vegetarian", "Halal"],
    prepTime: "4 Hours Prep",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=800&auto=format&fit=crop",
    isBestseller: true,
    filling: "Vanilla Bean Buttercream & Sprinkles"
  },
  {
    id: "bday-2",
    name: "Salted Caramel Macaron Celebration Cake",
    frenchName: "Gâteau Caramel Beurre Salé",
    category: "Birthday Cakes",
    description: "Rich chocolate sponge, French salted caramel drizzle, toasted hazelnut crunch, topped with caramel macarons.",
    price: 260,
    servingSize: "12–14 Servings (8 inch)",
    flavor: "Salted Caramel & Chocolate",
    dietary: ["Vegetarian", "Halal"],
    prepTime: "24 Hours Order",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=800&auto=format&fit=crop",
    filling: "Salted Caramel & Hazelnut Praline"
  },
  {
    id: "bday-3",
    name: "Minimalist Pastel Ribbon Birthday Cake",
    frenchName: "Gâteau Ruban Pastel",
    category: "Birthday Cakes",
    description: "Contemporary aesthetic buttercream cake styled with silk ribbon accents and custom brass cake topper.",
    price: 220,
    servingSize: "8–10 Servings (6 inch)",
    flavor: "Red Velvet",
    dietary: ["Vegetarian", "Halal", "Nut-Free"],
    prepTime: "Same Day Available",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop",
    isNew: true,
    filling: "Cream Cheese Frosting"
  },
  {
    id: "bday-4",
    name: "Spiced Carrot & Walnut Honey Cake",
    frenchName: "Gâteau au Carotte & Miel",
    category: "Birthday Cakes",
    description: "Moist cinnamon-spiced carrot cake, toasted walnuts, Yemeni sidr honey drizzle, and vanilla bean cream cheese.",
    price: 195,
    servingSize: "8–10 Servings",
    flavor: "Carrot & Spiced Honey",
    dietary: ["Vegetarian", "Halal"],
    prepTime: "3 Hours Prep",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop",
    filling: "Sidr Honey & Cream Cheese"
  },

  // 3. Wedding Cakes
  {
    id: "wed-1",
    name: "The Royal Majestic 4-Tier Floral Wedding Cake",
    frenchName: "Gâteau de Mariage 4 Étages",
    category: "Wedding Cakes",
    description: "Handcrafted 4-tier wedding centerpiece featuring organic sugar flowers, 24K leaf accents, and elderflower lemon sponge.",
    price: 1250,
    servingSize: "60–80 Servings",
    flavor: "Elderflower Lemon & White Chocolate",
    dietary: ["Vegetarian", "Halal", "Chef Special"],
    prepTime: "72 Hours Advance Order",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop",
    tiers: 4,
    filling: "Lemon Curd & White Chocolate Ganache"
  },
  {
    id: "wed-2",
    name: "Contemporary Textured Ivory 3-Tier Wedding Cake",
    frenchName: "Gâteau Minimaliste 3 Étages",
    category: "Wedding Cakes",
    description: "Sleek sculptural buttercream texture with dried botanical accents, pistachio sponge, and rose water reduction.",
    price: 850,
    servingSize: "40–50 Servings",
    flavor: "Pistachio & Rose",
    dietary: ["Vegetarian", "Halal"],
    prepTime: "48 Hours Advance Order",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop",
    tiers: 3,
    filling: "Rose Water Cream & Pistachio Praline"
  },
  {
    id: "wed-3",
    name: "Gold Leaf Marble 2-Tier Wedding Cake",
    frenchName: "Gâteau Marbre & Feuille d'Or",
    category: "Wedding Cakes",
    description: "Elegant fondante marble finish infused with gold leaf foil, Belgian chocolate mud cake, and dark truffle filling.",
    price: 650,
    servingSize: "25–30 Servings",
    flavor: "Chocolate Mud & Hazelnut",
    dietary: ["Vegetarian", "Halal"],
    prepTime: "48 Hours Advance Order",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
    tiers: 2,
    filling: "Belgian Chocolate Truffle"
  },

  // 4. Celebration Cakes
  {
    id: "cel-1",
    name: "Wild Berry & Champagne Mousse Cake",
    frenchName: "Gâteau Champagne & Fruits Rouges",
    category: "Celebration Cakes",
    description: "Fresh strawberry compote, champagne infused mousse, vanilla genoise, and edible fresh orchids.",
    price: 280,
    servingSize: "10–12 Servings",
    flavor: "Strawberry & Champagne",
    dietary: ["Vegetarian", "Halal"],
    prepTime: "4 Hours Prep",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop",
    isBestseller: true,
    filling: "Wild Strawberry & Mousse"
  },
  {
    id: "cel-2",
    name: "Lotus Biscoff Crunch Tower",
    frenchName: "Tour Caramel Biscoff",
    category: "Celebration Cakes",
    description: "Layers of spiced Biscoff sponge, crushed biscuit crumble, caramelized whipped mousse, and gold pearls.",
    price: 235,
    servingSize: "8–10 Servings",
    flavor: "Lotus Biscoff",
    dietary: ["Vegetarian", "Halal", "Nut-Free"],
    prepTime: "Same Day Available",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop",
    filling: "Biscoff Cookie Butter & Mousse"
  },
  {
    id: "cel-3",
    name: "Matcha Green Tea & Yuzu Citrus Entremet",
    frenchName: "Entremet Matcha & Yuzu",
    category: "Celebration Cakes",
    description: "Ceremonial grade Uji matcha sponge, tangy Japanese yuzu curd, and white chocolate mirror glaze.",
    price: 250,
    servingSize: "8–10 Servings",
    flavor: "Matcha & Yuzu",
    dietary: ["Vegetarian", "Halal", "Chef Special"],
    prepTime: "6 Hours Prep",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=800&auto=format&fit=crop",
    isNew: true,
    filling: "Yuzu Curd & Matcha Cream"
  },

  // 5. Cupcakes
  {
    id: "cup-1",
    name: "Madagascar Vanilla Bean Cupcake (Box of 6)",
    frenchName: "Coffret 6 Cupcakes Vanille",
    category: "Cupcakes",
    description: "Soft vanilla bean sponge topped with whipped buttercream piping and golden pearls.",
    price: 95,
    servingSize: "6 Pieces",
    flavor: "Vanilla Bean",
    dietary: ["Vegetarian", "Halal", "Nut-Free"],
    prepTime: "Instant Pickup / Delivery",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=800&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: "cup-2",
    name: "Assorted Deluxe Cupcake Collection (Box of 12)",
    frenchName: "Coffret 12 Cupcakes Assortis",
    category: "Cupcakes",
    description: "Assortment including Red Velvet, Sicilian Pistachio, Dark Chocolate Truffle, and Lotus Biscoff.",
    price: 180,
    servingSize: "12 Pieces",
    flavor: "Assorted Gourmet",
    dietary: ["Vegetarian", "Halal"],
    prepTime: "Instant Pickup / Delivery",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=800&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: "cup-3",
    name: "Red Velvet Cream Cheese Cupcake",
    frenchName: "Cupcake Red Velvet",
    category: "Cupcakes",
    description: "Traditional cocoa-infused red velvet cake topped with silky cream cheese frosting and gold dusting.",
    price: 18,
    servingSize: "Single Piece",
    flavor: "Red Velvet",
    dietary: ["Vegetarian", "Halal", "Nut-Free"],
    prepTime: "Instant Pickup",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=800&auto=format&fit=crop"
  },

  // 6. Pastries
  {
    id: "pas-1",
    name: "French Butter Croissant (Box of 4)",
    frenchName: "Croissant au Beurre AOP",
    category: "Pastries",
    description: "Hand-laminated 81-layer croissant made with AOP Charentes-Poitou French butter.",
    price: 48,
    servingSize: "4 Pieces",
    flavor: "Pure Butter",
    dietary: ["Vegetarian", "Halal", "Nut-Free"],
    prepTime: "Baked Fresh Daily",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: "pas-2",
    name: "Pistachio Baklava Croissant Supreme",
    frenchName: "Croissant Baklava Pistache",
    category: "Pastries",
    description: "Spiral croissant filled with bronzed pistachio praline cream, orange blossom glaze, and crushed pistachios.",
    price: 28,
    servingSize: "Single Piece",
    flavor: "Pistachio & Orange Blossom",
    dietary: ["Vegetarian", "Halal", "Chef Special"],
    prepTime: "Baked Fresh Daily",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: "pas-3",
    name: "Valrhona Pain au Chocolat",
    frenchName: "Pain au Chocolat Valrhona",
    category: "Pastries",
    description: "Flaky golden pastry filled with double bars of Valrhona dark chocolate.",
    price: 22,
    servingSize: "Single Piece",
    flavor: "Dark Chocolate",
    dietary: ["Vegetarian", "Halal", "Nut-Free"],
    prepTime: "Baked Fresh Daily",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pas-4",
    name: "Vanilla Bean Mille-Feuille Tart",
    frenchName: "Mille-Feuille Vanille Bourbon",
    category: "Pastries",
    description: "Caramelized puff pastry sheets layered with Tahitian vanilla bean pastry cream.",
    price: 36,
    servingSize: "Single Piece",
    flavor: "Tahitian Vanilla",
    dietary: ["Vegetarian", "Halal", "Nut-Free"],
    prepTime: "Freshly Made",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=800&auto=format&fit=crop"
  },

  // 7. Cookies
  {
    id: "cok-1",
    name: "Belgian Dark Chocolate Chunk Cookie Box",
    frenchName: "Coffret Cookies Chocolat Noir",
    category: "Cookies",
    description: "Thick soft-baked NYC style cookies loaded with 70% dark chocolate chunks and Maldon sea salt flakes.",
    price: 75,
    servingSize: "6 Pieces",
    flavor: "Dark Chocolate & Sea Salt",
    dietary: ["Vegetarian", "Halal", "Nut-Free"],
    prepTime: "Freshly Baked",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: "cok-2",
    name: "Pistachio Stuffed Kunafa Cookie",
    frenchName: "Cookie Fourré Pistache Kunafa",
    category: "Cookies",
    description: "Brown butter dough stuffed with molten pistachio cream and toasted kataifi pastry.",
    price: 24,
    servingSize: "Single Piece",
    flavor: "Pistachio Kunafa",
    dietary: ["Vegetarian", "Halal", "Chef Special"],
    prepTime: "Freshly Baked",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
    isNew: true
  },
  {
    id: "cok-3",
    name: "Salted Caramel Pecan Cookie Box",
    frenchName: "Coffret Cookies Caramel Pecan",
    category: "Cookies",
    description: "Toasted pecans, chewy caramel core, and brown sugar cookie dough.",
    price: 80,
    servingSize: "6 Pieces",
    flavor: "Caramel & Pecan",
    dietary: ["Vegetarian", "Halal"],
    prepTime: "Freshly Baked",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=800&auto=format&fit=crop"
  },

  // 8. Dessert Boxes
  {
    id: "box-1",
    name: "Parisian Macaron Collection (Box of 16)",
    frenchName: "Coffret 16 Macarons Parisiens",
    category: "Dessert Boxes",
    description: "Handcrafted macaron shells filled with Rose, Pistachio, Salted Caramel, Dark Chocolate, and Passionfruit ganache.",
    price: 145,
    servingSize: "16 Pieces",
    flavor: "Assorted Macaron",
    dietary: ["Vegetarian", "Halal", "Gluten-Free"],
    prepTime: "Instant Pickup / Delivery",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: "box-2",
    name: "Miniature Dessert Tasting Box (12 Pieces)",
    frenchName: "Coffret Dégustation Mini Desserts",
    category: "Dessert Boxes",
    description: "Mini opera cake, fruit tarts, chocolate bonbons, lemon meringue bites, and pistachio choux.",
    price: 165,
    servingSize: "12 Pieces",
    flavor: "Gourmet Dessert Mix",
    dietary: ["Vegetarian", "Halal"],
    prepTime: "3 Hours Prep",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "box-3",
    name: "Fudge Brownie Bite Box (Box of 16)",
    frenchName: "Coffret Mini Brownies Fudge",
    category: "Dessert Boxes",
    description: "Fudgy Belgian chocolate brownies topped with salted caramel drizzle, toasted pecans, and Nutella swirl.",
    price: 120,
    servingSize: "16 Pieces",
    flavor: "Chocolate & Caramel",
    dietary: ["Vegetarian", "Halal"],
    prepTime: "Instant Pickup",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop"
  },

  // 9. Chocolates
  {
    id: "choc-1",
    name: "Artisanal Bonbon Chocolate Box (24 Pieces)",
    frenchName: "Coffret 24 Bonbons Chocolat",
    category: "Chocolates",
    description: "Hand-painted chocolate spheres with fillings of Saffron Caramel, Tahitian Vanilla, Yuzu Ganache, and Hazelnut Praline.",
    price: 195,
    servingSize: "24 Pieces",
    flavor: "Gourmet Chocolate Assortment",
    dietary: ["Vegetarian", "Halal", "Gluten-Free"],
    prepTime: "Instant Pickup / Delivery",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: "choc-2",
    name: "Dark Chocolate & Roasted Almond Bark",
    frenchName: "Mendiant Chocolat Noir & Amandes",
    category: "Chocolates",
    description: "72% Ecuadorian dark chocolate slabs topped with caramelized almonds, dried cranberry, and gold leaf flakes.",
    price: 85,
    servingSize: "250g Slab",
    flavor: "Dark Chocolate & Almond",
    dietary: ["Vegetarian", "Vegan", "Halal", "Dairy-Free", "Gluten-Free"],
    prepTime: "Instant Pickup",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop"
  },

  // 10. Gift Hampers
  {
    id: "hamp-1",
    name: "The Royal Grand Celebration Luxury Gift Hamper",
    frenchName: "Le Grand Coffret Cadeau Royal",
    category: "Gift Hampers",
    description: "Includes Signature 6-inch Pistachio Cake, Box of 16 Macarons, Artisanal Bonbons, French Tea Tin, and Custom Card.",
    price: 495,
    servingSize: "Luxury Gift Set",
    flavor: "Full Luxury Suite",
    dietary: ["Vegetarian", "Halal", "Chef Special"],
    prepTime: "Same Day Delivery Available",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: "hamp-2",
    name: "Corporate Executive Appreciation Box",
    frenchName: "Coffret Cadeau Entreprise",
    category: "Gift Hampers",
    description: "Custom branded rigid magnetic box with 12 Macarons, 6 NYC Cookies, and Artisanal Chocolates.",
    price: 350,
    servingSize: "Corporate Set",
    flavor: "Assorted Fine Sweets",
    dietary: ["Vegetarian", "Halal"],
    prepTime: "24 Hours Order",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop"
  }
];

export const CAKE_BUILDER_SIZES = [
  { size: "6 inch", servings: "6–8 Servings", priceAdd: 0 },
  { size: "8 inch", servings: "10–12 Servings", priceAdd: 60 },
  { size: "10 inch", servings: "16–20 Servings", priceAdd: 130 },
  { size: "12 inch", servings: "24–30 Servings", priceAdd: 220 },
];

export const CAKE_BUILDER_SPONGES = [
  { name: "Madagascar Vanilla Bean", priceAdd: 0 },
  { name: "Belgian Chocolate Mud", priceAdd: 10 },
  { name: "Classic Red Velvet", priceAdd: 15 },
  { name: "Sicilian Pistachio", priceAdd: 25 },
  { name: "Zesty Lemon & Poppyseed", priceAdd: 10 },
  { name: "Spiced Honey & Carrot", priceAdd: 15 },
];

export const CAKE_BUILDER_FILLINGS = [
  { name: "Tahitian Vanilla Cream", priceAdd: 0 },
  { name: "Belgian Dark Chocolate Ganache", priceAdd: 15 },
  { name: "Sicilian Pistachio Praline", priceAdd: 30 },
  { name: "Salted Caramel Drizzle", priceAdd: 15 },
  { name: "Fresh Wild Strawberry Compote", priceAdd: 20 },
  { name: "Lotus Biscoff Cookie Butter", priceAdd: 15 },
];

export const CAKE_BUILDER_FROSTINGS = [
  { name: "Swiss Meringue Buttercream", priceAdd: 0 },
  { name: "Dark Chocolate Ganache", priceAdd: 20 },
  { name: "Vanilla Bean Cream Cheese", priceAdd: 15 },
  { name: "Whipped Chantilly Cream", priceAdd: 10 },
];

export const CAKE_BUILDER_STYLES = [
  { name: "Minimalist Pastel & Ribbons", priceAdd: 0 },
  { name: "Fresh Organic Floral & Gold Leaf", priceAdd: 50 },
  { name: "Luxury Macaron & Truffle Drip", priceAdd: 70 },
  { name: "Birthday Balloon & Topper", priceAdd: 40 },
  { name: "Elegance Wedding Pearl Finish", priceAdd: 90 },
  { name: "Kids Custom Theme Finish", priceAdd: 60 },
];

export const DESSERT_BOX_ITEMS = [
  { id: "db-1", name: "Fudge Brownie Bite", pricePerUnit: 12 },
  { id: "db-2", name: "Parisian Macaron", pricePerUnit: 10 },
  { id: "db-3", name: "NYC Dark Choc Cookie", pricePerUnit: 14 },
  { id: "db-4", name: "Mini Lemon Meringue Tart", pricePerUnit: 15 },
  { id: "db-5", name: "Pistachio Choux Puff", pricePerUnit: 16 },
  { id: "db-6", name: "Hand-Painted Chocolate Sphere", pricePerUnit: 9 },
];

export const GIFT_HAMPER_ITEMS = [
  { id: "gh-1", name: "Signature 6-inch Cake", priceAdd: 180 },
  { id: "gh-2", name: "Box of 16 Macarons", priceAdd: 145 },
  { id: "gh-3", name: "Box of 24 Bonbon Chocolates", priceAdd: 195 },
  { id: "gh-4", name: "Fresh Flower Bouquet", priceAdd: 120 },
  { id: "gh-5", name: "Artisanal French Tea Tin", priceAdd: 65 },
  { id: "gh-6", name: "Personalized Handwritten Calligraphy Card", priceAdd: 25 },
];

export const BAKERY_DELIVERY_ZONES = [
  { zone: "Downtown Dubai & DIFC", fee: "AED 15", time: "Within 45 Mins" },
  { zone: "Business Bay & Design District", fee: "AED 15", time: "Within 45 Mins" },
  { zone: "Jumeirah & City Walk", fee: "AED 20", time: "Within 60 Mins" },
  { zone: "Dubai Marina & JBR", fee: "AED 25", time: "Within 60 Mins" },
  { zone: "Palm Jumeirah & Al Sufouh", fee: "AED 25", time: "Within 60 Mins" },
  { zone: "Dubai Hills Estate & Arabian Ranches", fee: "AED 30", time: "Within 75 Mins" },
  { zone: "Deira & Mirdif", fee: "AED 35", time: "Within 90 Mins" },
];

export const CELEBRATION_PACKAGES = [
  {
    id: "pkg-1",
    title: "Sweet Birthday Package",
    price: "AED 199",
    savings: "Save AED 35",
    desc: "Signature 6-inch Cake + Box of 6 Madagascar Vanilla Cupcakes.",
    features: ["Signature 6-inch Cake", "Box of 6 Vanilla Cupcakes", "Custom Candle & Cake Topper", "Free DIFC Delivery"]
  },
  {
    id: "pkg-2",
    title: "Celebration Box Package",
    price: "AED 299",
    isPopular: true,
    savings: "Save AED 60",
    desc: "Signature 8-inch Cake + Box of 6 Cupcakes + Box of 6 NYC Cookies.",
    features: ["8-inch Gourmet Cake", "Box of 6 Cupcakes", "Box of 6 NYC Cookies", "Handwritten Birthday Card", "Priority Same-Day Slot"]
  },
  {
    id: "pkg-3",
    title: "Luxury Celebration Suite",
    price: "AED 499",
    savings: "Save AED 110",
    desc: "8-inch Premium Cake + Box of 16 Macarons + Box of 24 Bonbons.",
    features: ["8-inch Luxury Cake", "Box of 16 Parisian Macarons", "24 Hand-Painted Bonbons", "Fresh Botanical Flowers", "24K Gold Leaf Accents"]
  },
  {
    id: "pkg-4",
    title: "Corporate Event Catering",
    price: "From AED 750",
    savings: "Custom Quote",
    desc: "Custom branded dessert boxes, miniature tarts, and corporate cake bars for events.",
    features: ["Logo Personalization", "Custom Box Colors", "Individual Portion Packaging", "Dedicated Delivery Manager"]
  }
];

export const BAKERY_INGREDIENTS: IngredientItem[] = [
  {
    id: "ing-1",
    name: "Valrhona 70% Dark Chocolate",
    frenchName: "Chocolat Valrhona Guanaja",
    category: "Chocolate",
    flavorProfile: "Bittersweet, warm spices, intense cacao, and smooth finish.",
    origin: "Tain-l'Hermitage, France",
    commonPairings: ["Salted Caramel", "Raspberry", "Espresso", "Hazelnut"],
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ing-2",
    name: "Madagascar Bourbon Vanilla",
    frenchName: "Gousse de Vanille Bourbon",
    category: "Vanilla & Spices",
    flavorProfile: "Rich, floral, woody, buttery, and honeyed aroma.",
    origin: "Sava Region, Madagascar",
    commonPairings: ["Pistachio", "Buttercream", "Strawberry", "Saffron"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ing-3",
    name: "Sicilian Bronte Pistachio",
    frenchName: "Pistache Verte de Bronte AOP",
    category: "Nuts & Praline",
    flavorProfile: "Intensely nutty, sweet, earthy, and vibrant emerald green.",
    origin: "Mount Etna, Sicily, Italy",
    commonPairings: ["Rose Water", "White Chocolate", "Raspberry", "Kataifi"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ing-4",
    name: "Wild Organic Strawberries",
    frenchName: "Fraises des Bois Organiques",
    category: "Fruits & Berries",
    flavorProfile: "Sweet, fragrant, bright acidity, and juicy berry nectar.",
    origin: "Bologna, Italy",
    commonPairings: ["Chantilly Cream", "Champagne", "Pistachio", "Mint"],
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ing-5",
    name: "AOP Charentes-Poitou French Butter",
    frenchName: "Beurre AOP Charentes-Poitou",
    category: "Dairy & Cream",
    flavorProfile: "Nutty, cultured cream, hazelnut undertones, and velvety texture.",
    origin: "Poitou-Charentes, France",
    commonPairings: ["Croissants", "Brioche", "Shortbread", "Buttercream"],
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=800&auto=format&fit=crop"
  }
];

export const BAKERY_REVIEWS: BakeryReview[] = [
  {
    id: "rev-1",
    guestName: "Camilla & Julien Moreau",
    rating: 5,
    occasion: "4-Tier Wedding Cake",
    favoriteItem: "Elderflower Lemon Wedding Cake",
    comment: "Maison Crème designed our 4-tier wedding cake for our DIFC reception. The sugar flowers looked like genuine peonies and the elderflower flavor was extraordinary.",
    notice: "Sample Review — Concept Project"
  },
  {
    id: "rev-2",
    guestName: "Tariq Al-Mansoor",
    rating: 5,
    occasion: "30th Birthday Party",
    favoriteItem: "Royal Pistachio & Raspberry Entremet",
    comment: "The custom cake builder made ordering so effortless. The pistachio compote and gold leaf finish impressed all 40 of our guests.",
    notice: "Sample Review — Concept Project"
  },
  {
    id: "rev-3",
    guestName: "Dr. Sarah Jenkins",
    rating: 5,
    occasion: "Corporate Gala Gifting",
    favoriteItem: "Custom Branded Macaron Box",
    comment: "We ordered 80 executive gift hampers for our annual summit in Downtown Dubai. Every single box was delivered perfectly on time and looked royal.",
    notice: "Sample Review — Concept Project"
  }
];

export const BAKERY_FAQS: BakeryFAQ[] = [
  {
    id: "faq-1",
    question: "How early should I order a custom cake?",
    answer: "For custom celebration cakes, we recommend ordering 24–48 hours in advance. For 3-tier or 4-tier wedding cakes, please book 72 hours in advance to allow sugar flower sculpting."
  },
  {
    id: "faq-2",
    question: "Do you offer same-day cake delivery across Dubai?",
    answer: "Yes! Our Signature Cakes, Cupcakes, Macaron Boxes, and Pastry Hampers are available for same-day delivery within 45–90 minutes across Dubai."
  },
  {
    id: "faq-3",
    question: "Can I customize the flavor, filling, and message on my cake?",
    answer: "Absolutely. You can use our online 3D-style Custom Cake Builder to choose your size, sponge, filling, frosting, visual style, and personalized handwritten cake message."
  },
  {
    id: "faq-4",
    question: "Do you offer wedding cake consultations and tastings?",
    answer: "Yes, we offer complimentary wedding cake tasting boxes and private consultations at our DIFC studio or via WhatsApp video call."
  },
  {
    id: "faq-5",
    question: "Can I provide an inspiration photo for a custom cake?",
    answer: "Yes! You can attach your inspiration image via our Cake Consultation form or send it directly to our WhatsApp concierge desk."
  },
  {
    id: "faq-6",
    question: "Do you offer egg-free or nut-free cake options?",
    answer: "Yes, we prepare Egg-Free, Nut-Free, Gluten-Free, and Vegan celebration cakes. Please check our Dietary Filter or note your allergy requirement during checkout."
  },
  {
    id: "faq-7",
    question: "Do you offer vegan and dairy-free pastries?",
    answer: "Our Vegan Dark Chocolate Cake and Vegan Croissants are crafted using organic coconut butter and Ecuadorian cacao."
  },
  {
    id: "faq-8",
    question: "Can I order directly through WhatsApp?",
    answer: "Yes, every product, custom cake build, and consultation request includes a direct WhatsApp concierge fallback for instant host communication."
  },
  {
    id: "faq-9",
    question: "What are your delivery zones and fees in Dubai?",
    answer: "We deliver across DIFC, Downtown (AED 15), Business Bay, Jumeirah (AED 20), Dubai Marina, Palm Jumeirah (AED 25), and Dubai Hills (AED 30)."
  },
  {
    id: "faq-10",
    question: "Do you cater for corporate events and bulk gifts?",
    answer: "Yes, our Corporate Gifting department creates custom logo-engraved bonbons, branded macaron boxes, and dessert tables for corporate events."
  },
  {
    id: "faq-11",
    question: "Do you offer cake tasting boxes?",
    answer: "Our Signature Tasting Box features 6 cake sponge samples with matching fillings for AED 120 (credited towards your cake order)."
  },
  {
    id: "faq-12",
    question: "Can I add a personalized greeting card to my cake order?",
    answer: "Yes, all orders include a complimentary luxury foil-stamped greeting card with your customized gift message."
  }
];
