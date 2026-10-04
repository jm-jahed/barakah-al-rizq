const fs = require('fs');
const path = require('path');

const CATEGORIES_DEF = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    prefix: 'prod-sp',
    items: [
      {
        name: 'AETHERA Apex 1 Pro Titanium',
        brand: 'AETHERA Atelier',
        subcat: 'Flagship 5G Phone',
        price: 5999,
        orig: 6499,
        rating: 4.9,
        reviews: 214,
        img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80',
          'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80'
        ],
        badge: 'Flagship of the Year',
        isFeatured: true,
        isNew: true,
        isBestSeller: true,
        colors: [{ name: 'Raw Natural Titanium', hex: '#A8A9AD' }, { name: 'Obsidian Space Black', hex: '#1C1D1F' }, { name: 'Desert Dune Gold', hex: '#D4AF37' }],
        storage: [{ label: '512GB NVMe / 16GB RAM', priceDelta: 0 }, { label: '1TB Ultra / 24GB RAM', priceDelta: 900 }, { label: '2TB Sovereign / 32GB RAM', priceDelta: 1900 }],
        desc: 'Forged from Grade 5 aerospace titanium with custom neural coprocessor and 1-inch Sony LYT-900 sensor array.',
        longDesc: 'The AETHERA Apex 1 Pro represents the absolute zenith of luxury mobile engineering. Every chassis is precision CNC-machined for 4.5 hours from a solid billet of aerospace-grade titanium, then hand-buffed with microscopic ceramic beads. Featuring an ultra-bright 3,200 nit LTPO 120Hz micro-quad curved display and our proprietary Neural ISP capable of 4K 120fps Dolby Vision cinematic capture.',
        specs: { 'Display': '6.82" 2K LTPO 4.0 AMOLED 1-120Hz (3,200 nits)', 'Processor': 'Snapdragon 8 Gen 4 Extreme + AETHERA Neural ISP', 'RAM & Storage': '16GB/24GB LPDDR5X + up to 2TB UFS 4.0', 'Camera System': '50MP 1-inch LYT-900 + 50MP Periscope 5x + 50MP Ultra-Wide', 'Battery & Charging': '5,600mAh Silicon-Carbon + 120W GaN Flash + 50W Qi2', 'Build Materials': 'Grade 5 Aerospace Titanium + Sapphire Glass Shield', 'Water Resistance': 'IP68 / IP69 Submersible (up to 3m for 1 hr)' },
        features: ['1-Inch Sony LYT-900 Sensor with Variable Physical Aperture (f/1.4 - f/4.0)', 'Micro-Curved Sapphire Front & Back Shield with Diamond Coating', 'Silicon-Carbon High-Density Battery with 1,600-Cycle Longevity', 'Direct Satellite Emergency Voice & SOS Telemetry in UAE Desert']
      },
      {
        name: 'Ceramica Ultra S25 Sovereign',
        brand: 'LUMEN Forge',
        subcat: 'Ceramic Flagship',
        price: 6899,
        orig: 7299,
        rating: 4.8,
        reviews: 98,
        img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80',
        gallery: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80'],
        badge: 'Limited Ceramic',
        isFeatured: false,
        isNew: true,
        isBestSeller: false,
        colors: [{ name: 'Pure Zirconia White', hex: '#F5F5F7' }, { name: 'Mirror Obsidian Black', hex: '#0D0D0E' }],
        storage: [{ label: '1TB Storage / 16GB RAM', priceDelta: 0 }, { label: '2TB Studio / 24GB RAM', priceDelta: 1200 }],
        desc: 'Kiln-fired Zirconia ceramic body polished to diamond lustre with 200MP periscope zoom optics.',
        longDesc: 'Engineered for those who refuse compromise. Sintered at 1,480°C for 72 hours, the microcrystalline ceramic back is virtually impervious to micro-scratches. Powered by a custom tuned silicon architecture and bespoke titanium camera ring.',
        specs: { 'Display': '6.8" Dynamic AMOLED 2X 120Hz', 'Processor': 'Snapdragon 8 Gen 4 Custom Core', 'Camera': '200MP ISOCELL HP2 + 50MP 10x Periscope', 'Build': 'Microcrystalline Sintered Ceramic', 'Battery': '5,500mAh 100W Fast Charge' },
        features: ['Hardness rating of 8.5 Mohs scratch-proof ceramic unibody', 'Optical 10x continuous telephoto periscope zoom', 'Quad stereo speakers tuned by Bang & Olufsen']
      },
      {
        name: 'Vantage Phone 2 Pure Slate',
        brand: 'Vantage Mobile',
        subcat: 'Minimalist Flagship',
        price: 4299,
        orig: 4799,
        rating: 4.7,
        reviews: 142,
        img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80',
        gallery: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80'],
        isFeatured: false,
        isNew: false,
        isBestSeller: true,
        colors: [{ name: 'Slate Grey', hex: '#4A4C50' }, { name: 'Alabaster Silver', hex: '#D8D9DC' }],
        desc: 'Monochrome minimalist OS with tactile haptic dial and zero bloatware architecture.',
        longDesc: 'A phone designed to restore focus without sacrificing modern power. The sandblasted matte aluminum chassis houses an ultra-fluid 120Hz display, mechanical focus toggle switch, and clean monochrome interface.',
        specs: { 'Display': '6.55" 120Hz OLED 10-bit', 'Processor': 'Dimensity 9300+ Octa-Core', 'Camera': '50MP Dual Sony IMX890', 'Weight': '182g Ultra-Light' },
        features: ['Tactile knurled aluminum notification mute slider', 'Zero-bloatware minimalist operating system', 'Custom micro-vibration haptic motor']
      },
      {
        name: 'AETHERA Cipher Zero Encrypted Phone',
        brand: 'AETHERA Sovereign',
        subcat: 'Hardware Encrypted Phone',
        price: 8999,
        rating: 5.0,
        reviews: 64,
        img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1000&q=80',
        gallery: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80'],
        badge: 'Enterprise Security',
        isFeatured: true,
        isNew: true,
        isBestSeller: false,
        colors: [{ name: 'Matte Stealth Carbon', hex: '#141416' }],
        desc: 'Dual hardware kill-switches for camera & microphone with sovereign EAL6+ biometric enclave.',
        longDesc: 'Designed for UAE diplomatic, executive, and sovereign private communication. Features physical mechanical switches that physically cut electrical power to cameras, microphones, and cellular baseband.',
        specs: { 'Security Enclave': 'Dual EAL6+ Certified Hardware Security Modules', 'Display': '6.7" OLED 120Hz Privacy Filter Polarizer', 'Kill Switches': 'Physical Cam/Mic/RF Micro-switches', 'OS': 'Aethera Hardened SecureOS' },
        features: ['Hardware air-gap switch physically disconnects microphones and camera power', 'Built-in quantum-resistant encryption key exchange', 'DIFC & ADGM enterprise fleet management ready']
      },
      {
        name: 'Sony Xperia 1 VI Cinema Edition',
        brand: 'Sony',
        subcat: 'Pro Creator Phone',
        price: 5299,
        orig: 5699,
        rating: 4.8,
        reviews: 87,
        img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80',
        gallery: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80'],
        colors: [{ name: 'Platinum Silver', hex: '#C0C0C0' }, { name: 'Khaki Green', hex: '#3B443B' }, { name: 'Black', hex: '#111111' }],
        desc: 'Continuous 85-170mm true optical zoom telephoto lens with dedicated two-stage shutter release.',
        longDesc: 'Co-developed with Alpha camera engineers, providing CineAlta color science, 4K 120fps HDR video across all rear cameras, and 3.5mm hi-res audiophile audio jack.',
        specs: { 'Optics': 'Zeiss T* Coated Triple Camera + 85-170mm Optical Zoom', 'Audio': '3.5mm Headphone Jack + Hi-Res LDAC / DSEE Ultimate', 'Display': '6.5" 19.5:9 FHD+ 120Hz OLED', 'Battery': '5,000mAh 2-Day Battery' },
        features: ['True optical continuous zoom module without digital cropping', 'Physical two-stage knurled shutter button with half-press autofocus', 'Direct external monitor connection via USB-C for Alpha mirrorless cameras']
      },
      {
        name: 'Leitz Phone 3 Gold Monochrom',
        brand: 'Leica',
        subcat: 'Luxury Photography Phone',
        price: 9499,
        rating: 4.9,
        reviews: 43,
        img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1000&q=80',
        gallery: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80'],
        badge: 'Leica Optics',
        isFeatured: true,
        isNew: true,
        colors: [{ name: 'Diamond Knurled Black & Red Dot', hex: '#1A1A1A' }],
        desc: '1-inch 47.2MP sensor paired with 19mm f/1.9 Summicron lens and magnetic brass lens cap.',
        longDesc: 'A true collector photographic instrument. Featuring Leica color profiles, authentic Noctilux bokeh simulations, and solid magnesium knurled sides for steady single-hand operation.',
        specs: { 'Lens': '19mm f/1.9 Leica Summicron 7-Element Lens', 'Sensor': '1-Inch 47.2MP CMOS with Octa-PDAF', 'Display': '6.6" Pro IGZO OLED 240Hz 2,000 nits', 'Accessories': 'Solid Brass Magnetic Lens Cap + Leather Strap' },
        features: ['Authentic Leica Leitz Looks (Noctilux, Summilux, Monochrom Classic)', '1-inch sensor captures raw DNG files with 14 stops of dynamic range', 'Solid brass magnetic lens cap that patinas with use']
      }
    ]
  },
  {
    id: 'foldable-phones',
    name: 'Foldable Phones',
    prefix: 'prod-fold',
    items: [
      {
        name: 'AETHERA Quantum Tri-Fold Horizon',
        brand: 'AETHERA Atelier',
        subcat: 'Tri-Fold Dual Hinge',
        price: 13999,
        orig: 14999,
        rating: 5.0,
        reviews: 62,
        img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80',
        gallery: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80'],
        badge: 'World First Tri-Fold',
        isFeatured: true,
        isNew: true,
        isBestSeller: true,
        colors: [{ name: 'Liquid Mercury Titanium', hex: '#9E9FA5' }, { name: 'Burgundy Imperial Gold', hex: '#58111A' }],
        desc: 'Expands from a 6.4-inch pocket device into an uninterrupted 10.2-inch 3K OLED workspace.',
        longDesc: 'The crowning achievement of modern mechanical design. Dual carbon-fiber synchronised hinges fold inwards and outwards with zero visible crease and 100% flat closure.',
        specs: { 'Unfolded Screen': '10.2" 3K 120Hz Flexible OLED (2,800 nits)', 'Folded Screen': '6.4" LTPO 120Hz Exterior Screen', 'Thickness': '3.8mm unfolded / 12.4mm folded', 'Hinge Material': 'MIM Titanium & Liquid Metal Alloy', 'Battery': '6,000mAh Dual-Cell 100W Charging' },
        features: ['3-way multi-window desktop multitasking with stylus hover', 'Ultra-thin flex glass rated for 600,000 fold cycles', 'Under-display camera for total screen immersion']
      },
      {
        name: 'Honor Magic V3 Titanium Carbon Edition',
        brand: 'Honor',
        subcat: 'Ultra-Slim Foldable',
        price: 6899,
        orig: 7499,
        rating: 4.9,
        reviews: 110,
        img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80',
        colors: [{ name: 'Silk Black Titanium', hex: '#1E1E22' }, { name: 'Moss Green', hex: '#2F4F4F' }],
        desc: 'World thinnest inward folding smartphone at just 9.2mm folded thickness and 226g weight.',
        longDesc: 'Features aerospace grade Super Steel Hinge and Silicon-Carbon blade battery, offering full flagship specs in a body as slim as traditional bar phones.',
        specs: { 'Folded Thickness': '9.2mm (226g)', 'Main Display': '7.92" 120Hz LTPO OLED', 'Cover Display': '6.43" 120Hz OLED 5,000 nits', 'Battery': '5,150mAh 66W SuperCharge' },
        features: ['Silicon-Carbon battery chemistry for extreme cold/heat resistance in UAE', 'Specialized eye comfort 4,320Hz PWM dimming technology', 'Periscope 50MP optical zoom camera']
      },
      {
        name: 'Samsung Galaxy Z Fold6 Special Edition',
        brand: 'Samsung',
        subcat: 'Productivity Foldable',
        price: 7999,
        rating: 4.8,
        reviews: 175,
        img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80',
        colors: [{ name: 'Shadow Silver', hex: '#C5C6C8' }, { name: 'Crafted Black', hex: '#111214' }],
        desc: 'Expanded 8.0-inch main screen with 200MP wide sensor and titanium frame chassis.',
        longDesc: 'Custom engineered with Galaxy AI integration, wider cover screen aspect ratio, S-Pen digitizer support, and IP48 water resistance.',
        specs: { 'Main Display': '8.0" QXGA+ Dynamic AMOLED 2X', 'Cover Display': '6.5" 120Hz Dynamic AMOLED', 'Camera': '200MP Main + 12MP Ultra-wide + 10MP 3x Telephoto', 'Weight': '236g' },
        features: ['Galaxy AI live translation and sketch-to-image studio', 'Armor Aluminum and Titanium hinge protection', 'Multi-active window multitasking up to 4 applications']
      },
      {
        name: 'Motorola Razr 50 Ultra Gold Edition',
        brand: 'Motorola',
        subcat: 'Flip Luxury Foldable',
        price: 3999,
        orig: 4499,
        rating: 4.7,
        reviews: 89,
        img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80',
        colors: [{ name: 'Peach Fuzz Gold', hex: '#FFBE98' }, { name: 'Midnight Navy', hex: '#1C2951' }],
        desc: 'Largest 4.0-inch 165Hz exterior cover display wrapped in vegan leather and gold trim.',
        longDesc: 'Run any full app directly on the giant exterior screen without opening the phone. Teardrop hinge folds flat with zero gap and 50MP 2x portrait telephoto optics.',
        specs: { 'External Display': '4.0" pOLED 165Hz (Full App Support)', 'Internal Display': '6.9" FHD+ 165Hz Foldable OLED', 'Camera': '50MP Main + 50MP 2x Telephoto', 'Finish': 'Vegan Suede Leather + Polished Aluminum' },
        features: ['Full application execution on exterior display without opening phone', 'Camcorder flex mode for nostalgic video capture', 'IPX8 underwater splash protection']
      },
      {
        name: 'Huawei Mate XT Ultimate Edition',
        brand: 'Huawei',
        subcat: 'Dual-Hinge Trifold',
        price: 16999,
        rating: 5.0,
        reviews: 41,
        img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80',
        badge: 'Collector Edition',
        isFeatured: true,
        colors: [{ name: 'Ruihong Red & Gold', hex: '#8B0000' }, { name: 'Dark Black', hex: '#1A1A1A' }],
        desc: '3-screen flexible folding masterwork with ultra-thin liquid glass and Tiangong hinge system.',
        longDesc: 'Seamlessly transforms between single 6.4", dual 7.9", and full 10.2" workstation tablet sizes. Finished in hand-embossed saddle leather with gold titanium framing.',
        specs: { 'Screens': '6.4" / 7.9" / 10.2" Multi-Form 3K OLED', 'Hinge': 'Tiangong Dual-Drive Synchronized Hinge', 'Camera': '50MP XMAGE Variable Aperture + 12MP Periscope', 'Weight': '298g' },
        features: ['World first production dual-hinge tri-fold architecture', 'Variable physical aperture camera with XMAGE imaging algorithms', 'Includes custom folding magnetic keyboard and carbon kickstand case']
      }
    ]
  },
  {
    id: 'tablets',
    name: 'Tablets',
    prefix: 'prod-tab',
    items: [
      {
        name: 'AETHERA Canvas 14 Pro OLED Slate',
        brand: 'AETHERA Atelier',
        subcat: 'Creator Pro Tablet',
        price: 6499,
        orig: 6999,
        rating: 4.9,
        reviews: 138,
        img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=80',
        gallery: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=1000&q=80'],
        badge: 'Tandem OLED Canvas',
        isFeatured: true,
        isNew: true,
        colors: [{ name: 'Space Silver Anodized', hex: '#C8C9CE' }, { name: 'Deep Space Matte', hex: '#18191B' }],
        storage: [{ label: '512GB / 16GB RAM', priceDelta: 0 }, { label: '1TB / 24GB RAM', priceDelta: 900 }, { label: '2TB / 32GB RAM + Nano-Texture', priceDelta: 1800 }],
        desc: '14.2-inch Dual-Layer Tandem OLED with 16,384 pressure level inductive magnetic stylus.',
        longDesc: 'Engineered specifically for digital illustrators, 3D artists, and architectural designers. Features 1,600 nits sustained full-screen brightness, 100% DCI-P3 color gamut, and 0.8ms stylus latency.',
        specs: { 'Display': '14.2" 3.2K Tandem OLED 120Hz ProMotion', 'Processor': 'AETHERA M4 Pro Extreme 12-Core', 'Thickness': '5.1mm CNC Aluminum Unibody', 'Audio': 'Octa-Speaker Spatial Array with Beryllium Drivers', 'Battery': '11,400mAh with 100W Fast Charge' },
        features: ['16,384 pressure level zero-lag stylus with real-time tilt and rotation haptics', 'Anti-reflective nano-etched glass option for paper-like drawing resistance', 'Dual Thunderbolt 4 ports for dual external 6K studio monitor outputs']
      },
      {
        name: 'reMarkable Paper Pro Color Slate',
        brand: 'reMarkable',
        subcat: 'Digital Paper Tablet',
        price: 2899,
        orig: 3199,
        rating: 4.8,
        reviews: 204,
        img: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=1000&q=80',
        colors: [{ name: 'Basalt Black & Paper White', hex: '#2A2C2F' }],
        desc: '11.8-inch Canvas Color E-Ink display with paper-textured glass and frontlight.',
        longDesc: 'The ultimate distraction-free thinking tool. Natural color E-Ink pigments create authentic watercolor, pastel, and ink textures with 2 weeks of battery life per charge.',
        specs: { 'Display': '11.8" Canvas Color E-Ink (300 PPI)', 'Battery Life': 'Up to 2 Weeks Continuous Reading/Writing', 'Frontlight': 'Adjustable Color Temperature Reading Light', 'Weight': '525g Ultra-Slim' },
        features: ['Proprietary Canvas Color particles that render 20,000 hues without backlighting glare', 'Custom Marker Plus stylus with real built-in mechanical eraser', 'Instant cloud synchronization to macOS, iOS, Windows and Android']
      },
      {
        name: 'Apple iPad Pro 13 M4 Nano-Texture',
        brand: 'Apple',
        subcat: 'Flagship iPad',
        price: 7499,
        rating: 4.9,
        reviews: 312,
        img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=80',
        colors: [{ name: 'Space Black', hex: '#1A1A1C' }, { name: 'Silver', hex: '#E2E3E5' }],
        desc: 'Breakthrough thin 5.1mm design powered by M4 silicon with Ultra Retina XDR Tandem OLED.',
        longDesc: 'The thinnest product Apple has ever created. Ultra Retina XDR display uses dual OLED panels for 1,000 nits SDR and 1,600 nits peak HDR brightness.',
        specs: { 'Processor': 'Apple M4 Chip (10-Core CPU / 10-Core GPU)', 'Display': '13.0" Ultra Retina XDR Tandem OLED', 'Thickness': '5.1mm (Thinnest Apple Device)', 'Connectivity': 'Wi-Fi 7 + 5G Cellular + Thunderbolt 4' },
        features: ['Hardware-accelerated ray tracing and 38 TOPS Neural Engine for on-device AI', 'Support for Apple Pencil Pro with barrel roll, squeeze, and haptic feedback', 'Studio-quality four-microphone array and four-speaker sound system']
      },
      {
        name: 'Samsung Galaxy Tab S10 Ultra 5G',
        brand: 'Samsung',
        subcat: 'Super-Sized Android Tablet',
        price: 5299,
        orig: 5799,
        rating: 4.7,
        reviews: 119,
        img: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=1000&q=80',
        colors: [{ name: 'Moonstone Gray', hex: '#505256' }, { name: 'Platinum Silver', hex: '#D2D3D6' }],
        desc: 'Massive 14.6-inch Dynamic AMOLED 2X with anti-reflective glass coating and Armor Aluminum.',
        longDesc: 'Designed to replace desktop displays when travelling. Powered by MediaTek Dimensity 9300+ with Galaxy AI note assist, split-screen DeX mode, and IP68 water resistance.',
        specs: { 'Display': '14.6" Dynamic AMOLED 2X 120Hz Anti-Reflective', 'Processor': 'Dimensity 9300+ 4nm', 'Water Resistance': 'IP68 Certified (Tablet and S-Pen)', 'Battery': '11,200mAh with 45W Fast Charge' },
        features: ['Galaxy AI Transcript Assist and Math Notes automated solving', 'Samsung DeX desktop environment with multi-window monitor out', 'Included low-latency S-Pen with air gesture controls']
      },
      {
        name: 'BOOX Note Air3 C Color E-Reader Slate',
        brand: 'Onyx BOOX',
        subcat: 'Open Android E-Ink Slate',
        price: 2499,
        rating: 4.6,
        reviews: 78,
        img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=80',
        colors: [{ name: 'Anodized Charcoal Blue', hex: '#263238' }],
        desc: '10.3-inch Kaleido 3 Color E-Ink display running full Google Play Store Android 12.',
        longDesc: 'Combines soothing paper reading ergonomics with the full versatility of an Android tablet. Install Kindle, Notion, PDF annotation tools, and browser seamlessly.',
        specs: { 'Display': '10.3" Kaleido 3 Glass Screen (300 PPI B&W / 150 PPI Color)', 'OS': 'Android 12 with Full Google Play Store Access', 'RAM & Storage': '4GB RAM + 64GB UFS Storage (expandable via MicroSD)', 'Stylus': 'Magnetic Stylus with 4,096 Pressure Levels' },
        features: ['BSR (BOOX Super Refresh) technology for smooth page turning and scrolling', 'Side fingerprint sensor built directly into power button', 'Dual tone front light with warm amber night reading mode']
      }
    ]
  }
];

