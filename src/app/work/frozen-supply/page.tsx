import React from 'react';
import { Metadata } from 'next';
import { FrozenSupplyShowcase } from '@/components/frozen-supply/FrozenSupplyShowcase';

export const metadata: Metadata = {
  title: 'FROZEN SUPPLY CO. — UAE Commercial Cold-Chain & Foodservice Distribution',
  description: 'Direct wholesale distribution of certified frozen poultry, prime meats, seafood, IQF produce, and bakery goods. Monitored sub-zero cold-chain logistics across Dubai, Abu Dhabi, and the 7 Emirates.',
  keywords: [
    'Frozen food supply Dubai',
    'Commercial poultry wholesale UAE',
    'Frozen meat supplier UAE',
    'Cold chain distribution Dubai',
    'HORECA frozen supplier Abu Dhabi',
    'IQF vegetables wholesale',
    'Halal frozen chicken supplier UAE',
    'Dubai Industrial City cold storage'
  ],
  openGraph: {
    title: 'FROZEN SUPPLY CO. — UAE Commercial Cold-Chain Supply',
    description: 'Precision sub-zero food supply for UAE hotel chains, restaurants, catering, and supermarkets. 216+ commercial SKUs in stock.',
    images: ['https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1200&q=80'],
    type: 'website',
  }
};

export default function FrozenSupplyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WholesaleStore',
    'name': 'FROZEN SUPPLY CO. UAE',
    'image': 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=1200&q=80',
    'telephone': '+971 4 882 7400',
    'email': 'procurement@frozensupply.ae',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Cold Logistics Terminal 4, Dubai Industrial City (DIC)',
      'addressLocality': 'Dubai',
      'addressRegion': 'Dubai',
      'addressCountry': 'AE'
    },
    'priceRange': '$$$$',
    'description': 'Commercial B2B frozen foodstuff supply and cold-chain logistics provider operating across the United Arab Emirates and GCC.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FrozenSupplyShowcase />
    </>
  );
}
