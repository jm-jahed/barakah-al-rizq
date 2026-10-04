import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All 40 Categories with English and Arabic labels, slugs, and specific realistic product definitions
const CATEGORIES = [
  { id: 'cat-01', slug: 'fruits-vegetables', en: 'Fruits & Vegetables', ar: 'الفواكه والخضروات', icon: 'Apple' },
  { id: 'cat-02', slug: 'meat-poultry', en: 'Meat & Poultry', ar: 'اللحوم والدواجن', icon: 'Beef' },
  { id: 'cat-03', slug: 'seafood', en: 'Seafood', ar: 'المأكولات البحرية', icon: 'Fish' },
  { id: 'cat-04', slug: 'dairy-eggs', en: 'Dairy & Eggs', ar: 'الألبان والبيض', icon: 'Milk' },
  { id: 'cat-05', slug: 'bakery', en: 'Bakery', ar: 'المخبوزات', icon: 'Croissant' },
  { id: 'cat-06', slug: 'rice-pasta-grains', en: 'Rice, Pasta & Grains', ar: 'الأرز والمعكرونة والحبوب', icon: 'Wheat' },
  { id: 'cat-07', slug: 'canned-jarred-food', en: 'Canned & Jarred Food', ar: 'الأطعمة المعلبة', icon: 'Box' },
  { id: 'cat-08', slug: 'cooking-oils', en: 'Cooking Oils', ar: 'زيوت الطبخ', icon: 'Droplet' },
  { id: 'cat-09', slug: 'spices-seasonings', en: 'Spices & Seasonings', ar: 'التوابل والبهارات', icon: 'Sparkles' },
  { id: 'cat-10', slug: 'sauces-condiments', en: 'Sauces & Condiments', ar: 'الصلصات والتتبيلات', icon: 'Soup' },
  { id: 'cat-11', slug: 'breakfast-cereals', en: 'Breakfast & Cereals', ar: 'الفطور وحبوب الإفطار', icon: 'Sun' },
  { id: 'cat-12', slug: 'tea-coffee', en: 'Tea & Coffee', ar: 'الشاي والقهوة', icon: 'Coffee' },
  { id: 'cat-13', slug: 'water-juices', en: 'Water & Juices', ar: 'المياه والعصائر', icon: 'GlassWater' },
  { id: 'cat-14', slug: 'soft-drinks-beverages', en: 'Soft Drinks & Beverages', ar: 'المشروبات الغازية', icon: 'CupSoda' },
  { id: 'cat-15', slug: 'snacks', en: 'Snacks', ar: 'الوجبات الخفيفة', icon: 'Cookie' },
  { id: 'cat-16', slug: 'biscuits-cookies', en: 'Biscuits & Cookies', ar: 'البسكويت', icon: 'Cookie' },
  { id: 'cat-17', slug: 'chocolates-sweets', en: 'Chocolates & Sweets', ar: 'الشوكولاتة والحلويات', icon: 'Candy' },
  { id: 'cat-18', slug: 'frozen-food', en: 'Frozen Food', ar: 'الأطعمة المجمدة', icon: 'Snowflake' },
  { id: 'cat-19', slug: 'ice-cream', en: 'Ice Cream', ar: 'الآيس كريم', icon: 'IceCream' },
  { id: 'cat-20', slug: 'baby-food', en: 'Baby Food', ar: 'أغذية الأطفال', icon: 'Baby' },
  { id: 'cat-21', slug: 'baby-care', en: 'Baby Care', ar: 'العناية بالأطفال', icon: 'HeartHandshake' },
  { id: 'cat-22', slug: 'personal-care', en: 'Personal Care', ar: 'العناية الشخصية', icon: 'UserCheck' },
  { id: 'cat-23', slug: 'beauty-skincare', en: 'Beauty & Skincare', ar: 'الجمال والعناية بالبشرة', icon: 'Sparkle' },
  { id: 'cat-24', slug: 'oral-care', en: 'Oral Care', ar: 'العناية بالفم والأسنان', icon: 'Smile' },
  { id: 'cat-25', slug: 'health-wellness', en: 'Health & Wellness', ar: 'الصحة والعافية', icon: 'ShieldCheck' },
  { id: 'cat-26', slug: 'household-cleaning', en: 'Household Cleaning', ar: 'تنظيف المنزل', icon: 'SprayCan' },
  { id: 'cat-27', slug: 'laundry', en: 'Laundry', ar: 'الغسيل', icon: 'Shirt' },
  { id: 'cat-28', slug: 'kitchen-essentials', en: 'Kitchen Essentials', ar: 'أساسيات المطبخ', icon: 'UtensilsCrossed' },
  { id: 'cat-29', slug: 'paper-tissue', en: 'Paper & Tissue', ar: 'الورق والمناديل', icon: 'Layers' },
  { id: 'cat-30', slug: 'pet-food-care', en: 'Pet Food & Care', ar: 'طعام الحيوانات الأليفة', icon: 'PawPrint' },
  { id: 'cat-31', slug: 'home-essentials', en: 'Home Essentials', ar: 'أساسيات المنزل', icon: 'Home' },
  { id: 'cat-32', slug: 'small-appliances', en: 'Small Appliances', ar: 'الأجهزة المنزلية الصغيرة', icon: 'Plug' },
  { id: 'cat-33', slug: 'electronics', en: 'Electronics', ar: 'الإلكترونيات', icon: 'Tv' },
  { id: 'cat-34', slug: 'stationery', en: 'Stationery', ar: 'القرطاسية', icon: 'BookOpen' },
  { id: 'cat-35', slug: 'organic-healthy', en: 'Organic & Healthy', ar: 'المنتجات العضوية والصحية', icon: 'Leaf' },
  { id: 'cat-36', slug: 'international-foods', en: 'International Foods', ar: 'الأطعمة العالمية', icon: 'Globe' },
  { id: 'cat-37', slug: 'premium-imported', en: 'Premium & Imported', ar: 'المنتجات الفاخرة والمستوردة', icon: 'Crown' },
  { id: 'cat-38', slug: 'uae-local-products', en: 'UAE Local Products', ar: 'المنتجات المحلية الإماراتية', icon: 'Flag' },
  { id: 'cat-39', slug: 'ramadan-seasonal', en: 'Ramadan & Seasonal', ar: 'رمضان والمواسم', icon: 'Moon' },
  { id: 'cat-40', slug: 'offers-clearance', en: 'Offers & Clearance', ar: 'العروض والتخفيضات', icon: 'Percent' },
];

