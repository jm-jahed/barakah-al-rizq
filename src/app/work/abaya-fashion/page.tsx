import React from 'react';
import { Metadata } from 'next';
import { NouraAbayaShowcase } from '@/components/noura-abaya/NouraAbayaShowcase';

export const metadata: Metadata = {
  title: 'NOURA ABAYA — Arabian Elegance, Reimagined | Showcase #35',
  description: 'Contemporary abayas and luxury modest occasionwear handcrafted in Dubai. Featuring 699+ unique Japanese Nida, raw silk, crepe, and organza abayas with custom bespoke tailoring and same-day UAE delivery.',
};

export default function AbayaFashionProjectPage() {
  return <NouraAbayaShowcase standalone={true} />;
}
