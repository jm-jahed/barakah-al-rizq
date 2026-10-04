import React from 'react';
import { Metadata } from 'next';
import { FreshauraShowcase } from '@/components/freshaura/FreshauraShowcase';

export const metadata: Metadata = {
  title: 'FRESHAURA — Fresh Fruits & Vegetables Delivery UAE | Showcase #36',
  description: 'Premium fresh fruits and vegetables delivered across Dubai, Abu Dhabi, Sharjah, Ajman and Al Ain. Shop 200+ fresh produce products online.',
};

export default function FreshFruitsVegetablesProjectPage() {
  return <FreshauraShowcase standalone={true} />;
}
