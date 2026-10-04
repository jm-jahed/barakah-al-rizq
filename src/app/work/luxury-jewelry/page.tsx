import React from 'react';
import { Metadata } from 'next';
import { JewelryShowcase } from '@/components/jewelry/JewelryShowcase';

export const metadata: Metadata = {
  title: "Maison D'Or Paris • Dubai | Haute Joaillerie & Grand Complications (160 Pieces)",
  description: "Explore Maison D'Or Paris • Dubai: 160 sovereign high jewelry creations, GIA D-Flawless solitaires, Colombian emeralds, and flying tourbillons. Place Vendôme craftsmanship & DIFC Gate Village private salon.",
  keywords: [
    "High Jewelry Dubai",
    "Haute Joaillerie DIFC",
    "Maison D'Or Paris Dubai",
    "GIA Certified Diamonds UAE",
    "Flying Tourbillon Dubai",
    "Colombian Muzo Emeralds",
    "Bespoke Bridal Solitaire Dubai"
  ]
};

export default function LuxuryJewelryPage() {
  return (
    <main className="min-h-screen bg-[#070503]">
      <JewelryShowcase />
    </main>
  );
}

