import React from 'react';
import { Metadata } from 'next';
import { LuxshieldShowcase } from '@/components/luxshield/LuxshieldShowcase';

export const metadata: Metadata = {
  title: 'LUXSHIELD AUTO — Premium UAE Ceramic Coating & Car Detailing | Showcase #39',
  description: 'Premium ceramic coating, PPF and detailing in Dubai and Abu Dhabi, engineered for extreme climate protection.',
};

export default function CarDetailingCeramicCoatingPage() {
  return <LuxshieldShowcase standalone={true} />;
}