import React from 'react';
import { Metadata } from 'next';
import { NexoraShowcase } from '@/components/nexora/NexoraShowcase';

export const metadata: Metadata = {
  title: 'NEXORA BUSINESS — UAE Business Consultancy & Advisory | Showcase #29',
  description: 'Premium UAE business consultancy helping founders and companies with business setup, corporate advisory, market entry and growth strategy across Dubai and Abu Dhabi.',
};

export default function BusinessConsultancyProjectPage() {
  return <NexoraShowcase standalone={true} />;
}