// Helper to generate a comprehensive list for remaining categories
const remainingCategories = [
  { id: 'laptops', name: 'Laptops', prefix: 'prod-lap', sampleBrand: 'AETHERA Precision', itemNames: ['AETHERA Blade 16 Studio Magnesium', 'Razer Blade 16 OLED Titanium', 'MacBook Pro 16 M4 Max Space Black', 'Dell XPS 16 Carbon InfinityEdge', 'ASUS Zenbook Duo Dual-Screen OLED', 'Lenovo ThinkPad X1 Carbon Gen 12'], basePrice: 9999, img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80' },
  { id: 'gaming-laptops', name: 'Gaming Laptops', prefix: 'prod-glap', sampleBrand: 'ASUS ROG', itemNames: ['ROG Zephyrus G16 Liquid Platinum RTX 4090', 'Alienware m18 R2 Cryo-Tech 480Hz', 'MSI Titan 18 HX Dragon 4K Mini-LED', 'AETHERA CyberForge 17 RTX 4090 Max', 'Razer Blade 18 Vapor Titan Edition'], basePrice: 16999, img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1000&q=80' },
  { id: 'desktop-pcs', name: 'Desktop PCs', prefix: 'prod-dt', sampleBrand: 'AETHERA Core', itemNames: ['AETHERA Monolith Open-Loop RTX 4090 Workstation', 'Corsair One i500 Wood Edition', 'Apple Mac Studio M4 Ultra 192GB', 'Falcon Northwest Tiki Custom Billet', 'Origin Chronos Mini-ITX Studio Rig'], basePrice: 18999, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80' },
  { id: 'monitors', name: 'Monitors', prefix: 'prod-mon', sampleBrand: 'AETHERA Vision', itemNames: ['AETHERA Quantum 34" Curved 5K QD-OLED 240Hz', 'Apple Pro Display XDR 32" Nano-Texture', 'ASUS ProArt 32" 8K HDR Reference Monitor', 'Dell UltraSharp 40" Curved 5K Hub Monitor', 'Samsung Odyssey OLED G9 49" Dual QHD', 'LG UltraFine 27" 5K Mac Studio Display'], basePrice: 6999, img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=80' },
  { id: 'smartwatches', name: 'Smartwatches', prefix: 'prod-sw', sampleBrand: 'AETHERA Horology', itemNames: ['AETHERA Chrono 1 Titanium Sapphire Cellular', 'Apple Watch Ultra 2 Black Titanium Milanese', 'Garmin MARQ Gen 2 Aviator Damascene Steel', 'TAG Heuer Connected Calibre E4 Titanium 45mm', 'Samsung Galaxy Watch Ultra Titanium White', 'Suunto Ocean Titanium Sapphire Dive Watch'], basePrice: 3899, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80' },
  { id: 'fitness-trackers', name: 'Fitness Trackers', prefix: 'prod-fit', sampleBrand: 'Oura', itemNames: ['Oura Ring Gen 4 Horizon Brushed Titanium', 'WHOOP 4.0 Onyx Luxe Platinum Pack', 'Ultrahuman Ring Air Raw Titanium Biometric', 'Garmin Vivosmart 5 Carbon Edition', 'Polar Verity Sense Optical Heart Engine'], basePrice: 1699, img: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=1000&q=80' },
  { id: 'wireless-earbuds', name: 'Wireless Earbuds', prefix: 'prod-tws', sampleBrand: 'AETHERA Acoustics', itemNames: ['AETHERA Aura Planar Magnetic TWS Solid Beryllium', 'Bowers & Wilkins Pi8 Lossless Titanium', 'Sennheiser Momentum True Wireless 4 Copper', 'Sony WF-1000XM5 ANC Silver Edition', 'Bang & Olufsen Beoplay EX Gold Tone', 'Devialet Gemini II Opéra de Paris Gold'], basePrice: 1499, img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80' },
  { id: 'headphones', name: 'Headphones', prefix: 'prod-hp', sampleBrand: 'AETHERA Acoustics', itemNames: ['AETHERA Sovereign Electrostatic Open-Back Master', 'Focal Utopia 2024 Beryllium Open-Back', 'Sennheiser HD 800 S Reference Headphone', 'Bang & Olufsen Beoplay H100 Luxury Leather ANC', 'Apple AirPods Max Space Black Aluminum', 'Audeze LCD-5 Flagship Planar Magnetic'], basePrice: 4299, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80' },
  { id: 'speakers', name: 'Speakers', prefix: 'prod-spk', sampleBrand: 'Devialet', itemNames: ['Devialet Phantom I 108dB Opéra de Paris Gold', 'Bang & Olufsen Beosound 2 3rd Gen Brass Tone', 'AETHERA Monolith Concrete & Brass Wireless Tower', 'Sonos Era 300 Spatial Audio Pair Set', 'Naim Mu-so 2nd Gen Wood Edition', 'Bowers & Wilkins Zeppelin Hi-Res Smart Speaker'], basePrice: 4999, img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80' },
  { id: 'cameras', name: 'Cameras', prefix: 'prod-cam', sampleBrand: 'Hasselblad', itemNames: ['Hasselblad X2D 100C Medium Format Mirrorless', 'Leica M11-P Rangefinder Monochrom Black Paint', 'Sony Alpha 1 II 50MP 8K Flagship Camera', 'Fujifilm GFX100 II 102MP Medium Format', 'Canon EOS R1 Full-Frame Cinema Pro', 'Nikon Z9 Full-Frame 8K Flagship Body'], basePrice: 28999, img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80' },
  { id: 'action-cameras', name: 'Action Cameras', prefix: 'prod-act', sampleBrand: 'Insta360', itemNames: ['Insta360 X4 8K 360-Degree Modular Camera', 'GoPro HERO 13 Black Creator Edition Bundle', 'DJI Osmo Action 5 Pro Low-Light Sub-Zero', 'Sony RX0 II Ultra-Compact Rugged 4K', 'Insta360 Ace Pro 2 Leica Dual-Chip AI'], basePrice: 2299, img: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?auto=format&fit=crop&w=1000&q=80' },
  { id: 'drones', name: 'Drones', prefix: 'prod-drn', sampleBrand: 'DJI', itemNames: ['DJI Inspire 3 Full-Frame 8K Cinema Drone', 'DJI Mavic 3 Pro Cine Hasselblad Triple Camera', 'AETHERA SkyHawk 6K Carbon Fiber Long-Range', 'DJI Avata 2 FPV Fly More Combo with Goggles 3', 'Autel Robotics EVO Max 4T Thermal AI Drone', 'BetaFPV Pavo Pro 4K Cinewhoop Carbon Quad'], basePrice: 8499, img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80' },
  { id: 'gaming-consoles', name: 'Gaming Consoles', prefix: 'prod-gcon', sampleBrand: 'Valve', itemNames: ['Steam Deck OLED 1TB Limited Smoke Edition', 'ASUS ROG Ally X 24GB Handheld Console', 'PlayStation 5 Pro 2TB 4K 120fps Console', 'AYANEO KUN 8.4" Handheld PC Gaming Beast', 'Nintendo Switch OLED Mario Red Custom Edition'], basePrice: 2999, img: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&w=1000&q=80' },
  { id: 'gaming-controllers', name: 'Gaming Controllers', prefix: 'prod-gctrl', sampleBrand: 'AETHERA Apex', itemNames: ['AETHERA MagControl Titanium Hall-Effect Controller', 'Scuf Envision Pro Wireless Wireless PC Controller', 'Xbox Elite Wireless Controller Series 2 Core', 'Sony DualSense Edge Wireless Custom Paddles', 'Flydigi Vader 4 Pro Force-Feedback Switcher'], basePrice: 899, img: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=1000&q=80' },
  { id: 'gaming-accessories', name: 'Gaming Accessories', prefix: 'prod-gacc', sampleBrand: 'Razer', itemNames: ['Woojer Vest 3 Haptic Feedback Gaming Vest', 'Razer Chroma Light Strip Set Dual Controller', 'AETHERA Billet Aluminum RGB Headset Stand', 'SteelSeries Arena 9 5.1 Surround Gaming System', 'Elgato Stream Deck XL 32-Key OLED Control Pad'], basePrice: 1299, img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80' },
  { id: 'mechanical-keyboards', name: 'Mechanical Keyboards', prefix: 'prod-kb', sampleBrand: 'AETHERA Custom', itemNames: ['AETHERA Sonnet 75 CNC Brass Weight Mechanical', 'Wooting 80HE Magnetic Rapid Trigger Hall-Effect', 'Keychron Q1 Pro Wireless QMK Custom Aluminum', 'Mode Sonnet 75% Custom Mechanical Artisan', 'Angry Miao Cyberboard R4 Transparent OLED', 'Drop + Sennheiser Tokyo Night CNC Mechanical'], basePrice: 1899, img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80' },
  { id: 'gaming-mice', name: 'Gaming Mice', prefix: 'prod-mouse', sampleBrand: 'Finalmouse', itemNames: ['Finalmouse UltralightX 31g Carbon Fiber Wireless', 'Razer Viper Mini Signature Edition Magnesium', 'Logitech G PRO X SUPERLIGHT 2 DEX Wireless', 'AETHERA Aerox 39g Ceramic Sensor 8000Hz Mouse', 'Pulsar X2V2 Wireless Demon Slayer Edition'], basePrice: 799, img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1000&q=80' },
  { id: 'streaming-equipment', name: 'Streaming Equipment', prefix: 'prod-stream', sampleBrand: 'Shure', itemNames: ['Shure SM7dB Active Preamp Dynamic Microphone', 'Elgato Prompter 9" Teleprompter Display System', 'RODECaster Pro II Integrated Audio Production Studio', 'Sony FX30 Cinema Line 4K Streaming Rig', 'Elgato Key Light Air Dual Studio Light Kit'], basePrice: 2199, img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80' },
  { id: 'vr-ar-headsets', name: 'VR / AR Headsets', prefix: 'prod-vr', sampleBrand: 'AETHERA Optics', itemNames: ['AETHERA Vision Spatial 4K Micro-OLED Computer', 'Apple Vision Pro 1TB Spatial Spatial Headset', 'Meta Quest Pro 2 Quantum Dot Spatial Eye-Track', 'XREAL Air 2 Ultra Spatial AR Glasses Titanium', 'Bigscreen Beyond Custom Micro-OLED 127g Headset', 'Pimax Crystal Super 8K VR Headset Wide FOV'], basePrice: 9999, img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1000&q=80' },
  { id: 'smart-home', name: 'Smart Home', prefix: 'prod-smh', sampleBrand: 'Aqara', itemNames: ['Aqara Smart Lock U200 Matter Over Thread', 'AETHERA Master Touch 10" Glass Wall Terminal', 'Sonos Port Wireless Audio Streaming Component', 'Nest Learning Thermostat 4th Gen Polished Brass', 'Eufy Clean X10 Pro Omni Robot Vacuum Mop'], basePrice: 2499, img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80' },
  { id: 'smart-lighting', name: 'Smart Lighting', prefix: 'prod-light', sampleBrand: 'Philips Hue', itemNames: ['Philips Hue Gradient Signe Floor Lamp Brass', 'Nanoleaf Lines 60-Degree Modular Smart Lights', 'AETHERA Prism Linear Circadian Ceiling Bar', 'Govee Glide Hexagon Light Panels Ultra 3D', 'Twinkly Squares Smart LED Wall Tile Art 6-Pack'], basePrice: 1199, img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80' },
  { id: 'security-cameras', name: 'Security Cameras', prefix: 'prod-sec', sampleBrand: 'Eufy', itemNames: ['EufyCam S330 eufyCam 3 4K Solar Security 4-Cam', 'Ring Floodlight Cam Wired Pro HDR Night Vision', 'UniFi Protect G5 Professional 4K PoE Camera', 'AETHERA Sentry Sentinel Dual Thermal Perimeter', 'Arlo Ultra 2 Spotlight Wireless 4K UHD 3-Pack'], basePrice: 2899, img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80' },
  { id: 'smart-displays', name: 'Smart Displays', prefix: 'prod-disp', sampleBrand: 'Samsung', itemNames: ['Samsung The Frame 65" 4K QLED Matte Display', 'AETHERA E-Paper Horizon 25" Wall Calendar Slate', 'Meural Canvas II 27" Digital Art Frame Walnut', 'Amazon Echo Show 15 Smart Display with Fire TV', 'LG StanbyME 27" Rollable Touch Smart Screen'], basePrice: 4299, img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1000&q=80' },
  { id: 'networking', name: 'Networking', prefix: 'prod-net', sampleBrand: 'UniFi', itemNames: ['UniFi Dream Machine Special Edition 10G Gateway', 'Netgear Orbi 970 Series Wi-Fi 7 Mesh 3-Pack', 'ASUS ROG Rapture GT-BE98 Pro Quad-Band Router', 'AETHERA Sovereign Mesh Wi-Fi 7 Tri-Band Node', 'TP-Link Deco BE85 BE22000 Wi-Fi 7 Mesh System'], basePrice: 3499, img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80' },
  { id: 'power-banks', name: 'Power Banks', prefix: 'prod-pb', sampleBrand: 'Anker', itemNames: ['Anker Prime 27,650mAh Power Bank (250W) + Base', 'SHARGEEK 100 Storm 2 Transparent Cyber Bank', 'AETHERA CyberVolt 240W OLED Aerospace Titanium', 'Cuktech 30 40,000mAh 300W Extreme Laptop Bank', 'Torras MagSafe 10,000mAh Ultra-Slim Kickstand'], basePrice: 799, img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1000&q=80' },
  { id: 'chargers', name: 'Chargers', prefix: 'prod-chg', sampleBrand: 'Anker Prime', itemNames: ['Anker Prime 240W 4-Port GaN Desktop Charger', 'AETHERA MagDock 3-in-1 Qi2 Billet Brass Stand', 'Ugreen Nexode 300W 5-Port GaN Fast Desktop', 'SHARGE Retro 67W Macintosh Style GaN Display', 'Belkin BoostCharge Pro 3-in-1 Wireless Pad 15W'], basePrice: 599, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80' },
  { id: 'usb-c-accessories', name: 'USB-C Accessories', prefix: 'prod-usb', sampleBrand: 'CalDigit', itemNames: ['CalDigit TS4 Thunderbolt 4 18-Port Titan Dock', 'AETHERA Titanium Braided 240W 40Gbps Cable 2M', 'Satechi Aluminum Stand & Hub for Mac Studio', 'OWC Thunderbolt Go 11-Port Universal Dock', 'Anker 10-in-1 USB-C Hub with Dual 4K HDMI 60Hz'], basePrice: 699, img: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80' },
  { id: 'storage-devices', name: 'Storage Devices', prefix: 'prod-store', sampleBrand: 'Samsung', itemNames: ['Samsung T9 Shield 4TB USB 3.2 Gen 2x2 Portable', 'SanDisk Professional PRO-BLADE 8TB SSD Station', 'AETHERA Vault Biometric Touch Encrypted 4TB SSD', 'LaCie Rugged SSD Pro 4TB Thunderbolt 3 Mil-Spec', 'AcroPass Cyber M.2 NVMe Enclosure Active Fan'], basePrice: 1699, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=80' },
  { id: 'ssds', name: 'SSDs', prefix: 'prod-ssd', sampleBrand: 'Crucial', itemNames: ['Crucial T705 4TB PCIe Gen5 NVMe 14,500 MB/s', 'Samsung 990 PRO 4TB with Heatsink PCIe 4.0', 'WD_BLACK SN850X 4TB NVMe SSD for PS5 & PC', 'Seagate FireCuda 540 2TB PCIe Gen5 M.2 SSD', 'Corsair MP700 PRO 4TB Hydro X Water-Block SSD'], basePrice: 1299, img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=1000&q=80' },
  { id: 'accessories', name: 'Accessories', prefix: 'prod-acc', sampleBrand: 'PITAKA', itemNames: ['PITAKA MagEZ Case 5 1500D Aramid Fiber Carbon', 'Nomad Traditional Horween Leather Case Rustic', 'Moft Snap-On Magnetic Wallet & Foldable Stand', 'Native Union Heritage Leather MagSafe Desk Mat', 'Bellroy Tech Kit Compact Water-Resistant Pouch'], basePrice: 349, img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80' },
  { id: 'car-gadgets', name: 'Car Gadgets', prefix: 'prod-car', sampleBrand: 'VIOFO', itemNames: ['VIOFO A229 Pro 4K Dual AI Dashcam Starvis 2', 'AETHERA MagCool Active Peltier Car Charger 15W', 'Carlinkit 5.0 Wireless 2Air CarPlay & Auto Hub', '70mai Omni 360-Degree Rotating Smart Dashcam', 'Baseus Car Inverter 300W 220V Dual AC Outlet'], basePrice: 899, img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80' },
  { id: 'travel-gadgets', name: 'Travel Gadgets', prefix: 'prod-trv', sampleBrand: 'GlocalMe', itemNames: ['GlocalMe Numen Air 5G Global Mobile Hotspot Hub', 'AETHERA GeoTag Titanium Satellite Luggage Tag', 'Twelve South AirFly Pro Wireless Audio Adapter', 'Anker MagGo Foldable 3-in-1 Travel Qi2 Station', 'Epicka Universal All-in-One 75W GaN Travel Plug'], basePrice: 649, img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80' },
  { id: 'productivity-gadgets', name: 'Productivity Gadgets', prefix: 'prod-prod', sampleBrand: 'Loupedeck', itemNames: ['Loupedeck Live S Console for Creators & Stream', 'Plaud Note AI Voice Recorder MagSafe ChatGPT-4o', 'TourBox Elite Bluetooth Creative Controller Dial', 'Logitech MX Master 3S Graphite Performance Mouse', 'AETHERA CyberDial Macro Controller Knob with Screen'], basePrice: 999, img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80' },
  { id: 'premium-tech-accessories', name: 'Premium Tech Accessories', prefix: 'prod-pacc', sampleBrand: 'Grovemade', itemNames: ['Grovemade Solid American Walnut Dual Monitor Stand', 'Hardgraft Deep Wool Felt & Tuscan Leather Desk Mat', 'AETHERA Billet Titanium Cable Management Channel', 'Oakywood Triple Vertical Laptop Stand Walnut', 'Yogibo Ergonomic Memory Foam Wrist Rest Set'], basePrice: 899, img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80' },
  { id: 'creator-equipment', name: 'Creator Equipment', prefix: 'prod-cre', sampleBrand: 'Aputure', itemNames: ['Aputure Amaran 200x S Bi-Color COB Studio Light', 'DJI RS 4 Pro Combo 3-Axis Motorized Gimbal', 'Edelkrone SliderONE v2 Wireless Motorized Slider', 'SmallRig Foldable Master Video Rig Cage Setup', 'Atomos Ninja Ultra 5.2" 8K HDR Monitor-Recorder'], basePrice: 3299, img: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=1000&q=80' },
  { id: 'ai-gadgets', name: 'AI Gadgets', prefix: 'prod-ai', sampleBrand: 'AETHERA Neural', itemNames: ['AETHERA Halo Multimodal AI Wearable Optical Pin', 'Looking Glass Go Portable Holographic AI Display', 'Rabbit r1 AI Voice Agent Perceptive Companion', 'Plaud NotePin AI Wearable Continuous Memory Capsule', 'AETHERA Nova Autonomous Desktop AI Avatar Orb'], basePrice: 1899, img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80' },
  { id: 'emerging-technology', name: 'Emerging Technology', prefix: 'prod-emg', sampleBrand: 'AETHERA Labs', itemNames: ['AETHERA NeuroCrown EEG Brainwave Focus Trainer', 'ThermalGraphene Smart Climate Heated Pilot Jacket', 'Mudra Band Neural Gesture Control for Apple Watch', 'Flowtime Biosensing Meditation Headband Pro', 'AETHERA CryoShield Peltier Handheld Cooling Wand'], basePrice: 2499, img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1000&q=80' }
];

let allProducts = [];

// 1. Add detailed items from categories_def
CATEGORIES_DEF.forEach(cat => {
  cat.items.forEach((item, index) => {
    allProducts.push({
      id: `${cat.prefix}-${String(index + 1).padStart(2, '0')}`,
      name: item.name,
      brand: item.brand,
      category: cat.name,
      subcategory: item.subcat,
      price: item.price,
      originalPrice: item.orig || Math.round(item.price * 1.12),
      discount: item.orig ? Math.round(((item.orig - item.price) / item.orig) * 100) : 10,
      rating: item.rating || 4.8,
      reviewCount: item.reviews || (50 + (index * 23)),
      availability: index % 4 === 0 ? 'Limited Edition' : 'In Stock',
      inStock: true,
      stockCount: 5 + (index * 4),
      isFeatured: !!item.isFeatured,
      isNew: item.isNew !== undefined ? item.isNew : true,
      isBestSeller: !!item.isBestSeller,
      colorVariants: item.colors || [
        { name: 'Titanium Graphite', hex: '#2C2D30' },
        { name: 'Platinum Silver', hex: '#E2E3E5' },
        { name: 'Champagne Gold', hex: '#D4AF37' }
      ],
      storageVariants: item.storage || [
        { label: 'Standard Edition', priceDelta: 0 },
        { label: 'Pro Signature Edition', priceDelta: Math.round(item.price * 0.18) }
      ],
      shortDescription: item.desc,
      longDescription: item.longDesc || `${item.desc} Engineered with precision-crafted materials and tailored for the luxury UAE technology market.`,
      specifications: item.specs || {
        'Chassis': 'CNC Machined Aerospace Aluminum & Titanium',
        'Connectivity': 'Wi-Fi 7, Bluetooth 5.4, Ultra-Wideband (UWB)',
        'Warranty': '2-Year Official UAE VIP Warranty & Replacement',
        'Origin': 'Engineered & Calibrated in Dubai Silicon Oasis'
      },
      keyFeatures: item.features || [
        'Crafted with aerospace-grade materials for enduring resilience',
        'Proprietary low-latency signal architecture and high-efficiency thermal management',
        'Official UAE VIP Concierge warranty and 24/7 technical advisory'
      ],
      whatsInTheBox: [item.name, 'Braided USB-C 240W Fast Cable', 'CNC Magnetic Accessories & Tool', 'Certificate of Authenticity & 2-Year UAE VIP Card'],
      images: [item.img, ...(item.gallery || [item.img])],
      tags: [cat.name, item.brand, 'Luxury Tech', 'UAE Official'],
      uaeWarranty: '2-Year Official UAE VIP On-Site Warranty',
      badge: item.badge
    });
  });
});

// 2. Generate detailed items for remaining 37 categories (approx 5-6 products each)
remainingCategories.forEach(catGroup => {
  catGroup.itemNames.forEach((itemName, idx) => {
    const price = Math.round(catGroup.basePrice * (0.75 + (idx * 0.22)));
    const origPrice = Math.round(price * 1.15);
    const discount = Math.round(((origPrice - price) / origPrice) * 100);
    const id = `${catGroup.prefix}-${String(idx + 1).padStart(2, '0')}`;
    
    // Pick realistic brand
    let brand = catGroup.sampleBrand;
    if (itemName.includes(' ')) {
      const firstWord = itemName.split(' ')[0];
      if (['Apple', 'Sony', 'Sennheiser', 'Bang', 'Devialet', 'Focal', 'Leica', 'Hasselblad', 'DJI', 'Razer', 'ASUS', 'Alienware', 'Wooting', 'Keychron', 'Steam', 'Samsung', 'Philips', 'UniFi', 'Anker', 'Shure', 'Aqara'].includes(firstWord)) {
        brand = firstWord === 'Bang' ? 'Bang & Olufsen' : firstWord;
      }
    }

    allProducts.push({
      id: id,
      name: itemName,
      brand: brand,
      category: catGroup.name,
      subcategory: `${catGroup.name} Series`,
      price: price,
      originalPrice: origPrice,
      discount: discount,
      rating: Number((4.6 + ((idx * 0.13) % 0.4)).toFixed(1)),
      reviewCount: 38 + (idx * 31),
      availability: idx === 0 ? 'Limited Edition' : (idx === 4 ? 'Showroom Exclusive' : 'In Stock'),
      inStock: true,
      stockCount: 4 + ((idx * 7) % 25),
      isFeatured: idx === 0,
      isNew: idx % 2 === 0,
      isBestSeller: idx === 1,
      colorVariants: [
        { name: 'Space Gray / Titanium', hex: '#333538' },
        { name: 'Matte Silver', hex: '#D8D9DC' },
        { name: 'Obsidian Black', hex: '#161719' }
      ],
      storageVariants: [
        { label: 'Standard Configuration', priceDelta: 0 },
        { label: 'Max Performance Tier', priceDelta: Math.round(price * 0.2) }
      ],
      shortDescription: `Precision-engineered luxury ${catGroup.name.toLowerCase()} tailored with flagship acoustic and thermal components.`,
      longDescription: `The ${itemName} stands as a testament to pure industrial luxury and cutting-edge performance. Designed to integrate seamlessly within high-end workspaces and modern luxury villas in Dubai and Abu Dhabi. Built with ultra-resilient materials, intuitive ergonomics, and comprehensive 2-Year UAE VIP warranty support.`,
      specifications: {
        'Chassis & Build': 'CNC Billet Aluminum / Grade 5 Titanium / Ceramic Accents',
        'Performance': 'Optimized for high-throughput UAE digital workflows',
        'Connectivity': 'Wi-Fi 7 / Bluetooth 5.4 / USB4 Thunderbolt Ready',
        'Power & Thermal': 'GaN Active Heat Dispersion Architecture',
        'UAE Warranty': '2-Year Direct UAE Official Replacement Guarantee'
      },
      keyFeatures: [
        `Flagship performance calibrated for luxury consumer electronics standards`,
        `CNC milled chassis delivering zero flex and acoustic inertness`,
        `24/7 dedicated UAE VIP concierge support & white-glove delivery`
      ],
      whatsInTheBox: [itemName, 'High-Grade Braided Cable & Power Supply', 'Precision Cleaning Cloth & Custom Pouch', 'Warranty & Serial Certificate'],
      images: [catGroup.img, 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1000&q=80'],
      tags: [catGroup.name, brand, 'Luxury Tech', 'UAE Market'],
      uaeWarranty: '2-Year Official UAE VIP Warranty'
    });
  });
});

console.log(`Total Products Generated: ${allProducts.length}`);

// Write file
const fileContent = `import { GadgetProduct } from './consumerElectronicsData';\n\nexport const ALL_GADGET_PRODUCTS: GadgetProduct[] = ${JSON.stringify(allProducts, null, 2)};\n`;

fs.writeFileSync(path.join(__dirname, '../src/data/gadgetsCatalogData.ts'), fileContent, 'utf8');
console.log('Successfully generated src/data/gadgetsCatalogData.ts');
