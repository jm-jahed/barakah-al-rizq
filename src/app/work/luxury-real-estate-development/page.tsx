import React from 'react';
import { Metadata } from 'next';
import { AureliaShowcase } from '@/components/aurelia/AureliaShowcase';

export const metadata: Metadata = {
  title: 'AURELIA ESTATES — Ultra-Luxury Real Estate Development in Dubai & Abu Dhabi | Showcase #12',
  description: 'DIFC Gate Village 3 & Abu Dhabi developer of bespoke private mansions, waterfront compounds, and trophy sky penthouses across Palm Jumeirah, Emirates Hills, and Saadiyat Island.',
  keywords: [
    'Luxury Real Estate Dubai',
    'Private Residences Palm Jumeirah',
    'Emirates Hills Mansions',
    'Saadiyat Island Compounds',
    'Aurelia Estates UAE',
    'Turnkey Mansion Developer Dubai',
    'DLD Escrow Real Estate'
  ],
  openGraph: {
    title: 'AURELIA ESTATES — Ultra-Luxury Private Residences & Property Development',
    description: '12 Signature UAE Estates, interactive capital calculator in AED, bespoke villa configurator, and 100% Freehold title deeds.',
    images: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85'],
  }
};

export default function LuxuryRealEstateDevelopmentPage() {
  return <AureliaShowcase standalone={true} />;
}
