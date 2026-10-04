import React from 'react';
import { Metadata } from 'next';
import { FitnessShowcase } from '@/components/fitness/FitnessShowcase';

export const metadata: Metadata = {
  title: 'KINETIC ATHLETICA DUBAI — High-Performance Athletic Club & Biomechanics Lab | DIFC & Palm Jumeirah',
  description: 'Dubai’s apex athletic facility with 160 master training protocols, CSCS certified master coaches, sub-zero biohacking cryotherapy, and Olympic lifting lab in DIFC Gate Avenue & Palm Jumeirah.',
  keywords: [
    'gym dubai',
    'kinetic athletica',
    'difc performance gym',
    'palm jumeirah private gym',
    'personal training dubai',
    'olympic lifting dubai',
    'cryotherapy dubai',
    'high performance sports dubai',
    'dubai sports council gym'
  ],
  openGraph: {
    title: 'KINETIC ATHLETICA DUBAI — High-Performance Athletic Club',
    description: '160 master athletic protocols, biomechanics conditioning, sub-zero cryo, and bespoke coaching in DIFC & Palm Jumeirah.',
    type: 'website',
    locale: 'en_AE',
  }
};

export default function FitnessGymPage() {
  return (
    <main className="min-h-screen bg-[#0A0908]">
      <FitnessShowcase />
    </main>
  );
}
