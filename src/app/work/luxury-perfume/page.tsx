import React from 'react';
import { Metadata } from 'next';
import { PerfumeShowcase } from '@/components/perfume/PerfumeShowcase';

export const metadata: Metadata = {
  title: 'OUD ROYALE PARIS • DUBAI | Haute Parfumerie & Pure Dehn Al Oud (160 Flacons)',
  description: 'OUD ROYALE PARIS • DUBAI: 160 sovereign flacons, 30-year vintage Kalakassi Dehn Al Oud, 40% concentration French extraits, Taif rose attars, and bespoke engraved coffrets across Dubai Mall and Mall of the Emirates.',
  keywords: [
    'Haute Parfumerie Dubai',
    'Oud Royale Paris Dubai',
    'Pure Dehn Al Oud Dubai Mall',
    'Bespoke Perfume Coffret Dubai',
    'Taif Rose Attar UAE'
  ]
};

export default function LuxuryPerfumePage() {
  return <PerfumeShowcase standalone={true} />;
}

