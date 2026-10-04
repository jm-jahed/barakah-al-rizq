import React from 'react';
import { Metadata } from 'next';
import { DunecraftShowcase } from '@/components/dunecraft/DunecraftShowcase';

export const metadata: Metadata = {
  title: 'DUNECRAFT — UAE Desert Safari & Dune Adventure Platform | Showcase #42',
  description: 'Premium desert safaris, red dune bashing, VIP Bedouin camping, quad biking, and corporate desert events across Dubai Al Awir and Abu Dhabi Al Khatim.',
};

export default function DesertSafariAdventurePage() {
  return <DunecraftShowcase standalone={true} />;
}