export interface EyewearProduct {
  id: string;
  name: string;
  brand: string;
  category: 'Optical Frames' | 'Sunglasses' | 'Blue-Light Glasses' | 'Sports Eyewear' | 'Kids Eyewear' | 'Premium Collection';
  price: number;
  image: string;
  colors: string[];
  material: 'Italian Acetate' | 'Titanium' | 'Stainless Steel' | 'TR90 Flexible';
  shape: 'Square' | 'Round' | 'Oval' | 'Cat-Eye' | 'Aviator' | 'Rectangle';
  size: 'Small' | 'Medium' | 'Large';
  gender: 'Unisex' | 'Men' | 'Women' | 'Kids';
  description: string;
  features: string[];
  stock: 'In Stock' | 'Limited Stock';
}

export interface LensOption {
  id: string;
  name: string;
  category: string;
  price: number;
  benefits: string[];
  suitableFor: string;
  thickness: string;
  coating: string;
}

export interface EyeCareService {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  suitableFor: string;
  process: string[];
  image: string;
}

export interface Optometrist {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  qualifications: string;
  languages: string[];
  bio: string;
  availability: string;
  image: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const PRODUCTS_DATA: EyewearProduct[] = [
  // Optical Frames
  { id: 'opt-1', name: 'Aura Square Acetate', brand: 'VISTAÉYE Studio', category: 'Optical Frames', price: 399, image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format&fit=crop', colors: ['Onyx Black', 'Tortoise Shell', 'Crystal Clear'], material: 'Italian Acetate', shape: 'Square', size: 'Medium', gender: 'Unisex', description: 'Sculpted hand-polished Italian acetate frame with hand-set barrel hinges for effortless daily wear.', features: ['Lightweight hand-polished acetate', 'Flexible German barrel hinges', 'Rx lens compatible'], stock: 'In Stock' },
  { id: 'opt-2', name: 'Titan Minimalist Air', brand: 'VISTAÉYE Studio', category: 'Optical Frames', price: 699, image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop', colors: ['Gunmetal Grey', 'Rose Gold', 'Matte Silver'], material: 'Titanium', shape: 'Round', size: 'Small', gender: 'Unisex', description: 'Featherlight aerospace-grade titanium frame weighing under 12 grams for ultra-comfortable pressure-free wear.', features: ['Hypoallergenic beta titanium', '12g ultra lightweight build', 'Adjustable silicone nose pads'], stock: 'In Stock' },
  { id: 'opt-3', name: 'Harbor Classic Rectangle', brand: 'VISTAÉYE Studio', category: 'Optical Frames', price: 249, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop', colors: ['Midnight Navy', 'Matte Black', 'Olive Green'], material: 'TR90 Flexible', shape: 'Rectangle', size: 'Large', gender: 'Men', description: 'Durable everyday rectangular frame crafted from resilient TR90 polymer with soft matte touch finish.', features: ['TR90 memory flex material', 'Impact resistant structure', 'Ergonomic temple curvature'], stock: 'In Stock' },
  { id: 'opt-4', name: 'Celeste Cat-Eye Acetate', brand: 'VISTAÉYE Studio', category: 'Optical Frames', price: 549, image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop', colors: ['Champagne Nude', 'Emerald Havana', 'Classic Black'], material: 'Italian Acetate', shape: 'Cat-Eye', size: 'Medium', gender: 'Women', description: 'Elegant upswept cat-eye silhouette designed to lift facial features with refined European sophistication.', features: ['Upswept geometric temple lines', 'Beveled acetate beveling', 'Premium spring hinges'], stock: 'In Stock' },
  { id: 'opt-5', name: 'Linear Wire Oval', brand: 'VISTAÉYE Studio', category: 'Optical Frames', price: 399, image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format&fit=crop', colors: ['Brushed Gold', 'Copper Bronze', 'Matte Black'], material: 'Stainless Steel', shape: 'Oval', size: 'Small', gender: 'Unisex', description: 'Slender architectural oval frame featuring refined wire rims and custom filigree engraving along the temples.', features: ['Precision laser-cut steel', 'Filigree rim detailing', 'Ultra slim profile'], stock: 'In Stock' },

  // Sunglasses
  { id: 'sun-1', name: 'Solstice Polarized Aviator', brand: 'VISTAÉYE Luxe', category: 'Sunglasses', price: 449, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop', colors: ['Gold / Green Polarized', 'Silver / Smoke', 'Black / Gradient Flash'], material: 'Stainless Steel', shape: 'Aviator', size: 'Large', gender: 'Unisex', description: 'Iconic teardrop aviator silhouette paired with Category 3 glare-reducing polarized lenses for intense UAE sunlight.', features: ['100% UV400 protection', '99.9% Glare elimination', 'Double bridge bar architecture'], stock: 'In Stock' },
  { id: 'sun-2', name: 'Monaco Oversized Square', brand: 'VISTAÉYE Luxe', category: 'Sunglasses', price: 699, image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop', colors: ['Havannah Brown', 'Jet Black / Grey Tint', 'Honey Crystal'], material: 'Italian Acetate', shape: 'Square', size: 'Large', gender: 'Women', description: 'Bold Riviera-inspired oversized square sunglasses featuring gradient UV400 protective lenses.', features: ['Thick bevelled acetate rims', 'Gradient optical clarity lenses', 'Scratch resistant coating'], stock: 'In Stock' },
  { id: 'sun-3', name: 'Riviera Round Classic', brand: 'VISTAÉYE Luxe', category: 'Sunglasses', price: 299, image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop', colors: ['Matte Black / G15 Lens', 'Tortoise / Amber Lens'], material: 'Italian Acetate', shape: 'Round', size: 'Medium', gender: 'Unisex', description: 'Timeless round frame with classic G15 sun lenses offering natural color fidelity and 100% UV protection.', features: ['Classic keyhole nose bridge', 'UV400 Category 3 sun lenses', 'Comfort temple arms'], stock: 'In Stock' },
  { id: 'sun-4', name: 'Apex Titanium Polarized', brand: 'VISTAÉYE Luxe', category: 'Sunglasses', price: 899, image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format&fit=crop', colors: ['Satin Grey / Blue Mirror', 'Titanium Black / Polarized'], material: 'Titanium', shape: 'Rectangle', size: 'Medium', gender: 'Men', description: 'Ultra-luxurious titanium sport-luxe sunglasses with hydrophobic anti-water reflective polarized lenses.', features: ['High velocity impact resistance', 'Hydrophobic lens coating', 'Satin titanium finish'], stock: 'Limited Stock' },

  // Blue-Light Glasses
  { id: 'blu-1', name: 'ScreenShield Pro Square', brand: 'VISTAÉYE Tech', category: 'Blue-Light Glasses', price: 299, image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format&fit=crop', colors: ['Clear Crystal', 'Smokey Quartz', 'Matte Black'], material: 'TR90 Flexible', shape: 'Square', size: 'Medium', gender: 'Unisex', description: 'Engineered blue-light filtering glasses blocking 45% of harmful high-energy visible 420nm screen rays.', features: ['HEV 420nm Blue-Light Blocking', 'Anti-glare screen coating', 'Reduces digital eye fatigue'], stock: 'In Stock' },
  { id: 'blu-2', name: 'Digital Focus Round', brand: 'VISTAÉYE Tech', category: 'Blue-Light Glasses', price: 349, image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop', colors: ['Rose Crystal', 'Black Gold', 'Tortoise'], material: 'Italian Acetate', shape: 'Round', size: 'Small', gender: 'Unisex', description: 'Stylish round blue-light filtering frame featuring crystal-clear lenses without noticeable yellow tint.', features: ['Zero-distortion clear lens tint', 'Hydrophobic smudge resistance', 'Lightweight comfort'], stock: 'In Stock' },

  // Kids Eyewear
  { id: 'kid-1', name: 'Junior Flex Shield', brand: 'VISTAÉYE Junior', category: 'Kids Eyewear', price: 199, image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop', colors: ['Royal Blue', 'Berry Pink', 'Bright Red'], material: 'TR90 Flexible', shape: 'Rectangle', size: 'Small', gender: 'Kids', description: 'Unbreakable 180-degree flexible hinge kids frame designed for active school, sports, and playtime safety.', features: ['BPA-free non-toxic polymer', '180-degree flex hinges', 'Polycarbonate impact lenses'], stock: 'In Stock' },

  // Sports Eyewear
  { id: 'spo-1', name: 'Velocity Performance Shield', brand: 'VISTAÉYE Sport', category: 'Sports Eyewear', price: 549, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop', colors: ['Neon Yellow / Mirror', 'White / Red Revo'], material: 'TR90 Flexible', shape: 'Rectangle', size: 'Large', gender: 'Unisex', description: 'Panoramic single-lens sports shield with anti-fog ventilation channels for running, cycling, and golf.', features: ['Anti-fog ventilation brow', 'Non-slip Megol rubber pads', 'High contrast terrain tint'], stock: 'In Stock' }
];

export const LENS_OPTIONS_DATA: LensOption[] = [
  { id: 'lens-sv', name: 'Single Vision Clear Lenses', category: 'Standard', price: 199, benefits: ['Sharp distance or reading correction', 'Scratch resistant coating', '100% UV protection'], suitableFor: 'Everyday prescription distance or reading wear', thickness: '1.56 Mid Index', coating: 'Hard Coat' },
  { id: 'lens-blue', name: 'Blue-Light Filter Lenses', category: 'Digital Protection', price: 299, benefits: ['Blocks 45% HEV screen light', 'Reduces digital headaches & strain', 'Anti-reflective coating'], suitableFor: 'Computers, smartphones & desk work (6+ hours/day)', thickness: '1.60 Thin Index', coating: 'Blue-Shield AR' },
  { id: 'lens-ar', name: 'Ultra-Clear Anti-Reflective', category: 'Premium Optical', price: 399, benefits: ['Eliminates 99% night driving reflections', 'Hydrophobic smudge resistant', 'Super tough scratch barrier'], suitableFor: 'Night driving, photography & aesthetic clarity', thickness: '1.67 Super Thin', coating: 'Hydro-Oleophobic AR' },
  { id: 'lens-photo', name: 'Transitions Photochromic', category: 'Adaptive Sun', price: 599, benefits: ['Adapts automatically indoors to outdoors', 'Clear inside, dark sunglasses outside', 'UV400 protection'], suitableFor: 'Patients wanting 2-in-1 glasses & sunglasses', thickness: '1.60 Thin Index', coating: 'Photo-Adaptive' },
  { id: 'lens-prog', name: 'Custom Progressive Lenses', category: 'Multifocal', price: 799, benefits: ['Seamless distance, intermediate & reading focus', 'No visible bifocal lines', 'Wide digital corridor'], suitableFor: 'Presbyopia patients needing smooth multi-distance vision', thickness: '1.67 Super Thin', coating: 'Digital Freeform' }
];

export const SERVICES_DATA: EyeCareService[] = [
  { id: 'exam-comp', name: 'Comprehensive Eye Examination', description: 'Thorough 45-minute vision evaluation including digital autorefraction, intraocular pressure measurement, and retinal imaging.', duration: '45 min', price: 150, suitableFor: 'Annual routine eye health checkups for adults and seniors', process: ['Autorefraction & keratomery', 'Slit-lamp anterior segment evaluation', 'Non-contact tonometry pressure check', 'Digital fundus retina scan'], image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format&fit=crop' },
  { id: 'exam-contact', name: 'Contact Lens Fitting & Assessment', description: 'Specialized corneal curvature topography mapping, tear film evaluation, and trial lens fitting for spherical or toric contact lenses.', duration: '40 min', price: 120, suitableFor: 'New or existing contact lens wearers seeking maximum comfort', process: ['Corneal curvature mapping', 'Tear breakdown time audit', 'Diagnostic trial lens placement', 'Over-refraction check'], image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop' },
  { id: 'exam-dryeye', name: 'Dry Eye & Tear Film Assessment', description: 'Advanced meibography and tear meniscus diagnostic testing to identify and manage chronic eye dryness and irritation.', duration: '40 min', price: 200, suitableFor: 'Patients experiencing burning, redness, or watery eye strain', process: ['Meibomian gland imaging', 'NIBUT non-invasive tear breakdown test', 'Osmolarity check', 'Custom hydration protocol design'], image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop' },
  { id: 'exam-myopia', name: 'Pediatric Myopia Control Consultation', description: 'Specialized eye elongation measurement and orthokeratology or dual-focus lens consultation to slow down childhood nearsightedness.', duration: '45 min', price: 250, suitableFor: 'Children experiencing progressive nearsightedness (myopia)', process: ['Axial length biometry', 'Cycloplegic refraction check', 'Myopia progression velocity mapping', 'Treatment plan selection'], image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop' }
];

export const OPTOMETRISTS_DATA: Optometrist[] = [
  { id: 'dr-sarah-jenkins', name: 'Dr. Sarah Jenkins', specialty: 'Lead Clinical Optometrist', experience: '15 Years', qualifications: 'BSc Optometry (Hons), MCOptom (UK)', languages: ['English'], bio: 'Specializing in complex contact lens fittings, dry eye therapy, and advanced digital retinal imaging.', availability: 'Mon to Thu, Sat', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop' },
  { id: 'dr-tariq-al-mansoor', name: 'Dr. Tariq Al-Mansoor', specialty: 'Senior Refractive Specialist', experience: '13 Years', qualifications: 'FAAO, Master of Optometry (Melbourne)', languages: ['English', 'Arabic'], bio: 'Focused on comprehensive eye care, glaucoma screening, and progressive multifocal lens customization.', availability: 'Sun to Wed', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop' },
  { id: 'dr-chloe-laurent', name: 'Dr. Chloe Laurent', specialty: 'Pediatric & Myopia Optometrist', experience: '10 Years', qualifications: 'OD (Paris), Pediatric Optometry Fellow', languages: ['English', 'French'], bio: 'Dedicated to gentle children’s vision examinations and evidence-based myopia control protocols.', availability: 'Mon, Tue, Thu, Sat', image: 'https://images.unsplash.com/photo-1594824813572-c2e34f6b4e72?q=80&w=600&auto=format&fit=crop' }
];

export const ARTICLES_DATA: Article[] = [
  { id: 'art-1', title: '5 Indicators You Need Blue-Light Protection Glasses', category: 'Digital Eye Health', readTime: '4 min read', excerpt: 'How prolonged screen time causes digital eye strain, blurred focus, and disrupted circadian melatonin rhythms.', content: 'Staring at digital displays for more than 4 hours daily forces ciliary eye muscles into continuous contraction while reducing blink frequency by 50%...', image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format&fit=crop' },
  { id: 'art-2', title: 'How to Choose the Perfect Frame Shape for Your Face', category: 'Eyewear Styling', readTime: '5 min read', excerpt: 'A comprehensive geometry guide matching square, round, oval, and heart face shapes with complementary frames.', content: 'Selecting the ideal frame relies on geometric contrast. Angular square faces benefit from soft rounded or oval frames, while round faces look sculpted with sharp rectangular silhouettes...', image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop' },
  { id: 'art-3', title: 'Understanding Polarized Lenses: Why They Matter in Dubai', category: 'Sun Protection', readTime: '4 min read', excerpt: 'How vertical polarization filters eliminate blinding glare from road asphalt, sand, and water surfaces.', content: 'Unpolarized dark lenses only dim overall light intensity without eliminating harsh reflected glare. Polarized lenses feature a microscopic vertical filter array that blocks horizontally reflected light waves...', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop' }
];

export const FAQS_DATA: FaqItem[] = [
  { question: 'How do I book an eye test at VISTAÉYE Studio?', answer: 'You can book online using our eye test booking wizard, call our store concierge, or message us directly on WhatsApp at +971 52 339 4001.' },
  { question: 'How long does a comprehensive eye examination take?', answer: 'A full clinical eye examination takes approximately 30 to 45 minutes, including autorefraction, retinal imaging, and prescription verification.' },
  { question: 'What is the sample pricing for optical frames and lenses?', answer: 'Everyday optical frames start at AED 249, premium Italian acetate frames at AED 399, single vision prescription lenses at AED 199, and blue-light protection lenses at AED 299.' },
  { question: 'Can I upload my existing optical prescription online?', answer: 'Yes! Our online prescription upload workflow allows you to enter your SPH, CYL, AXIS, and PD values or upload a photo of your doctor’s prescription.' },
  { question: 'Do you offer same-day delivery in Dubai?', answer: 'Yes, for standard single-vision optical frames in stock, we offer same-day courier delivery in Dubai or 2-hour store pickup at City Walk.' },
  { question: 'Where are VISTAÉYE Optical Studios located?', answer: 'Our flagship studio is located on Level 1, City Walk Boulevard, Jumeirah, Dubai, UAE, with complimentary valet parking.' }
];
