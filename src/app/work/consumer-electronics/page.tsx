import React from 'react';
import { Metadata } from 'next';
import { AetheraShowcase } from '@/components/consumer-electronics/AetheraShowcase';

export const metadata: Metadata = {
  title: 'AETHERA — Luxury Consumer Electronics & Gadgets Atelier | Showcase #81',
  description: 'Curated universe of 210+ premium gadgets, intelligent devices, and next-generation technology across 40 categories with interactive 3D living showcase, setup builder, and same-day UAE VIP delivery.',
  openGraph: {
    title: 'AETHERA — Luxury Consumer Electronics & Gadgets Atelier',
    description: 'Technology, Elevated. 210+ Flagship gadgets, 40 ecosystems, 2-Year UAE VIP warranty, and Dubai/Abu Dhabi showrooms.',
    type: 'website',
  }
};

export default function ConsumerElectronicsPage() {
  return <AetheraShowcase />;
}
