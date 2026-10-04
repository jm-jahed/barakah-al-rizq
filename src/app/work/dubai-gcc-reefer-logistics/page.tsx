import React from 'react';
import { Metadata } from 'next';
import ReeferShowcase from '@/components/reefer/ReeferShowcase';

export const metadata: Metadata = {
  title: 'Dubai to GCC 25-Ton Reefer Transport | Khaleej Reefer Logistics UAE',
  description: 'Reliable 25-ton refrigerated road transport from Al Aweer & JAFZA to Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and Syria. 20 dedicated reefer trailers, -18°C to +4°C dual-temp control, GPS tracking, and border-ready clearance.',
  keywords: [
    'Reefer transport Dubai',
    'Dubai to Saudi reefer truck',
    '25-ton reefer transport UAE',
    'Al Aweer fruit market transport',
    'JAFZA refrigerated transport',
    'GCC cold chain logistics',
    'Cross border refrigerated trucking',
    'Dubai to Qatar reefer',
    'Dubai to Kuwait reefer',
    'Temperature controlled road freight UAE'
  ],
  openGraph: {
    title: 'DUBAI TO GCC 🚛 | 25-Ton Reefer Transport | Fully Tracked. Border Ready.',
    description: 'Specialized temperature-controlled road transport from Al Aweer / JAFZA to major GCC destinations. 20 dedicated reefer units, -18°C to +4°C.',
    images: ['/images/reefer/hero-truck.jpg'],
  }
};

export default function ReeferLogisticsPage() {
  return <ReeferShowcase standalone={true} />;
}
