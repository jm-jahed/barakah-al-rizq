export interface PrintProduct {
  id: string;
  name: string;
  category: 'Business Stationery' | 'Marketing Materials' | 'Packaging & Labels' | 'Hospitality & Events' | 'Signage & Displays' | 'Custom Specialty';
  tagline: string;
  description: string;
  startingPriceAED: number;
  popular?: boolean;
  featured?: boolean;
  image: string;
  availableSizes: string[];
  availableMaterials: string[];
  availableFinishes: string[];
  defaultQuantity: number;
  leadTimeDays: string;
  badge?: string;
}

export interface BusinessCardConfig {
  size: 'Standard (85x55mm)' | 'Square (65x65mm)' | 'Slimline (90x45mm)' | 'Custom Shape';
  paper: 'Matte Coated (350gsm)' | 'High Gloss (350gsm)' | 'Textured Linen (300gsm)' | 'Luxury Cotton (450gsm)' | 'Kraft Recycled (300gsm)';
  thickness: 'Standard 300gsm' | 'Heavy 350gsm' | 'Luxury 450gsm Triplex';
  finish: 'Soft Touch Velvet' | 'Spot UV Glaze' | 'Gold Foil Stamping' | 'Embossed Lettering' | 'Rounded Corners' | 'Standard Smooth';
  quantity: 100 | 250 | 500 | 1000 | 2500 | 5000;
  sides: 'Single Sided' | 'Double Sided';
  turnaround: 'Standard (3-4 Days)' | 'Express Priority (24-48h)';
}

export interface InvoiceBookConfig {
  format: 'Duplicate (2-Part)' | 'Triplicate (3-Part)' | 'Quadruplicate (4-Part)';
  size: 'A4 Size' | 'A5 Size' | 'Custom Receipt Size';
  copiesPerBook: 50 | 100;
  bookCount: 5 | 10 | 20 | 50 | 100;
  paperColorSequence: string;
  sequentialNumbering: boolean;
  coverType: 'Hardboard Wrap' | 'Soft Card Cover';
  binding: 'Perforated Stitched' | 'Pad Glued Top';
  companyName: string;
}

export interface DemoOrder {
  id: string;
  client: string;
  product: string;
  quantity: number;
  configSummary: string;
  status: 'In Production' | 'Artwork Review' | 'Finishing' | 'Ready for Dispatch' | 'Delivered';
  stage: string;
  date: string;
  estDelivery: string;
  totalAED: number;
  trackingNumber: string;
}

export interface PrintMaterial {
  id: string;
  name: string;
  category: 'Paper' | 'Finish' | 'Binding';
  description: string;
  tactileFeel: string;
  idealFor: string;
  costModifier: string;
}

export const PRESSORA_METADATA = {
  name: 'PRESSORA',
  eyebrow: 'PRINT PRODUCTION, REIMAGINED',
  tagline: 'Make Every Detail Count.',
  positioning: 'Precision Print & Brand Production',
  subheading: 'From business cards to branded packaging, transform ideas into precision-made print products through one intelligent production experience.',
  location: 'Dubai Production City & Abu Dhabi Print Hubs, UAE',
  demoNotice: 'PRESSORA COMMERCIAL PRINT DEMONSTRATION · Fictional Print Commerce & Production Platform'
};

