import React from 'react';
import { Metadata } from 'next';
import { AquavantaShowcase } from '@/components/aquavanta/AquavantaShowcase';

export const metadata: Metadata = {
  title: 'AQUAVANTA — Intelligent Water Infrastructure & Smart Utility Twin | Showcase #71',
  description: 'Smart water infrastructure platform engineered for subterranean hydraulic digital twins, real-time pressure management, acoustic leak intelligence, and WHO-standard water quality monitoring.',
  openGraph: {
    title: 'AQUAVANTA — Intelligent Water Infrastructure',
    description: 'Every Drop. Precisely Delivered. Smart water infrastructure for UAE & global metropolitan developments.',
    type: 'website',
  }
};

export default function WaterSupplyPage() {
  return <AquavantaShowcase standalone={true} />;
}
