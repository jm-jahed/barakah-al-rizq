export interface ProductVariant {
  name: string;
  hex: string;
  image?: string;
}

export interface SpecOption {
  label: string;
  priceDelta: number;
}

export interface GadgetProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number; // in AED
  originalPrice?: number; // in AED
  discount?: number; // in %
  rating: number;
  reviewCount: number;
  availability: 'In Stock' | 'Limited Edition' | 'Pre-Order' | 'Showroom Exclusive';
  inStock: boolean;
  stockCount: number;
  isFeatured?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  colorVariants: ProductVariant[];
  storageVariants?: SpecOption[];
  shortDescription: string;
  longDescription: string;
  specifications: Record<string, string>;
  keyFeatures: string[];
  whatsInTheBox: string[];
  images: string[];
  tags: string[];
  uaeWarranty: string;
  badge?: string;
}

export interface TechCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  count: number;
  featuredImage: string;
}

export interface TechJournalArticle {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string[];
  featuredGadgets: string[]; // product IDs
}

export interface EcosystemKit {
  id: string;
  name: string;
  tagline: string;
  description: string;
  targetUser: string;
  coverImage: string;
  basePrice: number;
  savings: number;
  productIds: string[];
  highlights: string[];
}

export const GADGET_CATEGORIES: TechCategory[] = [
  { id: 'smartphones', name: 'Smartphones', iconName: 'Smartphone', description: 'Flagship Grade 5G Handsets with Titanium & Ceramic Chassis', count: 6, featuredImage: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80' },
  { id: 'foldable-phones', name: 'Foldable Phones', iconName: 'Layers', description: 'Zero-Gap Hinges, Tri-Fold Displays & Ultra-Thin Glass', count: 5, featuredImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80' },
  { id: 'tablets', name: 'Tablets', iconName: 'Tablet', description: 'OLED Pro Stylus Canvas & Next-Gen E-Paper Workstations', count: 5, featuredImage: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80' },
  { id: 'laptops', name: 'Laptops', iconName: 'Laptop', description: 'Magnesium Unibody Ultrabooks & Liquid Metal Architecture', count: 6, featuredImage: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80' },
  { id: 'gaming-laptops', name: 'Gaming Laptops', iconName: 'Flame', description: 'Vapor Chamber Dual-Screen Beasts with RTX 4090 Class Power', count: 5, featuredImage: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80' },
  { id: 'desktop-pcs', name: 'Desktop PCs', iconName: 'Cpu', description: 'Open-Loop Liquid-Cooled Masterpieces & Mini-ITX Studio Cubes', count: 5, featuredImage: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80' },
  { id: 'monitors', name: 'Monitors', iconName: 'Monitor', description: '5K Retina Curved, QD-OLED 240Hz & Studio Color Reference Panels', count: 6, featuredImage: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80' },
  { id: 'smartwatches', name: 'Smartwatches', iconName: 'Watch', description: 'Sapphire Crystal, Grade 5 Titanium Cellular Luxury Timepieces', count: 6, featuredImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80' },
  { id: 'fitness-trackers', name: 'Fitness Trackers', iconName: 'Activity', description: 'Titanium Biometric Smart Rings & Continuous ECG Bands', count: 5, featuredImage: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=800&q=80' },
  { id: 'wireless-earbuds', name: 'Wireless Earbuds', iconName: 'Headphones', description: 'Planar Magnetic TWS, Lossless LDAC & Ceramic Acoustic Chambers', count: 6, featuredImage: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80' },
  { id: 'headphones', name: 'Headphones', iconName: 'Volume2', description: 'Open-Back Electrostatic & Hand-Stitched Leather ANC Flagships', count: 6, featuredImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80' },
  { id: 'speakers', name: 'Speakers', iconName: 'Speaker', description: 'Architectural Concrete, High-End Beryllium & Multi-Room Hi-Fi', count: 6, featuredImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80' },
  { id: 'cameras', name: 'Cameras', iconName: 'Camera', description: '100MP Medium Format Mirrorless & Rangefinder Monochrom Gems', count: 6, featuredImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80' },
  { id: 'action-cameras', name: 'Action Cameras', iconName: 'Video', description: '8K 360-Degree Modular & Titanium Sub-Aquatic Adventure Cams', count: 5, featuredImage: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?auto=format&fit=crop&w=800&q=80' },
  { id: 'drones', name: 'Drones', iconName: 'Navigation', description: 'Hasselblad 8K Cinema Gimbal & Carbon-Fiber FPV Acro Rigs', count: 6, featuredImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80' },
  { id: 'gaming-consoles', name: 'Gaming Consoles', iconName: 'Gamepad', description: 'OLED Handheld Cyber Consoles & Custom 4K Micro-Towers', count: 5, featuredImage: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&w=800&q=80' },
  { id: 'gaming-controllers', name: 'Gaming Controllers', iconName: 'Sliders', description: 'Hall-Effect Magnetic Sticks & Custom Carbon Fiber Paddles', count: 5, featuredImage: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80' },
  { id: 'gaming-accessories', name: 'Gaming Accessories', iconName: 'Zap', description: 'Dynamic Ambient Lighting, Haptic Gaming Mats & Headset Stands', count: 5, featuredImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80' },
  { id: 'mechanical-keyboards', name: 'Mechanical Keyboards', iconName: 'Keyboard', description: 'CNC Aluminum Gasket-Mount, Brass Weights & Magnetic Rapid Trigger', count: 6, featuredImage: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80' },
  { id: 'gaming-mice', name: 'Gaming Mice', iconName: 'Mouse', description: '39-Gram Magnesium Skeleton & 8000Hz Polling Optical Sensor Rigs', count: 5, featuredImage: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80' },
  { id: 'streaming-equipment', name: 'Streaming Equipment', iconName: 'Radio', description: 'Broadcast Dynamic Microphones, OLED Studio Decks & 4K Prompters', count: 5, featuredImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80' },
  { id: 'vr-ar-headsets', name: 'VR / AR Headsets', iconName: 'Eye', description: 'Dual 4K Micro-OLED Spatial Computing & Optical Waveguide AR Glasses', count: 6, featuredImage: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80' },
  { id: 'smart-home', name: 'Smart Home', iconName: 'Home', description: 'Thread/Matter Automation Hubs & Architectural Glass Touch Terminals', count: 5, featuredImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80' },
  { id: 'smart-lighting', name: 'Smart Lighting', iconName: 'Sun', description: 'Circadian OLED Panels, Ambient Beam Projectors & Brass Wall Sconces', count: 5, featuredImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80' },
  { id: 'security-cameras', name: 'Security Cameras', iconName: 'Shield', description: 'Dual-Lens 4K Solar AI Perimeter Sentries with Thermal Imaging', count: 5, featuredImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80' },
  { id: 'smart-displays', name: 'Smart Displays', iconName: 'Tv', description: 'Framed E-Paper Wall Calendars & 4K Digital Canvas Displays', count: 5, featuredImage: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80' },
  { id: 'networking', name: 'Networking', iconName: 'Wifi', description: 'Wi-Fi 7 Tri-Band Mesh Nodes & 10Gbps SFP+ Sovereign Gateway Routers', count: 5, featuredImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80' },
  { id: 'power-banks', name: 'Power Banks', iconName: 'BatteryCharging', description: '240W OLED Cyber Banks with Transparent Anodized Enclosures', count: 5, featuredImage: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80' },
  { id: 'chargers', name: 'Chargers', iconName: 'Zap', description: 'GaN Prime 200W Multi-Port Desktop Blocks & Magnetic Qi2 Charging Docks', count: 5, featuredImage: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80' },
  { id: 'usb-c-accessories', name: 'USB-C Accessories', iconName: 'Share2', description: 'Thunderbolt 4 Titan Docks & Titanium Braided Ultra-Flex Cables', count: 5, featuredImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80' },
  { id: 'storage-devices', name: 'Storage Devices', iconName: 'HardDrive', description: 'Biometric Encrypted Touch SSDs & Dual M.2 Cyberpunk Enclosures', count: 5, featuredImage: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80' },
  { id: 'ssds', name: 'SSDs', iconName: 'Database', description: 'PCIe Gen5 14,000MB/s Solid State Storage & Mil-Spec Rugged Armor Drives', count: 5, featuredImage: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80' },
  { id: 'accessories', name: 'Accessories', iconName: 'Box', description: 'Aramid 1500D Carbon Cases, Magnetic Wallets & Precision Cable Organizers', count: 5, featuredImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80' },
  { id: 'car-gadgets', name: 'Car Gadgets', iconName: 'Compass', description: '4K Dual AI Dashcams, Peltier Active Cooling MagSafe Mounts & HUD Projectors', count: 5, featuredImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80' },
  { id: 'travel-gadgets', name: 'Travel Gadgets', iconName: 'Globe', description: 'Global 5G Satellite eSIM Pocket Hubs & Biometric Smart Luggage Trackers', count: 5, featuredImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80' },
  { id: 'productivity-gadgets', name: 'Productivity Gadgets', iconName: 'CheckCircle', description: 'AI Voice Transcription Pins, Macro Dial Docks & E-Ink Note Slates', count: 5, featuredImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80' },
  { id: 'premium-tech-accessories', name: 'Premium Tech Accessories', iconName: 'Feather', description: 'Solid Walnut Dual Monitor Bridges & Hand-Burnished Tuscan Leather Desk Pads', count: 5, featuredImage: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80' },
  { id: 'creator-equipment', name: 'Creator Equipment', iconName: 'Film', description: 'Bi-Color Studio COB Lights, 3-Axis Motorized Time-Lapse Sliders & Rig Cages', count: 5, featuredImage: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=800&q=80' },
  { id: 'ai-gadgets', name: 'AI Gadgets', iconName: 'Sparkles', description: 'Wearable Multimodal Optical Companions & Holographic Desktop AI Orbs', count: 5, featuredImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80' },
  { id: 'emerging-technology', name: 'Emerging Technology', iconName: 'Cpu', description: 'Graphene Thermal Regulated Wearables & Clinical Brainwave EEG Focus Bands', count: 5, featuredImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80' },
];

export const TECH_JOURNAL_ARTICLES: TechJournalArticle[] = [
  {
    id: 'spatial-audio-engineering',
    title: 'The Architecture of Acoustic Absolute: Why Planar Drivers Redefine Listening',
    subtitle: 'From nanometer-thin mylar diaphragms to symmetrical neodymium arrays, how planar magnetic mechanics eliminate harmonic distortion.',
    category: 'Acoustic Science',
    author: 'Dr. Tariq Al-Mansoor — Lead Acoustic Engineer',
    readTime: '6 min read',
    date: 'September 2026',
    coverImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Dynamic drivers push air with a voice coil attached to a cone. Planar magnetic drivers, by contrast, suspend an ultra-thin conductive film across an entire magnetic field, moving the entire surface uniformly for 0.05% THD.',
    content: [
      'In conventional dynamic driver engineering, motion begins at the center of the cone where the voice coil attaches. This creates micro-flexing across the cone surface, introducing intermodulation distortion that muddies transient response.',
      'AETHERA Acoustic Laboratories engineered our custom 50mm Planar-Core diaphragm utilizing a 2-micron aerospace polyimide substrate etched with vapor-deposited pure gold traces. Suspended between dual Push-Pull N52 neodymium arrays, the diaphragm responds to audio signals within 0.003 milliseconds.',
      'When tested in our anechoic research chamber in Dubai Silicon Oasis, the acoustic output produced a flat frequency response from 5Hz to 52kHz with total harmonic distortion measured below 0.038% at 100dB SPL.',
      'For audiophiles and mastering engineers, this level of precision reveals micro-details previously lost: the subtle breath of a vocalist before a note, the room resonance of a grand piano in Vienna, and separation between instruments in complex orchestral arrangements.'
    ],
    featuredGadgets: ['prod-hp-01', 'prod-tws-01', 'prod-spk-01']
  },
  {
    id: 'spatial-computing-vision',
    title: 'Micro-OLED & Waveguide Optics: Designing The Next Computational Medium',
    subtitle: 'Inside the dual 4K micro-displays and sub-millimeter eye-tracking sensors bridging physical workspaces and digital reality.',
    category: 'Spatial Computing',
    author: 'Elena Rostova — Head of Optical Systems',
    readTime: '8 min read',
    date: 'August 2026',
    coverImage: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'The transition from flat rectangular screens to continuous spatial canvas requires pixel densities exceeding 3,800 PPI to completely eliminate the screen-door effect.',
    content: [
      'Human visual acuity requires approximately 60 pixels per degree (PPD) for digital imagery to appear indistinguishable from reality. Traditional VR headsets topped out at 22-26 PPD, leaving visible pixelation that fatigued optical nerves.',
      'By pairing custom Sony semiconductor micro-OLED panels (measuring just 1.3 inches diagonally) with our bespoke 3-element pancake optical assembly, the AETHERA Vision Spatial Headset achieves a record 64 PPD clarity across a 110-degree field of view.',
      'Six ultra-low-latency tracking cameras and two LiDAR depth sensors map room geometry in 4.8 milliseconds, projecting virtual 5K monitors in physical space that remain rock-solid without drifting even when moving across multiple floors.'
    ],
    featuredGadgets: ['prod-vr-01', 'prod-vr-02', 'prod-mon-01']
  },
  {
    id: 'gallium-nitride-revolution',
    title: 'GaN IV Power Density: How 240W Fits Inside Your Pocket',
    subtitle: 'Replacing traditional silicon with Gallium Nitride semiconductors allows power converters to switch at 1.2MHz while remaining cool to the touch.',
    category: 'Power Engineering',
    author: 'Marcus Vance — Power Architect',
    readTime: '5 min read',
    date: 'August 2026',
    coverImage: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Silicon power transistors generate significant thermal dissipation under heavy loads. GaN semiconductors conduct electrons 1,000 times more efficiently, slashing size by 65%.',
    content: [
      'For decades, laptop power bricks were bulky, heavy, and ran scorching hot. The fundamental limit was silicon itself: its bandgap of 1.1eV created electrical resistance that generated heat when handling high voltages.',
      'Gallium Nitride (GaN) features a 3.4eV wide bandgap, allowing switches to operate at tenfold higher frequencies without dielectric breakdown. The resulting inductor and capacitor sizes shrink drastically.',
      'Our AETHERA GaN Titan 240W Desktop Station packs four USB-C Power Delivery 3.1 ports into a chassis no larger than a deck of cards, delivering enough simultaneous juice to charge a 16-inch laptop, an iPad Pro, and a flagship smartphone at full speed.'
    ],
    featuredGadgets: ['prod-chg-01', 'prod-pb-01', 'prod-usb-01']
  },
  {
    id: 'tactile-mechanics-keyboards',
    title: 'Acoustic Dampening & Magnetic Rapid Trigger: The Anatomy of a Masterpiece Keyboard',
    subtitle: 'CNC 6063 aerospace aluminum, poron gasket isolation, and Hall-Effect magnetic switches with 0.1mm actuation customization.',
    category: 'Industrial Design',
    author: 'Kaelen Drake — Hardware Architect',
    readTime: '7 min read',
    date: 'July 2026',
    coverImage: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Typing is the primary tactile feedback loop between mind and machine. We spent 14 months perfecting the sound profile and switch response of our CNC custom lineup.',
    content: [
      'A hollow plastic keyboard vibrates unevenly, creating high-pitched resonance and inconsistent keystrokes. By precision-milling a single 2.4kg block of 6063 aluminum, we create an inert acoustic base.',
      'Inside, a 5-layer sandwich of Poron foam, IXPE switch pads, and PET acoustic sheets isolates the FR4 PCB plate, creating the deep, satisfying "marbly thock" sound sought by enthusiasts.',
      'Our Hall-Effect magnetic switches replace metal contact leaves with electromagnetic sensors, allowing actuation points to be tuned anywhere from 0.1mm to 4.0mm in 0.05mm increments for lightning-fast competitive gaming.'
    ],
    featuredGadgets: ['prod-kb-01', 'prod-kb-02', 'prod-mouse-01']
  }
];

export const ECOSYSTEM_KITS: EcosystemKit[] = [
  {
    id: 'executive-desk-atelier',
    name: 'Executive Minimalist Desk Suite',
    tagline: 'The Pinnacle of Aesthetic Productivity & Cable-Free Luxury',
    description: 'A hand-selected ensemble combining our 5K Retina OLED monitor, CNC mechanical keyboard, solid walnut desk bridge, and GaN 240W charging station for Dubai executives.',
    targetUser: 'Executives, Architects, Founders & Tech Leaders',
    coverImage: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80',
    basePrice: 16890,
    savings: 2190,
    productIds: ['prod-mon-01', 'prod-kb-01', 'prod-mouse-01', 'prod-acc-01', 'prod-chg-01'],
    highlights: ['Single Thunderbolt 4 Cable Architecture', 'Solid CNC Aluminum & American Walnut', 'Circadian Balanced Backlight System', 'Free VIP In-Home Installation in Dubai/Abu Dhabi']
  },
  {
    id: 'pro-cinema-creator-rig',
    name: '8K Cinema & Field Creator Rig',
    tagline: 'Broadcast-Grade Visual Capture & Mobile Editing Power',
    description: 'Engineered for top-tier directors, videographers, and content studios: 100MP Medium Format Camera, 8K Hasselblad Gimbal Drone, and Dual M.2 8TB Thunderbolt Storage.',
    targetUser: 'Cinematographers, Commercial Photographers & Content Studios',
    coverImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    basePrice: 38450,
    savings: 4650,
    productIds: ['prod-cam-01', 'prod-drn-01', 'prod-ssd-01', 'prod-pb-01', 'prod-cre-01'],
    highlights: ['Lossless 8K ProRes 422 HQ Direct to NVMe', 'Carbon Fiber Motorized Gimbal & Slider', 'Mil-Spec Waterproof Pelican Case Included', '2-Year Accidental Damage Protection']
  },
  {
    id: 'sovereign-audiophile-sanctuary',
    name: 'Planar Audiophile Soundstage',
    tagline: 'Zero-Distortion Acoustic Perfection for the Discerning Connoisseur',
    description: 'Combining hand-crafted open-back planar electrostatic headphones, solid concrete & brass Bluetooth reference towers, and lossless lossless DAC.',
    targetUser: 'Audiophiles, Sound Designers & Music Producers',
    coverImage: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80',
    basePrice: 24200,
    savings: 3400,
    productIds: ['prod-hp-01', 'prod-spk-01', 'prod-tws-01', 'prod-hp-02'],
    highlights: ['5Hz – 52kHz Ultra-Wide Frequency Range', 'Hand-Selected Matched Diaphragm Pairs', 'Solid Billet Brass Controls', 'Complimentary Sound Profiling Session in DIFC Showroom']
  }
];

export const SHOWROOM_LOCATIONS = [
  {
    id: 'dubai-mall',
    city: 'Dubai',
    name: 'AETHERA Atelier — The Dubai Mall',
    zone: 'Fashion Avenue Expansion, Level 2 (Opposite Rolex)',
    hours: '10:00 AM – 12:00 Midnight (Daily)',
    phone: '+971 4 394 8800',
    whatsapp: '+971 52 339 4001',
    features: ['Private Sound Sanctuary Listening Suite', 'Live 3D Custom Keyboard Assembly Bar', 'Spatial VR/AR Calibration Zone', 'VIP Espresso Bar & Valet Parking'],
    image: 'https://images.unsplash.com/photo-1567449303183-ae0d6ed1498e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'difc-gate',
    city: 'Dubai',
    name: 'AETHERA Tech Pavilion — DIFC Gate Avenue',
    zone: 'Gate Avenue, South Zone, Level Podium',
    hours: '09:00 AM – 10:00 PM (Sun – Fri)',
    phone: '+971 4 482 1100',
    whatsapp: '+971 52 339 4001',
    features: ['Executive Desk Ergonomics Consultation', 'Enterprise IT & Secure Storage Vault', 'Corporate Gifting Suite', 'Same-Day DIFC Courier Dispatch (< 45 min)'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'abu-dhabi-galleria',
    city: 'Abu Dhabi',
    name: 'AETHERA Experience Hub — The Galleria Al Maryah Island',
    zone: 'Luxury Collection, Level 1',
    hours: '10:00 AM – 11:00 PM (Daily)',
    phone: '+971 2 612 9900',
    whatsapp: '+971 52 339 4001',
    features: ['Cinema Rig & Drone Flight Simulator', 'Smart Home Matter Architecture Wall', 'Personal Concierge Fitting', 'VIP Lounge & Home Delivery Coordination'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
  }
];

export { ALL_GADGET_PRODUCTS, ALL_GADGET_PRODUCTS as ALL_PRODUCTS } from './gadgetsCatalogData';
