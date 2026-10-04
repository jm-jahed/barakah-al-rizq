const fs = require('fs');
const path = require('path');

const categories = [
  { id: 'cat-01', slug: 'fruits-vegetables', nameEn: 'Fruits & Vegetables', nameAr: 'الفواكه والخضروات', dept: 'Fresh Food', itemsPerCat: 70, basePrice: 4.5, brands: ['Al Ain Farms', 'Barakat', 'Al Dahra', 'Fresh Harvest UAE', 'Del Monte', 'Driscoll\'s', 'Zespri'], origins: ['UAE', 'Oman', 'Egypt', 'Spain', 'South Africa', 'New Zealand', 'USA'],
    samples: [
      { en: 'Fresh Red Tomatoes Local UAE', ar: 'طماطم حمراء إماراتية طازجة', unit: '1 kg', price: 3.5, img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80' },
      { en: 'Local UAE Cucumbers Greenhouse', ar: 'خيار بيوت محمية إماراتي', unit: '1 kg', price: 4.25, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80' },
      { en: 'Fresh Navel Oranges Sweet Box', ar: 'برتقال أبو صرة حلو طازج', unit: '2 kg Pack', price: 9.5, img: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80' },
      { en: 'Royal Gala Fresh Apples Crisp', ar: 'تفاح رويال جالا مقرمش', unit: '1.5 kg Pack', price: 11.25, img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80' },
      { en: 'Cavendish Fresh Bananas Yellow', ar: 'موز كافنديش طازج ممتاز', unit: '1 kg', price: 5.75, img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80' },
      { en: 'Fresh Iceberg Lettuce Crunchy', ar: 'خس آيسبرغ طازج مقرمش', unit: '1 Head', price: 3.9, img: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&w=600&q=80' },
      { en: 'Red Seedless Grapes Punnet', ar: 'عنب أحمر بدون بذور', unit: '500 g Punnet', price: 8.5, img: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-02', slug: 'meat-poultry', nameEn: 'Meat & Poultry', nameAr: 'اللحوم والدواجن', dept: 'Fresh Food', itemsPerCat: 65, basePrice: 28, brands: ['Al Rawabi', 'Al Ain Farms', 'Sadia', 'Seara', 'Silver Fern', 'Al Kabeer', 'Tanmiah'], origins: ['UAE', 'Saudi Arabia', 'Brazil', 'Australia', 'New Zealand', 'Pakistan', 'India'],
    samples: [
      { en: 'Fresh UAE Whole Chicken Chilled', ar: 'دجاج كامل طازج مبرد إماراتي', unit: '1000 g', price: 17.5, img: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=600&q=80' },
      { en: 'Skinless Chicken Breast Fillet Chilled', ar: 'صدور دجاج بدون جلد وعظم', unit: '900 g', price: 24.5, img: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=600&q=80' },
      { en: 'Australian Lamb Chops Fresh', ar: 'ريش غنم أسترالي طازج', unit: '1 kg', price: 58.0, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80' },
      { en: 'Prime Beef Ribeye Steak Grass-Fed', ar: 'ستيك ريب آي بقري ممتاز', unit: '500 g', price: 42.0, img: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80' },
      { en: 'Fresh Minced Beef (Lean 90/10)', ar: 'لحم بقري مفروم قليل الدهن', unit: '500 g', price: 19.5, img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-03', slug: 'seafood', nameEn: 'Fresh & Chilled Seafood', nameAr: 'المأكولات البحرية', dept: 'Fresh Food', itemsPerCat: 60, basePrice: 35, brands: ['Ocean Fresh', 'Lerøy', 'Fish World UAE', 'Seafood Market DXB'], origins: ['Norway', 'UAE', 'Oman', 'India', 'Vietnam'],
    samples: [
      { en: 'Fresh Norwegian Salmon Fillet Portion', ar: 'فيليه سلمون نرويجي طازج', unit: '500 g', price: 48.0, img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80' },
      { en: 'Fresh Local Sea Bream (Sultan Ibrahim)', ar: 'سمك سبريم محلي طازج', unit: '1 kg', price: 29.5, img: 'https://images.unsplash.com/photo-1534948216015-843149f72be3?auto=format&fit=crop&w=600&q=80' },
      { en: 'Jumbo Tiger Prawns Raw Peeled', ar: 'روبيان تايجر جامبو طازج', unit: '500 g', price: 38.0, img: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80' },
      { en: 'Fresh Hamour Fillet Premium Cut', ar: 'فيليه هامور طازج ممتاز', unit: '500 g', price: 45.0, img: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-04', slug: 'dairy-eggs', nameEn: 'Dairy & Farm Eggs', nameAr: 'الألبان والبيض', dept: 'Fresh Food', itemsPerCat: 65, basePrice: 12, brands: ['Al Rawabi', 'Almarai', 'Lacnor', 'Puck', 'Lurpak', 'President', 'Kiri', 'Kraft'], origins: ['UAE', 'Saudi Arabia', 'Denmark', 'France', 'Oman'],
    samples: [
      { en: 'Al Rawabi Fresh Full Cream Milk Bottle', ar: 'حليب كامل الدسم طازج الروابي', unit: '2 Litres', price: 11.5, img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80' },
      { en: 'Almarai Fresh Laban Drink Refreshing', ar: 'لبن المراعي طازج منعش', unit: '2 Litres', price: 9.25, img: 'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=600&q=80' },
      { en: 'Fresh UAE White Eggs Grade A (Tray)', ar: 'بيض أبيض إماراتي طازج درجة أولى', unit: '30 Eggs Pack', price: 18.5, img: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80' },
      { en: 'Lurpak Unsalted Butter Block', ar: 'زبدة لورباك غير مملحة', unit: '400 g Block', price: 19.75, img: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80' },
      { en: 'Puck Cream Cheese Jar Spread', ar: 'جبنة كريم قابلة للدهن بوك', unit: '500 g Glass Jar', price: 16.5, img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-05', slug: 'bakery', nameEn: 'Fresh Bakery & Bread', nameAr: 'المخبوزات', dept: 'Fresh Food', itemsPerCat: 65, basePrice: 6, brands: ['Modern Bakery', 'Al Maya Bakery', 'Lusine', 'Sunbulah', 'Paul Bakery UAE'], origins: ['UAE', 'Saudi Arabia', 'France'],
    samples: [
      { en: 'Fresh Arabic White Pita Bread Khubz', ar: 'خبز عربي أبيض طازج', unit: '5 Pcs Pack', price: 2.75, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' },
      { en: 'Sliced White Sandwich Bread Soft', ar: 'توست أبيض طري للسندويش', unit: '600 g Loaf', price: 4.5, img: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80' },
      { en: 'Pure French Butter Croissants Pack', ar: 'كرواسون زبدة فرنسي طازج', unit: '4 Pcs Box', price: 12.0, img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-06', slug: 'rice-pasta-grains', nameEn: 'Rice, Pasta & Grains', nameAr: 'الأرز والمعكرونة والحبوب', dept: 'Grocery', itemsPerCat: 65, basePrice: 22, brands: ['India Gate', 'Tilda', 'Daawat', 'Barilla', 'Al Alali', 'Panzani', 'Royal Umbrella'], origins: ['India', 'Pakistan', 'Italy', 'Thailand'],
    samples: [
      { en: 'India Gate Classic Basmati Rice Aged', ar: 'أرز بسمتي كلاسيك إنديا جيت', unit: '5 kg Bag', price: 44.5, img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80' },
      { en: 'Barilla Spaghetti No. 5 Pasta', ar: 'معكرونة سباغيتي رقم 5 باريلا', unit: '500 g Box', price: 7.25, img: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-07', slug: 'cooking-oils', nameEn: 'Cooking Oils & Ghee', nameAr: 'زيوت الطبخ والسمن', dept: 'Grocery', itemsPerCat: 65, basePrice: 25, brands: ['Afia', 'Noor', 'Coroli', 'Borges', 'Rahma', 'Aseel Ghee', 'Sasso'], origins: ['UAE', 'Saudi Arabia', 'Spain', 'Italy', 'Oman'],
    samples: [
      { en: 'Noor Pure Sunflower Cooking Oil Bottle', ar: 'زيت دوار الشمس النقي نور', unit: '1.5 Litres x 2 Promo', price: 29.5, img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80' },
      { en: 'Rahma Extra Virgin Olive Oil Glass Bottle', ar: 'زيت زيتون بكر ممتاز رحمة', unit: '750 ml Bottle', price: 26.75, img: 'https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-08', slug: 'canned-jarred-food', nameEn: 'Canned & Jarred Food', nameAr: 'الأطعمة المعلبة', dept: 'Grocery', itemsPerCat: 65, basePrice: 8, brands: ['California Garden', 'Americana', 'Heinz', 'Al Alali', 'Kdd', 'Rio Mare'], origins: ['UAE', 'Kuwait', 'Italy', 'USA'],
    samples: [
      { en: 'California Garden Foul Mudammas Fava Beans', ar: 'فول مدمس حدائق كاليفورنيا', unit: '450 g x 3 Multipack', price: 9.75, img: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&w=600&q=80' },
      { en: 'Rio Mare Tuna in Pure Olive Oil', ar: 'تونة ريو ماري في زيت الزيتون', unit: '160 g x 3 Pack', price: 28.5, img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-09', slug: 'spices-seasonings', nameEn: 'Spices & Seasonings', nameAr: 'التوابل والبهارات', dept: 'Grocery', itemsPerCat: 65, basePrice: 7, brands: ['Bayara', 'Mehran', 'Shan', 'Eastern', 'Maggi', 'Knorr'], origins: ['UAE', 'Pakistan', 'India', 'Egypt'],
    samples: [
      { en: 'Bayara Whole Black Peppercorns Grinder', ar: 'فلفل أسود حب بايارا', unit: '200 g Jar', price: 12.5, img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80' },
      { en: 'Maggi Chicken Bouillon Stock Cubes', ar: 'مكعبات مرقة الدجاج ماجي', unit: '24 Cubes Pack', price: 11.25, img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-10', slug: 'sauces-condiments', nameEn: 'Sauces & Condiments', nameAr: 'الصلصات والتتبيلات', dept: 'Grocery', itemsPerCat: 65, basePrice: 9, brands: ['Heinz', 'Kraft', 'Hellmann\'s', 'Kikkoman', 'Tabasco', 'Al Alali'], origins: ['USA', 'UK', 'Netherlands', 'Japan'],
    samples: [
      { en: 'Heinz Tomato Ketchup Squeeze Bottle', ar: 'كاتشب طماطم هاينز عبوة ضغط', unit: '910 g Jumbo Bottle', price: 14.5, img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-11', slug: 'breakfast-cereals', nameEn: 'Breakfast Cereals & Spreads', nameAr: 'الفطور وحبوب الإفطار', dept: 'Grocery', itemsPerCat: 65, basePrice: 18, brands: ['Kellogg\'s', 'Nestle', 'Quaker', 'Nutella', 'Skippy', 'Bonne Maman'], origins: ['UK', 'France', 'USA', 'Germany'],
    samples: [
      { en: 'Nutella Hazelnut Cocoa Spread Jar', ar: 'نوتيلا شوكولاتة البندق القابلة للدهن', unit: '750 g Family Jar', price: 27.5, img: 'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=600&q=80' },
      { en: 'Kellogg\'s Corn Flakes Original Crispy', ar: 'كورن فليكس كلوقز الأصلي', unit: '750 g Family Pack', price: 19.5, img: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-12', slug: 'tea-coffee', nameEn: 'Tea & Coffee', nameAr: 'الشاي والقهوة', dept: 'Beverages', itemsPerCat: 65, basePrice: 22, brands: ['Lipton', 'Nescafe', 'Starbucks', 'Alokozay', 'Twinings', 'Davidoff', 'Illy'], origins: ['UK', 'Switzerland', 'UAE', 'Italy', 'Sri Lanka'],
    samples: [
      { en: 'Lipton Yellow Label Black Tea Bags', ar: 'شاي أسود ليبتون العلامة الصفراء', unit: '100 Tea Bags Pack', price: 15.5, img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80' },
      { en: 'Nescafe Gold Instant Coffee Glass Jar', ar: 'نسكافيه جولد قهوة سريعة التحضير', unit: '200 g Jar', price: 34.5, img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-13', slug: 'water-juices', nameEn: 'Water & Fresh Juices', nameAr: 'المياه والعصائر', dept: 'Beverages', itemsPerCat: 65, basePrice: 8, brands: ['Mai Dubai', 'Masafi', 'Al Ain', 'Barakat', 'Lacnor', 'Rawabi Juices', 'Evian'], origins: ['UAE', 'France', 'Oman'],
    samples: [
      { en: 'Mai Dubai Bottled Drinking Water Carton', ar: 'مياه شرب معبأة ماي دبي', unit: '1.5 Litres x 6 Bottles', price: 8.5, img: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80' },
      { en: 'Barakat 100% Fresh Squeezed Orange Juice', ar: 'عصير برتقال طازج معصور 100% بركات', unit: '1 Litre Bottle', price: 14.0, img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-14', slug: 'soft-drinks-beverages', nameEn: 'Soft Drinks & Sodas', nameAr: 'المشروبات الغازية', dept: 'Beverages', itemsPerCat: 60, basePrice: 6, brands: ['Coca-Cola', 'Pepsi', '7UP', 'Kinza', 'Red Bull', 'Schweppes'], origins: ['UAE', 'Saudi Arabia', 'Austria'],
    samples: [
      { en: 'Coca-Cola Original Taste Cans Pack', ar: 'كوكاكولا الطعم الأصلي علب', unit: '330 ml x 6 Cans', price: 13.5, img: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-15', slug: 'snacks-chips', nameEn: 'Chips, Nuts & Savory Snacks', nameAr: 'رقائق البطاطس والمكسرات', dept: 'Snacks', itemsPerCat: 65, basePrice: 7, brands: ['Lay\'s', 'Doritos', 'Pringles', 'Bayara', 'Oman Chips', 'Kitco'], origins: ['UAE', 'Oman', 'Saudi Arabia', 'USA'],
    samples: [
      { en: 'Chips Oman Chilli Flavour Crisps', ar: 'بطاطس عمان بنكهة الفلفل الحار', unit: '50 g x 20 Pack Box', price: 16.5, img: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-16', slug: 'biscuits-cookies', nameEn: 'Biscuits, Wafers & Cookies', nameAr: 'البسكويت والكوكيز', dept: 'Snacks', itemsPerCat: 65, basePrice: 8, brands: ['Oreo', 'McVitie\'s', 'Tiffany', 'Britannia', 'Lotus Biscoff', 'Ulker'], origins: ['UK', 'UAE', 'India', 'Belgium'],
    samples: [
      { en: 'Oreo Original Sandwich Cookies Multipack', ar: 'بسكويت أوريو الأصلي محشو بالكريمة', unit: '38 g x 16 Packs Box', price: 18.0, img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-17', slug: 'chocolates-sweets', nameEn: 'Chocolates & Confectionery', nameAr: 'الشوكولاتة والحلويات', dept: 'Snacks', itemsPerCat: 65, basePrice: 14, brands: ['Galaxy', 'KitKat', 'Cadbury', 'Kinder', 'Ferrero Rocher', 'Lindt', 'Snickers'], origins: ['UAE', 'UK', 'Italy', 'Switzerland'],
    samples: [
      { en: 'Ferrero Rocher Hazelnut Chocolate Box', ar: 'شوكولاتة فيريرو روشيه بالبندق', unit: '16 Pcs (200 g Box)', price: 29.5, img: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-18', slug: 'frozen-poultry-meats', nameEn: 'Frozen Poultry & Meats', nameAr: 'الدواجن واللحوم المجمدة', dept: 'Frozen Food', itemsPerCat: 65, basePrice: 19, brands: ['Sadia', 'Americana', 'Seara', 'Al Kabeer', 'Al Areesh'], origins: ['Brazil', 'UAE', 'Saudi Arabia'],
    samples: [
      { en: 'Sadia Frozen Griller Whole Chicken Box', ar: 'دجاج ساديا مجمد بدون أحشاء', unit: '1100 g Whole Bird', price: 14.5, img: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-19', slug: 'frozen-vegetables-fruits', nameEn: 'Frozen Vegetables & Fruits', nameAr: 'الخضروات والفواكه المجمدة', dept: 'Frozen Food', itemsPerCat: 60, basePrice: 8, brands: ['Americana', 'Sadia', 'Green Giant', 'Emborg', 'Al Alali'], origins: ['Egypt', 'Belgium', 'UAE', 'Poland'],
    samples: [
      { en: 'Americana Green Peas IQF Frozen Pack', ar: 'بازلاء خضراء مجمدة أمريكانا', unit: '900 g Bag', price: 8.5, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-20', slug: 'frozen-ready-meals', nameEn: 'Frozen Appetizers & Pizzas', nameAr: 'المقبلات والوجبات الجاهزة المجمدة', dept: 'Frozen Food', itemsPerCat: 60, basePrice: 15, brands: ['Americana', 'Al Kabeer', 'Dr. Oetker', 'McCain', 'Sadia'], origins: ['UAE', 'Germany', 'Canada'],
    samples: [
      { en: 'Americana Crunchy Chicken Zinger Nuggets', ar: 'ناجتس الدجاج المقرمش زينجر أمريكانا', unit: '750 g Bag', price: 19.5, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80' },
      { en: 'McCain Golden French Fries Extra Crispy', ar: 'بطاطس مقلية ذهبية مقرمشة ماكين', unit: '2.5 kg Foodservice Bag', price: 21.0, img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-21', slug: 'ice-cream-desserts', nameEn: 'Ice Cream & Frozen Desserts', nameAr: 'الآيس كريم والحلويات المجمدة', dept: 'Frozen Food', itemsPerCat: 60, basePrice: 16, brands: ['Häagen-Dazs', 'London Dairy', 'Baskin Robbins', 'Magnum', 'Igloo'], origins: ['UAE', 'France', 'UK'],
    samples: [
      { en: 'London Dairy Pralines & Cream Ice Cream Tub', ar: 'آيس كريم برالين وكريمة لندن ديري', unit: '1 Litre Tub', price: 24.5, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-22', slug: 'laundry-care', nameEn: 'Laundry Detergents & Softeners', nameAr: 'منظفات الغسيل والعناية بالملابس', dept: 'Household', itemsPerCat: 65, basePrice: 38, brands: ['Ariel', 'Tide', 'Persil', 'Comfort', 'Downy', 'Omo'], origins: ['UAE', 'Saudi Arabia', 'Germany'],
    samples: [
      { en: 'Ariel Automatic Liquid Laundry Detergent Gel', ar: 'جل مسحوق غسيل أوتوماتيك أريال', unit: '2 Litres + 1 Litre Free', price: 39.5, img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-23', slug: 'dishwashing-kitchen', nameEn: 'Dishwashing & Surface Cleaners', nameAr: 'غسيل الصحون ومنظفات الأسطح', dept: 'Household', itemsPerCat: 65, basePrice: 14, brands: ['Fairy', 'Pril', 'Finish', 'Dettol', 'Jif', 'Clorox'], origins: ['UAE', 'Saudi Arabia', 'UK'],
    samples: [
      { en: 'Fairy Lemon Concentrated Dishwashing Liquid', ar: 'سائل غسيل الأطباق بالليمون فيري', unit: '1.25 Litre Bottle', price: 14.5, img: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-24', slug: 'household-paper-tissues', nameEn: 'Facial Tissues & Paper Towels', nameAr: 'المناديل الورقية ومناشف المطبخ', dept: 'Household', itemsPerCat: 65, basePrice: 18, brands: ['Fine', 'Kleenex', 'Masafi Tissues', 'Alokozay Tissues', 'Sanita'], origins: ['UAE', 'Jordan', 'Saudi Arabia'],
    samples: [
      { en: 'Fine Fluffy Facial Tissues Soft 2-Ply', ar: 'مناديل وجه ناعمة فاين فلافي طبقتين', unit: '150 Sheets x 5 Boxes Pack', price: 19.5, img: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-25', slug: 'disinfectants-cleaning', nameEn: 'Disinfectants & Floor Cleaners', nameAr: 'المطهرات ومنظفات الأرضيات', dept: 'Household', itemsPerCat: 65, basePrice: 22, brands: ['Dettol', 'Clorox', 'Harpic', 'Flash', 'Mr. Muscle'], origins: ['UK', 'UAE', 'Saudi Arabia'],
    samples: [
      { en: 'Dettol Antiseptic Disinfectant Liquid Original', ar: 'سائل ديتول الأصلي المطهر والمعقم', unit: '1 Litre x 2 Promo Pack', price: 34.5, img: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-26', slug: 'hair-care-shampoo', nameEn: 'Shampoo, Conditioners & Oils', nameAr: 'الشامبو والبلسم والعناية بالشعر', dept: 'Personal Care', itemsPerCat: 65, basePrice: 19, brands: ['Head & Shoulders', 'Pantene', 'L\'Oreal Paris', 'Dove', 'Tresemme', 'Vatika'], origins: ['France', 'USA', 'UAE'],
    samples: [
      { en: 'Head & Shoulders Classic Clean Anti-Dandruff Shampoo', ar: 'شامبو هيد آند شولدرز ضد القشرة كلاسيك', unit: '600 ml Bottle', price: 21.5, img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-27', slug: 'bath-body-care', nameEn: 'Bath, Soaps & Body Wash', nameAr: 'صابون واستحمام والعناية بالجسم', dept: 'Personal Care', itemsPerCat: 65, basePrice: 15, brands: ['Dove', 'Dettol Soap', 'Nivea', 'Lifebuoy', 'Palmolive', 'Johnson\'s'], origins: ['Germany', 'UAE', 'UK'],
    samples: [
      { en: 'Dove Deeply Nourishing Body Wash Shower Gel', ar: 'غسول الجسم المرطب بعمق دوف', unit: '500 ml Bottle', price: 18.0, img: 'https://images.unsplash.com/photo-1608248597359-58d3d0f0c0ec?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-28', slug: 'oral-care', nameEn: 'Toothpaste, Brushes & Mouthwash', nameAr: 'العناية بالفم والأسنان', dept: 'Personal Care', itemsPerCat: 60, basePrice: 14, brands: ['Colgate', 'Sensodyne', 'Oral-B', 'Listerine', 'Signal', 'Parodontax'], origins: ['UK', 'USA', 'Germany'],
    samples: [
      { en: 'Sensodyne Rapid Action Toothpaste Twin Pack', ar: 'معجون أسنان سنسوداين مفعول سريع', unit: '75 ml x 2 Packs', price: 28.5, img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-29', slug: 'men-grooming-shaving', nameEn: 'Men\'s Grooming & Shaving', nameAr: 'العناية بالرجل والحلاقة', dept: 'Personal Care', itemsPerCat: 60, basePrice: 24, brands: ['Gillette', 'Nivea Men', 'Axe', 'Old Spice', 'Bic'], origins: ['USA', 'Germany', 'France'],
    samples: [
      { en: 'Gillette Mach3 Razor with 4 Cartridges Pack', ar: 'ماكينة حلاقة جيليت ماك 3 مع 4 شفرات', unit: '1 Razor + 4 Blades', price: 36.0, img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-30', slug: 'skincare-sun-care', nameEn: 'Facial Creams & Sunscreen', nameAr: 'العناية بالبشرة والواقي الشمسي', dept: 'Personal Care', itemsPerCat: 60, basePrice: 32, brands: ['Nivea', 'Garnier', 'Neutrogena', 'Bioderma', 'CeraVe', 'La Roche-Posay'], origins: ['France', 'Germany', 'USA'],
    samples: [
      { en: 'Neutrogena Hydro Boost Water Gel Moisturizer', ar: 'جل مائي مرطب نيتروجينا هيدرو بوست', unit: '50 ml Jar', price: 44.0, img: 'https://images.unsplash.com/photo-1608248597359-58d3d0f0c0ec?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-31', slug: 'baby-diapers-wipes', nameEn: 'Baby Diapers & Sensitive Wipes', nameAr: 'حفاضات الأطفال والمناديل المبللة', dept: 'Baby Care', itemsPerCat: 65, basePrice: 55, brands: ['Pampers', 'Huggies', 'Fine Baby', 'WaterWipes', 'Pureen'], origins: ['UAE', 'Saudi Arabia', 'Ireland'],
    samples: [
      { en: 'Pampers Premium Care Diapers Size 4 (Maxi)', ar: 'حفاضات بامبرز عناية مميزة مقاس 4', unit: '104 Diapers Jumbo Box', price: 84.5, img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-32', slug: 'baby-food-formula', nameEn: 'Baby Milk Formula & Purees', nameAr: 'حليب وأغذية الأطفال', dept: 'Baby Care', itemsPerCat: 65, basePrice: 42, brands: ['Aptamil', 'Similac', 'Nestle Nan', 'Cerelac', 'Hero Baby', 'Gerber'], origins: ['Netherlands', 'Switzerland', 'Ireland'],
    samples: [
      { en: 'Aptamil Advance 2 Follow-on Milk Formula Tin', ar: 'حليب أبتاميل أدفانس 2 لمتابعة الرضاعة', unit: '900 g Can', price: 78.5, img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-33', slug: 'small-kitchen-appliances', nameEn: 'Blenders, Kettles & Air Fryers', nameAr: 'الأجهزة المنزلية الصغيرة', dept: 'Electronics', itemsPerCat: 60, basePrice: 120, brands: ['Philips', 'Black & Decker', 'Nutribullet', 'Tefal', 'Kenwood', 'De\'Longhi'], origins: ['Netherlands', 'France', 'UK', 'China'],
    samples: [
      { en: 'Philips Essential Air Fryer XL 4.1L Digital', ar: 'قلاية فيليبس الهوائية الرقمية 4.1 لتر', unit: '1 Unit', price: 299.0, img: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-34', slug: 'personal-electronics', nameEn: 'Audio, Earbuds & Smart Devices', nameAr: 'الإلكترونيات والملحقات الشخصية', dept: 'Electronics', itemsPerCat: 60, basePrice: 180, brands: ['Apple', 'Samsung', 'Sony', 'Anker', 'JBL', 'Xiaomi'], origins: ['USA', 'Japan', 'South Korea', 'China'],
    samples: [
      { en: 'Anker Soundcore True Wireless Earbuds Noise Cancelling', ar: 'سماعات أنكر ساوندكور لاسلكية عازلة للضوضاء', unit: '1 Set', price: 149.0, img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-35', slug: 'cookware-kitchen-dining', nameEn: 'Pots, Pans & Kitchenware', nameAr: 'أواني الطهي وأدوات المطبخ', dept: 'Home & Living', itemsPerCat: 60, basePrice: 65, brands: ['Tefal', 'Prestige', 'Pyrex', 'Tramontina', 'IKEA Select'], origins: ['France', 'Brazil', 'Italy', 'China'],
    samples: [
      { en: 'Tefal Non-Stick Frying Pan 28cm Induction', ar: 'مقلاة تيفال غير لاصقة 28 سم', unit: '1 Piece', price: 69.0, img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-36', slug: 'home-storage-cleaning-tools', nameEn: 'Storage Boxes, Mops & Organizers', nameAr: 'أدوات التنظيم والتخزين المنزلي', dept: 'Home & Living', itemsPerCat: 60, basePrice: 35, brands: ['Vileda', 'Cosmoplast', 'Rubbermaid', 'Curver'], origins: ['UAE', 'Germany', 'USA'],
    samples: [
      { en: 'Vileda EasyWring Microfibre Spin Mop & Bucket Set', ar: 'ممسحة ودلو فيلدا مايكروفايبر الدوارة', unit: '1 Complete Set', price: 89.0, img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-37', slug: 'pet-food-supplies', nameEn: 'Cat & Dog Food, Treats & Litter', nameAr: 'أطعمة ومستلزمات الحيوانات الأليفة', dept: 'Household', itemsPerCat: 60, basePrice: 28, brands: ['Whiskas', 'Pedigree', 'Royal Canin', 'Purina Felix', 'Catsan'], origins: ['UK', 'France', 'USA', 'Thailand'],
    samples: [
      { en: 'Whiskas Dry Cat Food Chicken & Turkey Flavours', ar: 'طعام قطط جاف ويسكاس بنكهة الدجاج', unit: '3 kg Bag', price: 39.5, img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-38', slug: 'organic-healthy-diet', nameEn: 'Organic, Gluten-Free & Vegan', nameAr: 'المنتجات العضوية والصحية', dept: 'Organic & Healthy', itemsPerCat: 60, basePrice: 24, brands: ['Organic Larder', 'Alce Nero', 'Bobs Red Mill', 'Clearspring', 'Alpro'], origins: ['Italy', 'UK', 'USA', 'Belgium'],
    samples: [
      { en: 'Organic Larder Extra Virgin Cold Pressed Olive Oil', ar: 'زيت زيتون بكر ممتاز عضوي أورجانيك لاردر', unit: '500 ml Bottle', price: 34.0, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-39', slug: 'international-speciality', nameEn: 'Imported Asian, British & Arab Foods', nameAr: 'الأطعمة العالمية والمستوردة', dept: 'Grocery', itemsPerCat: 60, basePrice: 16, brands: ['Waitrose Essentials', 'Nongshim', 'Indomie', 'Samyang', 'Lee Kum Kee'], origins: ['UK', 'South Korea', 'Indonesia', 'Hong Kong'],
    samples: [
      { en: 'Indomie Instant Noodles Special Chicken Flavor', ar: 'شعيرية إندومي سريعة التحضير نكهة الدجاج', unit: '70 g x 10 Packs Multipack', price: 12.5, img: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  { id: 'cat-40', slug: 'festive-deals-ramadan', nameEn: 'Festive Mega Deals & Hampers', nameAr: 'العروض الكبرى والمجموعات الاحتفالية', dept: 'Grocery', itemsPerCat: 65, basePrice: 45, brands: ['Al Mirqab Select', 'Bayara Grand', 'Bateel Dates', 'Roastery DXB'], origins: ['UAE', 'Saudi Arabia'],
    samples: [
      { en: 'Premium Khalas & Medjool Dates Gift Box Assorted', ar: 'صندوق تمور خلاص ومجدول فاخرة مشكلة', unit: '1 kg Luxury Gift Box', price: 49.0, img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80' }
    ]
  }
];

const allProducts = [];
let totalId = 1;

categories.forEach((cat) => {
  const count = cat.itemsPerCat || 65;
  for (let i = 0; i < count; i++) {
    const sampleIdx = i % cat.samples.length;
    const sample = cat.samples[sampleIdx];
    const brand = cat.brands[i % cat.brands.length];
    const origin = cat.origins[i % cat.origins.length];

    // Variance calculation
    const priceVariance = (i * 1.35) % (cat.basePrice * 0.85);
    const basePrice = Math.max(2.5, Math.round((sample.price + priceVariance) * 100) / 100);
    const hasDiscount = i % 3 === 0 || i % 5 === 0;
    const discountPct = hasDiscount ? (10 + ((i * 5) % 35)) : 0;
    const originalPrice = hasDiscount ? Math.round((basePrice / (1 - (discountPct / 100))) * 100) / 100 : basePrice;
    const discountAmount = Math.round((originalPrice - basePrice) * 100) / 100;

    const isFeatured = i < 4;
    const isBestseller = i === 0 || i === 5 || i === 12;
    const isNew = i % 8 === 0;
    const isUnder10 = basePrice < 10;
    const isUnder20 = basePrice < 20;
    const isUaeLocal = origin === 'UAE';

    const badges = isBestseller ? 'Bestseller' : isUnder10 ? 'Super Saver' : isNew ? 'New Season' : hasDiscount ? `${discountPct}% OFF` : null;

    const sku = `HYPER-${cat.id.substring(4)}-${String(totalId).padStart(5, '0')}`;
    const nameSuffix = i > cat.samples.length - 1 ? ` #${Math.floor(i / cat.samples.length) + 1} (${brand})` : ` (${brand})`;

    const nameEn = `${sample.en}${nameSuffix}`;
    const nameAr = `${sample.ar} (${brand})`;

    allProducts.push({
      id: `prod-${cat.slug}-${i + 1}`,
      slug: `${cat.slug}-${sample.en.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${i + 1}`,
      sku: sku,
      nameEn: nameEn,
      nameAr: nameAr,
      descEn: `Premium quality ${nameEn}. Sourced and quality-inspected for UAE households with strict freshness assurance and guaranteed express temperature-controlled delivery across all 7 Emirates.`,
      descAr: `جودة ممتازة مختارة بعناية ${nameAr}. طازجة ومضمونة للعائلات في الإمارات مع توصيل سريع ومبرد لجميع الإمارات السبع.`,
      category: cat.nameEn,
      categoryAr: cat.nameAr,
      categorySlug: cat.slug,
      department: cat.dept,
      brand: brand,
      origin: origin,
      unit: sample.unit,
      price: basePrice,
      originalPrice: originalPrice,
      discountPercent: discountPct,
      discountAmount: discountAmount,
      rating: Math.round((4.2 + ((totalId * 7) % 75) / 100) * 10) / 10,
      reviewsCount: 12 + ((totalId * 13) % 180),
      inStock: true,
      stockQuantity: 30 + ((totalId * 23) % 250),
      badge: badges,
      featured: isFeatured,
      bestseller: isBestseller,
      isNew: isNew,
      isUnder10: isUnder10,
      isUnder20: isUnder20,
      isUaeLocal: isUaeLocal,
      image: sample.img
    });

    totalId++;
  }
});

const outputPath = path.join(__dirname, '..', 'src', 'data', 'supermarketCatalog.json');
fs.writeFileSync(outputPath, JSON.stringify(allProducts, null, 2), 'utf8');
console.log(`Successfully generated ${allProducts.length} structured hypermarket products to supermarketCatalog.json!`);
