import React from 'react';
import { Metadata } from 'next';
import { NeroShowcase } from '@/components/nero/NeroShowcase';

export const metadata: Metadata = {
  title: 'NERO MARINE — Sovereign Superyacht Charter in Dubai & Abu Dhabi | Showcase #09',
  description: 'Dubai Harbour and Yas Marina premier superyacht charter fleet. 185 ft Benetti and 240 ft Gulf Craft mega-yachts, private island itineraries, live APA calculator, and 3-star Michelin maritime gastronomy.',
  keywords: [
    'Superyacht Charter Dubai',
    'Yacht Rental Dubai Harbour',
    'Mega Yacht Charter Abu Dhabi',
    'Yas Marina F1 Yacht Mooring',
    'Sir Bani Yas Yacht Cruise',
    'Musandam Yacht Expedition',
    'NERO MARINE UAE'
  ],
  openGraph: {
    title: 'NERO MARINE — Sovereign Superyacht Charter in Dubai & Abu Dhabi',
    description: 'Dubai Harbour and Yas Marina premier superyacht charter fleet. Live APA calculator in AED, deck-by-deck explorer, and private island itineraries.',
    images: ['https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1200&q=85'],
  }
};

export default function SuperyachtCharterPage() {
  return <NeroShowcase standalone={true} />;
}
