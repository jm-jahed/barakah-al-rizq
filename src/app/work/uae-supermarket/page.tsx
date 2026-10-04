import React from 'react';
import type { Metadata } from 'next';
import SupermarketShowcase from '../../../components/supermarket/SupermarketShowcase';

export const metadata: Metadata = {
  title: 'Al Mirqab Hypermarket — 1,000+ Products UAE Supermarket | WebStudio AE',
  description:
    'Flagship UAE Supermarket E-Commerce platform with 1,000+ products across 40 categories, full English/Arabic bilingual RTL support, affordable AED pricing, and 45-60 min express delivery.',
};

export default function SupermarketPage() {
  return <SupermarketShowcase />;
}
