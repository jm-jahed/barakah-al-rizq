import React from 'react';
import { Metadata } from 'next';
import { DesertMirageShowcase } from '@/components/desert-mirage/DesertMirageShowcase';

export const metadata: Metadata = {
  title: 'DESERT MIRAGE SAFARIS — Luxury Desert Expeditions • Dubai, UAE | Showcase #69',
  description: 'Bespoke Arabian desert expeditions in Dubai featuring private Range Rover off-road navigation, royal falconry, Michelin-calibre sand gastronomy, and stargazing retreats.',
  openGraph: {
    title: 'Desert Mirage Safaris — Luxury Desert Expeditions | Dubai',
    description: 'Bespoke Arabian desert expeditions in Dubai featuring private Range Rover off-road navigation, royal falconry, and luxury camp sanctuaries.',
    type: 'website',
  }
};

export default function DesertTourismPage() {
  return <DesertMirageShowcase standalone={true} />;
}
