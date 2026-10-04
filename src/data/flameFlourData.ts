export interface BakeryProduct {
  id: string;
  name: string;
  category: 'Bread' | 'Croissants' | 'Viennoiserie' | 'Cakes' | 'Pastries' | 'Cookies' | 'Breakfast' | 'Gift Boxes';
  tagline: string;
  description: string;
  priceAED: number;
  image: string;
  ingredients: string[];
  allergens: string[];
  flavorProfile: string;
  texture: string;
  servingSize: string;
  bakeStyle: string;
  availability: 'Fresh from Oven' | 'Available' | 'Limited Batch' | 'Baking Now' | 'Sold Out';
  featured?: boolean;
  dietary: ('Vegetarian' | 'Vegan' | 'Organic' | 'Nut Free' | 'Dairy Free')[];
}

export interface BakeryIngredient {
  id: string;
  name: string;
  origin: string;
  role: string;
  flavorNotes: string;
  usedIn: string[];
  description: string;
}

export interface BakeryBatch {
  batchId: string;
  productName: string;
  stage: 'Dough Preparation' | 'Long Fermentation' | 'Shaping & Proofing' | 'In Woodfire Oven' | 'Cooling Rack' | 'On Counter';
  temperatureC: number;
  startTime: string;
  finishEst: string;
  units: number;
  ovenNumber: string;
}

export const FLAME_FLOUR_METADATA = {
  name: 'FLAME & FLOUR',
  eyebrow: 'ARTISAN BAKING, REFINED',
  tagline: 'Crafted by Fire. Finished by Hand.',
  positioning: 'Artisan Baking House & Digital Bakery Experience',
  subheading: 'A modern artisan bakery built around slow fermentation, honest heritage ingredients, precise technique, and the timeless ritual of wood-fired baking.',
  location: 'Alserkal Avenue Artisan District, Dubai & Abu Dhabi Cultural Hubs, UAE',
  demoNotice: 'FLAME & FLOUR ARTISAN BAKERY DEMONSTRATION · Fictional Culinary Commerce Platform'
};

