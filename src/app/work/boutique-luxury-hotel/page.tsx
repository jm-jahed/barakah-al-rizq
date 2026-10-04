import React from 'react';
import { Metadata } from 'next';
import { HotelShowcase } from '@/components/hotel/HotelShowcase';

export const metadata: Metadata = {
  title: 'VELORA PALACE & OASIS RESORT — Luxury Boutique Palace Dubai | Showcase #25',
  description: 'Discover VELORA PALACE & OASIS RESORT, an ultra-exclusive architectural sanctuary and beachfront palace on Jumeirah Bay Island and Palm Jumeirah, Dubai. Handcrafted suites, 2 Michelin-starred gastronomy, and 24/7 dedicated Royal Butler service.',
};

export default function LuxuryHotelProjectPage() {
  return <HotelShowcase standalone={true} />;
}

