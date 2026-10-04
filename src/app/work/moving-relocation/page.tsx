import React from 'react';
import { Metadata } from 'next';
import { MovingShowcase } from '@/components/moving/MovingShowcase';

export const metadata: Metadata = {
  title: 'NESTMOVE — Premium Moving & Relocation Platform | Showcase #24',
  description: 'Professional residential home, office, and international relocation services designed to make moving simple, safe, and stress-free.',
};

export default function MovingProjectPage() {
  return <MovingShowcase standalone={true} />;
}
