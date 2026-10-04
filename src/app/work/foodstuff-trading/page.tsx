import React from 'react';
import { Metadata } from 'next';
import { BarakahShowcase } from '@/components/barakah/BarakahShowcase';

export const metadata: Metadata = {
  title: 'Barakah Al Rizq Foodstuff Trading L.L.C | UAE Foodstuff Importer & Wholesaler',
  description: 'Barakah Al Rizq Foodstuff Trading L.L.C is a UAE-based foodstuff trading company specializing in import, export, wholesale and reliable food supply across Dubai and international markets.',
  keywords: [
    'Barakah Al Rizq Foodstuff Trading',
    'Dubai Foodstuff Importer',
    'Al Aweer Vegetable Market Wholesaler',
    'UAE Fruit and Vegetable Supplier',
    'Basmati Rice Wholesale Dubai',
    'Spices Importer Ras Al Khor',
    'MD HABEER KHAN'
  ],
  openGraph: {
    title: 'Barakah Al Rizq Foodstuff Trading L.L.C | UAE Foodstuff Importer & Wholesaler',
    description: 'Leading UAE foodstuff import, export, wholesale, and bulk supply enterprise headquartered at Al Aweer Vegetable Market, Ras Al Khor, Dubai.',
    images: ['https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1200&auto=format&fit=crop'],
    url: 'https://barakahalrizquae.com',
    type: 'website',
  },
};

export default function FoodstuffTradingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WholesaleStore',
    'name': 'Barakah Al Rizq Foodstuff Trading L.L.C',
    'image': 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1200&auto=format&fit=crop',
    'telephone': '+971 56 944 8850',
    'email': 'barakahalrizquae@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Office No. M02, Building No. 3, Above Zam Zam Supermarket, Al Aweer Veg Market, Ras Al Khor',
      'addressLocality': 'Dubai',
      'addressRegion': 'Dubai',
      'addressCountry': 'AE'
    },
    'url': 'https://barakahalrizquae.com',
    'priceRange': '$$$',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BarakahShowcase standalone={true} />
    </>
  );
}