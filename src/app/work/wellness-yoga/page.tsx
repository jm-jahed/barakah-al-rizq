import React from 'react';
import { WellnessShowcase } from '@/components/wellness/WellnessShowcase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AURA WELLNESS SANCTUARY DUBAI | Yoga, Reformer Pilates & Sound Baths (160 Practices)',
  description: 'AURA WELLNESS SANCTUARY: Explore 160 somatic practices, sunrise Mysore vinyasa, precision Allegro 2 reformer pilates, 432Hz crystal sound baths, and luxury desert retreats in Downtown Dubai.',
  keywords: [
    'Yoga Studio Downtown Dubai',
    'Reformer Pilates Dubai',
    'Crystal Sound Bath Dubai',
    'Aura Wellness Sanctuary',
    'Somatic Breathwork UAE',
    'Luxury Desert Yoga Retreat'
  ]
};

export default function WellnessYogaPage() {
  return <WellnessShowcase />;
}

