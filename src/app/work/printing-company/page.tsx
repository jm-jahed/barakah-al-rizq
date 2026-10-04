import React from 'react';
import { Metadata } from 'next';
import { PressoraShowcase } from '@/components/pressora/PressoraShowcase';

export const metadata: Metadata = {
  title: 'PRESSORA — Precision Print & Brand Production Platform | Showcase #77',
  description: 'Make Every Detail Count. Commercial digital & offset printing, interactive 3D configurators, automated preflight validation, and UAE-wide dispatch.',
  openGraph: {
    title: 'PRESSORA — Precision Print & Brand Production',
    description: 'Make Every Detail Count. Luxury corporate stationery, custom packaging, and commercial print manufacturing in Dubai, UAE.',
    type: 'website',
  }
};

export default function PrintingCompanyPage() {
  return <PressoraShowcase />;
}