// -------------------------------------------------------------
// 24 DISTINCT PRINT PRODUCTS (Fully Populated Catalog)
// -------------------------------------------------------------
export const PRESSORA_PRODUCTS: PrintProduct[] = [
  {
    id: 'prod-business-cards',
    name: 'Executive Business Cards',
    category: 'Business Stationery',
    tagline: 'Tactile luxury cardstock with precision edge finishes',
    description: 'Ultra-heavy 450gsm cotton card, soft-touch velvet laminations, and selective spot UV or gold hot-foil debossing.',
    startingPriceAED: 120,
    popular: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['Standard (85x55mm)', 'Square (65x65mm)', 'Slimline (90x45mm)'],
    availableMaterials: ['Luxury Cotton (450gsm)', 'Matte Coated (350gsm)', 'Textured Linen (300gsm)'],
    availableFinishes: ['Soft Touch Velvet', 'Spot UV Glaze', 'Gold Foil Stamping', 'Embossed Lettering'],
    defaultQuantity: 500,
    leadTimeDays: '2–3 Days',
    badge: 'BESTSELLER'
  },
  {
    id: 'prod-invoice-books',
    name: 'NCR Carbonless Invoice Books',
    category: 'Business Stationery',
    tagline: 'Numbered sequential duplicate & triplicate books',
    description: 'High-grade carbonless copy paper with sharp transfer clarity, perforated tear-out sheets, and wrap-around privacy boards.',
    startingPriceAED: 180,
    popular: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['A4 Size', 'A5 Size', 'A6 Size'],
    availableMaterials: ['Duplicate (2-Part)', 'Triplicate (3-Part)', 'Quadruplicate (4-Part)'],
    availableFinishes: ['Sequential Red Numbering', 'Hardcover Binding', 'Perforated Stitched'],
    defaultQuantity: 10,
    leadTimeDays: '3–4 Days',
    badge: 'COMMERCIAL ESSENTIAL'
  },
  {
    id: 'prod-letterheads',
    name: 'Corporate Executive Letterheads',
    category: 'Business Stationery',
    tagline: 'Laser-safe premium watermarked & smooth paper',
    description: 'Smooth 120gsm royal executive bond stock suitable for corporate agreements, laser office printing, and formal notices.',
    startingPriceAED: 160,
    popular: false,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['A4 (210x297mm)', 'US Letter'],
    availableMaterials: ['120gsm Uncoated Smooth', '130gsm Italian Textured Linen', '100gsm Recycled Bright'],
    availableFinishes: ['CMYK Offset Print', 'Metallic Pantone Spot', 'Blind Embossed Crest'],
    defaultQuantity: 500,
    leadTimeDays: '2–3 Days'
  },
  {
    id: 'prod-envelopes',
    name: 'Custom Branded Envelopes',
    category: 'Business Stationery',
    tagline: 'DL, C5, and C4 self-seal security envelopes',
    description: 'Precision die-cut envelopes with inside privacy tinting, peel-and-seal adhesive flaps, and edge-to-edge corporate branding.',
    startingPriceAED: 190,
    popular: false,
    image: 'https://images.unsplash.com/photo-1579208575657-c595a053b9b7?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['DL (220x110mm)', 'C5 (229x162mm)', 'C4 (324x229mm)'],
    availableMaterials: ['120gsm Royal Bond', '140gsm Kraft Brown', '130gsm Textured Laid'],
    availableFinishes: ['Peel & Seal Tape', 'Windowed Front', 'Gold Foil Flap Stamp'],
    defaultQuantity: 500,
    leadTimeDays: '3–4 Days'
  },
  {
    id: 'prod-presentation-folders',
    name: 'Luxury Presentation Folders',
    category: 'Business Stationery',
    tagline: 'Die-cut corporate folders with business card slits',
    description: 'Heavy 350gsm silk board with reinforced glued capacity pockets, document gussets, and soft-touch scratch-resistant coatings.',
    startingPriceAED: 340,
    popular: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['A4 Oversized (Single Pocket)', 'A4 Capacity (Double Pocket with 5mm Spine)'],
    availableMaterials: ['350gsm Silk Card', '400gsm Heavy Artboard', '320gsm Kraft Uncoated'],
    availableFinishes: ['Velvet Soft-Touch', 'Spot UV on Logo', 'Foil Stamped Title'],
    defaultQuantity: 250,
    leadTimeDays: '4–5 Days',
    badge: 'POPULAR'
  },
  {
    id: 'prod-brochures',
    name: 'Marketing Tri-Fold & Bi-Fold Brochures',
    category: 'Marketing Materials',
    tagline: 'High-impact product and company profile brochures',
    description: 'Crisp automated creasing and precision folding on 170gsm to 250gsm silk art paper with rich CMYK optical densities.',
    startingPriceAED: 220,
    popular: true,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['A4 Tri-Fold (6-Panel)', 'A4 Bi-Fold (4-Panel)', 'A5 8-Page Booklet'],
    availableMaterials: ['170gsm Silk Gloss', '200gsm Matte Art', '250gsm Heavy Cover'],
    availableFinishes: ['Matte Lamination', 'Gloss Dispersion Varnish', 'Machine Scored Crease'],
    defaultQuantity: 500,
    leadTimeDays: '2–3 Days'
  },
  {
    id: 'prod-flyers',
    name: 'Promotional Marketing Flyers',
    category: 'Marketing Materials',
    tagline: 'High-speed mass distribution flyers & leaflets',
    description: 'Vibrant offset and digital prints with rapid 24-hour turnaround for retail launches, restaurant campaigns, and corporate events.',
    startingPriceAED: 95,
    popular: true,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['A5 (148x210mm)', 'A6 Postcard', 'DL Slim Flyer', 'A4 Handout'],
    availableMaterials: ['150gsm Glossy Flyer', '170gsm Matte Art', '130gsm Budget Offset'],
    availableFinishes: ['Double Sided Print', 'Single Sided Economy', 'UV Protective Gloss'],
    defaultQuantity: 1000,
    leadTimeDays: '1–2 Days'
  },
  {
    id: 'prod-stickers',
    name: 'Custom Die-Cut Vinyl Stickers',
    category: 'Packaging & Labels',
    tagline: 'Waterproof, scratch-resistant precision contour stickers',
    description: 'Heavyweight monomeric & polymeric vinyl stickers with optical contour cutting, UV-resistant inks, and easy-peel backings.',
    startingPriceAED: 110,
    popular: true,
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['50x50mm Custom Shape', '75x75mm Medium', '100x100mm Large', 'Kiss-Cut Sticker Sheet'],
    availableMaterials: ['Waterproof White Vinyl', 'Clear Transparent BoPP', 'Holographic Metallic', 'Matte Paper Sticker'],
    availableFinishes: ['Matte Vinyl Overcoat', 'Gloss UV Shield', 'Silver Foil Accent'],
    defaultQuantity: 500,
    leadTimeDays: '2–3 Days'
  },
  {
    id: 'prod-labels',
    name: 'Roll Labels & Bottle Packaging Stickers',
    category: 'Packaging & Labels',
    tagline: 'Machine-applied & hand-applied adhesive rolls',
    description: 'High-speed rotary printed label rolls with food-safe and cosmetic-grade adhesives, oil resistance, and metallic foil accents.',
    startingPriceAED: 260,
    popular: false,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['40mm Round Roll', '60x90mm Jar Label', 'Custom Die-Cut Roll'],
    availableMaterials: ['Synthetic PP Water-Resistant', 'Textured Wine Paper', 'Clear Metallic Gold Leaf'],
    availableFinishes: ['Matte Poly-Coating', 'Gloss Laminate', 'Embossed Gold Foil'],
    defaultQuantity: 1000,
    leadTimeDays: '4–5 Days'
  },
  {
    id: 'prod-boxes',
    name: 'Custom Rigid & Mailer Packaging Boxes',
    category: 'Packaging & Labels',
    tagline: 'Bespoke corrugated e-commerce & rigid gift boxes',
    description: 'Custom structural packaging with structural CAD prototypes, inside-outside full-color print, and magnetic closure options.',
    startingPriceAED: 480,
    popular: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['Small Mailer (200x150x50mm)', 'Medium Box (300x200x80mm)', 'Luxury Rigid Box with Foam'],
    availableMaterials: ['E-Flute Corrugated Kraft', 'Rigid Greyboard with Art Paper Wrap', 'Folding SBS Carton'],
    availableFinishes: ['Soft-Touch Matte Wrap', 'Metallic Foil Stamped', 'Custom Die-Cut EVA Foam Insert'],
    defaultQuantity: 250,
    leadTimeDays: '7–10 Days',
    badge: 'PREMIUM PACKAGING'
  },
  {
    id: 'prod-menus',
    name: 'Luxury Restaurant & Lounge Menus',
    category: 'Hospitality & Events',
    tagline: 'Waterproof synthetic sheets and leatherette bound folders',
    description: 'Tear-proof, spill-proof synthetic paper with matte anti-microbial coatings, or screw-post luxury binder presentation.',
    startingPriceAED: 210,
    popular: false,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['A4 Slim Fold', 'A4 Quad Fold', 'Hardcover Board Menu with Screws'],
    availableMaterials: ['Synthetic Waterproof Polyart', '350gsm Laminated Board', 'Faux Leather Spine Folder'],
    availableFinishes: ['Anti-Bacterial Matte Film', 'Gold Corner Protectors', 'Debossed Cover Logo'],
    defaultQuantity: 50,
    leadTimeDays: '3–4 Days'
  },
  {
    id: 'prod-certificates',
    name: 'Formal Award & Honor Certificates',
    category: 'Hospitality & Events',
    tagline: 'Heavy archival paper with gold metallic foil crests',
    description: 'Prestige recognition diplomas on 300gsm textured parchment card with security micro-lines and embossed metallic seals.',
    startingPriceAED: 150,
    popular: false,
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['A4 (210x297mm)', 'US Certificate Size'],
    availableMaterials: ['300gsm Textured Parchment', '350gsm Cotton White', 'Metallic Pearl Card'],
    availableFinishes: ['Hot Stamped Gold Foil Crest', 'Embossed Seal', 'Sequential Security Stamp'],
    defaultQuantity: 100,
    leadTimeDays: '2–3 Days'
  },
  {
    id: 'prod-invitations',
    name: 'VIP & Gala Event Invitations',
    category: 'Hospitality & Events',
    tagline: 'Bespoke event suites with matching foil envelopes',
    description: 'Multi-layer duplexed cardstock with hand-gilded foil edges, custom translucent vellum sleeves, and wax-seal closures.',
    startingPriceAED: 290,
    popular: false,
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['Square (150x150mm)', 'A5 Flat Card', 'Gate-Fold Suite'],
    availableMaterials: ['600gsm Duplex Cotton Board', '350gsm Shimmer Pearl', 'Translucent Vellum Wrap'],
    availableFinishes: ['Gilded Foil Edges', 'Rose Gold Foil Stamping', 'Custom Wax Seal Monogram'],
    defaultQuantity: 150,
    leadTimeDays: '4–5 Days'
  },
  {
    id: 'prod-notebooks',
    name: 'Custom Hardcover Brand Notebooks',
    category: 'Business Stationery',
    tagline: 'Hardbound corporate journals with elastic band & ribbon',
    description: 'Smyth-sewn lay-flat binding with custom printed endpapers, 80gsm cream woodfree lined pages, and debossed cover logos.',
    startingPriceAED: 380,
    popular: true,
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['A5 Executive Journal', 'B5 Meeting Book', 'Pocket Reporter'],
    availableMaterials: ['Faux Leatherette Hardcover', 'Linen Fabric Bound', 'Recycled Kraft Hardboard'],
    availableFinishes: ['Debossed Cover Monogram', 'Color Ribbon Bookmark', 'Matching Elastic Closure'],
    defaultQuantity: 100,
    leadTimeDays: '6–8 Days'
  },
  {
    id: 'prod-calendars',
    name: 'Executive Desktop & Wall Calendars',
    category: 'Business Stationery',
    tagline: 'Wire-O bound calendars with sturdy triangular standees',
    description: 'Thirteen double-sided leaves on 250gsm silk art paper with metallic wire binding and rigid laminated standee bases.',
    startingPriceAED: 240,
    popular: false,
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['Desktop Tent (210x148mm)', 'A3 Wall Calendar Wire-O', 'Slim Tower Calendar'],
    availableMaterials: ['250gsm Silk Art Paper', '300gsm Heavy Card', 'Matte Uncoated Writable'],
    availableFinishes: ['Black / Silver Wire-O Spine', 'Matte UV Base Coat', 'Spot Foil on Logo Cover'],
    defaultQuantity: 100,
    leadTimeDays: '5–6 Days'
  },
  {
    id: 'prod-roll-up-banners',
    name: 'Luxury Roll-Up Display Banners',
    category: 'Signage & Displays',
    tagline: 'Heavyweight tear-resistant banner with aluminum cassette',
    description: 'High-resolution 1200DPI printed blackout greyback film that remains 100% flat without curling edges, mounted on a sleek chrome base.',
    startingPriceAED: 180,
    popular: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['85 × 200 cm Standard', '100 × 200 cm Wide', '120 × 200 cm Grand'],
    availableMaterials: ['Curl-Free Blackout PET Film', 'Polymeric Smooth Banner', 'Fabric Textile'],
    availableFinishes: ['Luxury Wide Base Cassette', 'Padded Carry Bag Included', 'High-Gloss / Matte UV Shield'],
    defaultQuantity: 1,
    leadTimeDays: '24 Hours',
    badge: 'SAME DAY AVAILABLE'
  },
  {
    id: 'prod-outdoor-banners',
    name: 'Heavy-Duty Outdoor Vinyl Banners',
    category: 'Signage & Displays',
    tagline: 'Weatherproof reinforced hem and brass eyelet banners',
    description: '510gsm frontlit PVC or breathable windproof mesh banners printed with fade-resistant UV outdoor inks.',
    startingPriceAED: 140,
    popular: false,
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['2 × 1 Meter', '3 × 1.5 Meter', 'Custom Architectural Length'],
    availableMaterials: ['510gsm Heavy Frontlit PVC', 'Windproof Perforated Mesh', 'Reflective Night Banner'],
    availableFinishes: ['Welded Perimeter Hems', 'Brass Eyelets Every 50cm', 'Pole Pockets Top & Bottom'],
    defaultQuantity: 1,
    leadTimeDays: '1–2 Days'
  },
  {
    id: 'prod-acrylic-signage',
    name: 'Architectural Acrylic & Foam Board Signage',
    category: 'Signage & Displays',
    tagline: 'Laser-cut crystal acrylic wall plaques with standoffs',
    description: '5mm to 10mm cast acrylic with sub-surface reverse UV print, polished beveled edges, and brushed stainless-steel wall spacers.',
    startingPriceAED: 280,
    popular: false,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['A3 Wall Plaque', '600 × 400 mm Board', 'Custom 3D Logo Cutout'],
    availableMaterials: ['5mm Clear Cast Acrylic', '8mm Frosted Acrylic', '10mm High-Density Forex Foam'],
    availableFinishes: ['Brushed Metal Standoffs', 'Flame-Polished Edges', 'Reverse Sub-Surface Print'],
    defaultQuantity: 1,
    leadTimeDays: '3–4 Days'
  },
  {
    id: 'prod-thank-you-cards',
    name: 'E-Commerce Thank You & Insert Cards',
    category: 'Packaging & Labels',
    tagline: 'Postcard-sized unboxing delight cards for packages',
    description: '350gsm silk art cards with soft-touch lamination, social media prompts, discount coupon scratch panels, or gold foil titles.',
    startingPriceAED: 110,
    popular: true,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['A6 Postcard (105x148mm)', 'Square (100x100mm)', 'Bookmark Insert'],
    availableMaterials: ['350gsm Matte Art', '300gsm Textured Felt', 'Recycled Eco Kraft'],
    availableFinishes: ['Velvet Soft-Touch', 'Spot UV Accents', 'Gold Foil Title'],
    defaultQuantity: 500,
    leadTimeDays: '2–3 Days'
  },
  {
    id: 'prod-gift-cards',
    name: 'Retail Gift Cards & Voucher Sleeves',
    category: 'Packaging & Labels',
    tagline: 'Vouchers with sequential barcodes & scratch-off panels',
    description: 'Heavy 400gsm laminated cardstock or PVC plastic cards paired with custom-folded presentation gift envelopes.',
    startingPriceAED: 190,
    popular: false,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['Credit Card Size (85x54mm)', 'DL Voucher with Envelope', 'Folded Voucher Card'],
    availableMaterials: ['400gsm Heavy Card', '0.76mm Rigid Plastic PVC', '300gsm Pearlescent Board'],
    availableFinishes: ['Scratch-Off Silver Latex Panel', 'Sequential Barcode / QR', 'Matching Die-Cut Envelope'],
    defaultQuantity: 250,
    leadTimeDays: '3–4 Days'
  },
  {
    id: 'prod-hang-tags',
    name: 'Fashion & Apparel Hang Tags',
    category: 'Packaging & Labels',
    tagline: 'Garment swing tags with eyelets and luxury cords',
    description: 'Double-thick 600gsm duplexed boards with punched drill holes, brass eyelets, and waxed cotton or satin ribbon strings.',
    startingPriceAED: 140,
    popular: false,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['50 × 90 mm Rectangular', 'Custom Die-Cut Silhouette', 'Double-Layer Tag Set'],
    availableMaterials: ['600gsm Duplex Board', '350gsm Kraft Card', 'Translucent Frost Acetate Layer'],
    availableFinishes: ['Brass / Black Metal Eyelet', 'Debossed Brand Logo', 'Waxed String with Safety Pin'],
    defaultQuantity: 500,
    leadTimeDays: '3–4 Days'
  },
  {
    id: 'prod-booklets-catalogs',
    name: 'Annual Reports & Product Catalogs',
    category: 'Marketing Materials',
    tagline: 'Saddle-stitched and perfect-bound multi-page publications',
    description: 'From 8-page showcase lookbooks to 120-page perfect-bound product catalogs on premium coated and uncoated internal stocks.',
    startingPriceAED: 420,
    popular: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['A4 Portrait Booklet', 'A5 Landscape Catalog', 'Square 210x210mm Book'],
    availableMaterials: ['300gsm Cover / 150gsm Inside Leaves', 'Heavy Silk with Matte Lamination'],
    availableFinishes: ['Saddle-Stitched Wire Staples', 'PUR Perfect Bound Spine', 'Spot UV Cover Accents'],
    defaultQuantity: 100,
    leadTimeDays: '4–6 Days',
    badge: 'EDITORIAL EXCELLENCE'
  },
  {
    id: 'prod-paper-bags',
    name: 'Luxury Branded Shopping Bags',
    category: 'Packaging & Labels',
    tagline: 'Reinforced boutique paper bags with cotton rope handles',
    description: 'Hand-assembled 250gsm kraft or coated art paper with card-reinforced bottoms, turned top edges, and woven cotton cord handles.',
    startingPriceAED: 390,
    popular: true,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['Small Boutique (200x250x90mm)', 'Medium Retail (320x260x120mm)', 'Large Fashion Bag'],
    availableMaterials: ['250gsm Art Paper (Matte Laminated)', '180gsm Eco Brown Kraft', 'White Ribbed Kraft'],
    availableFinishes: ['Grosgrain Ribbon Handle', 'Cotton Twisted Cord', 'Hot Foil Stamped Logo'],
    defaultQuantity: 250,
    leadTimeDays: '7–10 Days'
  },
  {
    id: 'prod-desk-pads',
    name: 'Executive Desk Planning Pads',
    category: 'Business Stationery',
    tagline: '50-sheet tear-off weekly planners and memo blocks',
    description: 'Padded top glue with sturdy greyboard backing, printed on 90gsm uncoated bright white paper that prevents ink bleed-through.',
    startingPriceAED: 170,
    popular: false,
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['A3 Desk Planner', 'A4 Weekly Organizer', 'A5 Desk Notepad'],
    availableMaterials: ['90gsm Uncoated High-White', '100gsm Recycled Offset Paper'],
    availableFinishes: ['Glued Top Edge Padding', '800gsm Heavy Greyboard Backing', 'Corner Vinyl Protectors'],
    defaultQuantity: 50,
    leadTimeDays: '3–4 Days'
  }
];

