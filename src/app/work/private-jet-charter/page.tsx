import React from 'react';
import { Metadata } from 'next';
import { AerovaultShowcase } from '@/components/aerovault/AerovaultShowcase';

export const metadata: Metadata = {
  title: 'AEROVAULT — Private Jet Charter Broker in Dubai & Abu Dhabi | Showcase #43',
  description: 'Premium private jet charters, empty leg deals, Jet Card memberships, and VIP FBO terminal access in Dubai (DWC/DXB) and Abu Dhabi.',
};

export default function PrivateJetCharterPage() {
  return <AerovaultShowcase standalone={true} />;
}