import React from 'react';
import { Metadata } from 'next';
import { SneakerShowcase } from '@/components/sneaker/SneakerShowcase';

export const metadata: Metadata = {
  title: 'SOLE VAULT DUBAI | 100% Authenticated Grails & Streetwear (160 Items)',
  description: 'SOLE VAULT DUBAI: Explore 160 deadstock verified grails, Air Jordan 1s, Travis Scott collabs, Y2K runners, and 520GSM heavyweight streetwear in Alserkal Avenue.',
  keywords: [
    'Sneaker Marketplace Dubai',
    'Sole Vault Alserkal Avenue',
    'Air Jordan 1 Dubai',
    'Travis Scott Sneakers UAE',
    'Heavyweight Streetwear Dubai',
    'Authentic Sneaker Resale Dubai'
  ]
};

export default function SneakerStreetwearPage() {
  return (
    <main className="min-h-screen bg-[#0A0908]">
      <SneakerShowcase />
    </main>
  );
}