// -------------------------------------------------------------
// 24 DISTINCT ARTISAN BAKERY PRODUCTS
// -------------------------------------------------------------
export const BAKERY_PRODUCTS: BakeryProduct[] = [
  {
    id: 'prod-01',
    name: 'Signature Sourdough',
    category: 'Bread',
    tagline: '36-hour slow-fermented levain loaf with crackling blistered crust',
    description: 'Baked in our heavy refractory stone deck oven using organic stoneground French wheat and our 7-year-old mother culture.',
    priceAED: 38,
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Organic Stoneground Wheat Flour', 'Pure Spring Water', 'Wild Sourdough Levain', 'Maldon Sea Salt'],
    allergens: ['Wheat / Gluten'],
    flavorProfile: 'Crisp crust · open aerated crumb · subtle lactic acidity · toasted nutty finish',
    texture: 'Custardy open crumb with deeply caramelized blistered crust',
    servingSize: '850g Loaf (Serves 4–6)',
    bakeStyle: 'Wood-Fired Refractory Hearth (245°C)',
    availability: 'Fresh from Oven',
    featured: true,
    dietary: ['Vegetarian', 'Vegan', 'Organic', 'Nut Free', 'Dairy Free']
  },
  {
    id: 'prod-02',
    name: 'Country Levain',
    category: 'Bread',
    tagline: 'Rustic wholemeal and rye blend with deep earthy undertones',
    description: 'Stone-milled heritage grains combined with toasted wheat germ for a wholesome, rustic loaf that stays fresh for days.',
    priceAED: 42,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Organic Heritage Whole Wheat', 'Dark Rye Flour', 'Natural Levain', 'Sea Salt'],
    allergens: ['Wheat / Gluten', 'Rye'],
    flavorProfile: 'Earthy toasted rye notes · rich golden crust · complex fermentation tang',
    texture: 'Dense, moist, chewy structure with high hydration crumb',
    servingSize: '900g Loaf (Serves 6)',
    bakeStyle: 'Cast-Iron Steam Injection Hearth',
    availability: 'Available',
    featured: true,
    dietary: ['Vegetarian', 'Vegan', 'Organic', 'Nut Free', 'Dairy Free']
  },
  {
    id: 'prod-03',
    name: 'Rosemary Sea Salt Focaccia',
    category: 'Bread',
    tagline: 'Dimpled olive-oil rich Italian focaccia with wild mountain rosemary',
    description: 'Drenched in first cold-pressed Sicilian extra virgin olive oil, fresh rosemary needles, and crunchy flakes of pyramid sea salt.',
    priceAED: 34,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Italian Tipo 00 Flour', 'Extra Virgin Olive Oil', 'Fresh Mountain Rosemary', 'Maldon Sea Salt Flakes'],
    allergens: ['Wheat / Gluten'],
    flavorProfile: 'Rich fruity olive oil · herbaceous mountain rosemary · savory mineral salt crunch',
    texture: 'Ultra-pillowy interior with golden, crispy olive-oil fried bottom',
    servingSize: 'Slab (400g · Serves 3–4)',
    bakeStyle: 'High-Heat Stone Deck',
    availability: 'Fresh from Oven',
    dietary: ['Vegetarian', 'Vegan', 'Nut Free', 'Dairy Free']
  },
  {
    id: 'prod-04',
    name: 'French Butter Croissant',
    category: 'Croissants',
    tagline: '27 laminated honeycomb layers with 84% Normandy cultured butter',
    description: 'The golden standard of French viennoiserie. Flaky shattered layers giving way to a meltingly soft, butter-perfumed interior.',
    priceAED: 22,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    ingredients: ['French T55 Flour', 'Normandy Beurre d’Isigny AOP (84% Fat)', 'Whole Milk', 'Pure Cane Sugar', 'Sea Salt'],
    allergens: ['Wheat / Gluten', 'Milk / Dairy', 'Eggs'],
    flavorProfile: 'Deep cultured butter fragrance · delicate sweetness · toasted pastry aroma',
    texture: 'Crispy crackling exterior with featherlight honeycomb interior',
    servingSize: 'Individual Pastry (95g)',
    bakeStyle: 'Convection Rotating Oven (185°C)',
    availability: 'Fresh from Oven',
    featured: true,
    dietary: ['Vegetarian', 'Nut Free']
  },
  {
    id: 'prod-05',
    name: 'Almond Croissant',
    category: 'Croissants',
    tagline: 'Twice-baked croissant filled with rich vanilla frangipane cream',
    description: 'Soaked in pure Madagascar vanilla syrup, layered with artisan almond cream, and topped with toasted almond flakes and powdered sugar.',
    priceAED: 28,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Laminated Butter Pastry', 'California Almond Flour', 'Madagascar Vanilla Bean', 'Powdered Sugar', 'Rum Aroma Extract'],
    allergens: ['Wheat / Gluten', 'Tree Nuts (Almonds)', 'Dairy', 'Eggs'],
    flavorProfile: 'Sweet toasted marzipan · rich butter pastry · warm floral vanilla aroma',
    texture: 'Crispy caramelized edges with decadent soft frangipane center',
    servingSize: 'Individual Pastry (140g)',
    bakeStyle: 'Twice-Baked Deck Finishing',
    availability: 'Available',
    featured: true,
    dietary: ['Vegetarian']
  },
  {
    id: 'prod-06',
    name: 'Pistachio Croissant',
    category: 'Croissants',
    tagline: 'Bronte pistachio cream filling with roasted crushed emerald nuts',
    description: 'Filled with velvety homemade 100% Sicilian pistachio paste, topped with white chocolate drizzle and toasted pistachio praline.',
    priceAED: 32,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Cultured Butter Dough', 'Sicilian Bronte Pistachio Cream', 'Organic White Chocolate', 'Crushed Roasted Pistachios'],
    allergens: ['Wheat / Gluten', 'Tree Nuts (Pistachio)', 'Dairy', 'Eggs'],
    flavorProfile: 'Intense roasted pistachio cream · buttery pastry · subtle white chocolate sweetness',
    texture: 'Voluptuous silky filling inside shattering crisp pastry layers',
    servingSize: 'Individual Pastry (145g)',
    bakeStyle: 'Convection Gold Bake',
    availability: 'Limited Batch',
    dietary: ['Vegetarian']
  },
  {
    id: 'prod-07',
    name: 'Pain au Chocolat',
    category: 'Croissants',
    tagline: 'Double batons of Valrhona 66% dark chocolate inside golden pastry',
    description: 'Two generous batons of single-origin French dark chocolate encased in 27 layers of Normandy butter pastry dough.',
    priceAED: 24,
    image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=800&q=80',
    ingredients: ['French Flour', 'AOP Butter', 'Valrhona Caraïbe 66% Dark Chocolate', 'Egg Wash'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs', 'Soy Lecithin in Chocolate'],
    flavorProfile: 'Bittersweet dark cocoa · roasted nutty butter · delicate caramelized sugar',
    texture: 'Crisp outer shell with molten-rich chocolate core',
    servingSize: 'Individual Pastry (105g)',
    bakeStyle: 'Convection (185°C)',
    availability: 'Fresh from Oven',
    dietary: ['Vegetarian', 'Nut Free']
  },
  {
    id: 'prod-08',
    name: 'Cinnamon Morning Bun',
    category: 'Viennoiserie',
    tagline: 'Flaky croissant dough swirled with Ceylon cinnamon and citrus sugar',
    description: 'Made from caramelized croissant trimmings rolled in fragrant Sri Lankan cinnamon, orange zest, and raw turbinado cane sugar.',
    priceAED: 26,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Laminated Pastry Dough', 'Ceylon Cinnamon', 'Fresh Orange Zest', 'Demerara Turbinado Sugar'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs'],
    flavorProfile: 'Warm aromatic cinnamon spice · bright citrus orange oils · sticky caramel crunch',
    texture: 'Crispy caramelized bottom crust with tender spiral center',
    servingSize: 'Individual Pastry (120g)',
    bakeStyle: 'Muffin Mold Caramelization',
    availability: 'Available',
    dietary: ['Vegetarian', 'Nut Free']
  },
  {
    id: 'prod-09',
    name: 'Vanilla Bean Brioche',
    category: 'Viennoiserie',
    tagline: 'Featherlight egg-rich brioche loaf speckled with Tahitian vanilla',
    description: 'Enriched with 50% cultured butter and fresh farm egg yolks, slow-proved overnight for an impossibly soft, cloud-like texture.',
    priceAED: 36,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80',
    ingredients: ['French Flour', 'Egg Yolks', 'Cultured Butter (50%)', 'Tahitian Vanilla Caviar', 'Pearl Sugar'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs'],
    flavorProfile: 'Floral rich vanilla · sweet egg custard · melting golden butter',
    texture: 'Cotton-candy soft, shreddable crumb with delicate golden skin',
    servingSize: 'Braided Loaf (450g · Serves 4)',
    bakeStyle: 'Gentle Steam Deck (175°C)',
    availability: 'Available',
    dietary: ['Vegetarian', 'Nut Free']
  },
  {
    id: 'prod-10',
    name: 'Chocolate Babka',
    category: 'Viennoiserie',
    tagline: 'Twisted brioche woven with molten fudge and cocoa streusel',
    description: 'Swirled with rich Valrhona dark chocolate fudge, toasted pecans, and topped with crisp buttery cocoa crumble.',
    priceAED: 48,
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Brioche Dough', 'Valrhona Guanaja 70%', 'Dutch Cocoa Powder', 'Brown Butter Streusel', 'Pecan Pieces'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs', 'Tree Nuts (Pecans)'],
    flavorProfile: 'Intense bittersweet chocolate · buttery brioche · caramelized streusel',
    texture: 'Dense, decadent ribbons of molten fudge inside soft pillowy dough',
    servingSize: 'Full Loaf (650g · Serves 6)',
    bakeStyle: 'Stone Hearth Loaf Pan',
    availability: 'Limited Batch',
    dietary: ['Vegetarian']
  },
  {
    id: 'prod-11',
    name: 'Basque Cheesecake',
    category: 'Cakes',
    tagline: 'Caramelized burnt exterior with an ultra-creamy molten center',
    description: 'Baked at intense heat to achieve a deeply browned, bittersweet scorched top while maintaining a voluptuous custard interior.',
    priceAED: 180,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Philadelphia Cream Cheese', 'Heavy Double Cream (45%)', 'Organic Egg Yolks', 'Tahitian Vanilla', 'Sea Salt'],
    allergens: ['Milk / Dairy', 'Eggs'],
    flavorProfile: 'Toasted burnt caramel notes · tangy cream cheese · sweet vanilla cream',
    texture: 'Silk-like molten center with blistered exterior skin',
    servingSize: '8" Whole Cake (Serves 8–10)',
    bakeStyle: 'High-Heat Woodfire Convection (240°C)',
    availability: 'Available',
    featured: true,
    dietary: ['Vegetarian', 'Nut Free']
  },
  {
    id: 'prod-12',
    name: 'Dark Chocolate Tart',
    category: 'Pastries',
    tagline: 'Silky 70% dark chocolate ganache in a crisp sablé breton shell',
    description: 'Finished with a light sprinkle of smoked Maldon sea salt and delicate 24k edible gold leaf.',
    priceAED: 34,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Valrhona Chocolate Ganache', 'Cocoa Pâte Sablée', 'Smoked Sea Salt', '24k Gold Leaf'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs'],
    flavorProfile: 'Velvety dark cacao · subtle smoke mineral finish · buttery biscuit crunch',
    texture: 'Snap of crumbly tart shell with glossy liquid-silk chocolate ganache',
    servingSize: 'Individual Tart (110g)',
    bakeStyle: 'Blind-Baked Tart Shell & Cold Ganache Set',
    availability: 'Available',
    dietary: ['Vegetarian', 'Nut Free']
  },
  {
    id: 'prod-13',
    name: 'Lemon Meringue Tart',
    category: 'Pastries',
    tagline: 'Tart Meyer lemon curd crowned with torched Italian meringue peaks',
    description: 'Crisp butter tart shell filled with tart Sicilian lemon curd, finished with pillowy caramelized meringue flames.',
    priceAED: 32,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Meyer Lemon Juice & Zest', 'Egg Yolk Curd', 'Italian Meringue', 'Sweet Butter Crust'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs'],
    flavorProfile: 'Electric citrus acidity · sweet marshmallow meringue · rich butter crust',
    texture: 'Cloud-like torched meringue over sharp silky curd and crunchy crust',
    servingSize: 'Individual Tart (120g)',
    bakeStyle: 'Hand-Torched Meringue Finish',
    availability: 'Available',
    dietary: ['Vegetarian', 'Nut Free']
  },
  {
    id: 'prod-14',
    name: 'Strawberry Mascarpone Cake',
    category: 'Cakes',
    tagline: 'Chiffon sponge layered with wild strawberry compote and whipped cream',
    description: 'Delicate Genoese sponge soaked in elderflower syrup, filled with whipped Italian mascarpone cream and fresh UAE farm strawberries.',
    priceAED: 220,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Sponge Flour', 'Whipped Mascarpone', 'Fresh Strawberries', 'Elderflower Liqueur Syrup', 'White Chocolate Curls'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs'],
    flavorProfile: 'Fresh summer berries · creamy mascarpone sweetness · light floral elderflower',
    texture: 'Featherlight sponge with cloud-soft cream and juicy fresh berries',
    servingSize: '8" Whole Cake (Serves 8–10)',
    bakeStyle: 'Chiffon Steam Bake & Cold Assembly',
    availability: 'Available',
    dietary: ['Vegetarian', 'Nut Free']
  },
  {
    id: 'prod-15',
    name: 'Salted Caramel Cookie',
    category: 'Cookies',
    tagline: 'Thick New York style cookie with molten caramel core and sea salt',
    description: 'Crisp chewy edges, soft doughy center packed with Belgian milk chocolate chunks and homemade fleur de sel caramel.',
    priceAED: 18,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Brown Butter Dough', 'Belgian Milk Chocolate', 'Handmade Salted Caramel', 'Maldon Salt Flakes'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs'],
    flavorProfile: 'Nutty browned butter · sweet molten caramel · sharp crystal salt punch',
    texture: 'Crisp exterior with gooey, underbaked molten center',
    servingSize: 'Giant Cookie (130g)',
    bakeStyle: 'High-Heat Flash Bake (215°C)',
    availability: 'Fresh from Oven',
    dietary: ['Vegetarian', 'Nut Free']
  },
  {
    id: 'prod-16',
    name: 'Double Chocolate Cookie',
    category: 'Cookies',
    tagline: 'Black cocoa dough studded with 70% dark chocolate chunks',
    description: 'Intense fudgy brownie-like cookie made with Dutch black cocoa and melted Valrhona chocolate drops.',
    priceAED: 18,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Black Dutch Cocoa', 'Valrhona 70% Dark Chocolate', 'Organic Butter', 'Brown Sugar'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs'],
    flavorProfile: 'Deep fudgy dark cocoa · rich roasted malt · balanced sweetness',
    texture: 'Brownie-fudge density with melted chocolate pockets',
    servingSize: 'Giant Cookie (130g)',
    bakeStyle: 'Flash Bake (215°C)',
    availability: 'Available',
    dietary: ['Vegetarian', 'Nut Free']
  },
  {
    id: 'prod-17',
    name: 'Pistachio Financier',
    category: 'Pastries',
    tagline: 'French browned-butter almond cake infused with pure pistachio',
    description: 'Golden mini-cake baked in traditional rectangular ingot molds with noisette butter, almond meal, and roasted pistachio crumb.',
    priceAED: 16,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Beurre Noisette (Brown Butter)', 'Egg Whites', 'Almond Flour', 'Sicilian Pistachio Paste'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs', 'Tree Nuts (Almond & Pistachio)'],
    flavorProfile: 'Rich nutty browned butter · earthy roasted pistachio · subtle honey notes',
    texture: 'Crispy caramelized golden crust with moist, springy almond crumb',
    servingSize: 'Individual Financier (55g)',
    bakeStyle: 'Ingot Mold Bake (200°C)',
    availability: 'Available',
    dietary: ['Vegetarian']
  },
  {
    id: 'prod-18',
    name: 'Raspberry Danish',
    category: 'Viennoiserie',
    tagline: 'Laminated pastry nest with vanilla bean custard and fresh raspberries',
    description: 'Puffed golden pastry cup filled with baked pastry cream and glazed fresh organic raspberries dusted with powdered sugar.',
    priceAED: 26,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Danish Laminated Dough', 'Vanilla Crème Pâtissière', 'Organic Fresh Raspberries', 'Apricot Glaze'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs'],
    flavorProfile: 'Tart fresh berry juice · sweet vanilla custard · rich buttery pastry crunch',
    texture: 'Shattering pastry borders with smooth baked custard pool',
    servingSize: 'Individual Pastry (115g)',
    bakeStyle: 'Stone Deck Convection',
    availability: 'Fresh from Oven',
    dietary: ['Vegetarian', 'Nut Free']
  },
  {
    id: 'prod-19',
    name: 'Artisan Breakfast Box',
    category: 'Breakfast',
    tagline: 'Curated morning selection for 2–4 guests with fresh bread & pastries',
    description: 'Includes 1 Signature Sourdough loaf, 2 Butter Croissants, 2 Pain au Chocolat, homemade strawberry jam, and French cultured butter.',
    priceAED: 110,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Assorted Fresh Bakes', 'Beurre d’Isigny', 'Artisan Fruit Preserve'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs'],
    flavorProfile: 'Complete sweet & savory breakfast balance',
    texture: 'Assortment of crusty sourdough and flaky golden viennoiserie',
    servingSize: 'Gift Box (Serves 2–4)',
    bakeStyle: 'Baked Daily at 06:00 AM',
    availability: 'Available',
    featured: true,
    dietary: ['Vegetarian']
  },
  {
    id: 'prod-20',
    name: 'Afternoon Tea Box',
    category: 'Gift Boxes',
    tagline: 'Elegantly packaged box of 8 signature French tarts & financiers',
    description: 'Includes 2 Dark Chocolate Tarts, 2 Lemon Meringue Tarts, 2 Pistachio Financiers, and 2 Salted Caramel Cookies in our signature gift box.',
    priceAED: 145,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Assorted Patisserie', 'Sablé Pastries', 'Chocolate Ganache', 'Fruit Curds'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs', 'Tree Nuts'],
    flavorProfile: 'Curated collection of rich, tart, chocolate, and nutty flavors',
    texture: 'Delicate pastry crunch, velvety fillings, and soft financiers',
    servingSize: 'Gift Box of 8 Items',
    bakeStyle: 'Artisan Hand Finished',
    availability: 'Available',
    dietary: ['Vegetarian']
  },
  {
    id: 'prod-21',
    name: 'Signature Pastry Collection',
    category: 'Gift Boxes',
    tagline: '6 of our most celebrated morning croissants and viennoiserie',
    description: 'Includes 2 Butter Croissants, 1 Almond Croissant, 1 Pistachio Croissant, 1 Pain au Chocolat, and 1 Cinnamon Morning Bun.',
    priceAED: 130,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Assorted Viennoiserie', 'Normandy Butter', 'Frangipane', 'Chocolate'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs', 'Tree Nuts'],
    flavorProfile: 'The quintessential French breakfast experience',
    texture: 'Crisp laminated pastry with assorted molten, nutty, and spiced centers',
    servingSize: 'Box of 6 Pastries',
    bakeStyle: 'Fresh Morning Batch',
    availability: 'Available',
    dietary: ['Vegetarian']
  },
  {
    id: 'prod-22',
    name: 'Weekend Brunch Box',
    category: 'Breakfast',
    tagline: 'Lavish weekend feast with sourdough, focaccia, pastries and spreads',
    description: 'Includes 1 Country Levain, 1 Rosemary Focaccia slab, 4 assorted croissants, 2 cookies, artisan butter, and orange blossom honey.',
    priceAED: 175,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Hearth Breads', 'Laminated Viennoiserie', 'Artisan Butter', 'Raw Honey'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs', 'Tree Nuts'],
    flavorProfile: 'Rustic artisan bread meets sweet decadent patisserie',
    texture: 'Crusty hearth loaves, pillowy focaccia, and delicate croissants',
    servingSize: 'Box (Serves 4–6)',
    bakeStyle: 'Weekend Dawn Batch',
    availability: 'Limited Batch',
    dietary: ['Vegetarian']
  },
  {
    id: 'prod-23',
    name: 'Celebration Cake',
    category: 'Cakes',
    tagline: 'Custom triple-layer artisan cake with personalized gold message plaque',
    description: 'Your choice of chocolate ganache or vanilla bean sponge with custom hand-piped Swiss meringue buttercream and fresh botanical decor.',
    priceAED: 260,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Cake Sponge', 'Swiss Meringue Buttercream', 'Fruit Compote / Ganache', 'Botanical Florals'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs'],
    flavorProfile: 'Customizable luxury celebration profile',
    texture: 'Ultra-tender moist crumb with silky smooth buttercream finish',
    servingSize: '8" Tier (Serves 10–12)',
    bakeStyle: 'Made to Order',
    availability: 'Available',
    featured: true,
    dietary: ['Vegetarian']
  },
  {
    id: 'prod-24',
    name: 'Seasonal Baker’s Box',
    category: 'Gift Boxes',
    tagline: 'Exclusive monthly release featuring experimental and seasonal creations',
    description: 'A surprise collection of 6 limited-edition breads and pastries baked with seasonal fruits, rare spices, and heritage flours.',
    priceAED: 155,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Seasonal Heritage Flour', 'Organic Seasonal Fruits', 'Cultured Butter', 'Rare Spices'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs', 'May contain Nuts'],
    flavorProfile: 'Innovative seasonal and experimental baking notes',
    texture: 'Varied seasonal textures',
    servingSize: 'Curated Box of 6 Items',
    bakeStyle: 'Small Batch Limited Run',
    availability: 'Limited Batch',
    dietary: ['Vegetarian']
  }
];

