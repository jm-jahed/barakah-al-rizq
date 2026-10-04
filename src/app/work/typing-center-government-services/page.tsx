import React from 'react';
import { Metadata } from 'next';
import TypingCenterShowcase from '@/components/typingCenter/TypingCenterShowcase';

export const metadata: Metadata = {
  title: 'SANAD — UAE Government Services Digital Hub | Typing, Visa, Emirates ID & Tasheel',
  description: 'Certified UAE government services digital platform. Transparent typing, Emirates ID renewal, residence visas, Tasheel labour contracts, Golden Visa guidance, and MOFA attestation in Dubai, Abu Dhabi, and the UAE.',
};

export default function TypingCenterPage() {
  return <TypingCenterShowcase standalone={true} />;
}
