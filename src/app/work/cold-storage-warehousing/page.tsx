import React from 'react';
import { Metadata } from 'next';
import { FrostvaultShowcase } from '@/components/frostvault/FrostvaultShowcase';

export const metadata: Metadata = {
  title: 'FROSTVAULT — Intelligent Cold Chain Infrastructure & Smart Warehouse Management | Showcase #76',
  description: 'Precision at Every Degree. Multi-zone sub-zero cold storage, real-time NIST sensor mesh telemetry, and intelligent automated warehouse logistics in Dubai, UAE.',
  openGraph: {
    title: 'FROSTVAULT — Intelligent Cold Chain Infrastructure',
    description: 'Precision at Every Degree. Sub-zero frozen, chilled, and controlled warehouse logistics powered by real-time telemetry.',
    type: 'website',
  }
};

export default function ColdStorageWarehousingPage() {
  return <FrostvaultShowcase />;
}
