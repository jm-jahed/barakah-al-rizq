import React from 'react';
import { Metadata } from 'next';
import { VeritasShowcase } from '@/components/veritas/VeritasShowcase';

export const metadata: Metadata = {
  title: 'VERITAS LEGAL — UAE Corporate Law Firm & Legal Advisory | Showcase #30',
  description: 'Premium UAE corporate legal advisory for founders, investors and companies across Dubai, Abu Dhabi, DIFC and ADGM.',
};

export default function CorporateLawFirmProjectPage() {
  return <VeritasShowcase standalone={true} />;
}
