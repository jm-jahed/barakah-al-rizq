export interface Treatment {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  priceLabel: string;
  duration: string;
  recovery: string;
  suitableFor: string;
  benefits: string[];
  included: string[];
  faq: { question: string; answer: string };
  image: string;
}

export interface Dentist {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  qualifications: string;
  languages: string[];
  treatments: string[];
  bio: string;
  availability: string;
  image: string;
}

export interface TransformationCase {
  id: string;
  title: string;
  category: string;
  concern: string;
  treatmentPath: string;
  timeline: string;
  beforeImage: string;
  afterImage: string;
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

export const TREATMENTS_DATA: Treatment[] = [
  {
    id: 'consultation',
    name: 'Comprehensive Dental Consultation',
    category: 'General Dentistry',
    description: 'Complete oral checkup including digital 3D scanning, intraoral camera check, and personalized treatment plan.',
    price: 150,
    priceLabel: 'Sample Price',
    duration: '30 min',
    recovery: 'Immediate return to daily activities',
    suitableFor: 'New patients & routine annual oral health checkups',
    benefits: ['Full intraoral digital inspection', 'Early cavity detection', 'Customized treatment roadmap'],
    included: ['Doctor exam', 'Intraoral photos', '3D scan review'],
    faq: { question: 'Is the consultation painful?', answer: 'Not at all. The consultation is completely painless and non-invasive.' },
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cleaning',
    name: 'Professional Ultrasonic Cleaning & Polish',
    category: 'General Dentistry',
    description: 'Gentle ultrasonic scale and polish to eliminate plaque, calculus buildup, and surface stains.',
    price: 250,
    priceLabel: 'Sample Price',
    duration: '45 min',
    recovery: 'None',
    suitableFor: 'Patients seeking fresh breath, clean teeth, and healthy gums',
    benefits: ['Removes stubborn tartar', 'Prevents gum disease', 'Smoothes enamel surface'],
    included: ['Ultrasonic scaling', 'Air-flow stain polishing', 'Fluoride treatment'],
    faq: { question: 'How often should I get teeth cleaning?', answer: 'We recommend professional cleaning every 6 months.' },
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'whitening',
    name: 'In-Office Laser Teeth Whitening',
    category: 'Cosmetic Dentistry',
    description: 'Advanced in-office laser whitening system delivering up to 8 shades brighter teeth in a single comfortable session.',
    price: 699,
    priceLabel: 'Sample Starting Price',
    duration: '60 min',
    recovery: 'Avoid dark liquids for 48 hours',
    suitableFor: 'Clients wanting immediate, dramatic smile brightening for events',
    benefits: ['Instant 6 to 8 shades lighter', 'Enamel-safe cold LED light', 'Long-lasting results'],
    included: ['Gingival barrier protection', '3x 15-min whitening cycles', 'Post-whitening desensitizing gel'],
    faq: { question: 'Does whitening damage tooth enamel?', answer: 'No, our professional cold LED laser whitening is completely safe for natural enamel.' },
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'filling',
    name: 'Biocompatible Composite Filling',
    category: 'Restorative Dentistry',
    description: 'Tooth-colored composite restoration seamlessly matching your natural enamel shade to fix cavities or minor chips.',
    price: 350,
    priceLabel: 'Sample Price per Tooth',
    duration: '45 min',
    recovery: 'Avoid chew on numb side for 2 hours',
    suitableFor: 'Teeth with minor decay, cavities, or small surface fractures',
    benefits: ['Invisible shade match', 'Preserves natural tooth structure', 'Bonds directly to enamel'],
    included: ['Local anesthetic', 'Cavity clearance', 'Light-cured composite placement'],
    faq: { question: 'How long do composite fillings last?', answer: 'With proper oral hygiene, composite fillings typically last 7 to 10 years.' },
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'root-canal',
    name: 'Precision Endodontic Root Canal Therapy',
    category: 'Restorative Dentistry',
    description: 'Painless single-visit root canal treatment using rotary nerve clearing technology to save natural teeth.',
    price: 1200,
    priceLabel: 'Sample Starting Price',
    duration: '60-90 min',
    recovery: 'Mild tenderness for 24-48 hours',
    suitableFor: 'Patients experiencing severe toothache or infected nerve pulp',
    benefits: ['Eliminates severe pain', 'Saves natural tooth from extraction', '3D apex locator precision'],
    included: ['Nerve clearing', 'Biocompatible canal sealing', 'Temporary protective filling'],
    faq: { question: 'Is a root canal painful?', answer: 'Modern anesthesia ensures root canal therapy feels no different than a standard filling.' },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'crown',
    name: 'CAD/CAM Zirconia Porcelain Crown',
    category: 'Restorative Dentistry',
    description: 'High-strength, aesthetic 3D milled zirconia crown restoring full functional strength and natural translucency.',
    price: 1500,
    priceLabel: 'Sample Price per Crown',
    duration: '2 Visits (or Same-Day)',
    recovery: 'Immediate functional comfort',
    suitableFor: 'Severely broken teeth, post-root canal protection, or large failing fillings',
    benefits: ['Extreme durability & strength', 'Natural light transmission', 'Biocompatible metal-free design'],
    included: ['3D digital scan', 'Temporary crown', 'Final precision Zirconia crown fitting'],
    faq: { question: 'Are zirconia crowns strong?', answer: 'Zirconia is one of the strongest dental materials known, resisting chipping and wear.' },
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'veneers',
    name: 'Handcrafted Porcelain Veneers',
    category: 'Cosmetic Dentistry',
    description: 'Ultra-thin ceramic porcelain laminates custom crafted to redefine tooth shape, alignment, and long-term shade.',
    price: 1800,
    priceLabel: 'Sample Price per Veneer',
    duration: '2-3 Visits',
    recovery: 'Mild sensitivity for 2-3 days',
    suitableFor: 'Discolored, chipped, gapped, or slightly misaligned front teeth',
    benefits: ['Stain-resistant ceramic', 'Custom hand-layered aesthetics', 'Permanent Hollywood smile makeover'],
    included: ['Digital smile trial preview', 'Enamel micro-prep', 'Final porcelain bonding'],
    faq: { question: 'How long do porcelain veneers last?', answer: 'Porcelain veneers last 15 to 20+ years with standard routine dental care.' },
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'implants',
    name: 'Titanium Dental Implant & Crown Restoration',
    category: 'Dental Implants',
    description: 'Permanent surgical replacement for missing teeth using premium Swiss titanium posts and ceramic crowns.',
    price: 4500,
    priceLabel: 'Sample Starting Price',
    duration: 'Multi-Phase Protocol',
    recovery: '3-5 days initial healing',
    suitableFor: 'Patients missing one or multiple teeth seeking a permanent root-and-crown fix',
    benefits: ['Prevents jawbone loss', 'Feels and functions like natural teeth', 'Lifetime post warranty'],
    included: ['Guided implant placement', 'Healing abutment', 'Custom ceramic crown'],
    faq: { question: 'Am I a candidate for dental implants?', answer: 'Most adults with adequate jawbone density are excellent candidates.' },
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'aligners',
    name: 'Invisible Clear Aligner System',
    category: 'Orthodontics',
    description: 'Custom 3D printed transparent aligner trays discreetly straightening crowded or gapped teeth without metal braces.',
    price: 7500,
    priceLabel: 'Sample Package Price',
    duration: '6-14 Months',
    recovery: 'Mild pressure with new tray sets',
    suitableFor: 'Adults and teens wanting invisible, removable orthodontic alignment',
    benefits: ['100% nearly invisible', 'Removable for eating and brushing', '3D video progress simulation'],
    included: ['Full 3D scan & treatment plan', 'All aligner tray sets', 'Post-treatment retainer set'],
    faq: { question: 'How many hours a day do I wear aligners?', answer: 'Aligners should be worn 20 to 22 hours daily for optimal results.' },
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'braces',
    name: 'Advanced Aesthetic Ceramic Braces',
    category: 'Orthodontics',
    description: 'Tooth-colored ceramic brackets providing precise orthodontic movement with reduced visibility.',
    price: 6500,
    priceLabel: 'Sample Starting Price',
    duration: '12-18 Months',
    recovery: 'Adjustment tenderness for 2-3 days',
    suitableFor: 'Complex bite realignment or severe crowding cases',
    benefits: ['Clear ceramic brackets blend with teeth', 'Constant controlled movement', 'Solves complex bites'],
    included: ['Bracket bonding', 'Monthly adjustment visits', 'Retainer fitting'],
    faq: { question: 'Are ceramic braces noticeble?', answer: 'Ceramic brackets are tooth-colored and much less noticeable than traditional metal.' },
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pediatric',
    name: 'Gentle Pediatric Dental Examination & Fluoride',
    category: 'Pediatric Dentistry',
    description: 'Fun, child-friendly checkup focused on positive oral experiences, preventative sealants, and cavity defense.',
    price: 200,
    priceLabel: 'Sample Price',
    duration: '30 min',
    recovery: 'Immediate',
    suitableFor: 'Children aged 2 to 14 years',
    benefits: ['Child-centric gentle approach', 'Painless fluoride varnish', 'Prevents early childhood decay'],
    included: ['Pediatric exam', 'Gentle polish', 'Protection guidance for parents'],
    faq: { question: 'When should a child first visit the dentist?', answer: 'We recommend their first visit by age 1 or when their first tooth appears.' },
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'smile-makeover',
    name: 'Full Architectural Smile Makeover',
    category: 'Cosmetic Dentistry',
    description: 'Comprehensive multi-disciplinary smile transformation combining digital smile design, whitening, and veneers.',
    price: 9500,
    priceLabel: 'Sample Package Starting Price',
    duration: '2-4 Weeks',
    recovery: 'Varies by chosen procedures',
    suitableFor: 'Clients seeking a total smile metamorphosis',
    benefits: ['Fully customized facial proportion design', 'Mock-up preview before treatment', 'Lifetime confidence uplift'],
    included: ['3D facial scan & digital design', 'Diagnostic try-in mock-up', 'All cosmetic porcelain units'],
    faq: { question: 'Can I see my new smile before treatment?', answer: 'Yes! We create a 3D digital trial mock-up so you preview your new smile first.' },
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop'
  }
];

export const DENTISTS_DATA: Dentist[] = [
  {
    id: 'dr-adam-noor',
    name: 'Dr. Adam Noor',
    specialty: 'Cosmetic & Aesthetic Dentistry',
    experience: '14 Years',
    qualifications: 'BDS, MSc Cosmetic Dentistry (King’s College London)',
    languages: ['English', 'Arabic'],
    treatments: ['Porcelain Veneers', 'Smile Makeovers', 'Teeth Whitening', 'Composite Bonding'],
    bio: 'Pioneer in non-invasive aesthetic smile design, combining micro-layer ceramic artistry with digital 3D facial proportion planning.',
    availability: 'Mon, Wed, Thu, Sat',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'dr-maya-lin',
    name: 'Dr. Maya Lin',
    specialty: 'Orthodontics & Clear Aligners',
    experience: '12 Years',
    qualifications: 'DDS, Master of Orthodontics (Paris Decartes)',
    languages: ['English', 'French', 'Mandarin'],
    treatments: ['Clear Aligners', 'Ceramic Braces', 'Interceptive Orthodontics'],
    bio: 'Specializing in discreet adult aligner therapy and 3D digital tooth movement simulations to achieve harmonious facial aesthetics.',
    availability: 'Mon to Thu, Sun',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'dr-daniel-vance',
    name: 'Dr. Daniel Vance',
    specialty: 'Implantology & Oral Surgery',
    experience: '16 Years',
    qualifications: 'BDS, Fellow International Congress of Oral Implantologists',
    languages: ['English', 'German'],
    treatments: ['Dental Implants', 'Bone Grafting', 'Sinus Lifts', 'Complex Extractions'],
    bio: 'Surgically focused consultant dedicated to precision guided implant placement and long-term functional jawbone preservation.',
    availability: 'Tue, Thu, Fri, Sat',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'dr-sara-al-maktoum',
    name: 'Dr. Sara Al-Maktoum',
    specialty: 'Restorative & Endodontics',
    experience: '11 Years',
    qualifications: 'BDS, Specialist Endodontist (UK)',
    languages: ['English', 'Arabic'],
    treatments: ['Root Canal Therapy', 'Zirconia Crowns', 'Biocompatible Fillings'],
    bio: 'Expert in pain-free microscopic root canal clearing and preserving natural tooth structure through conservative restorative techniques.',
    availability: 'Sun to Wed',
    image: 'https://images.unsplash.com/photo-1594824813572-c2e34f6b4e72?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'dr-omar-hassan',
    name: 'Dr. Omar Hassan',
    specialty: 'General Dentistry & Hygiene',
    experience: '9 Years',
    qualifications: 'BDS, General Dental Practitioner',
    languages: ['English', 'Arabic'],
    treatments: ['Ultrasonic Cleaning', 'Dental Checkups', 'Night Guards', 'Fillings'],
    bio: 'Passionate about preventive oral health education, gentle ultrasonic scaling, and creating relaxing dental visits for anxious patients.',
    availability: 'Mon to Sat',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'dr-elena-rossi',
    name: 'Dr. Elena Rossi',
    specialty: 'Pediatric Dentistry',
    experience: '10 Years',
    qualifications: 'DDS, Master in Pediatric Dentistry (Milan)',
    languages: ['English', 'Italian', 'Spanish'],
    treatments: ['Pediatric Checkups', 'Fissure Sealants', 'Fluoride Defenses', 'Space Maintainers'],
    bio: 'Dedicated to fostering cheerful, positive dental experiences for young children and building healthy habits for life.',
    availability: 'Tue, Wed, Sat, Sun',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop'
  }
];

export const TRANSFORMATIONS_DATA: TransformationCase[] = [
  {
    id: 'case-1',
    title: '8-Unit Porcelain Veneers Transformation',
    category: 'Cosmetic Dentistry',
    concern: 'Enamel staining, chipped edges, & minor gaps',
    treatmentPath: 'Minimal prep porcelain veneers & shade BL2 whitening',
    timeline: '2 Weeks (2 Visits)',
    beforeImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'case-2',
    title: 'Clear Aligner Crowding Realignment',
    category: 'Orthodontics',
    concern: 'Severe lower anterior crowding & midline shift',
    treatmentPath: '12-Month invisible clear aligner tray sequence',
    timeline: '12 Months',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'case-3',
    title: 'Single Tooth Implant & Ceramic Crown',
    category: 'Dental Implants',
    concern: 'Missing central incisor following athletic injury',
    treatmentPath: 'Guided titanium implant placement + 3D Zirconia crown',
    timeline: '3.5 Months',
    beforeImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop'
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-1',
    title: 'How Professional Ultrasonic Cleaning Protects Gum Health',
    category: 'General Dentistry',
    readTime: '4 min read',
    excerpt: 'Why home brushing alone cannot remove mineralized tartar and how ultrasonic scaling prevents periodontal tissue recession.',
    content: 'Plaque that remains on enamel for more than 48 hours absorbs saliva minerals and hardens into calculus. Once hardened, calculus cannot be removed by standard toothbrushes. Ultrasonic scaling uses high-frequency acoustic vibrations combined with a water stream to gently detach tartar without scraping enamel...',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-2',
    title: 'In-Office Laser Whitening vs. Over-the-Counter Trays',
    category: 'Cosmetic Dentistry',
    readTime: '5 min read',
    excerpt: 'Understanding hydrogen peroxide concentration differences, gingival barrier protection, and enamel safety.',
    content: 'Over-the-counter whitening strips use low 3% to 6% peroxide solutions that can leak onto gums, causing irritation. In-office professional whitening utilizes medical-grade 25% to 35% whitening formulations protected by a light-cured gingival barrier...',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-3',
    title: 'Understanding Porcelain Veneers: Minimal-Prep Architecture',
    category: 'Cosmetic Dentistry',
    readTime: '5 min read',
    excerpt: 'How modern 0.3mm ultra-thin porcelain laminates preserve 95% of natural tooth enamel while reshaping your smile.',
    content: 'Traditional dental crowns required removing up to 60% of tooth structure. Today’s high-translucency feldspathic and lithium disilicate porcelain veneers require only 0.3mm to 0.5mm micro-preparation within natural enamel...',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-4',
    title: 'Clear Aligners Explained: How 3D Tooth Shifting Works',
    category: 'Orthodontics',
    readTime: '4 min read',
    excerpt: 'The biomechanics behind transparent alignment tray sequences and why digital progress tracking ensures precise bites.',
    content: 'Clear aligners exert continuous micro-forces onto specific teeth, stimulating bone remodeling. Every 10 to 14 days, patients transition to a new tray set designed to shift teeth by 0.25mm per step...',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-5',
    title: 'When You May Need a Root Canal: Warning Signs & Myth Busting',
    category: 'Restorative Dentistry',
    readTime: '4 min read',
    excerpt: 'Key indicators of deep pulp infection and why single-visit rotary endodontics feels completely painless.',
    content: 'Persistent throbbing tooth discomfort when chewing or prolonged thermal sensitivity often indicates nerve inflammation. Endodontic treatment clears infected pulp, disinfects root canals, and seals the tooth safely...',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-6',
    title: 'Daily Gum Care & Sensitivity Management Principles',
    category: 'Oral Health',
    readTime: '3 min read',
    excerpt: 'Simple daily steps to protect exposed dentin tubules and keep your gums firm and healthy.',
    content: 'Tooth sensitivity occurs when gum recession exposes microscopic dentin tubules leading to nerve endings. Using desensitizing toothpaste containing potassium nitrate helps calm nerve transmission...',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop'
  }
];

export const FAQS_DATA: FaqItem[] = [
  { question: 'How do I book an appointment at LUMINA DENTAL?', answer: 'You can book online via our interactive appointment wizard, by calling our reception desk, or directly through WhatsApp at +971 52 339 4001.' },
  { question: 'What are the sample consultation and treatment fees?', answer: 'Initial dental consultations start at AED 150, professional scale & polish at AED 250, laser teeth whitening at AED 699, and porcelain veneers from AED 1,800. All fees are clearly disclosed in advance.' },
  { question: 'Is dental treatment at LUMINA DENTAL painful?', answer: 'We prioritize maximum patient comfort. All procedures utilize computer-controlled local anesthesia, gentle ultrasonic technology, and calming amenities.' },
  { question: 'Can I choose my dentist?', answer: 'Yes! You can review specialist dentist profiles, qualifications, and availability to select your preferred doctor during booking.' },
  { question: 'Do you offer emergency dental appointments?', answer: 'Yes, we reserve daily slots for urgent dental situations like severe toothache, chipped front teeth, or lost fillings.' },
  { question: 'How long does in-office laser whitening take?', answer: 'Our in-office whitening session takes approximately 60 minutes and delivers instant results up to 8 shades lighter.' },
  { question: 'What is the difference between composite fillings and crowns?', answer: 'Fillings restore small to medium cavities within natural enamel, while crowns cover and protect severely broken or post-root canal teeth.' },
  { question: 'Do you accept insurance or provide receipts for reimbursement?', answer: 'We operate on a direct self-pay model with transparent AED rates and provide detailed itemized invoices suitable for insurance reimbursement claims.' },
  { question: 'Where is LUMINA DENTAL located in Dubai?', answer: 'Our modern clinic is situated on Level 2, City Walk Boulevard, Jumeirah, Dubai, UAE, with complimentary valet parking for all patients.' },
  { question: 'Can I see a 3D simulation of my smile before starting treatment?', answer: 'Yes! Our digital smile design technology creates a 3D mock-up preview so you can see your expected results before committing.' }
];