// High quality curated Unsplash product images for realistic grocery presentation
const CATEGORY_IMAGES = {
  'fruits-vegetables': [
    'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=600&q=80',
  ],
  'meat-poultry': [
    'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80',
  ],
  'seafood': [
    'https://images.unsplash.com/photo-1534948216015-843149f72be3?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1535041422672-8c3254ab3abe?auto=format&fit=crop&w=600&q=80',
  ],
  'dairy-eggs': [
    'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=600&q=80',
  ],
  'bakery': [
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80',
  ],
  'rice-pasta-grains': [
    'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80',
  ],
  'cooking-oils': [
    'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
  ],
  'tea-coffee': [
    'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
  ],
  'water-juices': [
    'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80',
  ],
  'snacks': [
    'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=600&q=80',
  ],
  'chocolates-sweets': [
    'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=600&q=80',
  ],
  'household-cleaning': [
    'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80',
  ],
  'personal-care': [
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1608248597359-58d3d0f0c0ec?auto=format&fit=crop&w=600&q=80',
  ],
  'baby-care': [
    'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
  ],
  'uae-local-products': [
    'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=600&q=80',
  ],
  'ramadan-seasonal': [
    'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80',
  ],
  'default': [
    'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80'
  ]
};

// Item templates for each category ensuring distinct names, Arabic labels, realistic AED prices and specifications
const CATEGORY_TEMPLATES = {
  'cat-01': {
    items: [
      { en: 'Fresh UAE Red Tomatoes', ar: 'طماطم حمراء إماراتية طازجة', unit: '1 kg', basePrice: 3.50, brand: 'Al Ain Farms', origin: 'UAE' },
      { en: 'Local UAE Cucumbers Greenhouse', ar: 'خيار بيوت محمية إماراتي', unit: '1 kg', basePrice: 4.25, brand: 'Al Dahra', origin: 'UAE' },
      { en: 'Fresh Royal Gala Apples', ar: 'تفاح رويال جالا طازج', unit: '1 kg', basePrice: 6.95, brand: 'Dole', origin: 'New Zealand' },
      { en: 'Cavendish Sweet Bananas', ar: 'موز كافنديش حلو', unit: '1 kg', basePrice: 4.95, brand: 'Chiquita', origin: 'Ecuador' },
      { en: 'Valencia Sweet Oranges for Juicing', ar: 'برتقال فالنسيا للعصير', unit: '2 kg Bag', basePrice: 9.50, brand: 'Del Monte', origin: 'Egypt' },
      { en: 'Red Sweet Seedless Grapes', ar: 'عنب أحمر حلو بدون بذور', unit: '500g Pack', basePrice: 8.50, brand: 'Fresh Choice', origin: 'South Africa' },
      { en: 'Fresh Baby Spinach Leaves', ar: 'أوراق سبانخ صغيرة طازجة', unit: '250g Box', basePrice: 5.75, brand: 'Green UAE', origin: 'UAE' },
      { en: 'White Button Whole Mushrooms', ar: 'فطر أبيض كامل طازج', unit: '250g Tray', basePrice: 6.25, brand: 'Gulf Fresh', origin: 'Oman' },
      { en: 'Organic Hass Avocados Ready to Eat', ar: 'أفوكادو هاس عضوي ناضج', unit: '2 Pcs Pack', basePrice: 12.50, brand: 'Nature Organics', origin: 'Mexico' },
      { en: 'Fresh Mint & Coriander Herb Bundle', ar: 'حزمة نعناع وكزبرة طازجة', unit: '2 Bunches', basePrice: 1.95, brand: 'Local Farm', origin: 'UAE' },
      { en: 'Yellow Cooking Onions Bag', ar: 'بصل أصفر للطبخ كيس', unit: '2 kg Mesh', basePrice: 5.50, brand: 'Desert Harvest', origin: 'India' },
      { en: 'Baking White Potatoes', ar: 'بطاطس بيضاء للطهي', unit: '2.5 kg Bag', basePrice: 7.25, brand: 'Desert Harvest', origin: 'Egypt' },
      { en: 'Sweet Mini Colored Bell Peppers', ar: 'فلفل رومي ملون صغير حلو', unit: '500g Pack', basePrice: 9.95, brand: 'Holland Pride', origin: 'Netherlands' },
      { en: 'Fresh Romaine Lettuce Hearts', ar: 'قلوب خس روماني طازج', unit: '3 Pcs Pack', basePrice: 7.50, brand: 'Al Rawabi Fresh', origin: 'UAE' },
      { en: 'Sweet Red Watermelon Whole', ar: 'بطيخ أحمر حلو كامل', unit: '5-6 kg Approx', basePrice: 14.50, brand: 'Sweet Summer', origin: 'Iran' },
      { en: 'Sweet Golden Pineapple', ar: 'أناناس ذهبي حلو', unit: '1 Pc', basePrice: 8.75, brand: 'Del Monte', origin: 'Costa Rica' },
      { en: 'Fresh Green Broccoli Crowns', ar: 'بروكلي أخضر طازج', unit: '500g Pack', basePrice: 6.50, brand: 'Fresh Daily', origin: 'Spain' },
      { en: 'Fresh Carrots Polybag', ar: 'جزر طازج كيس', unit: '1 kg', basePrice: 3.75, brand: 'Sun Gold', origin: 'Australia' },
      { en: 'Fresh Garlic Mesh Pack', ar: 'ثوم طازج شبكة', unit: '500g', basePrice: 4.50, brand: 'Pantry Core', origin: 'China' },
      { en: 'Fresh Ginger Root', ar: 'زنجبيل طازج', unit: '500g', basePrice: 5.25, brand: 'Fresh Spice', origin: 'India' },
      { en: 'Fresh Green Lemons / Limes', ar: 'ليمون أخضر طازج', unit: '1 kg', basePrice: 5.95, brand: 'Citrus Hub', origin: 'Vietnam' },
      { en: 'Sweet Yellow Mangoes Kent', ar: 'مانجو كينت صفراء حلوة', unit: '1 kg Box', basePrice: 16.50, brand: 'Tropics Select', origin: 'Kenya' },
      { en: 'Fresh Strawberries Punnet', ar: 'فراولة طازجة علبة', unit: '250g', basePrice: 8.95, brand: 'Berry Good', origin: 'Egypt' },
      { en: 'Fresh Blueberries Punnet', ar: 'توت أزرق طازج علبة', unit: '125g', basePrice: 9.95, brand: 'Driscoll', origin: 'USA' },
      { en: 'Fresh Pomegranate Arils / Fruit', ar: 'رمان طازج حلو', unit: '1 kg', basePrice: 11.50, brand: 'Levant Orchard', origin: 'Lebanon' },
      { en: 'Fresh Green Zucchini Courgettes', ar: 'كوسة خضراء طازجة', unit: '1 kg', basePrice: 4.95, brand: 'Al Ain Farms', origin: 'UAE' },
      { en: 'Fresh Purple Eggplant Aubergine', ar: 'باذنجان رومي بنفسجي', unit: '1 kg', basePrice: 4.50, brand: 'Al Ain Farms', origin: 'UAE' },
      { en: 'Fresh Red Radish Bunches', ar: 'فجل أحمر طازج حزمتين', unit: '2 Bunches', basePrice: 2.25, brand: 'Local Produce', origin: 'UAE' },
    ]
  },
  'cat-02': {
    items: [
      { en: 'Fresh UAE Local Whole Chicken', ar: 'دجاج محلي إماراتي كامل طازج', unit: '1000g', basePrice: 16.95, brand: 'Al Rawabi', origin: 'UAE' },
      { en: 'Fresh Boneless Chicken Breast Fillet', ar: 'صدور دجاج طازجة بدون عظم', unit: '900g Pack', basePrice: 22.50, brand: 'Al Islami', origin: 'UAE' },
      { en: 'Fresh Chicken Drumsticks Tray', ar: 'أفخاذ دجاج طازجة صينية', unit: '500g', basePrice: 11.75, brand: 'Al Ain Farms', origin: 'UAE' },
      { en: 'Fresh Premium Minced Beef Lean', ar: 'لحم بقري مفروم قليل الدسم', unit: '500g Tray', basePrice: 19.50, brand: 'Mirqab Butchery', origin: 'Brazil' },
      { en: 'Fresh Australian Lamb Chops', ar: 'ريش لحم ضأن أسترالي طازج', unit: '500g Tray', basePrice: 38.00, brand: 'Aussie Prime', origin: 'Australia' },
      { en: 'Fresh Indian Beef Cubes for Stew', ar: 'مكعبات لحم بقري هندي للإيدام', unit: '1 kg Pack', basePrice: 26.50, brand: 'Mirqab Butchery', origin: 'India' },
      { en: 'Fresh Arabic Marinated Chicken Shish Tawook', ar: 'شيش طاووق دجاج متبل طازج', unit: '600g', basePrice: 21.00, brand: 'Chef Select', origin: 'UAE' },
      { en: 'Fresh Beef Burger Patties Gourmet', ar: 'برجر بقري فاخر جاهز للشوي', unit: '4 Pcs (450g)', basePrice: 18.50, brand: 'Grill Master', origin: 'UAE' },
      { en: 'Fresh Chicken Liver & Gizzards', ar: 'كبدة وقوانص دجاج طازجة', unit: '450g', basePrice: 7.95, brand: 'Al Rawabi', origin: 'UAE' },
      { en: 'Fresh New Zealand Lamb Shank', ar: 'موزات لحم غنم نيوزيلندي', unit: '750g (2 Pcs)', basePrice: 39.50, brand: 'Silver Fern', origin: 'New Zealand' },
      { en: 'Fresh Veal Boneless Cubes', ar: 'لحم عجل بدون عظم قطع', unit: '500g', basePrice: 29.00, brand: 'Mirqab Butchery', origin: 'Pakistan' },
      { en: 'Fresh Chicken Shawarma Slices Marinated', ar: 'شاورما دجاج متبلة جاهزة للطبخ', unit: '500g Pack', basePrice: 17.50, brand: 'Al Islami', origin: 'UAE' },
      { en: 'Fresh Whole Turkey Small Size', ar: 'ديك رومي كامل صغير طازج', unit: '3.5 kg Approx', basePrice: 89.00, brand: 'Prime Poultry', origin: 'France' },
      { en: 'Fresh Chicken Franks Sausages Halal', ar: 'نقانق دجاج حلال طازجة', unit: '340g (8 Pcs)', basePrice: 6.50, brand: 'Sadia', origin: 'UAE' },
      { en: 'Fresh Premium Ribeye Beef Steak', ar: 'ستيك ريب آي بقري فاخر', unit: '300g Cut', basePrice: 34.00, brand: 'Black Angus', origin: 'USA' },
      { en: 'Fresh Beef Kofta Meat with Parsley', ar: 'كفتة لحم بقري طازجة بالبقدونس', unit: '500g', basePrice: 21.50, brand: 'Mirqab Butchery', origin: 'UAE' },
      { en: 'Fresh Chicken Tenderloin Strips', ar: 'فيليه تندرلوين دجاج طري', unit: '500g', basePrice: 14.50, brand: 'Al Ain Farms', origin: 'UAE' },
      { en: 'Fresh Camel Meat Boneless Cubes', ar: 'لحم حاشي بدون عظم طازج', unit: '500g Tray', basePrice: 24.50, brand: 'Emirates Butchery', origin: 'UAE' },
      { en: 'Fresh Duck Whole Frozen/Fresh', ar: 'بط طازج كامل للتسوية', unit: '1.8 kg', basePrice: 42.00, brand: 'Gourmet Bird', origin: 'France' },
      { en: 'Fresh Chicken Wings Jumbo Pack', ar: 'أجنحة دجاج طازجة حجم كبير', unit: '900g Tray', basePrice: 13.95, brand: 'Al Rawabi', origin: 'UAE' },
      { en: 'Fresh Marinated Lamb Kofta Skewers', ar: 'أسياخ كفتة لحم غنم متبلة', unit: '6 Skewers (480g)', basePrice: 26.00, brand: 'Chef Select', origin: 'UAE' },
      { en: 'Fresh Marinated Chicken Tikka Cubes', ar: 'مكعبات تكا دجاج متبلة حارة', unit: '500g', basePrice: 18.00, brand: 'Al Islami', origin: 'UAE' },
      { en: 'Fresh Beef T-Bone Steak Cut', ar: 'ستيك تي بون بقري طازج', unit: '450g Piece', basePrice: 36.50, brand: 'Aussie Prime', origin: 'Australia' },
      { en: 'Fresh Mutton Curry Cut with Bone', ar: 'لحم غنم كاري بالعظم', unit: '1 kg', basePrice: 32.00, brand: 'Mirqab Butchery', origin: 'India' },
      { en: 'Fresh Smoked Beef Pastrami Slices', ar: 'بسطرمة بقري مدخنة شرائح', unit: '150g Deli Pack', basePrice: 14.25, brand: 'Gourmet Deli', origin: 'UAE' },
      { en: 'Fresh Smoked Turkey Breast Cold Cuts', ar: 'صدر رومي مدخن شرائح باردة', unit: '200g Deli Pack', basePrice: 13.50, brand: 'Halal Deli', origin: 'UAE' },
    ]
  },
  'cat-03': {
    items: [
      { en: 'Fresh UAE Supreme Sea Bream (Cipura)', ar: 'سمك سبريم طازج إماراتي', unit: '1 kg Whole', basePrice: 28.50, brand: 'Fisherman Coast', origin: 'UAE' },
      { en: 'Fresh Norwegian Atlantic Salmon Fillet', ar: 'فيليه سلمون نرويجي أطلسي طازج', unit: '500g Cut', basePrice: 44.00, brand: 'Nordic Blue', origin: 'Norway' },
      { en: 'Fresh UAE Hamour (Orange-spotted Grouper)', ar: 'سمك هامور طازج إماراتي', unit: '1 kg Whole', basePrice: 48.00, brand: 'Gulf Catch', origin: 'UAE' },
      { en: 'Fresh Medium White Prawns Cleaned', ar: 'روبيان أبيض متوسط منظف', unit: '500g Pack', basePrice: 24.50, brand: 'Ocean Fresh', origin: 'Oman' },
      { en: 'Fresh Jumbo Tiger Prawns Raw', ar: 'روبيان تايجر جامبو طازج', unit: '500g (8-10 Pcs)', basePrice: 42.00, brand: 'Ocean Fresh', origin: 'India' },
      { en: 'Fresh Sea Bass (Loup de Mer)', ar: 'سمك قاروص سيباس طازج', unit: '800g Whole', basePrice: 32.00, brand: 'Fisherman Coast', origin: 'UAE' },
      { en: 'Fresh Local Sheri Fish (Emperor)', ar: 'سمك شعري طازج محلي', unit: '1 kg Whole', basePrice: 21.00, brand: 'Gulf Catch', origin: 'UAE' },
      { en: 'Fresh Squid Rings Calamari Cleaned', ar: 'حلقات حبار كلماري طازج', unit: '500g Tray', basePrice: 18.50, brand: 'Deep Sea', origin: 'Oman' },
      { en: 'Fresh Whole Crab Blue Swimming', ar: 'كابوريا قبقب أزرق طازج', unit: '1 kg (4-5 Pcs)', basePrice: 26.00, brand: 'Fisherman Coast', origin: 'UAE' },
      { en: 'Fresh Kingfish Slices (Kanad)', ar: 'شرائح سمك كنعد طازج', unit: '500g Cut', basePrice: 31.00, brand: 'Gulf Catch', origin: 'UAE' },
      { en: 'Fresh Yellowfin Tuna Loin Fillet', ar: 'فيليه تونة صفراء الزعانف', unit: '400g Cut', basePrice: 36.00, brand: 'Ocean Select', origin: 'Maldives' },
      { en: 'Fresh White Clams Cleaned Shells', ar: 'محار أبيض طازج منظف', unit: '500g Pack', basePrice: 16.50, brand: 'Deep Sea', origin: 'Oman' },
      { en: 'Fresh Local Faskar Fish Bream', ar: 'سمك فسكر طازج محلي', unit: '1 kg Whole', basePrice: 22.00, brand: 'Gulf Catch', origin: 'UAE' },
      { en: 'Fresh Marinated Salmon Herb Skewers', ar: 'أسياخ سلمون متبلة بالأعشاب', unit: '4 Skewers (360g)', basePrice: 38.00, brand: 'Chef Seafood', origin: 'UAE' },
      { en: 'Fresh Red Snapper (Hamra)', ar: 'سمك حمرا حمراء طازج', unit: '1 kg Whole', basePrice: 34.00, brand: 'Fisherman Coast', origin: 'UAE' },
      { en: 'Fresh Tilapia Fish Whole Cleaned', ar: 'سمك بلطي طازج منظف', unit: '1 kg (2 Pcs)', basePrice: 14.50, brand: 'Fresh Waters', origin: 'Egypt' },
      { en: 'Smoked Salmon Slices Premium Gold', ar: 'شرائح سلمون مدخن فاخر', unit: '100g Pack', basePrice: 19.95, brand: 'Loch Fyne', origin: 'Scotland' },
      { en: 'Fresh Green Mussels Half Shell', ar: 'بلح البحر الأخضر نصف صدفة', unit: '500g Box', basePrice: 22.50, brand: 'Ocean King', origin: 'New Zealand' },
      { en: 'Fresh Anchovies Whitebait Small Fish', ar: 'سمك سردين صغير طازج', unit: '500g Tray', basePrice: 9.50, brand: 'Gulf Catch', origin: 'UAE' },
      { en: 'Fresh Black Tiger Shrimp Skewers', ar: 'أسياخ روبيان تايجر جاهزة للشوي', unit: '400g Pack', basePrice: 35.00, brand: 'Ocean Fresh', origin: 'India' },
      { en: 'Fresh Whole Pomfret Silver Fish', ar: 'سمك زبيدي فضي طازج كامل', unit: '600g (2 Pcs)', basePrice: 29.50, brand: 'Gulf Catch', origin: 'India' },
      { en: 'Fresh Lobster Whole Live/Chilled', ar: 'استاكوزا لوبستر طازج مبرد', unit: '600g Pc', basePrice: 68.00, brand: 'Deep Sea', origin: 'Oman' },
      { en: 'Fresh Marinated Fish Tikka Masala', ar: 'مكعبات سمك تيكا مسالا متبلة', unit: '450g Pack', basePrice: 23.50, brand: 'Chef Seafood', origin: 'UAE' },
      { en: 'Fresh Octopus Whole Cleaned Tender', ar: 'أخطبوط طازج منظف طري', unit: '800g Whole', basePrice: 33.00, brand: 'Ocean Catch', origin: 'Spain' },
      { en: 'Fresh Mullet Fish (Bouri)', ar: 'سمك بوري طازج للشوي بالردة', unit: '1 kg Whole', basePrice: 21.50, brand: 'Fresh Waters', origin: 'Egypt' },
      { en: 'Fresh Baby Cuttlefish Cleaned', ar: 'سبيط حبار صغير طازج', unit: '500g Tray', basePrice: 19.00, brand: 'Gulf Catch', origin: 'UAE' },
    ]
  },
  'cat-04': {
    items: [
      { en: 'Al Rawabi Fresh Full Cream Milk', ar: 'حليب كامل الدسم طازج الروابي', unit: '2 Litres', basePrice: 11.50, brand: 'Al Rawabi', origin: 'UAE' },
      { en: 'Almarai Fresh Low Fat Milk', ar: 'حليب قليل الدسم طازج المراعي', unit: '2 Litres', basePrice: 11.50, brand: 'Almarai', origin: 'KSA' },
      { en: 'Al Ain Fresh Farm White Eggs Large', ar: 'بيض أبيض مزارع العين كبير', unit: '30 Eggs Tray', basePrice: 18.95, brand: 'Al Ain Farms', origin: 'UAE' },
      { en: 'Lurpak Unsalted Butter Block', ar: 'زبدة لورباك غير مملحة قالب', unit: '400g (2x200g)', basePrice: 24.50, brand: 'Lurpak', origin: 'Denmark' },
      { en: 'Almarai Greek Style Natural Yoghurt', ar: 'زبادي يوناني طبيعي المراعي', unit: '500g Tub', basePrice: 8.50, brand: 'Almarai', origin: 'KSA' },
      { en: 'Pinar Turkish Labneh Original Creamy', ar: 'لبنة بينار تركية أصلية كريمية', unit: '400g Tub', basePrice: 14.25, brand: 'Pinar', origin: 'Turkey' },
      { en: 'Kraft Cheddar Cheese Block Original', ar: 'جبنة شيدر كرافت الأصلية قالب', unit: '200g Can/Block', basePrice: 9.75, brand: 'Kraft', origin: 'Bahrain' },
      { en: 'Al Rawabi Fresh Laban Up Probiotic', ar: 'لبن آب الروابي منعش هاضم', unit: '1 Litre Bottle', basePrice: 4.50, brand: 'Al Rawabi', origin: 'UAE' },
      { en: 'President Sliced Mozzarella Cheese', ar: 'جبنة موزاريلا شرائح بريزيدن', unit: '200g Pack', basePrice: 11.95, brand: 'President', origin: 'France' },
      { en: 'Philadelphia Original Cream Cheese Spread', ar: 'جبنة كريمية فيلادلفيا الأصلية', unit: '300g Tub', basePrice: 16.50, brand: 'Philadelphia', origin: 'Germany' },
      { en: 'Puck Canned Pure Thick Cream (Qishta)', ar: 'قشطة بوك نقية سميكة علبة', unit: '170g x 3 Cans', basePrice: 12.00, brand: 'Puck', origin: 'Denmark' },
      { en: 'Emirates Free Range Brown Organic Eggs', ar: 'بيض بني عضوي مزارع حرة إماراتي', unit: '15 Eggs Box', basePrice: 15.50, brand: 'Emirates Bio', origin: 'UAE' },
      { en: 'Kiri Square Cream Cheese Portions', ar: 'مربعات جبنة كيري كريمية', unit: '24 Portions (432g)', basePrice: 21.50, brand: 'Kiri', origin: 'France' },
      { en: 'Almarai Shredded Mozzarella Cheese', ar: 'جبنة موزاريلا مبشورة المراعي', unit: '500g Bag', basePrice: 17.50, brand: 'Almarai', origin: 'KSA' },
      { en: 'Al Rawabi Double Cream Yoghurt Tub', ar: 'زبادي دبل كريم طازج الروابي', unit: '1 kg Bucket', basePrice: 7.50, brand: 'Al Rawabi', origin: 'UAE' },
      { en: 'Anchor Whipping Cream for Desserts', ar: 'كريمة خفق للحلويات أنكور', unit: '1 Litre Carton', basePrice: 21.00, brand: 'Anchor', origin: 'New Zealand' },
      { en: 'Nadec Fresh Full Fat Laban', ar: 'لبن طازج كامل الدسم نادك', unit: '1.75 Litre Bottle', basePrice: 7.25, brand: 'Nadec', origin: 'KSA' },
      { en: 'Balade Traditional Halloumi Cheese', ar: 'جبنة حلوم بلدية للشوي بلدنا', unit: '250g Block', basePrice: 12.75, brand: 'Balade Farms', origin: 'Cyprus' },
      { en: 'Al Ain Fresh Camel Milk Pasteurised', ar: 'حليب إبل مبستر طازج مزارع العين', unit: '1 Litre Bottle', basePrice: 14.50, brand: 'Camelicious', origin: 'UAE' },
      { en: 'Almarai Sliced Burger Cheddar Cheese', ar: 'جبنة شرائح برجر شيدر المراعي', unit: '400g (20 Slices)', basePrice: 10.50, brand: 'Almarai', origin: 'KSA' },
      { en: 'Pinar String Cheese Children Pack', ar: 'جبنة مشللة أصابع بينار للأطفال', unit: '200g Pack', basePrice: 11.00, brand: 'Pinar', origin: 'Turkey' },
      { en: 'Fresh White Akkawi Cheese Low Salt', ar: 'جبنة عكاوي بيضاء قليلة الملح', unit: '500g Vacuum', basePrice: 16.00, brand: 'Levant Dairy', origin: 'Syria' },
      { en: 'Alpro Soya Milk Unsweetened Vegan', ar: 'حليب صويا ألبرو نباتي خالي السكر', unit: '1 Litre Carton', basePrice: 13.95, brand: 'Alpro', origin: 'Belgium' },
      { en: 'Alpro Roasted Almond Milk Barista', ar: 'حليب لوز محمص باريستا ألبرو', unit: '1 Litre Carton', basePrice: 14.50, brand: 'Alpro', origin: 'Belgium' },
      { en: 'Dairystar Cooking Cream Sauce Base', ar: 'كريمة طبخ للصلصات والشوربات', unit: '1 Litre', basePrice: 15.50, brand: 'Dairystar', origin: 'France' },
      { en: 'Al Ain Fresh Quail Eggs Pack', ar: 'بيض سمان طازج مزارع العين', unit: '18 Eggs Tray', basePrice: 9.95, brand: 'Al Ain Farms', origin: 'UAE' },
    ]
  },
  'cat-05': {
    items: [
      { en: 'Modern Bakery Sliced White Sandwich Bread', ar: 'خبز توست أبيض شرائح مودرن بيكري', unit: '600g Loaf', basePrice: 4.50, brand: 'Modern Bakery', origin: 'UAE' },
      { en: 'Fresh Arabic Khubz Pita Bread Large', ar: 'خبز عربي أبيض طازج كبير', unit: 'Pack of 5 Loaves', basePrice: 2.75, brand: 'Al Arz Bakery', origin: 'UAE' },
      { en: 'Fresh Butter Croissants French Style', ar: 'كرواسون زبدة فرنسي طازج', unit: 'Pack of 4 Pcs', basePrice: 9.50, brand: 'Mirqab Bakery', origin: 'UAE' },
      { en: 'Golden Brioche Burger Buns with Sesame', ar: 'خبز برجر بريوش ذهبي بالسمسم', unit: 'Pack of 4 Buns', basePrice: 6.75, brand: 'Modern Bakery', origin: 'UAE' },
      { en: 'Fresh Saj / Shrak Thin Wrap Bread', ar: 'خبز صاج شراك رقيق للساندوتش', unit: '6 Sheets Pack', basePrice: 4.25, brand: 'Al Arz Bakery', origin: 'UAE' },
      { en: 'Lusine Chocolate Cream Filled Cupcakes', ar: 'كب كيك لوزين بحشوة الشوكولاتة', unit: 'Pack of 6 (180g)', basePrice: 5.50, brand: 'Lusine', origin: 'KSA' },
      { en: 'Fresh Lebanese Zaatar Manakish Flatbread', ar: 'مناقيش زعتر لبناني طازجة', unit: '2 Pcs Pack', basePrice: 7.00, brand: 'Mirqab Bakery', origin: 'UAE' },
      { en: 'Fresh Cheese & Zaatar Fatayer Pastry Box', ar: 'علبة فطائر جبنة وزعتر مشكلة', unit: '6 Pcs Box', basePrice: 13.50, brand: 'Mirqab Bakery', origin: 'UAE' },
      { en: 'Whole Wheat Brown Sliced Diet Bread', ar: 'خبز توست أسمر بالقمح الكامل للدايت', unit: '600g Loaf', basePrice: 5.00, brand: 'Modern Bakery', origin: 'UAE' },
      { en: 'Fresh Cinnamon Sugar Glazed Donuts', ar: 'دونات بالقرفة والسكر طازجة', unit: '4 Pcs Box', basePrice: 8.50, brand: 'Mirqab Bakery', origin: 'UAE' },
      { en: 'Fresh French Baguette Crispy Crust', ar: 'باغيت فرنسي مقرمش طازج', unit: '2 Loaves', basePrice: 4.95, brand: 'Mirqab Bakery', origin: 'UAE' },
      { en: 'Golden Mini Samosa Dough Leaves (Warak)', ar: 'رقائق عجينة سمبوسة ذهبية', unit: '500g Pack (50 Pcs)', basePrice: 5.25, brand: 'Switz', origin: 'UAE' },
      { en: 'Switz Spring Roll Pastry Sheets Thin', ar: 'رقائق سبرينج رول رقيقة سويتز', unit: '40 Sheets (400g)', basePrice: 6.50, brand: 'Switz', origin: 'UAE' },
      { en: 'Fresh Blueberry Muffins Jumbo', ar: 'مافن التوت الأزرق حجم كبير', unit: '2 Pcs Pack', basePrice: 8.00, brand: 'Mirqab Bakery', origin: 'UAE' },
      { en: 'Tortilla Flour Wraps Original Large', ar: 'خبز تورتيلا دقيق حجم كبير', unit: '6 Wraps (390g)', basePrice: 7.25, brand: 'Old El Paso', origin: 'Spain' },
      { en: 'Traditional Arabic Milk Kaak Bread Rings', ar: 'كعك سمسم بالحليب تقليدي مقرمش', unit: '400g Bag', basePrice: 8.50, brand: 'Levant Bake', origin: 'Lebanon' },
      { en: 'Fresh Chocolate Brownie Bites Tub', ar: 'قطع براونيز شوكولاتة طرية', unit: '300g Tub', basePrice: 12.00, brand: 'Mirqab Bakery', origin: 'UAE' },
      { en: 'Fresh Multi-Cereal Sourdough Loaf Artisanal', ar: 'خبز ساوردو ريفي بالحبوب المتعددة', unit: '500g Loaf', basePrice: 14.50, brand: 'Mirqab Bakery', origin: 'UAE' },
      { en: 'Fresh Garlic Herb Dinner Rolls', ar: 'خبز عشاء بالثوم والأعشاب طري', unit: '6 Pcs Pack', basePrice: 5.75, brand: 'Modern Bakery', origin: 'UAE' },
      { en: 'Fresh Tanoor Hot Bread Freshly Baked', ar: 'خبز تنور حار طازج من الفرن', unit: '4 Loaves', basePrice: 3.50, brand: 'Al Arz Bakery', origin: 'UAE' },
      { en: 'Sweet Milk Bread Soft Long Rolls', ar: 'صمون حليب طري للساندوتشات', unit: 'Pack of 6 Rolls', basePrice: 3.75, brand: 'Modern Bakery', origin: 'UAE' },
      { en: 'Fresh Red Velvet Mini Cake Slice', ar: 'قطعة كيك رد فيلفيت فاخرة', unit: '1 Slice Box', basePrice: 11.50, brand: 'Mirqab Bakery', origin: 'UAE' },
      { en: 'Gluten Free Sliced Toast Bread', ar: 'خبز توست خالي من الجلوتين', unit: '350g Loaf', basePrice: 17.50, brand: 'Schar', origin: 'Italy' },
      { en: 'Traditional Maamoul Date Cookies Tin', ar: 'معمول تمر فاخر بالسمن علبة', unit: '500g Tin', basePrice: 18.00, brand: 'Halwani Bros', origin: 'KSA' },
      { en: 'Fresh Mini Pizza Margarita Box', ar: 'ميني بيتزا مارغريتا للأطفال', unit: '6 Pcs Box', basePrice: 12.50, brand: 'Mirqab Bakery', origin: 'UAE' },
    ]
  }
};

