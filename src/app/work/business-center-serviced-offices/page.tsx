import { Metadata } from 'next';
import NexusNav from '@/components/nexusWorkspace/NexusNav';
import NexusHero from '@/components/nexusWorkspace/NexusHero';
import TrustStrip from '@/components/nexusWorkspace/TrustStrip';
import EditorialIntro from '@/components/nexusWorkspace/EditorialIntro';
import ServicedOffices from '@/components/nexusWorkspace/ServicedOffices';
import SpaceCalculator from '@/components/nexusWorkspace/SpaceCalculator';
import LocationHighlights from '@/components/nexusWorkspace/LocationHighlights';
import BusinessSetup from '@/components/nexusWorkspace/BusinessSetup';
import OfficeExperience from '@/components/nexusWorkspace/OfficeExperience';
import WhyNexus from '@/components/nexusWorkspace/WhyNexus';
import CaseStudySection from '@/components/nexusWorkspace/CaseStudySection';
import Testimonials from '@/components/nexusWorkspace/Testimonials';
import NexusFAQ from '@/components/nexusWorkspace/NexusFAQ';
import TourBookingForm from '@/components/nexusWorkspace/TourBookingForm';
import NexusFinalCTA from '@/components/nexusWorkspace/NexusFinalCTA';
import NexusFooter from '@/components/nexusWorkspace/NexusFooter';

export const metadata: Metadata = {
  title: 'NEXUS WORKSPACE — Premium UAE Serviced Offices & Business Centers',
  description: 'NEXUS WORKSPACE is a premium UAE serviced office and business center concept offering ready-to-use private offices, meeting spaces and flexible workspace solutions across Dubai and Abu Dhabi.',
};

export default function BusinessCenterPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NexusNav />
      <NexusHero />
      <TrustStrip />
      <EditorialIntro />
      <ServicedOffices />
      <SpaceCalculator />
      <LocationHighlights />
      <BusinessSetup />
      <OfficeExperience />
      <WhyNexus />
      <CaseStudySection />
      <Testimonials />
      <NexusFAQ />
      <TourBookingForm />
      <NexusFinalCTA />
      <NexusFooter />
    </main>
  );
}