// -------------------------------------------------------------
// 10 INGREDIENT ARCHIVE ENTRIES
// -------------------------------------------------------------
export const BAKERY_INGREDIENTS: BakeryIngredient[] = [
  {
    id: 'ing-01',
    name: 'Organic Stoneground Wheat Flour',
    origin: 'Label Rouge Certified Mills, France',
    role: 'Structural foundation for sourdough and hearth breads',
    flavorNotes: 'Deep earthy grain, sweet wheat germ, complex toasted aroma',
    usedIn: ['Signature Sourdough', 'Country Levain', 'Rosemary Focaccia'],
    description: 'Milled slowly between natural granite millstones at low temperatures to preserve vitamins, wild yeasts, and essential wheat germ oils.'
  },
  {
    id: 'ing-02',
    name: 'Normandy Beurre d’Isigny AOP (84% Fat)',
    origin: 'Isigny Sainte-Mère, Normandy, France',
    role: 'Lamination butter for 27-layer croissant dough',
    flavorNotes: 'Rich hazelnut notes, fresh grass, deep cultured tang',
    usedIn: ['French Butter Croissant', 'Pain au Chocolat', 'Almond Croissant', 'Brioche'],
    description: 'Cultivated from the milk of coastal Normandy cows grazing on mineral-rich seaside marshes. High plasticity and 84% butterfat allow paper-thin lamination.'
  },
  {
    id: 'ing-03',
    name: '7-Year Wild Sourdough Mother Culture',
    origin: 'Flame & Flour In-House Starter ("Aura")',
    role: 'Natural levain fermentation & leavening agent',
    flavorNotes: 'Subtle lactic apple notes, wild yeast depth, mild acidity',
    usedIn: ['Signature Sourdough', 'Country Levain'],
    description: 'Fed daily with equal parts organic stoneground rye and spring water. Cultivates a diverse colony of Lactobacillus and wild yeasts for superior digestibility.'
  },
  {
    id: 'ing-04',
    name: 'Maldon Smoked Sea Salt Flakes',
    origin: 'Essex, United Kingdom',
    role: 'Finishing mineral seasoning and crust contrast',
    flavorNotes: 'Crisp pyramid crunch, gentle oakwood smoke, pure sea brine',
    usedIn: ['Rosemary Focaccia', 'Salted Caramel Cookie', 'Dark Chocolate Tart'],
    description: 'Hand-harvested flat pyramid crystals gently cold-smoked over natural English oak to provide a delicate, savory crunch atop sweet and savory bakes.'
  },
  {
    id: 'ing-05',
    name: 'Valrhona Grand Cru Dark Chocolate (66%–70%)',
    origin: 'Tain-l’Hermitage, France',
    role: 'Core chocolate filling, ganache and chunk inclusions',
    flavorNotes: 'Roasted dried fruit, bitter cocoa beans, woody undertones',
    usedIn: ['Pain au Chocolat', 'Dark Chocolate Tart', 'Chocolate Babka', 'Double Chocolate Cookie'],
    description: 'Ethically sourced single-origin cocoa beans crafted into silky couverture with exceptional fluidity and complex flavor balance.'
  },
  {
    id: 'ing-06',
    name: 'Sicilian Bronte Green Pistachio Paste',
    origin: 'Mount Etna Volcanic Slopes, Bronte, Italy',
    role: 'Pastry cream filling, frangipane and financier batter',
    flavorNotes: 'Intense roasted nut, sweet marzipan, mineral resin aroma',
    usedIn: ['Pistachio Croissant', 'Pistachio Financier'],
    description: 'Harvested only every two years on volcanic slopes, PDO Bronte pistachios are stone-ground into a vivid emerald paste without artificial colorants.'
  },
  {
    id: 'ing-07',
    name: 'Tahitian Vanilla Bean Caviar',
    origin: 'Taha’a, French Polynesia',
    role: 'Aromatic perfuming of brioche, custard and pastry creams',
    flavorNotes: 'Floral anise, ripe cherry, sweet warm marshmallow',
    usedIn: ['Vanilla Bean Brioche', 'Basque Cheesecake', 'Almond Croissant', 'Raspberry Danish'],
    description: 'Plump, oily Tahitian pods containing millions of aromatic seeds with rich vanillin content and distinctive floral perfume.'
  },
  {
    id: 'ing-08',
    name: 'Cold-Pressed Extra Virgin Olive Oil',
    origin: 'Val di Mazara, Sicily, Italy',
    role: 'Dough enrichment and crust frying for focaccia',
    flavorNotes: 'Artichoke, green tomato leaf, peppery throat finish',
    usedIn: ['Rosemary Sea Salt Focaccia'],
    description: 'Harvested early in the season and pressed within 6 hours. Provides unmatched tenderness and golden crispy crust.'
  },
  {
    id: 'ing-09',
    name: 'Fresh Organic UAE Farm Berries',
    origin: 'Al Ain & Ras Al Khaimah Hydroponic Farms, UAE',
    role: 'Fresh fruit toppings, compotes and tart fillings',
    flavorNotes: 'Bright sweet acidity, floral nectar, clean fresh juice',
    usedIn: ['Raspberry Danish', 'Strawberry Mascarpone Cake'],
    description: 'Harvested at peak ripeness daily and delivered directly to the bakery kitchen within 4 hours.'
  },
  {
    id: 'ing-10',
    name: 'Fleur de Sel Salted Caramel',
    origin: 'Flame & Flour Confectionery Atelier',
    role: 'Molten center for cookies and cake drip finishes',
    flavorNotes: 'Deep burnt sugar, rich double cream, salty mineral kick',
    usedIn: ['Salted Caramel Cookie', 'Custom Celebration Cakes'],
    description: 'Cooked slowly in copper cauldrons with French butter, double cream, and hand-harvested sea salt.'
  }
];

