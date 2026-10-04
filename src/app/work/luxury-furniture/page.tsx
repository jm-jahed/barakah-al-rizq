import { Metadata } from 'next';
import { FormaShowcase } from '@/components/luxury-furniture/FormaShowcase';

export const metadata: Metadata = {
  title: 'FORMA ATELIER — Luxury Furniture & Architectural Living | Project #82',
  description: 'Quiet luxury furniture handcrafted from Roman travertine, American walnut, and Italian bouclé. Explore 200+ curated works, bespoke studio customizer, and UAE showrooms in d3 & Saadiyat Island.',
  keywords: [
    'luxury furniture dubai',
    'architectural interior design UAE',
    'roman travertine coffee table',
    'bespoke walnut dining table',
    'italian boucle sofa dubai',
    'forma atelier d3',
    'luxury home decor abu dhabi'
  ],
  openGraph: {
    title: 'FORMA ATELIER — Luxury Furniture & Interior Living',
    description: 'Furniture shaped around living. Handcrafted between Treviso, Italy and Al Quoz, Dubai. 200+ architectural works, bespoke finishes, and white-glove UAE delivery.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 800,
        alt: 'FORMA ATELIER Luxury Living'
      }
    ]
  }
};

export default function LuxuryFurniturePage() {
  return <FormaShowcase />;
}