// -------------------------------------------------------------
// 20+ DEMO ORDERS (Deterministic Simulated Operations Data)
// -------------------------------------------------------------
export const PRESSORA_DEMO_ORDERS: DemoOrder[] = [
  {
    id: 'ORD-9901',
    client: 'Al Futtaim Horizon Ventures',
    product: 'Executive Business Cards (1,000 Units)',
    quantity: 1000,
    configSummary: '450gsm Cotton • Soft-Touch • Gold Foil • Standard 85x55mm',
    status: 'In Production',
    stage: 'Heidelberg 4-Color Offset Press Run',
    date: '05 Sep 2026',
    estDelivery: 'Tomorrow, 14:00 GST',
    totalAED: 480,
    trackingNumber: 'TRK-DXB-88019'
  },
  {
    id: 'ORD-9902',
    client: 'Emirates Medical Partners LLC',
    product: 'Triplicate NCR Invoice Books (25 Books)',
    quantity: 25,
    configSummary: 'Triplicate 3-Part • Sequential Red Numbering • A4 Hardcover',
    status: 'Finishing',
    stage: 'Perforation & Spine Stitching Binding',
    date: '04 Sep 2026',
    estDelivery: 'Today, 18:00 GST',
    totalAED: 750,
    trackingNumber: 'TRK-DXB-88020'
  },
  {
    id: 'ORD-9903',
    client: 'Jumeirah Palm Gourmet FZCO',
    product: 'Waterproof Restaurant Menus (80 Units)',
    quantity: 80,
    configSummary: 'Synthetic Polyart • Anti-Bacterial Matte Film • A4 Slim Quad-Fold',
    status: 'Ready for Dispatch',
    stage: 'Quality Inspection Approved & Packed in Moisture Shield',
    date: '04 Sep 2026',
    estDelivery: 'Out for Courier Dispatch',
    totalAED: 640,
    trackingNumber: 'TRK-DXB-88021'
  },
  {
    id: 'ORD-9904',
    client: 'Apex Capital Advisors DIFC',
    product: 'Luxury Presentation Folders (500 Units)',
    quantity: 500,
    configSummary: '350gsm Silk Card • Velvet Lamination • Spot UV Logo • Capacity Pocket',
    status: 'In Production',
    stage: 'Autoplate Die-Cutting & Pocket Gluing',
    date: '05 Sep 2026',
    estDelivery: '08 Sep 2026',
    totalAED: 1150,
    trackingNumber: 'TRK-DXB-88022'
  },
  {
    id: 'ORD-9905',
    client: 'Bloom & Petal Florals Dubai',
    product: 'Custom Roll Labels (3,000 Labels)',
    quantity: 3000,
    configSummary: 'Synthetic White BoPP • Gold Hot-Stamp • 50mm Round Roll',
    status: 'Artwork Review',
    stage: 'Prepress Vector Bleed & Trap Verification',
    date: '06 Sep 2026',
    estDelivery: '09 Sep 2026',
    totalAED: 520,
    trackingNumber: 'TRK-DXB-88023'
  },
  {
    id: 'ORD-9906',
    client: 'Dubai FinTech Summit 2026',
    product: 'Luxury Roll-Up Display Banners (6 Units)',
    quantity: 6,
    configSummary: 'Curl-Free Blackout PET • 100x200cm Chrome Luxury Base',
    status: 'Ready for Dispatch',
    stage: 'Mounted in Aluminum Cassettes & Quality Checked',
    date: '05 Sep 2026',
    estDelivery: 'Today, 16:30 GST',
    totalAED: 1080,
    trackingNumber: 'TRK-DXB-88024'
  },
  {
    id: 'ORD-9907',
    client: 'Swiss Heritage Watchmaking',
    product: 'VIP Gala Event Invitations (200 Units)',
    quantity: 200,
    configSummary: '600gsm Duplex Board • Gilded Gold Edges • Wax Monogram Seal',
    status: 'In Production',
    stage: 'Hand Foil-Gilding Edge Chamber',
    date: '03 Sep 2026',
    estDelivery: '07 Sep 2026',
    totalAED: 920,
    trackingNumber: 'TRK-DXB-88025'
  },
  {
    id: 'ORD-9908',
    client: 'Clean Beverage Group FZE',
    product: 'Custom E-Commerce Packaging Boxes (500 Units)',
    quantity: 500,
    configSummary: 'E-Flute Corrugated • Full Color Interior & Exterior • 250x180x80mm',
    status: 'In Production',
    stage: 'Rotary Die-Cut Slotting & Gluing',
    date: '02 Sep 2026',
    estDelivery: '10 Sep 2026',
    totalAED: 1850,
    trackingNumber: 'TRK-DXB-88026'
  },
  {
    id: 'ORD-9909',
    client: 'Al Ain Fresh Farms',
    product: 'A5 Promotional Flyers (5,000 Units)',
    quantity: 5000,
    configSummary: '170gsm Gloss Art Paper • Double-Sided CMYK Print • Precision Cut',
    status: 'Delivered',
    stage: 'Courier Handover Signed by Receiving Dock',
    date: '01 Sep 2026',
    estDelivery: 'Delivered 03 Sep 2026',
    totalAED: 380,
    trackingNumber: 'TRK-DXB-88027'
  },
  {
    id: 'ORD-9910',
    client: 'Red Sea Fishery Ventures',
    product: 'Waterproof Product Insert Tags (2,000 Units)',
    quantity: 2000,
    configSummary: 'Synthetic PP • Eyelet Punched • Waterproof Inks',
    status: 'Delivered',
    stage: 'Delivered to JAFZA Logistics Hub',
    date: '30 Aug 2026',
    estDelivery: 'Delivered 02 Sep 2026',
    totalAED: 490,
    trackingNumber: 'TRK-DXB-88028'
  }
];

