const fs = require('fs');
const path = require('path');

const DISCIPLINES = [
  {
    id: 'cosmetic-smile-design',
    name: 'Cosmetic Dentistry & Veneers',
    tagline: 'Handcrafted E-Max Porcelain Veneers, Composite Bonding & Digital Smile Design',
    basePrice: 1800,
    priceSpan: 4200,
    duration: '60 - 90 Mins',
    doctor: 'Dr. Sofia Sterling (BDS London, Master Aesthetic Dentist)',
    badge: '3D CAD/CAM Smile Lab'
  },
  {
    id: 'implant-restoration',
    name: '3D Guided Implants & Surgery',
    tagline: 'Swiss Straumann Implants, All-on-4 / All-on-6 & Sinus Bone Grafting',
    basePrice: 3500,
    priceSpan: 8500,
    duration: '90 - 120 Mins',
    doctor: 'Dr. Marcus Vance (DDS Zurich, Oral & Maxillofacial Implantologist)',
    badge: 'Lifetime Straumann Guarantee'
  },
  {
    id: 'orthodontics-invisalign',
    name: 'Invisalign & Clear Aligners',
    tagline: 'iTero Lumina 3D Scans, Diamond Invisalign Provider & Lingual Braces',
    basePrice: 2800,
    priceSpan: 6500,
    duration: '45 - 60 Mins',
    doctor: 'Dr. Elena Rostova (MSc Orthodontics Stockholm, Invisalign Diamond)',
    badge: 'Direct Billing Available'
  },
  {
    id: 'endodontics-restorative',
    name: 'Micro-Endodontics & Crowns',
    tagline: 'Zeiss Microscope Root Canals, Ceramic Inlays & Full-Mouth Restoration',
    basePrice: 1200,
    priceSpan: 3200,
    duration: '60 - 90 Mins',
    doctor: 'Dr. Tariq Al Mansoori (BDS Dubai, Endodontic Specialist)',
    badge: 'Microscopic Precision'
  },
  {
    id: 'teeth-whitening-laser',
    name: 'Laser Whitening & Hygiene',
    tagline: 'Philips Zoom WhiteSpeed LED, Biolase Epic Laser Whitening & Airflow Spa',
    basePrice: 750,
    priceSpan: 1850,
    duration: '45 - 60 Mins',
    doctor: 'Dr. Chloe Dupont (DDS Paris, Preventive Oral Hygiene)',
    badge: 'Zero Sensitivity Protocol'
  },
  {
    id: 'pediatric-dentistry',
    name: 'Pediatric & Family Smiles',
    tagline: 'Gentle Child Dentistry, Fluoride Therapy, Dental Sealants & Space Maintainers',
    basePrice: 450,
    priceSpan: 1400,
    duration: '30 - 45 Mins',
    doctor: 'Dr. Nadia Karim (FRCD Canada, Consultant Pediatric Dentist)',
    badge: 'Child Friendly Clinic Suite'
  },
  {
    id: 'periodontics-gum-care',
    name: 'Periodontics & Gum Esthetics',
    tagline: 'Laser Gum Depigmentation, Gingival Grafting & Deep Ultrasonic Scaling',
    basePrice: 950,
    priceSpan: 2900,
    duration: '45 - 75 Mins',
    doctor: 'Dr. Marcus Vance (DDS Zurich, Oral Surgeon)',
    badge: 'DHA Licensed Periodontics'
  },
  {
    id: 'emergency-sedation',
    name: 'VIP Sedation & Emergency Care',
    tagline: 'Sleep Dentistry (Twilight Sedation), Emergency Tooth Re-implantation & Pain Relief',
    basePrice: 850,
    priceSpan: 3600,
    duration: '45 - 90 Mins',
    doctor: 'Dr. Sofia Sterling & On-Call Anesthesiologist',
    badge: '24/7 Jumeirah Emergency Call'
  }
];

const CURATED_DENTAL_IMAGES = [
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop'
];

const items = [];
let itemIdx = 1;

DISCIPLINES.forEach((dept, deptIdx) => {
  for (let i = 1; i <= 20; i++) {
    const id = `LUMINA-DENT-${String(itemIdx).padStart(3, '0')}`;
    const price = dept.basePrice + Math.round((i * dept.priceSpan) / 20);
    const originalPrice = Math.round(price * 1.15);
    const heroImage = CURATED_DENTAL_IMAGES[(itemIdx + i) % CURATED_DENTAL_IMAGES.length];
    const secondaryImage = CURATED_DENTAL_IMAGES[(itemIdx + i + 1) % CURATED_DENTAL_IMAGES.length];

    items.push({
      id,
      name: `${dept.name} — Protocol ${i}`,
      title: `${dept.name.split('&')[0].trim()} Precision Protocol ${i}`,
      subtitle: `${dept.duration} • ${dept.doctor.split('(')[0].trim()}`,
      disciplineId: dept.id,
      disciplineName: dept.name,
      category: 'Dental Healthcare',
      priceAED: price,
      originalPriceAED: originalPrice,
      duration: dept.duration,
      doctor: dept.doctor,
      insuranceBadge: dept.badge,
      clinicWing: `Lumina Dental Suite • Wing ${String.fromCharCode(65 + (i % 3))}`,
      inStock: true,
      isBestseller: i === 1 || i === 5 || i === 10,
      isDrop: i % 4 === 0,
      isNewArrival: i > 15,
      heroImage,
      images: [heroImage, secondaryImage],
      description: `Lumina Dental Atelier clinical protocol ${dept.name} — Treatment ${i}. Performed in our Jumeirah Dental Pavilion utilizing 3D intraoral optical scanning, computerized smile diagnostics, and biological biocompatible ceramics. Supervised by ${dept.doctor}.`,
      clinicalFeatures: [
        'High-resolution 3D iTero optical intraoral scan & smile simulation',
        'Swiss or German medical-grade biocompatible ceramic materials',
        'Direct billing coordination with UAE premium health & dental insurance',
        'Complimentary post-treatment dental review & oral care kit'
      ],
      patientNotice: 'Flexible 0% interest 4-month installment plans via Tabby and Tamara. Free valet parking at Jumeirah Beach Road Pavilion.'
    });

    itemIdx++;
  }
});

const outputFilePath = path.join(__dirname, '..', 'src', 'data', 'dentalCatalogData.ts');

const fileContent = `// LUMINA DENTAL ATELIER JUMEIRAH • DUBAI — 160 DENTAL PROCEDURES & TREATMENTS
// DHA Licensed Dental Facility, Swiss/German Materials & UAE AED Pricing

export interface DentalCatalogItem {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  disciplineId: string;
  disciplineName: string;
  category: string;
  priceAED: number;
  originalPriceAED?: number;
  duration: string;
  doctor: string;
  insuranceBadge: string;
  clinicWing: string;
  inStock: boolean;
  isBestseller?: boolean;
  isDrop?: boolean;
  isNewArrival?: boolean;
  heroImage: string;
  images: string[];
  description: string;
  clinicalFeatures: string[];
  patientNotice: string;
}

export const LUMINA_DENTAL_CATALOG: DentalCatalogItem[] = ${JSON.stringify(items, null, 2)};
`;

fs.writeFileSync(outputFilePath, fileContent, 'utf-8');
console.log(`Successfully generated ${items.length} Lumina Dental Atelier services for Project 18!`);
