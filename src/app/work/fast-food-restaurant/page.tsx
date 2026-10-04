import React from 'react';
import { Metadata } from 'next';
import { CrispoShowcase } from '@/components/crispo/CrispoShowcase';

export const metadata: Metadata = {
  title: 'CRISPO — Crispy Chicken & Fast Food | Showcase #26',
  description: 'Discover CRISPO’s crispy chicken, burgers, wings, family buckets and fresh fast-food combos. Order for delivery, pickup or dine-in in Dubai.',
};

export default function FastFoodRestaurantProjectPage() {
  return <CrispoShowcase standalone={true} />;
}
