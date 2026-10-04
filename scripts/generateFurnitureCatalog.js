const fs = require('fs');
const path = require('path');

const FURNITURE_CATEGORIES = [
  // LIVING ROOM
  {
    room: 'Living Room',
    subcategories: [
      {
        name: 'Sofas',
        prefix: 'fur-sofa',
        items: [
          { name: 'Koto Curved Bouclé Three-Seater Sofa', material: 'Textured Wool Bouclé', finish: 'Off-White Ivory / Smoked Oak Base', dims: 'W 260 × D 110 × H 74 cm', price: 24800, orig: 27500, rating: 4.9, reviews: 42, img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80', badge: 'Signature Icon', desc: 'Sculptural organic silhouette wrapped in tactile Italian wool bouclé with recessed smoked oak plinth.' },
          { name: 'Palais Deep Sectional Velvet Sofa', material: 'Italian Cotton Velvet', finish: 'Moss Olive / Brushed Brass Feet', dims: 'W 320 × D 165 × H 78 cm', price: 34500, orig: 38000, rating: 5.0, reviews: 36, img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80', badge: 'Bespoke Atelier', desc: 'Deep-seat architectural sectional with channel tufting and high-resilience feather-down blend cushioning.' },
          { name: 'Meridian Low-Slung Leather Sofa', material: 'Full-Grain Semi-Aniline Leather', finish: 'Cognac Saddle / Matte Black Steel', dims: 'W 240 × D 98 × H 68 cm', price: 28900, rating: 4.8, reviews: 29, img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80', desc: 'Clean horizontal lines with hand-waxed Tuscan leather that patinas richly over generations.' },
          { name: 'Arcadia Modular Cloud Lounge', material: 'Belgian Washed Linen', finish: 'Oatmeal Natural / Hidden Glides', dims: 'W 360 × D 120 × H 70 cm', price: 38900, orig: 42000, rating: 4.9, reviews: 54, img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1000&q=80', badge: 'Best Seller', desc: 'Multi-modular luxury lounge offering unconstrained configuration for expansive villa salons.' }
        ]
      },
      {
        name: 'Lounge & Accent Chairs',
        prefix: 'fur-chair',
        items: [
          { name: 'Atelier Sculptural Armchair', material: 'Solid American Walnut & Shearling', finish: 'Natural Walnut / Cream Shearling', dims: 'W 86 × D 88 × H 76 cm', price: 14200, orig: 16000, rating: 5.0, reviews: 68, img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80', badge: 'Museum Edition', desc: 'A masterclass in organic joinery with hand-carved solid walnut arms and tactile sheepskin upholstery.' },
          { name: 'Brutalist Travertine Club Chair', material: 'Roman Travertine & Saddle Leather', finish: 'Porous Roman Beige / Dark Espresso', dims: 'W 80 × D 82 × H 72 cm', price: 18500, rating: 4.9, reviews: 21, img: 'https://images.unsplash.com/photo-1580481077195-731da112ba4f?auto=format&fit=crop&w=1000&q=80', desc: 'Monolithic travertine stone side pylons anchoring a suspended saddle leather seating sling.' },
          { name: 'Luna Swivel Pod Lounge Chair', material: 'Textured Chenille & Brushed Bronze', finish: 'Desert Sand / Champagne Bronze', dims: 'W 92 × D 90 × H 75 cm', price: 12800, orig: 14200, rating: 4.8, reviews: 45, img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=80', desc: '360-degree silent bearing swivel with cocooning ergonomic backrest for reading sanctuaries.' },
          { name: 'Veneer Slatted Occasional Chair', material: 'Smoked Ash & Bouclé', finish: 'Smoked Charcoal / Chalk White', dims: 'W 76 × D 80 × H 74 cm', price: 9800, rating: 4.7, reviews: 33, img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=1000&q=80', desc: 'Minimalist Japanese-Nordic fusion with precision CNC slatted rear architectural casing.' }
        ]
      },
      {
        name: 'Coffee & Side Tables',
        prefix: 'fur-tbl',
        items: [
          { name: 'Monolith Roman Travertine Coffee Table', material: 'Solid Navona Travertine', finish: 'Honed Matte Unfilled Porous', dims: 'W 140 × D 90 × H 32 cm', price: 16500, orig: 18900, rating: 5.0, reviews: 88, img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80', badge: 'Architectural Icon', desc: 'Carved from a single continuous block of Italian Navona travertine with soft radiused chamfered edges.' },
          { name: 'Kanso Dual-Tier Walnut Table Set', material: 'Solid American Walnut & Fluted Glass', finish: 'Natural Oil / Bronze Tempered Glass', dims: 'W 120 × D 70 × H 38 cm', price: 11200, rating: 4.8, reviews: 37, img: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80', desc: 'Interlocking nesting geometry combining rich grain walnut and custom fluted bronze glass.' },
          { name: 'Calacatta Viola Pedestal Side Table', material: 'Calacatta Viola Marble', finish: 'Polished Viola Burgundy Veining', dims: 'W 45 × D 45 × H 52 cm', price: 8900, orig: 9800, rating: 4.9, reviews: 52, img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80', badge: 'Limited Vein', desc: 'Dramatic purple-burgundy marble veining extracted from Carrara quarries with faceted columnar stem.' },
          { name: 'Aura Cast Bronze Organic Side Table', material: 'Cast Bronze & Black Granite', finish: 'Patinated Dark Bronze', dims: 'W 50 × D 48 × H 48 cm', price: 13500, rating: 4.9, reviews: 19, img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80', desc: 'Lost-wax cast bronze with fluid molten edges hand-finished by master foundry artisans.' }
        ]
      },
      {
        name: 'Consoles & Media Credenzas',
        prefix: 'fur-med',
        items: [
          { name: 'Solis Fluted Oak Media Credenza', material: 'Solid White Oak & Brushed Brass', finish: 'Wire-Brushed Natural Oak / Brass Handles', dims: 'W 220 × D 48 × H 58 cm', price: 19800, orig: 22000, rating: 4.9, reviews: 31, img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80', desc: 'Acoustically transparent CNC fluted tambour doors with internal ventilation for high-end audiovisual components.' },
          { name: 'Tivoli Travertine & Smoked Glass Console', material: 'Roman Travertine & Smoked Glass', finish: 'Honed Travertine Pylons / 12mm Smoked Glass', dims: 'W 180 × D 42 × H 78 cm', price: 14500, rating: 4.8, reviews: 24, img: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80', desc: 'Architectural foyer statement piece balancing monolithic stone piers with floating cantilever glass.' },
          { name: 'Kyoto Minimalist Display Bookshelf', material: 'Solid Black Walnut & Powder Steel', finish: 'Matte Charcoal Ash / Midnight Black', dims: 'W 160 × D 38 × H 200 cm', price: 23500, orig: 26000, rating: 5.0, reviews: 18, img: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=80', desc: 'Asymmetric open shelving system engineered with concealed structural tie-rods for floating lightness.' }
        ]
      }
    ]
  },

  // DINING
  {
    room: 'Dining Room',
    subcategories: [
      {
        name: 'Dining Tables',
        prefix: 'fur-dtbl',
        items: [
          { name: 'Palazzo 10-Seater Solid Walnut Dining Table', material: 'American Black Walnut', finish: 'Hand-Rubbed Natural Matte Oil', dims: 'W 300 × D 110 × H 75 cm', price: 36000, orig: 41000, rating: 5.0, reviews: 38, img: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80', badge: 'Flagship Heirloom', desc: 'Bookmatched live-edge walnut slab sourced from sustainable Appalachian forestry with sculptured trestle base.' },
          { name: 'Vesta Roman Travertine Round Dining Table', material: 'Solid Roman Travertine', finish: 'Honed Matte Ivory / Fluted Pedestal', dims: 'Dia 160 × H 75 cm (Seats 8)', price: 28500, orig: 32000, rating: 4.9, reviews: 46, img: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1000&q=80', badge: 'Bespoke Stone', desc: 'Commanding round gathering table with solid fluted cylindrical column pedestal carved from Italian quarry stone.' },
          { name: 'Nero Marquina Oval Dining Table', material: 'Nero Marquina Marble & Brass', finish: 'Polished Black with White Veins / Satin Brass', dims: 'W 260 × D 120 × H 75 cm', price: 42000, rating: 5.0, reviews: 19, img: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1000&q=80', desc: 'Beveled Spanish black marble top resting on double elliptical cast brass sculptural pedestals.' },
          { name: 'Elysian Minimalist White Oak Table', material: 'Solid European White Oak', finish: 'White Pigmented Matte Lacquer', dims: 'W 240 × D 100 × H 75 cm', price: 21000, orig: 23500, rating: 4.8, reviews: 32, img: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1000&q=80', desc: 'Understated Scandinavian-Japanese geometry with soft pill-shaped corners and integrated tension steel rods.' }
        ]
      },
      {
        name: 'Dining & Bar Chairs',
        prefix: 'fur-dchr',
        items: [
          { name: 'Tulia Sculptural Dining Chair', material: 'Solid Ash & Italian Saddle Leather', finish: 'Smoked Ash / Cognac Leather Seat', dims: 'W 56 × D 54 × H 78 cm', price: 3800, orig: 4200, rating: 4.9, reviews: 74, img: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80', badge: 'Atelier Favorite', desc: 'Seamless steam-bent solid ash backrest paired with hand-stitched saddle leather seat cushion.' },
          { name: 'Capri Upholstered Dining Armchair', material: 'Textured Bouclé & Walnut', finish: 'Cream Bouclé / Natural Walnut Legs', dims: 'W 62 × D 58 × H 80 cm', price: 4500, rating: 4.8, reviews: 56, img: 'https://images.unsplash.com/photo-1580481077195-731da112ba4f?auto=format&fit=crop&w=1000&q=80', desc: 'Generous dining armchair designed for lingering 4-hour multi-course dinner banquets.' },
          { name: 'Aalto High Bar Stool with Brass Ring', material: 'Solid Oak & Velvet Upholstery', finish: 'Charcoal Oak / Slate Velvet / Brass', dims: 'W 46 × D 46 × H 98 cm (Seat 75cm)', price: 3200, orig: 3600, rating: 4.9, reviews: 41, img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=1000&q=80', desc: 'Refined island bar stool with curved lumbar support and solid brass anti-scuff footring.' },
          { name: 'Brio Minimalist Leather Bar Chair', material: 'Full-Grain Leather & Matte Steel', finish: 'Onyx Black Leather / Gunmetal Frame', dims: 'W 44 × D 48 × H 92 cm', price: 2900, rating: 4.7, reviews: 28, img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=80', desc: 'Ultra-slim architectural silhouette providing supreme support with concealed internal foam core.' }
        ]
      },
      {
        name: 'Sideboards & Buffets',
        prefix: 'fur-sbd',
        items: [
          { name: 'Maison 4-Door Fluted Walnut Sideboard', material: 'American Walnut & Calacatta Top', finish: 'Natural Walnut / Calacatta Gold Marble Top', dims: 'W 220 × D 50 × H 82 cm', price: 26500, orig: 29500, rating: 5.0, reviews: 29, img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80', badge: 'Signature Craft', desc: 'Precision CNC fluted facade inset with seamless Italian Calacatta gold marble serving surface.' },
          { name: 'Caspian Mirrored Drinks Bar Cabinet', material: 'Smoked Oak & Antiqued Mirror', finish: 'Smoked Oak / Antique Bronze Hardware', dims: 'W 110 × D 52 × H 165 cm', price: 22800, rating: 4.9, reviews: 17, img: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80', desc: 'Luxury cocktail cabinet with motion-activated warm LED interior lighting and velvet-lined glassware drawers.' }
        ]
      }
    ]
  },

  // BEDROOM
  {
    room: 'Bedroom',
    subcategories: [
      {
        name: 'Beds & Headboards',
        prefix: 'fur-bed',
        items: [
          { name: 'Aurelia Floating Bouclé King Bed', material: 'Textured Bouclé & American Walnut', finish: 'Ivory Bouclé / Integrated Walnut Plinth', dims: 'W 215 × L 225 × H 115 cm (King)', price: 28900, orig: 32000, rating: 5.0, reviews: 63, img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80', badge: 'Master Suite Icon', desc: 'Cantilevered floating bed platform with wraparound cushioned headboard and subtle perimeter ambient nightlight.' },
          { name: 'Lumière Fluted Upholstered Bedstead', material: 'Italian Velvet & Brushed Champagne Brass', finish: 'Taupe Greige Velvet / Champagne Brass Trim', dims: 'W 205 × L 220 × H 130 cm', price: 24500, orig: 27000, rating: 4.9, reviews: 48, img: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&w=1000&q=80', desc: 'Vertical architectural fluting with acoustic sound-softening acoustic foam backing.' },
          { name: 'Nordic Solid Oak Platform Bed', material: 'Solid European White Oak', finish: 'Natural Matte Wax Finish', dims: 'W 200 × L 218 × H 90 cm', price: 18500, rating: 4.8, reviews: 39, img: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80', desc: 'Pure timber joinery without visible hardware, engineered for timeless stillness in modern sanctuaries.' }
        ]
      },
      {
        name: 'Nightstands & Dressers',
        prefix: 'fur-nst',
        items: [
          { name: 'Veneer Single-Drawer Nightstand with Travertine', material: 'Solid Walnut & Roman Travertine Top', finish: 'Walnut / Honed Travertine Inset', dims: 'W 60 × D 45 × H 48 cm', price: 6200, orig: 6900, rating: 4.9, reviews: 58, img: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80', badge: 'Essential Pair', desc: 'Soft-close undermount Blum drawer with wireless inductive phone charger integrated beneath stone top.' },
          { name: 'Solis 6-Drawer Bedroom Dresser', material: 'White Oak & Leather Pulls', finish: 'Natural Wire-Brushed Oak / Saddle Pulls', dims: 'W 160 × D 52 × H 85 cm', price: 18900, rating: 4.8, reviews: 26, img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80', desc: 'Generous storage dresser with cedar-lined interior drawers and solid dovetail joinery.' },
          { name: 'Vanity Atelier Table with Illuminated Mirror', material: 'Walnut, Brass & Fluted Glass', finish: 'Walnut / Halo Dimmable 3000K LED', dims: 'W 120 × D 50 × H 135 cm', price: 16800, orig: 19000, rating: 5.0, reviews: 31, img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=1000&q=80', desc: 'Bespoke dressing table with velvet jewelry trays and integrated high-CRI 98+ makeup illumination.' }
        ]
      }
    ]
  },

  // OFFICE
  {
    room: 'Home Office',
    subcategories: [
      {
        name: 'Executive Desks',
        prefix: 'fur-desk',
        items: [
          { name: 'Sovereign Executive Desk with Leather Inlay', material: 'Solid Black Walnut & Italian Leather', finish: 'Smoked Walnut / Espresso Leather Top', dims: 'W 220 × D 95 × H 76 cm', price: 29500, orig: 33000, rating: 5.0, reviews: 34, badge: 'Executive Suite', img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80', desc: 'Commanding executive workstation with concealed magnetic cable management channels and biometric lock drawer.' },
          { name: 'Kanso Minimalist Floating Desk', material: 'European Oak & Steel', finish: 'Natural White Oak / Matte Black Steel', dims: 'W 170 × D 75 × H 75 cm', price: 14500, rating: 4.8, reviews: 47, img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80', desc: 'Slim architectural desk designed for high-focus creative and architectural workflows.' }
        ]
      },
      {
        name: 'Ergonomic Office Chairs',
        prefix: 'fur-ochr',
        items: [
          { name: 'Atelier Executive High-Back Task Chair', material: 'Full-Grain Leather & Cast Aluminum', finish: 'Cognac Leather / Polished Aluminum', dims: 'W 68 × D 68 × H 115-125 cm', price: 11800, orig: 13200, rating: 4.9, reviews: 62, badge: 'Ergonomic Luxury', img: 'https://images.unsplash.com/photo-1580481077195-731da112ba4f?auto=format&fit=crop&w=1000&q=80', desc: 'Pneumatic synchronized tilt mechanism with hand-buffed leather and adjustable active lumbar support.' },
          { name: 'Milo Conference & Meeting Chair', material: 'Charcoal Wool & Brushed Bronze', finish: 'Anthracite Wool / Bronze 5-Star Base', dims: 'W 62 × D 62 × H 88 cm', price: 6800, rating: 4.7, reviews: 29, img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80', desc: 'Swivel conference chair engineered for corporate boardrooms and luxury home studies.' }
        ]
      }
    ]
  },

  // OUTDOOR
  {
    room: 'Outdoor & Terrace',
    subcategories: [
      {
        name: 'Outdoor Lounging',
        prefix: 'fur-out',
        items: [
          { name: 'Amalfi Teak Outdoor 3-Seater Sofa', material: 'Grade-A Burmese Teak & Sunbrella Fabric', finish: 'Natural Weathering Teak / Sand Canvas', dims: 'W 240 × D 95 × H 72 cm', price: 26500, orig: 29500, rating: 4.9, reviews: 43, badge: 'UAE Climate Rated', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80', desc: 'Kiln-dried marine teak with quick-dry reticulated foam cushions built to withstand UAE desert UV and coastal humidity.' },
          { name: 'Riviera Double Sun Lounger Daybed', material: 'Solid Teak & Quick-Dry Foam', finish: 'Natural Teak / Off-White Marine Canvas', dims: 'W 150 × L 200 × H 35 cm', price: 19800, rating: 5.0, reviews: 28, img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80', desc: 'Adjustable 5-position reclining headrests with concealed stainless steel transport wheels.' },
          { name: 'Santorini Concrete Outdoor Dining Table', material: 'Reinforced Fiber Concrete & Teak', finish: 'Chalk White Concrete / Natural Teak Base', dims: 'W 260 × D 100 × H 76 cm', price: 21500, orig: 24000, rating: 4.8, reviews: 35, img: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1000&q=80', desc: 'Stain-resistant sealed architectural concrete top ideal for al fresco dining in Palm Jumeirah villas.' }
        ]
      }
    ]
  },

  // DECOR & LIGHTING
  {
    room: 'Lighting & Objects',
    subcategories: [
      {
        name: 'Architectural Lighting & Mirrors',
        prefix: 'fur-dec',
        items: [
          { name: 'Alabaster Column Floor Lamp', material: 'Spanish Alabaster Stone & Solid Brass', finish: 'Translucent White Alabaster / Satin Brass', dims: 'Dia 22 × H 145 cm (Dimmable)', price: 9200, orig: 10500, rating: 5.0, reviews: 52, badge: 'Illuminated Stone', img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80', desc: 'Light glows through natural minerals in hand-turned Spanish alabaster, creating warm 2700K ambient tranquility.' },
          { name: 'Brutalist Travertine Vanity Mirror', material: 'Solid Roman Travertine & HD Glass', finish: 'Porous Travertine / Beveled Glass', dims: 'W 80 × H 120 × D 6 cm', price: 6800, rating: 4.9, reviews: 67, img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80', desc: 'Massive monolithic stone frame with integrated heavy-duty French cleat wall mounting system.' },
          { name: 'Atlas Hand-Knotted Wool & Silk Rug', material: 'New Zealand Wool & Raw Bamboo Silk', finish: 'Bone Ivory with Subtle Geometric Relief', dims: 'W 300 × L 400 cm (Bespoke Sizing)', price: 18500, orig: 21000, rating: 4.9, reviews: 39, badge: 'Artisanal Weave', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80', desc: 'Hand-knotted with 120 knots per square inch, delivering cloud-like soft underfoot tactile warmth.' }
        ]
      }
    ]
  }
];

// Helper to generate a full comprehensive 210+ products catalog across 62 subcategories
const EXTENDED_SUBCATS = [
  // Additional Living Room
  { name: 'Modular Sofas', room: 'Living Room', basePrice: 32000, prefix: 'fur-msof', mat: 'Textured Linen & Down', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Sectional Sofas', room: 'Living Room', basePrice: 29000, prefix: 'fur-sec', mat: 'Italian Nubuck Leather', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Recliners', room: 'Living Room', basePrice: 16000, prefix: 'fur-rec', mat: 'Full-Grain Leather & Steel', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Ottomans & Poufs', room: 'Living Room', basePrice: 5200, prefix: 'fur-otm', mat: 'Bouclé & Walnut Base', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80' },
  { name: 'TV Units', room: 'Living Room', basePrice: 15500, prefix: 'fur-tvu', mat: 'Smoked Oak & Travertine', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Display Cabinets', room: 'Living Room', basePrice: 22000, prefix: 'fur-cab', mat: 'Walnut & Bronze Glass', img: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Living Bookshelves', room: 'Living Room', basePrice: 18500, prefix: 'fur-bks', mat: 'Solid Oak & Steel Rods', img: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=80' },
  
  // Additional Dining
  { name: 'Bar Tables', room: 'Dining Room', basePrice: 14000, prefix: 'fur-btbl', mat: 'Roman Travertine & Brass', img: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Dining Benches', room: 'Dining Room', basePrice: 8500, prefix: 'fur-dbn', mat: 'Solid Walnut & Leather', img: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Dining Cabinets', room: 'Dining Room', basePrice: 24000, prefix: 'fur-dcab', mat: 'Fluted Oak & Brass Hardware', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80' },

  // Additional Bedroom
  { name: 'Bed Frames', room: 'Bedroom', basePrice: 21000, prefix: 'fur-bdf', mat: 'Solid Walnut & Linen', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Chests of Drawers', room: 'Bedroom', basePrice: 16500, prefix: 'fur-chst', mat: 'Smoked Ash & Leather', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Wardrobes & Armoires', room: 'Bedroom', basePrice: 38000, prefix: 'fur-wdr', mat: 'Fluted Oak & Integrated Lighting', img: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Bedroom Benches', room: 'Bedroom', basePrice: 7800, prefix: 'fur-bbn', mat: 'Bouclé & Walnut Plinth', img: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Bedroom Chairs', room: 'Bedroom', basePrice: 9500, prefix: 'fur-bch', mat: 'Velvet & Brushed Brass', img: 'https://images.unsplash.com/photo-1580481077195-731da112ba4f?auto=format&fit=crop&w=1000&q=80' },

  // Additional Office
  { name: 'Work Desks', room: 'Home Office', basePrice: 13500, prefix: 'fur-wkd', mat: 'Solid Oak & Steel', img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Lounge Office Chairs', room: 'Home Office', basePrice: 14000, prefix: 'fur-lofc', mat: 'Aniline Leather & Walnut Shell', img: 'https://images.unsplash.com/photo-1580481077195-731da112ba4f?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Conference Tables', room: 'Home Office', basePrice: 38000, prefix: 'fur-cnft', mat: 'Solid Black Walnut 4M', img: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Filing Cabinets', room: 'Home Office', basePrice: 8500, prefix: 'fur-flc', mat: 'Smoked Oak & Brass', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Storage Units', room: 'Home Office', basePrice: 16500, prefix: 'fur-ostg', mat: 'Steel & Fluted Glass', img: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=80' },

  // Additional Outdoor
  { name: 'Outdoor Lounge Chairs', room: 'Outdoor & Terrace', basePrice: 9500, prefix: 'fur-och', mat: 'Teak & Weatherproof Weave', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Outdoor Dining Chairs', room: 'Outdoor & Terrace', basePrice: 3400, prefix: 'fur-odch', mat: 'Aluminum & Teak Slats', img: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Sun Loungers', room: 'Outdoor & Terrace', basePrice: 12500, prefix: 'fur-slng', mat: 'Burmese Teak & Mesh', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Outdoor Side Tables', room: 'Outdoor & Terrace', basePrice: 4200, prefix: 'fur-ostb', mat: 'Fiber Concrete & Stone', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Outdoor Accessories', room: 'Outdoor & Terrace', basePrice: 2800, prefix: 'fur-oacc', mat: 'Weatherproof Ceramic & Teak', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80' },

  // Additional Decor & Lifestyle
  { name: 'Table Lamps', room: 'Lighting & Objects', basePrice: 4800, prefix: 'fur-tlmp', mat: 'Travertine Stone & Linen Shade', img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Floor Lamps', room: 'Lighting & Objects', basePrice: 7800, prefix: 'fur-flmp', mat: 'Brushed Brass & Smoked Glass', img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Rugs', room: 'Lighting & Objects', basePrice: 14500, prefix: 'fur-rug', mat: 'Hand-Spun New Zealand Wool', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Ceramic & Stone Vases', room: 'Lighting & Objects', basePrice: 2400, prefix: 'fur-vas', mat: 'Stoneware & Terracotta', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Sculptures & Objects', room: 'Lighting & Objects', basePrice: 4500, prefix: 'fur-sclp', mat: 'Cast Bronze & Calacatta', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Luxury Cushions & Throws', room: 'Lighting & Objects', basePrice: 1600, prefix: 'fur-csh', mat: 'Mongolian Cashmere & Linen', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80' },

  // Premium / Bespoke
  { name: 'Designer Collections', room: 'Premium Bespoke', basePrice: 45000, prefix: 'fur-dsgn', mat: 'Solid Travertine & Bronze', img: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Bespoke Commissions', room: 'Premium Bespoke', basePrice: 55000, prefix: 'fur-bspk', mat: 'Master Joinery & Rare Marble', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Limited Editions', room: 'Premium Bespoke', basePrice: 62000, prefix: 'fur-lmt', mat: 'Numbered Solid Bronze & Oak', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80' },
  { name: 'Signature Pieces', room: 'Premium Bespoke', basePrice: 48000, prefix: 'fur-sgnt', mat: 'Sculptural Calacatta Marble', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80' }
];

let allFurnitureProducts = [];

// 1. Ingest detailed items from structured categories
FURNITURE_CATEGORIES.forEach(cat => {
  cat.subcategories.forEach(sub => {
    sub.items.forEach((item, idx) => {
      allFurnitureProducts.push({
        id: `${sub.prefix}-${String(idx + 1).padStart(2, '0')}`,
        name: item.name,
        category: sub.name,
        room: cat.room,
        collection: idx % 2 === 0 ? 'Maison Forma Icon' : 'Architectural Heritage',
        material: item.material,
        finish: item.finish,
        dimensions: item.dims,
        price: item.price,
        originalPrice: item.orig || Math.round(item.price * 1.15),
        discount: item.orig ? Math.round(((item.orig - item.price) / item.orig) * 100) : 10,
        availability: idx === 0 ? 'In Stock (Dubai Atelier)' : (idx === 1 ? 'Bespoke Order (4-6 Wks)' : 'In Stock'),
        inStock: true,
        stockCount: 3 + (idx * 2),
        rating: item.rating,
        reviewCount: item.reviews,
        isFeatured: idx === 0,
        isNew: idx % 2 === 0,
        isBestSeller: idx === 1 || !!item.badge,
        badge: item.badge,
        shortDescription: item.desc,
        longDescription: `${item.desc} Designed and calibrated for luxury villas and penthouse residences across Dubai and Abu Dhabi. Built with European master joinery and sustainable natural materials that age with enduring grace.`,
        specifications: {
          'Origin': 'Handcrafted in Treviso, Italy & Dubai Design District Atelier',
          'Primary Material': item.material,
          'Surface Finish': item.finish,
          'Overall Dimensions': item.dims,
          'Joinery & Frame': 'Mortise & Tenon FSC-Certified Solid Hardwood Core',
          'UAE In-Home Delivery': 'Complimentary White-Glove Room-of-Choice Setup',
          'Structural Warranty': '5-Year Official UAE Structural Warranty'
        },
        colorOptions: [
          { name: 'Natural Sand / Oak', hex: '#D8C7B5' },
          { name: 'Warm Charcoal / Smoked', hex: '#3B3835' },
          { name: 'Ivory White', hex: '#F2EFE9' },
          { name: 'Tuscan Cognac', hex: '#9E5B32' }
        ],
        materialOptions: [
          { label: 'Standard Atelier Specification', priceDelta: 0 },
          { label: 'Grade 1 Extra Italian Full-Grain Leather', priceDelta: Math.round(item.price * 0.18) },
          { label: 'Roman Travertine / Calacatta Upgrade', priceDelta: Math.round(item.price * 0.25) }
        ],
        images: [
          item.img,
          'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
          'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80'
        ],
        tags: [sub.name, cat.room, item.material.split(' ')[0], 'Luxury Furniture', 'UAE Atelier'],
        craftsmanshipNotes: [
          'Hand-selected natural timber grain matched by master cabinetmakers',
          'Triple-density foam core with channel-tufted sterilized goose feather casing',
          'Precision solid brass levelling feet with non-marking felt pads'
        ],
        whatsInTheBox: [item.name, 'White-Glove Assembly & Levelling Service', 'Natural Material Care Kit & Organic Beeswax', 'Certificate of Authenticity & 5-Year Warranty Pass']
      });
    });
  });
});

// 2. Generate items for all extended subcategories to exceed 200+ distinct products
EXTENDED_SUBCATS.forEach((sub, sIdx) => {
  for (let i = 1; i <= 5; i++) {
    const price = Math.round(sub.basePrice * (0.8 + (i * 0.14)));
    const orig = Math.round(price * 1.15);
    const id = `${sub.prefix}-${String(i).padStart(2, '0')}`;
    const nameVariations = ['Forma Solis', 'Architrave', 'Monolith', 'Veneer Sculpt', 'Kanso Heritage'];
    const pName = `${nameVariations[i - 1]} ${sub.name.slice(0, -1)} 0${i}`;

    allFurnitureProducts.push({
      id: id,
      name: pName,
      category: sub.name,
      room: sub.room,
      collection: i % 2 === 0 ? 'Maison Forma Icon' : 'Architectural Heritage',
      material: sub.mat,
      finish: 'Hand-Rubbed Natural Oil / Satin Hardware',
      dimensions: `W ${120 + i * 25} × D ${60 + i * 8} × H ${45 + i * 10} cm`,
      price: price,
      originalPrice: orig,
      discount: Math.round(((orig - price) / orig) * 100),
      availability: i === 1 ? 'In Stock (Dubai Atelier)' : (i === 4 ? 'Bespoke Commission' : 'In Stock'),
      inStock: true,
      stockCount: 2 + (i * 3),
      rating: Number((4.7 + ((i * 0.08) % 0.3)).toFixed(1)),
      reviewCount: 18 + (i * 12) + (sIdx * 3),
      isFeatured: i === 1 && sIdx % 4 === 0,
      isNew: i % 2 !== 0,
      isBestSeller: i === 2,
      badge: i === 1 ? 'Architectural Series' : undefined,
      shortDescription: `Architectural ${sub.name.toLowerCase()} crafted from ${sub.mat.toLowerCase()} with precision joinery.`,
      longDescription: `The ${pName} exemplifies understated contemporary living. Constructed with uncompromised integrity to harmonize within modern villa spaces across Dubai, Abu Dhabi, and the Emirates.`,
      specifications: {
        'Origin': 'Treviso, Italy & Dubai Design District Atelier',
        'Primary Material': sub.mat,
        'Surface Finish': 'Hand-Rubbed Eco Matte Oil & Wax',
        'Dimensions': `W ${120 + i * 25} × D ${60 + i * 8} × H ${45 + i * 10} cm`,
        'Joinery': 'Traditional Mortise & Tenon Construction',
        'Warranty': '5-Year Official UAE Warranty'
      },
      colorOptions: [
        { name: 'Natural Sand', hex: '#D8C7B5' },
        { name: 'Smoked Charcoal', hex: '#3B3835' },
        { name: 'Warm Cream', hex: '#F2EFE9' }
      ],
      materialOptions: [
        { label: 'Standard Atelier Specification', priceDelta: 0 },
        { label: 'Bespoke Hand-Treated Finish', priceDelta: Math.round(price * 0.15) }
      ],
      images: [
        sub.img,
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80'
      ],
      tags: [sub.name, sub.room, 'Architectural Furniture', 'UAE Luxury'],
      craftsmanshipNotes: [
        'Solid timber sustainably harvested and dried to 8% equilibrium moisture content',
        'Concealed tension bracing ensuring lifetime structural stability'
      ],
      whatsInTheBox: [pName, 'Complimentary In-Home Installation', 'Care Guide & 5-Year Warranty']
    });
  }
});

console.log(`Total Furniture Products Generated: ${allFurnitureProducts.length}`);

// Write file
const fileContent = `import { FurnitureProduct } from './furnitureData';\n\nexport const ALL_FURNITURE_PRODUCTS: FurnitureProduct[] = ${JSON.stringify(allFurnitureProducts, null, 2)};\n`;

fs.writeFileSync(path.join(__dirname, '../src/data/furnitureCatalogData.ts'), fileContent, 'utf8');
console.log('Successfully generated src/data/furnitureCatalogData.ts');
