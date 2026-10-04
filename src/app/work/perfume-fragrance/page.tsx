import React from 'react';
import { Metadata } from 'next';
import { PerfumeShowcase } from '@/components/perfume/PerfumeShowcase';

export const metadata: Metadata = {
  title: 'OUD ROYALE PARIS • DUBAI | Haute Parfumerie & Pure Dehn Al Oud',
  description: 'A sovereign luxury fragrance atelier featuring 30-year vintage Kalakassi Dehn Al Oud, 40% concentration French extraits, Taif rose attars, bespoke engraved master coffrets, and 160 royal perfumes across Dubai Mall and Mall of the Emirates.',
};

export default function PerfumeFragrancePage() {
  return <PerfumeShowcase standalone={true} />;
}
