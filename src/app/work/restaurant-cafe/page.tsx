import React from 'react';
import { Metadata } from 'next';
import { RestaurantShowcase } from '@/components/restaurant/RestaurantShowcase';

export const metadata: Metadata = {
  title: 'AL SULTAN CUISINE & ROYAL MAJLIS | Haute Gastronomy & Private Dining Dubai',
  description: 'A sovereign UAE fine dining destination combining 18-hour Royal Emirati banquets, French black truffle gastronomy, Japanese A5 Wagyu omakase, and 160 bespoke culinary creations across DIFC, Palm Jumeirah and Downtown Dubai.',
};

export default function RestaurantCafePage() {
  return <RestaurantShowcase standalone={true} />;
}
