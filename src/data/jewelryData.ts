export interface JewelryProduct {
  id: string;
  name: string;
  subtitle: string;
  category: 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets' | 'Diamond' | 'Bridal';
  priceAED: number;
  originalPriceAED?: number;
  material: '18K Yellow Gold' | '18K White Gold' | '18K Rose Gold' | 'Platinum' | 'Sterling Silver';
  gemstone: 'Diamond' | 'Sapphire' | 'Ruby' | 'Emerald' | 'Pearl' | 'Moissanite' | 'None';
  caratWeight?: string;
  dimensions: string;
  weightGrams: string;
  availableSizes: string[];
  inStock: boolean;
  isNewArrival?: boolean;
  isBestseller?: boolean;
  isSignature?: boolean;
  description: string;
  craftsmanship: string;
  images: string[];
  careInstructions: string;
  shippingInfo: string;
}

export interface GemstoneInfo {
  name: string;
  description: string;
  hardness: string;
  origin: string;
  meaning: string;
  care: string;
  image: string;
}

export interface MaterialInfo {
  name: string;
  purity: string;
  description: string;
  durability: string;
  maintenance: string;
}

export interface JewelryJournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
}

export interface JewelryReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  purchasedItem: string;
}

export const JEWELRY_PRODUCTS: JewelryProduct[] = [
  {
    id: "aurelia-solitaire-ring",
    name: "Aurelia Solitaire Ring",
    subtitle: "Classic 1.5 Carat Diamond Solitaire",
    category: "Rings",
    priceAED: 8500,
    material: "18K Yellow Gold",
    gemstone: "Diamond",
    caratWeight: "1.50 ct",
    dimensions: "Band Width: 2.1mm | Setting: 6-Prong Crown",
    weightGrams: "4.2g",
    availableSizes: ["US 5", "US 6", "US 7", "US 8", "US 9"],
    inStock: true,
    isBestseller: true,
    isSignature: true,
    description: "Crafted in glowing 18K yellow gold, the Aurelia Solitaire features a brilliant round-cut lab-grown diamond elevated in a timeless six-prong crown setting.",
    craftsmanship: "Hand-set by master goldsmiths in Dubai with conflict-free diamonds certified for VVS1 clarity and E color.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Clean gently with warm water, mild soap, and a soft microfiber brush. Avoid harsh chemical polishes.",
    shippingInfo: "Complimentary insured courier delivery across UAE within 24-48 hours. Signature required."
  },
  {
    id: "noir-diamond-band",
    name: "Noir Diamond Eternity Band",
    subtitle: "Black & White Diamond Pave Accent",
    category: "Rings",
    priceAED: 3800,
    material: "18K White Gold",
    gemstone: "Diamond",
    caratWeight: "0.85 ct",
    dimensions: "Band Width: 3.5mm",
    weightGrams: "3.8g",
    availableSizes: ["US 5", "US 6", "US 7", "US 8"],
    inStock: true,
    isNewArrival: true,
    description: "Modern elegance redefined with alternating black and white pavé-set diamonds wrapping in a continuous band of 18K white gold.",
    craftsmanship: "Micro-pavé setting under high magnification for maximum light reflection and seamless brilliance.",
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Store in a velvet box separate from other hard gems to prevent micro-scratches.",
    shippingInfo: "Standard 48-hour delivery across all 7 Emirates."
  },
  {
    id: "celeste-pearl-drop-earrings",
    name: "Celeste Pearl Drop Earrings",
    subtitle: "Akoya Freshwater Pearls with Diamond Studs",
    category: "Earrings",
    priceAED: 1850,
    material: "18K Yellow Gold",
    gemstone: "Pearl",
    caratWeight: "0.20 ct total diamond",
    dimensions: "Length: 28mm | Pearl: 9mm Akoya",
    weightGrams: "5.1g pair",
    availableSizes: ["One Size"],
    inStock: true,
    isBestseller: true,
    description: "Luminous lustrous Akoya freshwater pearls suspended beneath delicate marquise-cut diamond studs in 18K warm gold.",
    craftsmanship: "Hand-selected matching pearl pairs showcasing mirror-like luster and pink overtone hues.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Pearls require soft care. Apply perfume and lotion before putting on earrings. Wipe with dry suede cloth.",
    shippingInfo: "Free UAE shipping with custom luxury gift packaging."
  },
  {
    id: "elan-gold-chain",
    name: "Élan Bold Link Chain",
    subtitle: "Solid 18K Gold Statement Necklace",
    category: "Necklaces",
    priceAED: 4500,
    material: "18K Yellow Gold",
    gemstone: "None",
    dimensions: "Length: 45cm (18 inches) | Link Width: 5mm",
    weightGrams: "14.5g",
    availableSizes: ["42cm", "45cm", "50cm"],
    inStock: true,
    isSignature: true,
    description: "Substantial interlocking paperclip links polished to a high mirror sheen, featuring a custom luxury lobster clasp.",
    craftsmanship: "Precision hollowed links engineered for lightweight day-to-night structural integrity and drape.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591475147-380d199c0d70?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Store flat or hanging to avoid link twists. Clean with gold polishing cloth.",
    shippingInfo: "Same-day delivery available in Dubai and Abu Dhabi for orders before 2 PM."
  },
  {
    id: "luna-pave-bracelet",
    name: "Luna Pavé Diamond Cuff",
    subtitle: "Flexible Oval Bangle with Floating Diamond Halo",
    category: "Bracelets",
    priceAED: 5200,
    material: "18K Rose Gold",
    gemstone: "Diamond",
    caratWeight: "1.10 ct",
    dimensions: "Inner Circumference: 16.5cm | Width: 4mm",
    weightGrams: "11.2g",
    availableSizes: ["Small (15cm)", "Medium (16.5cm)", "Large (18cm)"],
    inStock: true,
    isBestseller: true,
    description: "A rose gold hinged cuff encrusted with double-row micro pavé diamonds that capture ambient light from every angle.",
    craftsmanship: "Features an invisible push-lock safety clasp with dual side security latches.",
    images: [
      "https://images.unsplash.com/photo-1611591475147-380d199c0d70?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Depress safety lock firmly when opening. Wipe clean with soft velvet cloth.",
    shippingInfo: "Includes white-glove courier delivery and luxury presentation pouch."
  },
  {
    id: "aurelia-bridal-set",
    name: "Aurelia Royal Bridal Suite",
    subtitle: "Emerald Cut Diamond Ring with Matching Pavé Band",
    category: "Bridal",
    priceAED: 18500,
    material: "Platinum",
    gemstone: "Diamond",
    caratWeight: "3.20 ct total",
    dimensions: "Center Stone: 2.2ct Emerald Cut (VVS1, D Color)",
    weightGrams: "9.8g set",
    availableSizes: ["US 5", "US 6", "US 7", "US 8"],
    inStock: true,
    isSignature: true,
    description: "The pinnacle of high jewelry design: a breathtaking 2.2 carat emerald-cut center diamond framed by platinum claw prongs and flanked by a contoured diamond band.",
    craftsmanship: "Bespoke platinum alloy formulation offering unrivaled durability, white luster, and stone security.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Complimentary annual ultrasonic cleaning and prong inspection included at our Dubai boutique.",
    shippingInfo: "Armored security courier shipment with full transit insurance."
  },
  {
    id: "royal-sapphire-pendant",
    name: "Royal Velvet Sapphire Pendant",
    subtitle: "Ceylon Blue Sapphire Halo Necklace",
    category: "Necklaces",
    priceAED: 6800,
    material: "18K White Gold",
    gemstone: "Sapphire",
    caratWeight: "2.40 ct Sapphire | 0.40 ct Diamonds",
    dimensions: "Pendant: 14mm x 11mm | Chain: 45cm Adjustable",
    weightGrams: "6.5g",
    availableSizes: ["45cm Adjustable"],
    inStock: true,
    isNewArrival: true,
    description: "A deep velvet Ceylon blue oval sapphire encircled by a sparkling brilliant-cut diamond halo in crisp 18K white gold.",
    craftsmanship: "Natural unheated Ceylon sapphire selected for intense royal blue saturation and clarity.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Avoid sudden thermal shock. Clean gently with warm soapy water.",
    shippingInfo: "UAE delivery within 24-48 hours."
  },
  {
    id: "emerald-cut-solitaire-earrings",
    name: "Emerald Cut Stud Earrings",
    subtitle: "Solitaire Emerald Cut Diamonds",
    category: "Earrings",
    priceAED: 4900,
    material: "18K White Gold",
    gemstone: "Diamond",
    caratWeight: "1.60 ct pair",
    dimensions: "Stone size: 7mm x 5mm each",
    weightGrams: "3.4g pair",
    availableSizes: ["One Size"],
    inStock: true,
    description: "Architectural purity featuring twin emerald-cut diamonds mounted in sleek four-prong basket settings with threaded screw-backs.",
    craftsmanship: "Precision facet matching between left and right stones for balanced optical symmetry.",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Ensure screw backs are fastened firmly. Clean with soft cloth.",
    shippingInfo: "Free shipping across UAE."
  },
  {
    id: "solaris-gold-hoops",
    name: "Solaris Sculpted Gold Hoops",
    subtitle: "Ribbed 18K Yellow Gold Huggies",
    category: "Earrings",
    priceAED: 950,
    material: "18K Yellow Gold",
    gemstone: "None",
    dimensions: "Diameter: 18mm | Width: 4.5mm",
    weightGrams: "4.8g pair",
    availableSizes: ["One Size"],
    inStock: true,
    isBestseller: true,
    description: "Chic everyday ribbed huggie hoop earrings with an easy snap closure, hand-polished in rich 18K yellow gold.",
    craftsmanship: "Hollow-cast Italian gold technology for maximum comfort during extended wear.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Snap latch closed gently until click sound is heard.",
    shippingInfo: "Dispatched within 24 hours."
  },
  {
    id: "verona-ruby-tennis-bracelet",
    name: "Verona Ruby Tennis Bracelet",
    subtitle: "Continuous Square-Set Natural Rubies",
    category: "Bracelets",
    priceAED: 7400,
    material: "18K Rose Gold",
    gemstone: "Ruby",
    caratWeight: "4.50 ct total ruby",
    dimensions: "Length: 17.5cm | Width: 3.2mm",
    weightGrams: "9.6g",
    availableSizes: ["16.5cm", "17.5cm", "18.5cm"],
    inStock: true,
    isNewArrival: true,
    description: "A passionate line of vivid pigeon-blood red natural rubies individually channel set in warm 18K rose gold.",
    craftsmanship: "Uniform color grading and table sizing across 52 precision-cut gemstones.",
    images: [
      "https://images.unsplash.com/photo-1611591475147-380d199c0d70?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Clean with mild solution. Avoid impact against hard surfaces.",
    shippingInfo: "Complimentary luxury delivery."
  },
  {
    id: "lumina-diamond-choker",
    name: "Lumina Floating Diamond Choker",
    subtitle: "Minimalist Bezel Set Diamond Strand",
    category: "Diamond",
    priceAED: 9200,
    material: "18K White Gold",
    gemstone: "Diamond",
    caratWeight: "2.80 ct total",
    dimensions: "Length: 38cm - 42cm Adjustable",
    weightGrams: "7.8g",
    availableSizes: ["38cm - 42cm Adjustable"],
    inStock: true,
    isSignature: true,
    description: "Seventeen bezel-set brilliant diamonds appear to float gracefully along a fine, high-strength white gold delicate chain.",
    craftsmanship: "Custom low-profile bezel cups hand-finished for smooth skin contact.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Store flat in provided hardcase.",
    shippingInfo: "Express courier shipment with certificate."
  },
  {
    id: "seraphina-emerald-ring",
    name: "Seraphina Colombian Emerald Ring",
    subtitle: "Octagon Emerald with Tapered Baguette Diamonds",
    category: "Diamond",
    priceAED: 14200,
    material: "18K Yellow Gold",
    gemstone: "Emerald",
    caratWeight: "2.10 ct Emerald | 0.50 ct Diamonds",
    dimensions: "Center: 8.5mm x 6.5mm",
    weightGrams: "5.4g",
    availableSizes: ["US 6", "US 7", "US 8"],
    inStock: true,
    isSignature: true,
    description: "An extraordinary Colombian emerald displaying intense green saturation, accented by crisp tapered baguette side diamonds.",
    craftsmanship: "Classic basket mounting crafted in 18K yellow gold to enhance the natural green resonance.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Emeralds require gentle care. Keep away from ultrasonic cleaners and steamers.",
    shippingInfo: "Insured VIP courier delivery."
  },
  {
    id: "aria-pearl-lariat-necklace",
    name: "Aria Tahitian Pearl Lariat",
    subtitle: "Peacock Black Tahitian Pearl & Diamond Drop",
    category: "Necklaces",
    priceAED: 3400,
    material: "18K White Gold",
    gemstone: "Pearl",
    caratWeight: "0.15 ct Diamond",
    dimensions: "Drop Length: 7cm | Pearl: 11mm Tahitian",
    weightGrams: "8.2g",
    availableSizes: ["45cm + 7cm Drop"],
    inStock: true,
    description: "Seductive peacock black Tahitian pearl suspended from a diamond-accented Y-lariat chain in gleaming white gold.",
    craftsmanship: "Natural Tahitian pearl exhibiting iridescent green and violet overtones.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Store individually. Wipe pearl with soft damp cloth after wear.",
    shippingInfo: "Free delivery across UAE."
  },
  {
    id: "chloe-diamond-pave-ring",
    name: "Chloé Multi-Row Pavé Band",
    subtitle: "Triple Row Diamond Cluster Band",
    category: "Rings",
    priceAED: 4200,
    material: "18K Rose Gold",
    gemstone: "Diamond",
    caratWeight: "1.25 ct",
    dimensions: "Band Width: 5.2mm",
    weightGrams: "5.8g",
    availableSizes: ["US 5", "US 6", "US 7", "US 8"],
    inStock: true,
    description: "Three seamless rows of hand-set micro pavé round brilliant diamonds cast in romantic 18K rose gold.",
    craftsmanship: "Domed outer band contour for exceptional comfort and light refraction.",
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Regular light cleaning maintains brilliant pavé fire.",
    shippingInfo: "Delivered in 24-48 hours."
  },
  {
    id: "marquise-florence-bracelet",
    name: "Florence Marquise Diamond Bracelet",
    subtitle: "Floral Marquise Leaf Link Bracelet",
    category: "Bracelets",
    priceAED: 8900,
    material: "Platinum",
    gemstone: "Diamond",
    caratWeight: "3.50 ct",
    dimensions: "Length: 17cm | Width: 6mm",
    weightGrams: "12.8g",
    availableSizes: ["16cm", "17cm", "18cm"],
    inStock: true,
    isSignature: true,
    description: "Marquise and round diamonds arranged in an organic leaf pattern link sequence crafted in pure platinum.",
    craftsmanship: "Articulated link assembly allows smooth fluid drape along the wrist.",
    images: [
      "https://images.unsplash.com/photo-1611591475147-380d199c0d70?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Inspect latch regularly. Clean with professional jewelry dip.",
    shippingInfo: "VIP Insured Delivery across UAE."
  },
  {
    id: "athena-bridal-tiara-band",
    name: "Athena Chevron Diamond Crown Band",
    subtitle: "V-Shape Nesting Wedding Band",
    category: "Bridal",
    priceAED: 3200,
    material: "18K Yellow Gold",
    gemstone: "Diamond",
    caratWeight: "0.60 ct",
    dimensions: "Point Depth: 4mm | Band: 1.8mm",
    weightGrams: "3.1g",
    availableSizes: ["US 5", "US 6", "US 7", "US 8"],
    inStock: true,
    description: "A graceful V-shaped crown ring studded with round brilliant diamonds, engineered to hug solitaire engagement rings perfectly.",
    craftsmanship: "Contoured curve matched to standard round, pear, and oval ring baskets.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Store paired with engagement ring in twin slit box.",
    shippingInfo: "Free UAE delivery."
  },
  {
    id: "minimalist-gold-stacking-ring",
    name: "Sol Stacking Gold Ring",
    subtitle: "Ultra-Fine 18K Polish Band",
    category: "Rings",
    priceAED: 650,
    material: "18K Yellow Gold",
    gemstone: "None",
    dimensions: "Band Width: 1.5mm",
    weightGrams: "1.8g",
    availableSizes: ["US 4", "US 5", "US 6", "US 7", "US 8"],
    inStock: true,
    description: "Essential minimalist 18K gold band designed for effortless everyday stacking and mixing metals.",
    craftsmanship: "Solid gold casting wire polished to high sheen finish.",
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Wipe clean with cloth.",
    shippingInfo: "Delivered in 24 hours."
  },
  {
    id: "diamond-halo-studs",
    name: "Constellation Diamond Halo Studs",
    subtitle: "Round Brilliant Diamonds with Halo",
    category: "Diamond",
    priceAED: 5600,
    material: "18K White Gold",
    gemstone: "Diamond",
    caratWeight: "1.40 ct total",
    dimensions: "Diameter: 8.5mm",
    weightGrams: "3.6g pair",
    availableSizes: ["One Size"],
    inStock: true,
    isBestseller: true,
    description: "Center round diamonds surrounded by a glittering frame of micro-pavé diamonds to give the illusion of 2+ carat solitaires.",
    craftsmanship: "Invisible micro-prong set halo for seamless shine.",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Clean regularly for maximum sparkle.",
    shippingInfo: "Free insured delivery."
  },
  {
    id: "vintage-art-deco-pendant",
    name: "Art Déco Emerald Pendant",
    subtitle: "Geometric Emerald & Diamond Medallion",
    category: "Necklaces",
    priceAED: 4950,
    material: "18K Yellow Gold",
    gemstone: "Emerald",
    caratWeight: "1.10 ct Emerald | 0.35 ct Diamond",
    dimensions: "Pendant: 20mm x 15mm | Chain: 45cm",
    weightGrams: "7.1g",
    availableSizes: ["45cm"],
    inStock: true,
    description: "1920s inspired geometric medallion featuring a step-cut emerald centered within intricate diamond lace milgrain borders.",
    craftsmanship: "Authentic hand-applied milgrain edging technique.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591475147-380d199c0d70?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Handle delicate milgrain edge gently.",
    shippingInfo: "UAE Courier delivery."
  },
  {
    id: "classic-tennis-necklace",
    name: "Sovereign Diamond Tennis Necklace",
    subtitle: "Full Eternity 10.0 Carat Diamond Strand",
    category: "Diamond",
    priceAED: 24500,
    material: "18K White Gold",
    gemstone: "Diamond",
    caratWeight: "10.20 ct total",
    dimensions: "Length: 42cm (16.5 inch)",
    weightGrams: "28.4g",
    availableSizes: ["42cm", "45cm"],
    inStock: true,
    isSignature: true,
    description: "The ultimate luxury statement: over 10 carats of uniform, brilliant-cut diamonds continuous set in 18K white gold.",
    craftsmanship: "Each stone hand matched for color (F+), clarity (VS1+), and ideal cut proportions.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Store flat in custom velvet display case. Professional annual checkup recommended.",
    shippingInfo: "Armed transport service delivery within UAE."
  },
  {
    id: "valencia-gold-bangle",
    name: "Valencia Twisted Rope Bangle",
    subtitle: "High-Polish 18K Twisted Gold Wire",
    category: "Bracelets",
    priceAED: 2200,
    material: "18K Yellow Gold",
    gemstone: "None",
    dimensions: "Width: 4mm | Oval Fit: 60mm x 50mm",
    weightGrams: "8.5g",
    availableSizes: ["Medium (60mm)", "Large (65mm)"],
    inStock: true,
    description: "Sophisticated twisted rope design cuff crafted in warm 18K yellow gold with concealed click hinge.",
    craftsmanship: "Dual-wire twisted Italian goldsmithing.",
    images: [
      "https://images.unsplash.com/photo-1611591475147-380d199c0d70?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Wipe with gold polish cloth.",
    shippingInfo: "Complimentary shipping."
  },
  {
    id: "pear-cut-bridal-ring",
    name: "Serenade Pear Cut Diamond Ring",
    subtitle: "2.0 Carat Pear Diamond with Hidden Halo",
    category: "Bridal",
    priceAED: 12800,
    material: "18K White Gold",
    gemstone: "Diamond",
    caratWeight: "2.30 ct total",
    dimensions: "Center Stone: 2.0ct Pear Cut",
    weightGrams: "4.6g",
    availableSizes: ["US 5", "US 6", "US 7", "US 8"],
    inStock: true,
    isSignature: true,
    description: "An elongated pear-cut diamond set in a slender pavé band featuring a subtle hidden diamond halo beneath the gallery.",
    craftsmanship: "V-tip prong protecting the pear diamond's delicate point.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Avoid snagging pear tip on heavy knit fabrics.",
    shippingInfo: "Insured courier shipping."
  },
  {
    id: "moissanite-halo-pendant",
    name: "Starlight Moissanite Pendant",
    subtitle: "2.0 Carat Equivalent Cushion Moissanite",
    category: "Necklaces",
    priceAED: 1450,
    material: "Sterling Silver",
    gemstone: "Moissanite",
    caratWeight: "2.0 ct eq",
    dimensions: "Pendant: 10mm x 10mm | Chain: 45cm",
    weightGrams: "4.2g",
    availableSizes: ["45cm"],
    inStock: true,
    isBestseller: true,
    description: "Exceptional brilliance featuring a cushion-cut lab moissanite with fire that surpasses traditional gems, set in rhodium-plated sterling silver.",
    craftsmanship: "Rhodium electroplating prevents tarnish and creates a durable platinum-like white finish.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Clean with mild solution.",
    shippingInfo: "Delivery within 2 days."
  },
  {
    id: "eternity-sapphire-band",
    name: "Veritas Blue Sapphire Band",
    subtitle: "Full Eternity Ceylon Sapphire Ring",
    category: "Rings",
    priceAED: 2950,
    material: "18K White Gold",
    gemstone: "Sapphire",
    caratWeight: "1.80 ct",
    dimensions: "Band Width: 2.8mm",
    weightGrams: "3.9g",
    availableSizes: ["US 5", "US 6", "US 7"],
    inStock: true,
    description: "A continuous ring of rich blue Ceylon sapphires channel-set in high-polish 18K white gold.",
    craftsmanship: "Precision channel setting protects gemstone edges from daily impacts.",
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop"
    ],
    careInstructions: "Store separately.",
    shippingInfo: "UAE Courier delivery."
  }
];

export const GEMSTONE_LIBRARY: GemstoneInfo[] = [
  {
    name: "Diamond",
    description: "The hardest natural mineral on earth, celebrated for unrivaled fire, brilliance, and timeless symbolism.",
    hardness: "10 Mohs Scale",
    origin: "Botswana, Canada, Australia & Certified Lab-Grown",
    meaning: "Eternal Love, Purity & Unbreakable Strength",
    care: "Clean with warm water, dish soap, and a soft toothbrush. Store in padded pouches.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Ceylon Sapphire",
    description: "Renowned for its vivid royal blue saturation and exceptional light reflection.",
    hardness: "9 Mohs Scale",
    origin: "Sri Lanka (Ceylon)",
    meaning: "Wisdom, Royalty & Divine Grace",
    care: "Highly durable gem. Ultrasonic cleaning safe unless fractured.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Colombian Emerald",
    description: "Prized for its lush, vivid green hue and unique internal 'jardin' natural inclusions.",
    hardness: "7.5 - 8 Mohs Scale",
    origin: "Muzo & Chivor Mines, Colombia",
    meaning: "Rebirth, Growth & Passionate Love",
    care: "Gentle wipe with soft micro-cloth. Avoid ultrasonic cleaners and hot water.",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Pigeon-Blood Ruby",
    description: "The king of gemstones, exhibiting an intense crimson red hue with subtle violet undertones.",
    hardness: "9 Mohs Scale",
    origin: "Myanmar & Mozambique",
    meaning: "Vitality, Courage & Flame of Love",
    care: "Clean with mild soapy water. Very durable for daily wear.",
    image: "https://images.unsplash.com/photo-1611591475147-380d199c0d70?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Akoya & Tahitian Pearl",
    description: "Organic gems born from oysters, featuring high luster pink and dark iridescent overtones.",
    hardness: "2.5 - 4.5 Mohs Scale",
    origin: "Japan & French Polynesia",
    meaning: "Purity, Integrity & Calm Elegance",
    care: "Last on, first off. Never submerge in water or expose to perfumes.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Moissanite",
    description: "A rare cosmic mineral recreated in lab settings, boasting higher refractive index and dispersion than diamond.",
    hardness: "9.25 Mohs Scale",
    origin: "Lab Created (Silicon Carbide)",
    meaning: "Modern Brilliance & Environmental Harmony",
    care: "Extremely durable. Clean with standard jewelry solution.",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600&auto=format&fit=crop"
  }
];

export const MATERIAL_LIBRARY: MaterialInfo[] = [
  {
    name: "18K Yellow Gold",
    purity: "75% Pure Gold, 25% Copper & Silver Alloy",
    description: "Rich, warm honey-toned gold formulated for enduring warmth and scratch resistance.",
    durability: "High — Ideal for lifetime heirlooms",
    maintenance: "Polish annually with micro-cloth to restore mirror luster."
  },
  {
    name: "18K White Gold",
    purity: "75% Pure Gold, 25% Palladium & Nickel-Free Alloy",
    description: "Luminous bright white precious metal plated with rhodium for high sheen reflection.",
    durability: "High — Rhodium re-plating recommended every 2-3 years",
    maintenance: "Rhodium dip keeps brilliant cool tone pristine."
  },
  {
    name: "18K Rose Gold",
    purity: "75% Pure Gold, 20% Copper, 5% Silver",
    description: "Romantic blush gold alloy boasting exceptional warmth and vintage appeal.",
    durability: "Very High — Copper content increases structural strength",
    maintenance: "Minimal maintenance required; retains color naturally."
  },
  {
    name: "Platinum (PT950)",
    purity: "95% Pure Platinum",
    description: "Naturally white, dense, hypoallergenic noble metal that never fades or tarnishes.",
    durability: "Extreme — Holds stones with unmatched structural security",
    maintenance: "Develops a desirable satiny patina over time."
  }
];

export const JEWELRY_JOURNAL: JewelryJournalArticle[] = [
  {
    id: "engagement-ring-guide",
    title: "The Ultimate Guide to Selecting an Engagement Ring",
    category: "Bridal & Rings",
    readTime: "6 min read",
    date: "August 28, 2026",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop",
    excerpt: "Understanding the 4 Cs, cut proportions, band metals, and setting styles to create a lifetime heirloom.",
    content: [
      "Choosing an engagement ring is one of the most personal purchasing decisions you will ever make. From understanding how diamond cuts reflect light to selecting the ideal setting metal, every detail plays a crucial role.",
      "The 4 Cs—Cut, Color, Clarity, and Carat Weight—form the foundation of diamond evaluation. While Carat Weight determines physical size, Cut quality dictates how brilliantly the stone sparkles in natural light.",
      "Consider your partner's daily lifestyle when choosing setting style. Low-profile bezel prongs suit active individuals, whereas crown cathedral settings elevate stones for maximal light entry."
    ]
  },
  {
    id: "gold-purity-explained",
    title: "14K, 18K & 24K: Understanding Gold Purity",
    category: "Craftsmanship",
    readTime: "4 min read",
    date: "August 20, 2026",
    image: "https://images.unsplash.com/photo-1611591475147-380d199c0d70?q=80&w=800&auto=format&fit=crop",
    excerpt: "Why 18K gold offers the perfect equilibrium of rich color purity and structural durability.",
    content: [
      "Pure gold (24K) is naturally soft and pliable, making it prone to bending and scratching under daily wear. For fine jewelry, gold is alloyed with copper, silver, or palladium to create lasting strength.",
      "18K gold contains 75% pure gold. This specific ratio preserves the deep warm color of 24K while imparting the tensile strength required to secure precious gemstones permanently.",
      "At Maison Aurelia, all our yellow, white, and rose gold creations are forged strictly in 18K hallmarked solid gold."
    ]
  },
  {
    id: "layering-necklaces-art",
    title: "The Art of Stacking & Layering Fine Necklaces",
    category: "Style & Inspiration",
    readTime: "5 min read",
    date: "August 12, 2026",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
    excerpt: "How to balance chain lengths, link textures, and focal pendants for sophisticated necklines.",
    content: [
      "Necklace layering is an exercise in tactile contrast and proportional spacing. Start with a foundational choker length (38cm-40cm) in fine link or floating bezel design.",
      "Add a mid-length chain (45cm) with a central gemstone pendant or lariat drop to draw the eye downward smoothly.",
      "Finish with a bold 50cm paperclip chain or heavy link strand to ground the entire composition."
    ]
  }
];

export const JEWELRY_REVIEWS: JewelryReview[] = [
  {
    id: "rev-1",
    author: "Fatima Al-Maktoum (Sample Review)",
    location: "Dubai, UAE",
    rating: 5,
    date: "August 2026",
    title: "Exquisite Craftsmanship & Service",
    comment: "Sample Review — Concept Project. The Aurelia Solitaire exceeded all expectations. The clarity of the diamond and warmth of the 18K gold setting are unmatched.",
    purchasedItem: "Aurelia Solitaire Ring"
  },
  {
    id: "rev-2",
    author: "Sophie Laurent (Sample Review)",
    location: "Abu Dhabi, UAE",
    rating: 5,
    date: "August 2026",
    title: "Timeless Bridal Suite",
    comment: "Sample Review — Concept Project. My custom bridal set arrived in white-glove presentation packaging. Elegant, heavy platinum feel with flawless pavé detail.",
    purchasedItem: "Aurelia Royal Bridal Suite"
  },
  {
    id: "rev-3",
    author: "Elena Rostova (Sample Review)",
    location: "DIFC, Dubai",
    rating: 5,
    date: "July 2026",
    title: "Perfect Everyday Gold Link",
    comment: "Sample Review — Concept Project. The Élan link chain has become my signature piece. Beautiful weight and polished Italian link work.",
    purchasedItem: "Élan Bold Link Chain"
  }
];

export const JEWELRY_FAQS = [
  {
    q: "Are your diamonds conflict-free and certified?",
    a: "Yes. All natural diamonds comply strictly with the Kimberley Process. Lab-grown diamonds are IGI/GIA certified for optical purity and grading."
  },
  {
    q: "How does UAE courier shipping work?",
    a: "We provide free insured courier delivery across all 7 Emirates within 24 to 48 hours. A physical signature is required upon receipt."
  },
  {
    q: "Can I request custom ring sizes or engraving?",
    a: "Absoluty. Complimentary laser engraving is available on all smooth gold bands and bridal rings. Quarter sizes are supported upon request."
  },
  {
    q: "What is your return & exchange policy?",
    a: "We offer a 14-day return window for unworn items in original security packaging. Custom engraved and bespoke creations are final sale."
  },
  {
    q: "Do you offer private boutique viewing appointments?",
    a: "Yes. You can book a private consultation at our Dubai studio or request a virtual 1-on-1 video appointment with our master jeweler."
  },
  {
    q: "How do I determine my exact ring size?",
    a: "You can utilize our interactive Ring Size Guide on the website or request a complimentary physical ring sizer delivered to your home in the UAE."
  }
];
