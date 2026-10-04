import React from 'react';
import { Metadata } from 'next';
import { VeloraShowcase } from '@/components/velora/VeloraShowcase';

export const metadata: Metadata = {
  title: 'VELORA — Private Wellness & Recovery Sanctuary | Showcase #75',
  description: 'Return to Yourself. A private world of restorative rituals, intelligent hydrotherapy, and deeply considered sensory experiences in Dubai, UAE.',
  openGraph: {
    title: 'VELORA — Private Wellness & Recovery Sanctuary',
    description: 'Return to Yourself. The world slows down here. Luxury hospitality meets modern restorative wellness.',
    type: 'website',
  }
};

export default function LuxurySpaWellnessPage() {
  return <VeloraShowcase />;
}
