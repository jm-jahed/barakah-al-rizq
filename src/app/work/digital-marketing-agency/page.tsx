import type { Metadata } from 'next';
import { MarketingShowcase } from '@/components/marketing/MarketingShowcase';

export const metadata: Metadata = {
  title: 'NEXUS GROWTH ATELIER UAE | Enterprise Performance Media & AI Growth',
  description: 'DIFC Dubai enterprise growth agency. 160+ performance PPC sprints, bilingual Arabic/English SEO, neuro-funnel CRO, WhatsApp automation, and algorithmic ROI forecasting.',
};

export default function DigitalMarketingAgencyPage() {
  return <MarketingShowcase standalone={true} />;
}