// Generic generator for categories 6 through 40 to ensure rich variety, accurate Arabic terms, and strict AED pricing
const BRAND_LISTS = {
  grocery: ['Al Rawabi', 'Al Ain Farms', 'Almarai', 'Americana', 'Sadia', 'Bayara', 'Masafi', 'Mai Dubai', 'Tiffany', 'Gandour', 'National Food', 'Al Alali', 'Maggi', 'Knorr', 'Heinz', 'Nestle', 'Kraft', 'Puck', 'Lurpak', 'Barilla', 'Tilda', 'India Gate', 'California Garden', 'Afia', 'Noor', 'Lipton', 'Brooke Bond', 'Nescafe', 'Galaxy', 'Cadbury', 'Kinder', 'Oreo', 'Pringles', 'Lay\'s', 'Sunbites', 'Dettol', 'Clorox', 'Tide', 'Ariel', 'Fairy', 'Pampers', 'Huggies', 'Fine', 'Dove', 'Nivea', 'Colgate', 'Crest', 'Head & Shoulders', 'Camelicious', 'Date Crown'],
};

function generateCategoryProducts(cat, targetCount = 28) {
  // If specific template exists, use those first
  let products = [];
  const template = CATEGORY_TEMPLATES[cat.id];
  
  if (template && template.items) {
    template.items.forEach((item, idx) => {
      const discountP = (idx % 3 === 0) ? Math.floor(10 + (idx * 5) % 30) : 0;
      const curPrice = Number(item.basePrice.toFixed(2));
      const origPrice = discountP > 0 ? Number((curPrice / (1 - discountP / 100)).toFixed(2)) : curPrice;
      const discountAmt = Number((origPrice - curPrice).toFixed(2));
      const rating = Number((4.3 + ((idx % 7) * 0.1)).toFixed(1));
      const images = CATEGORY_IMAGES[cat.slug] || CATEGORY_IMAGES['default'];
      const img = images[idx % images.length];

      products.push({
        id: `prod-${cat.slug}-${idx + 1}`,
        slug: `${item.en.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        nameEn: item.en,
        nameAr: item.ar,
        descEn: `Premium quality ${item.en}. Sourced fresh for UAE families with strict hygiene standards and same-day express delivery.`,
        descAr: `جودة ممتازة مختارة بعناية ${item.ar}. طازجة ومضمونة للعائلات في الإمارات مع توصيل سريع في نفس اليوم.`,
        category: cat.en,
        categoryAr: cat.ar,
        categorySlug: cat.slug,
        brand: item.brand,
        origin: item.origin,
        unit: item.unit,
        price: curPrice,
        originalPrice: origPrice,
        discountPercent: discountP,
        discountAmount: discountAmt,
        rating: rating > 5.0 ? 5.0 : rating,
        reviewsCount: 24 + ((idx * 17) % 230),
        inStock: true,
        stockQuantity: 45 + ((idx * 13) % 180),
        badge: idx === 0 ? 'Bestseller' : (discountP > 20 ? 'Super Deal' : (idx === 2 ? 'Fresh Pick' : null)),
        featured: idx < 4,
        bestseller: idx % 4 === 0,
        isNew: idx % 5 === 0,
        isUnder10: curPrice < 10.0,
        isUnder20: curPrice < 20.0,
        isUaeLocal: item.origin === 'UAE' || item.brand === 'Al Ain Farms' || item.brand === 'Al Rawabi' || item.brand === 'Camelicious',
        image: img,
      });
    });
  }

  // Generate remainder to hit targetCount (26-32 items per category)
  const existingCount = products.length;
  const needed = Math.max(0, targetCount - existingCount);
  const images = CATEGORY_IMAGES[cat.slug] || CATEGORY_IMAGES['default'];

  for (let i = 0; i < needed; i++) {
    const idx = existingCount + i + 1;
    const catWords = cat.en.split(' ');
    const primaryWord = catWords[0];
    const catWordsAr = cat.ar.split(' ');
    const primaryWordAr = catWordsAr[0];
    
    // Choose brand & realistic pricing tier based on category
    let brand = BRAND_LISTS.grocery[idx % BRAND_LISTS.grocery.length];
    let base = 6.50 + ((idx * 3.4) % 38);
    let unit = '500g Pack';
    let origin = idx % 3 === 0 ? 'UAE' : (idx % 2 === 0 ? 'KSA' : 'European Import');

    if (cat.slug.includes('water') || cat.slug.includes('drinks') || cat.slug.includes('beverages')) {
      base = 2.50 + (idx % 8) * 1.5;
      unit = idx % 2 === 0 ? '6 x 1.5L' : '24 x 200ml Case';
      brand = ['Mai Dubai', 'Masafi', 'Al Ain', 'Pepsi', 'Coca Cola', 'Schweppes'][idx % 6];
    } else if (cat.slug.includes('snacks') || cat.slug.includes('biscuits') || cat.slug.includes('chocolates')) {
      base = 3.95 + (idx % 12) * 1.8;
      unit = 'Pack of 12 (360g)';
      brand = ['Tiffany', 'Galaxy', 'Cadbury', 'Kinder', 'Oreo', 'Pringles', 'Bayara'][idx % 7];
    } else if (cat.slug.includes('household') || cat.slug.includes('laundry') || cat.slug.includes('cleaning')) {
      base = 12.50 + (idx % 15) * 3.2;
      unit = idx % 2 === 0 ? '3 Litres' : '2.5 kg Tub';
      brand = ['Dettol', 'Clorox', 'Tide', 'Ariel', 'Fairy', 'Comfort'][idx % 6];
    } else if (cat.slug.includes('baby')) {
      base = 19.50 + (idx % 14) * 4.5;
      unit = 'Jumbo Economy Box';
      brand = ['Pampers', 'Huggies', 'Cerelac', 'Aptamil', 'Johnson\'s Baby'][idx % 5];
    } else if (cat.slug.includes('appliances') || cat.slug.includes('electronics')) {
      base = 45.00 + (idx % 10) * 18.0;
      unit = '1 Unit + 2 Year UAE Warranty';
      brand = ['Black & Decker', 'Philips', 'Geepas', 'Kenwood', 'Braun'][idx % 5];
    } else if (cat.slug.includes('organic') || cat.slug.includes('premium')) {
      base = 18.00 + (idx % 12) * 4.0;
      unit = 'Premium Glass Jar / 400g';
      brand = ['Organic Larder', 'Bio Real', 'Al Barakah', 'Royal Select'][idx % 4];
    }

    const discountP = (idx % 4 === 0) ? Math.floor(12 + (idx * 6) % 35) : 0;
    const curPrice = Number(base.toFixed(2));
    const origPrice = discountP > 0 ? Number((curPrice / (1 - discountP / 100)).toFixed(2)) : curPrice;
    const discountAmt = Number((origPrice - curPrice).toFixed(2));
    const rating = Number((4.1 + ((idx % 9) * 0.1)).toFixed(1));
    const img = images[idx % images.length];

    const enName = `${brand} ${cat.en.split('&')[0].trim()} Select Choice #${idx}`;
    const arName = `${brand} مختارات ${cat.ar.split('و')[0].trim()} الفاخرة رقم ${idx}`;

    products.push({
      id: `prod-${cat.slug}-${idx}`,
      slug: `${cat.slug}-item-${idx}-${brand.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      nameEn: enName,
      nameAr: arName,
      descEn: `Authentic ${enName} packed fresh with certified UAE quality standards. Ideal choice for everyday household grocery shopping in Dubai and Abu Dhabi.`,
      descAr: `منتج أصلي ${arName} معبأ بعناية فائقة وفق أعلى معايير الجودة والمواصفات الإماراتية. خيار مثالي للتسوق المنزلي اليومي.`,
      category: cat.en,
      categoryAr: cat.ar,
      categorySlug: cat.slug,
      brand: brand,
      origin: origin,
      unit: unit,
      price: curPrice,
      originalPrice: origPrice,
      discountPercent: discountP,
      discountAmount: discountAmt,
      rating: rating > 5.0 ? 5.0 : rating,
      reviewsCount: 18 + ((idx * 21) % 190),
      inStock: true,
      stockQuantity: 30 + ((idx * 9) % 140),
      badge: discountP > 25 ? 'Super Saver' : (idx % 6 === 0 ? 'Top Seller' : null),
      featured: idx % 7 === 0,
      bestseller: idx % 5 === 0,
      isNew: idx % 6 === 0,
      isUnder10: curPrice < 10.0,
      isUnder20: curPrice < 20.0,
      isUaeLocal: origin === 'UAE' || brand.includes('Al Ain') || brand.includes('Al Rawabi') || brand.includes('Mai Dubai') || brand.includes('Masafi'),
      image: img,
    });
  }

  return products;
}

// Build all catalog items across all 40 categories
const allCatalog = [];
CATEGORIES.forEach(cat => {
  // Target 26 to 30 products per category -> 40 * 26 = 1040+ products!
  const catItems = generateCategoryProducts(cat, 27);
  allCatalog.push(...catItems);
});

console.log(`Generated ${allCatalog.length} products across ${CATEGORIES.length} categories.`);

// Write to JSON file
const outputDir = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'supermarketCatalog.json');
fs.writeFileSync(outputPath, JSON.stringify(allCatalog, null, 2), 'utf-8');
console.log(`Saved catalog to ${outputPath}`);
