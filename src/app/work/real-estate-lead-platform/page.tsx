import React from 'react';
import { Metadata } from 'next';
import { RealEstateShowcase } from '@/components/real-estate/RealEstateShowcase';

export const metadata: Metadata = {
  title: 'LUXESTATE UAE | Super-Prime Real Estate & Private Client Portfolio',
  description: 'Flagship UAE luxury real estate platform featuring 216+ exclusive private estates, 12 prime communities, live mortgage and ROI telemetry, DLD escrow compliance, and UAE Golden Visa advisory.',
};

export default function RealEstateProjectPage() {
  return <RealEstateShowcase />;
}