// -------------------------------------------------------------
// PRINT PRODUCTION STATS (Simulated)
// -------------------------------------------------------------
export const PRESSORA_PRODUCTION_STATS = {
  activeOrders: 128,
  inProduction: 42,
  artworkReview: 17,
  finishing: 23,
  readyForDispatch: 31,
  dailyPressImpressionCapacity: '450,000 Sheets',
  onTimeDeliveryRate: '99.8%',
  colorAccuracyDeltaE: '< 1.5 ΔE'
};

// -------------------------------------------------------------
// PRINT MATERIALS & FINISHES LIBRARY
// -------------------------------------------------------------
export const PRINT_MATERIALS: PrintMaterial[] = [
  {
    id: 'mat-cotton',
    name: 'Luxury Cotton (450gsm)',
    category: 'Paper',
    description: '100% pure cotton fiber board with rich natural texture and pillowy debossing depth.',
    tactileFeel: 'Soft, velvety, ultra-heavyweight',
    idealFor: 'Executive business cards, luxury invitations, certificates',
    costModifier: '+ AED 45 / 100u'
  },
  {
    id: 'mat-silk',
    name: 'Silk Artboard (350gsm)',
    category: 'Paper',
    description: 'Triple-coated ultra-smooth artboard engineered for intense color saturation and razor-sharp text.',
    tactileFeel: 'Crisp, silky-smooth, rigid',
    idealFor: 'Presentation folders, greeting cards, catalog covers',
    costModifier: 'Standard Base'
  },
  {
    id: 'mat-soft-touch',
    name: 'Velvet Soft-Touch Film',
    category: 'Finish',
    description: 'Micro-thin optical laminate that gives print an unmistakable peach-skin velvet tactile feel.',
    tactileFeel: 'Ultra-matte, warm velvet touch',
    idealFor: 'Business cards, folders, packaging cartons',
    costModifier: '+ AED 30 / 100u'
  },
  {
    id: 'mat-spot-uv',
    name: 'Raised Spot UV Glaze',
    category: 'Finish',
    description: 'Gloss polymer varnish applied selectively over logos and patterns to create brilliant 3D contrast.',
    tactileFeel: 'Glass-like high gloss 3D relief',
    idealFor: 'Logos, text accents, decorative geometric patterns',
    costModifier: '+ AED 35 / 100u'
  },
  {
    id: 'mat-foil',
    name: 'Hot Foil Stamping (Gold / Silver)',
    category: 'Finish',
    description: 'Metallic leaf permanently fused into paper fibers under heat and high tonnage pressure.',
    tactileFeel: 'Reflective metallic indent',
    idealFor: 'Monograms, company crests, certificate seals',
    costModifier: '+ AED 50 / 100u'
  },
  {
    id: 'mat-pur-binding',
    name: 'PUR Perfect Binding',
    category: 'Binding',
    description: 'Polyurethane reactive adhesive binding providing supreme spine durability and lay-flat capability.',
    tactileFeel: 'Clean square spine, high tensile hold',
    idealFor: 'Annual reports, lookbooks, corporate catalogs',
    costModifier: '+ AED 8 / book'
  }
];

