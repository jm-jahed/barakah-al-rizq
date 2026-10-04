import React from 'react';
import { Metadata } from 'next';
import { NexaraShowcase } from '@/components/nexara/NexaraShowcase';

export const metadata: Metadata = {
  title: 'NEXARA — The Next Generation Gaming Universe | Showcase #79',
  description: 'Enter. Compete. Evolve. 24 connected titles, competitive tournaments, player progression identity, and live match center simulation.',
  openGraph: {
    title: 'NEXARA — The Next Generation Gaming Universe',
    description: 'Enter. Compete. Evolve. Connected gaming ecosystem with 24 titles and AED 1,000,000+ competitive circuits.',
    type: 'website',
  }
};

export default function GamingPage() {
  return <NexaraShowcase />;
}
