import React from 'react';
import { Metadata } from 'next';
import { StratosynShowcase } from '@/components/stratosyn/StratosynShowcase';

export const metadata: Metadata = {
  title: 'STRATOSYN — Distributed Cloud Infrastructure & Global Compute Fabric | Showcase #70',
  description: 'Dubai DIFC & global sovereign cloud platform engineered for distributed micro-enclaves, real-time BGP Anycast routing, multi-region active-active replication, and autonomous workload orchestration.',
  openGraph: {
    title: 'STRATOSYN — Distributed Cloud Infrastructure & Global Compute Fabric',
    description: 'Compute without boundaries. Infrastructure engineered for scale across UAE & 7 global hubs.',
    type: 'website',
  }
};

export default function CloudComputingPage() {
  return <StratosynShowcase standalone={true} />;
}
