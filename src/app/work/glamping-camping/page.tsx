import React from 'react';
import { Metadata } from 'next';
import { EmberwildShowcase } from '@/components/emberwild/EmberwildShowcase';

export const metadata: Metadata = {
  title: 'EMBERWILD — Luxury Wilderness Stays & Outdoor Experiences | Showcase #78',
  description: 'Stay Close to Wild. Discover extraordinary stays, private camps, and unforgettable outdoor experiences across the UAE in AED.',
  openGraph: {
    title: 'EMBERWILD — Luxury Wilderness Stays & Outdoor Experiences',
    description: 'Stay Close to Wild. Discover 24 geodesic domes, cedar cabins, and luxury desert pavilions.',
    type: 'website',
  }
};

export default function GlampingCampingPage() {
  return <EmberwildShowcase />;
}