// -------------------------------------------------------------
// 14 DETERMINISTIC BAKERY PRODUCTION RECORDS (Live Simulation)
// -------------------------------------------------------------
export const BAKERY_OPERATIONS_QUEUE: BakeryBatch[] = [
  { batchId: 'BATCH-042', productName: 'Signature Sourdough', stage: 'In Woodfire Oven', temperatureC: 245, startTime: '07:45 AM', finishEst: '08:20 AM', units: 36, ovenNumber: 'Stone Hearth #1' },
  { batchId: 'BATCH-043', productName: 'French Butter Croissants', stage: 'Shaping & Proofing', temperatureC: 28, startTime: '07:15 AM', finishEst: '08:45 AM', units: 72, ovenNumber: 'Proofer Rack A' },
  { batchId: 'BATCH-044', productName: 'Rosemary Focaccia Slabs', stage: 'On Counter', temperatureC: 22, startTime: '06:30 AM', finishEst: 'Ready Now', units: 24, ovenNumber: 'Cooling Rack B' },
  { batchId: 'BATCH-045', productName: 'Pain au Chocolat', stage: 'Cooling Rack', temperatureC: 45, startTime: '07:30 AM', finishEst: '08:05 AM', units: 48, ovenNumber: 'Cooling Rack A' },
  { batchId: 'BATCH-046', productName: 'Basque Cheesecake (8")', stage: 'In Woodfire Oven', temperatureC: 235, startTime: '07:50 AM', finishEst: '08:35 AM', units: 12, ovenNumber: 'Convection #2' },
  { batchId: 'BATCH-047', productName: 'Chocolate Babka Loaves', stage: 'Long Fermentation', temperatureC: 6, startTime: 'Yesterday 18:00', finishEst: '09:15 AM', units: 18, ovenNumber: 'Retarder C' },
  { batchId: 'BATCH-048', productName: 'Almond Croissants (Twice Baked)', stage: 'In Woodfire Oven', temperatureC: 175, startTime: '08:00 AM', finishEst: '08:18 AM', units: 30, ovenNumber: 'Deck Oven #2' },
  { batchId: 'BATCH-049', productName: 'Pistachio Financiers', stage: 'On Counter', temperatureC: 24, startTime: '06:45 AM', finishEst: 'Ready Now', units: 60, ovenNumber: 'Display Counter' },
  { batchId: 'BATCH-050', productName: 'Country Levain Loaves', stage: 'In Woodfire Oven', temperatureC: 240, startTime: '07:40 AM', finishEst: '08:25 AM', units: 28, ovenNumber: 'Stone Hearth #2' },
  { batchId: 'BATCH-051', productName: 'Salted Caramel Cookies', stage: 'Shaping & Proofing', temperatureC: 20, startTime: '08:05 AM', finishEst: '08:50 AM', units: 80, ovenNumber: 'Prep Station 1' },
  { batchId: 'BATCH-052', productName: 'Lemon Meringue Tarts', stage: 'Cooling Rack', temperatureC: 22, startTime: '07:10 AM', finishEst: '08:15 AM', units: 24, ovenNumber: 'Pastry Station' },
  { batchId: 'BATCH-053', productName: 'Vanilla Bean Brioche', stage: 'Long Fermentation', temperatureC: 8, startTime: 'Yesterday 20:00', finishEst: '09:45 AM', units: 20, ovenNumber: 'Retarder A' },
  { batchId: 'BATCH-054', productName: 'Raspberry Danishes', stage: 'On Counter', temperatureC: 24, startTime: '07:00 AM', finishEst: 'Ready Now', units: 36, ovenNumber: 'Display Counter' },
  { batchId: 'BATCH-055', productName: 'Celebration Cakes (Custom)', stage: 'Dough Preparation', temperatureC: 20, startTime: '08:15 AM', finishEst: '11:00 AM', units: 6, ovenNumber: 'Decorating Studio' }
];

// -------------------------------------------------------------
// BAKERY OPERATIONS TELEMETRY (Demo Data)
// -------------------------------------------------------------
export const BAKERY_OPERATIONS_STATS = {
  activeBatches: 14,
  bakingNowInOvens: 4,
  coolingOnRacks: 3,
  freshOnCounter: 5,
  dailyLoavesBaked: 340,
  dailyPastriesBaked: 890,
  hearthTempMainOven: '245°C (Refractory Stone)',
  sourdoughCultureAge: '7 Years, 4 Months',
  onTimeMorningDeliveryRate: '99.7%',
  lastSyncTime: '2 mins ago · In-Kitchen Sensor Node Live'
};
