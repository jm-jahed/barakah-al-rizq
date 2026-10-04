import React from 'react';
import { TravelShowcase } from '@/components/travel/TravelShowcase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AURELIA TRAVEL — Private Journeys · Curated Experiences · Worldwide',
  description: 'A bespoke luxury travel agency in Dubai offering curated private journeys, overwater sanctuaries, alpine rail expeditions, private jet charters, and 24/7 VIP concierge travel management.',
};

export default function LuxuryTravelPage() {
  return <TravelShowcase />;
}
