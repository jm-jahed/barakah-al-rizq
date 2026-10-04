import React from 'react';
import { Metadata } from 'next';
import { BakeryShowcase } from '@/components/bakery/BakeryShowcase';

export const metadata: Metadata = {
  title: 'Maison Crème Paris • Dubai | Haute Pâtisserie & Bespoke Cakes (160 Creations)',
  description: 'Maison Crème Paris • Dubai: Explore 160 artisanal pastry creations, multi-tier wedding cakes, French AOP butter viennoiserie, and Dubai Majlis towers in DIFC Gate Avenue.',
  keywords: [
    'Haute Patisserie Dubai',
    'Custom Wedding Cakes Dubai',
    'Maison Creme DIFC',
    'Luxury Birthday Cakes UAE',
    'French Viennoiserie Dubai',
    'Majlis Dessert Towers Dubai'
  ]
};

export default function BakeryCakeStudioPage() {
  return (
    <main className="min-h-screen bg-[#070605]">
      <BakeryShowcase />
    </main>
  );
}

