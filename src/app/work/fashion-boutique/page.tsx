import React from 'react';
import { Metadata } from 'next';
import { FashionShowcase } from '@/components/fashion/FashionShowcase';

export const metadata: Metadata = {
  title: 'ÉLANE ATELIER PARIS • DUBAI | Haute Couture & Luxury Ready-to-Wear (160 Creations)',
  description: 'ÉLANE ATELIER: Explore 160 sovereign haute couture creations, hand-pleated mulberry silk evening dresses, imported royal abayas, and Super 160s wool blazers in Dubai Design District (d3).',
  keywords: [
    'Haute Couture Dubai',
    'Luxury Fashion Dubai Design District',
    'Elane Atelier Paris Dubai',
    'Bespoke Silk Gowns UAE',
    'Emirati Royal Abayas',
    'Sartorial Suiting Dubai'
  ]
};

export default function FashionBoutiquePage() {
  return (
    <main className="min-h-screen bg-[#090807]">
      <FashionShowcase />
    </main>
  );
}

