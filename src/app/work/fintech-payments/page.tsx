import React from 'react';
import { Metadata } from 'next';
import { NexoraPayShowcase } from '@/components/nexora-pay/NexoraPayShowcase';

export const metadata: Metadata = {
  title: 'NEXORA PAY — Institutional FinTech & Global Payment Infrastructure | Showcase #29',
  description: 'Next-generation payment gateway, multi-currency treasury settlement in AED/USD, virtual corporate cards, and developer API sandbox engineered for UAE and global enterprises.',
};

export default function FintechPaymentsProjectPage() {
  return <NexoraPayShowcase />;
}
