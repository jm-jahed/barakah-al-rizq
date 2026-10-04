import React from 'react';
import { Metadata } from 'next';
import { SalonShowcase } from '@/components/salon/SalonShowcase';

export const metadata: Metadata = {
  title: 'VELVET BEAUTY ATELIER UAE | Haute Aesthetics & Sovereign Beauty Rituals',
  description: 'Ultra-luxury Dubai beauty sanctuary & VIP spa. 160+ French Balayage, Swiss Valmont Cellular Facials, Russian Hardware Manicures, Royal Moroccan Hammam, and bespoke bridal suites.',
};

export default function SalonBeautyStudioPage() {
  return <SalonShowcase standalone={true} />;
}
