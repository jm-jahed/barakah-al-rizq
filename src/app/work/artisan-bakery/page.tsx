import React from 'react';
import { Metadata } from 'next';
import { FlameFlourShowcase } from '@/components/flame-flour/FlameFlourShowcase';

export const metadata: Metadata = {
  title: 'FLAME & FLOUR — Artisan Baking House & Digital Bakery Experience | Project #80',
  description: 'Crafted by Fire. Finished by Hand. Slow fermentation, living levain cultures, 24 distinct bakes, interactive box builder, and live stone hearth operations in Dubai & Abu Dhabi, UAE.',
  openGraph: {
    title: 'FLAME & FLOUR — Artisan Baking House & Digital Bakery Experience',
    description: 'Crafted by Fire. Finished by Hand. Wood-fired sourdough loaves, French butter viennoiserie, bespoke celebration cakes, and morning courier dispatch.',
    type: 'website'
  }
};

export default function ArtisanBakeryPage() {
  return <FlameFlourShowcase />;
}
