import React from 'react';
import { Metadata } from 'next';
import { AzureShowcase } from '@/components/azure/AzureShowcase';

export const metadata: Metadata = {
  title: 'AZURE YACHTS — Luxury Yacht Charter in Dubai & Abu Dhabi | Showcase #41',
  description: 'Private luxury yacht charters in Dubai Marina and Abu Dhabi Corniche — sunset cruises, celebrations, and corporate events on the water.',
};

export default function YachtCharterPage() {
  return <AzureShowcase standalone={true} />;
}