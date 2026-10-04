import React from 'react';
import { Metadata } from 'next';
import { TensorisShowcase } from '@/components/tensoris/TensorisShowcase';

export const metadata: Metadata = {
  title: 'TENSORIS — Enterprise Cognitive AI Platform & Autonomous Agent Matrix | Showcase #68',
  description: 'Dubai DIFC & Abu Dhabi sovereign AI intelligence infrastructure for real-time neural reasoning, multi-agent workflow orchestration, enterprise knowledge graphs, and predictive decision engines.',
  openGraph: {
    title: 'TENSORIS — Sovereign Enterprise AI Cognitive Infrastructure',
    description: 'Autonomous multi-agent orchestration and sovereign neural reasoning for UAE & global enterprises.',
    type: 'website',
  }
};

export default function ArtificialIntelligencePage() {
  return <TensorisShowcase standalone={true} />;
}