// -------------------------------------------------------------
// 3 CURATED PRINT SUITES
// -------------------------------------------------------------
export const PRINT_SUITES = [
  {
    id: 'suite-corporate',
    title: 'Business Essentials Kit',
    subtitle: 'Everything a growing enterprise needs to project authority',
    description: 'Includes 1,000 Executive Business Cards, 500 Letterheads, 500 DL Envelopes, 10 Duplicate Invoice Books, and 250 Presentation Folders.',
    startingAED: 990,
    itemsCount: '5 Core Products',
    badge: 'MOST POPULAR FOR CORPORATES'
  },
  {
    id: 'suite-marketing',
    title: 'Campaign & Event Kit',
    subtitle: 'Turn foot traffic into customers with high-impact visuals',
    description: 'Includes 2,500 A5 Marketing Flyers, 500 Tri-Fold Brochures, 2 Luxury Roll-Up Banners, 1,000 Die-Cut Vinyl Stickers, and 500 Thank You Cards.',
    startingAED: 840,
    itemsCount: '5 Promotional Products',
    badge: 'MARKETING FAVORITE'
  },
  {
    id: 'suite-hospitality',
    title: 'F&B & Hospitality Suite',
    subtitle: 'Durable, waterproof, and beautifully finished',
    description: 'Includes 50 Waterproof Synthetic Menus, 2,000 Table Placemat Flyers, 1,000 Roll Packaging Labels, and 250 Branded Receipt Books.',
    startingAED: 780,
    itemsCount: '4 Specialized Products',
    badge: 'RESTAURANT & CAFE READY'
  }
];

export const PRESSORA_ORDERS = PRESSORA_DEMO_ORDERS;

