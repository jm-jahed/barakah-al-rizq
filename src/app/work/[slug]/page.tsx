import React from 'react';
import { Metadata } from 'next';
import { redirect, notFound } from 'next/navigation';
import { RestaurantPosApp } from '@/components/restaurant-pos/RestaurantPosApp';
import InvoiceGeneratorPage from '@/app/projects/invoice-generator/page';
import { RealEstateShowcase } from '@/components/real-estate/RealEstateShowcase';
import { CleaningShowcase } from '@/components/cleaning/CleaningShowcase';
import { CarRentalShowcase } from '@/components/car-rental/CarRentalShowcase';
import { SalonShowcase } from '@/components/salon/SalonShowcase';
import { RestaurantShowcase } from '@/components/restaurant/RestaurantShowcase';
import { MaintenanceShowcase } from '@/components/maintenance/MaintenanceShowcase';
import { MarketingShowcase } from '@/components/marketing/MarketingShowcase';
import { ConstructionShowcase } from '@/components/construction/ConstructionShowcase';
import { PerfumeShowcase } from '@/components/perfume/PerfumeShowcase';
import { JewelryShowcase } from '@/components/jewelry/JewelryShowcase';
import { FashionShowcase } from '@/components/fashion/FashionShowcase';
import { SneakerShowcase } from '@/components/sneaker/SneakerShowcase';
import { FitnessShowcase } from '@/components/fitness/FitnessShowcase';
import { WellnessShowcase } from '@/components/wellness/WellnessShowcase';
import { ClinicShowcase } from '@/components/clinic/ClinicShowcase';
import { DentalShowcase } from '@/components/dental/DentalShowcase';
import { OpticalShowcase } from '@/components/optical/OpticalShowcase';
import { BarberShowcase } from '@/components/barber/BarberShowcase';
import { PetCareShowcase } from '@/components/pet-care/PetCareShowcase';
import { TravelShowcase } from '@/components/travel/TravelShowcase';
import { LogisticsShowcase } from '@/components/logistics/LogisticsShowcase';
import { MovingShowcase } from '@/components/moving/MovingShowcase';
import { HotelShowcase } from '@/components/hotel/HotelShowcase';
import { CrispoShowcase } from '@/components/crispo/CrispoShowcase';
import { OasiraShowcase } from '@/components/oasira/OasiraShowcase';
import { NexoraShowcase } from '@/components/nexora/NexoraShowcase';
import { VeritasShowcase } from '@/components/veritas/VeritasShowcase';
import { LedgeraShowcase } from '@/components/ledgera/LedgeraShowcase';
import { AurenShowcase } from '@/components/auren/AurenShowcase';
import { NestoraShowcase } from '@/components/nestora/NestoraShowcase';
import { VantageShowcase } from '@/components/vantage/VantageShowcase';
import { NouraAbayaShowcase } from '@/components/noura-abaya/NouraAbayaShowcase';
import { FreshauraShowcase } from '@/components/freshaura/FreshauraShowcase';
import { StayoraShowcase } from '@/components/stayora/StayoraShowcase';
import { BakeryShowcase } from '@/components/bakery/BakeryShowcase';
import { AutovantaShowcase } from '@/components/autovanta/AutovantaShowcase';
import { DunecraftShowcase } from '@/components/dunecraft/DunecraftShowcase';
import { SkyvaultShowcase } from '@/components/skyvault/SkyvaultShowcase';
import { LuxshieldShowcase } from '@/components/luxshield/LuxshieldShowcase';
import { RoadforgeShowcase } from '@/components/roadforge/RoadforgeShowcase';
import { AzureShowcase } from '@/components/azure/AzureShowcase';
import { AerovaultShowcase } from '@/components/aerovault/AerovaultShowcase';
import { BarakahShowcase } from '@/components/barakah/BarakahShowcase';
import { LongevityShowcase } from '@/components/longevity/LongevityShowcase';
import { ValkyrieShowcase } from '@/components/valkyrie/ValkyrieShowcase';
import { SolarisShowcase } from '@/components/solaris/SolarisShowcase';
import { CyberfortressShowcase } from '@/components/cyberfortress/CyberfortressShowcase';
import { FalconryShowcase } from '@/components/falconry/FalconryShowcase';
import { NexusShowcase } from '@/components/nexus/NexusShowcase';
import { AuraShowcase } from '@/components/aura/AuraShowcase';
import { VelocityShowcase } from '@/components/velocity/VelocityShowcase';
import { NeroShowcase } from '@/components/nero/NeroShowcase';
import { SolariaShowcase } from '@/components/solaria/SolariaShowcase';
import { EclatShowcase } from '@/components/eclat/EclatShowcase';
import { AureliaShowcase } from '@/components/aurelia/AureliaShowcase';
import { AurelisShowcase } from '@/components/aurelis/AurelisShowcase';
import { EveraShowcase } from '@/components/evera/EveraShowcase';
import { NexoraPayShowcase } from '@/components/nexora-pay/NexoraPayShowcase';
import { NovaRemitShowcase } from '@/components/nova-remit/NovaRemitShowcase';
import { TensorisShowcase } from '@/components/tensoris/TensorisShowcase';
import { DesertMirageShowcase } from '@/components/desert-mirage/DesertMirageShowcase';
import { StratosynShowcase } from '@/components/stratosyn/StratosynShowcase';
import { AquavantaShowcase } from '@/components/aquavanta/AquavantaShowcase';
import { VirelisShowcase } from '@/components/virelis/VirelisShowcase';
import { MedivantaShowcase } from '@/components/medivanta/MedivantaShowcase';
import { AeroviaShowcase } from '@/components/aerovia/AeroviaShowcase';
import { VeloraShowcase } from '@/components/velora/VeloraShowcase';
import { FrostvaultShowcase } from '@/components/frostvault/FrostvaultShowcase';
import { PressoraShowcase } from '@/components/pressora/PressoraShowcase';
import { EmberwildShowcase } from '@/components/emberwild/EmberwildShowcase';
import { NexaraShowcase } from '@/components/nexara/NexaraShowcase';
import { FlameFlourShowcase } from '@/components/flame-flour/FlameFlourShowcase';
import { CorporateShowcase } from '@/components/corporate/CorporateShowcase';
import { AegisSecurityShowcase } from '@/components/aegisSecurity/AegisSecurityShowcase';
import { TypingCenterShowcase } from '@/components/typingCenter/TypingCenterShowcase';
import ReeferShowcase from '@/components/reefer/ReeferShowcase';
import SupermarketShowcase from '@/components/supermarket/SupermarketShowcase';
import { FrozenSupplyShowcase } from '@/components/frozen-supply/FrozenSupplyShowcase';
import { ReadingProgressBar } from '@/components/ui/ReadingProgressBar';

interface DynamicProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: DynamicProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const normalized = slug.toLowerCase();

  if (normalized === 'pos' || normalized === 'restaurant-instant-bill' || normalized === 'restaurant-pos') {
    return {
      title: "RESTAURANT POS — Smart Restaurant Management & Instant Billing (UAE) | WebStudio AE",
      description: "Enterprise UAE Smart Restaurant POS System & Billing ERP with live thermal receipts, table management, KDS, staff PIN security, and AED multi-currency support. Get 1st Month Free & Custom Pricing.",
      openGraph: {
        title: "RESTAURANT POS — Smart Restaurant Management & Instant Billing (UAE)",
        description: "Enterprise UAE Smart Restaurant POS System & Billing ERP with live thermal receipts, table management, KDS, staff PIN security, and AED multi-currency support. Get 1st Month Free & Custom Pricing.",
        url: `https://webstudioae.com/work/${slug}`,
        siteName: "WebStudio AE",
        images: [
          {
            url: "https://webstudioae.com/pos-promo.jpg",
            width: 1200,
            height: 1500,
            alt: "RESTAURANT POS — Smart Restaurant Management Promotional Poster",
            type: "image/jpeg",
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "RESTAURANT POS — Smart Restaurant Management & Instant Billing (UAE)",
        description: "Enterprise UAE Smart Restaurant POS System & Billing ERP with live thermal receipts, table management, KDS, staff PIN security, and AED multi-currency support. Get 1st Month Free & Custom Pricing.",
        images: ["https://webstudioae.com/pos-promo.jpg"],
      },
    };
  }

  if (normalized === 'inv' || normalized === 'invoice-generator') {
    return {
      title: "UAE Multi-Industry Invoicing ERP — FTA Tax Generator & Accounts Receivable | WebStudio AE",
      description: "Enterprise UAE FTA-compliant bilingual tax invoice generator and business receivables ERP with automated Arabic & English Tafqeet amount-in-words converter, dual-mode PIN security, and PDF/Print export.",
      openGraph: {
        title: "UAE Multi-Industry Invoicing ERP — FTA Tax Generator & Accounts Receivable",
        description: "Enterprise UAE FTA-compliant bilingual tax invoice generator and business receivables ERP with automated Arabic & English Tafqeet amount-in-words converter, dual-mode PIN security, and PDF/Print export.",
        url: `https://webstudioae.com/work/${slug}`,
        siteName: "WebStudio AE",
        images: [
          {
            url: "https://webstudioae.com/inv-promo.jpg",
            width: 1200,
            height: 1500,
            alt: "UAE Multi-Industry Invoicing ERP Promotional Poster",
            type: "image/jpeg",
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "UAE Multi-Industry Invoicing ERP — FTA Tax Generator & Accounts Receivable",
        description: "Enterprise UAE FTA-compliant bilingual tax invoice generator and business receivables ERP with automated Arabic & English Tafqeet amount-in-words converter, dual-mode PIN security, and PDF/Print export.",
        images: ["https://webstudioae.com/inv-promo.jpg"],
      },
    };
  }

  return {
    title: `Project Showcase: ${slug} | Agency Portfolio Concept`,
    description: `Industry website showcase concept for ${slug}.`,
  };
}

function getProjectShowcase(slug: string) {
  const normalized = slug.toLowerCase();
  if (normalized === 'pos' || normalized === 'restaurant-instant-bill' || normalized === 'restaurant-pos') {
    return <RestaurantPosApp />;
  }
  if (normalized === 'inv' || normalized === 'invoice-generator') {
    return <InvoiceGeneratorPage />;
  }

  // AL MIRQAB HYPERMARKET — 2,530+ PRODUCTS UAE DIGITAL HYPERMARKET (Project #88)
  if (
    slug === 'uae-supermarket' ||
    slug === 'al-mirqab-hypermarket' ||
    slug === 'supermarket' ||
    slug === 'hypermarket' ||
    slug === 'uae-hypermarket' ||
    slug === 'al-mirqab' ||
    slug === 'uae-grocery' ||
    slug === 'online-supermarket' ||
    slug === 'grocery-delivery' ||
    slug === 'project-88' ||
    slug === '88' ||
    slug === 'project-89' ||
    slug === '89' ||
    slug.startsWith('uae-supermarket') ||
    slug.startsWith('al-mirqab') ||
    slug.startsWith('supermarket') ||
    slug.startsWith('hypermarket')
  ) {
    return <SupermarketShowcase />;
  }

  // KHALEEJ REEFER LOGISTICS — DUBAI TO GCC 25-TON REEFER (Project #86)
  if (
    slug === 'dubai-gcc-reefer-logistics' ||
    slug === 'reefer-logistics' ||
    slug === 'dubai-reefer' ||
    slug === 'gcc-reefer' ||
    slug === 'khaleej-reefer' ||
    slug === 'reefer-transport' ||
    slug.startsWith('dubai-gcc-reefer') ||
    slug.startsWith('reefer')
  ) {
    return <ReeferShowcase standalone={true} />;
  }

  // SANAD UAE GOVERNMENT SERVICES & TYPING CENTER (Project #84)
  if (
    slug === 'typing-center-government-services' ||
    slug === 'typing-center' ||
    slug === 'government-services' ||
    slug === 'amer-tasheel' ||
    slug === 'emirates-id-services' ||
    slug === 'pro-services' ||
    slug === 'sanad' ||
    slug === 'sanad-services' ||
    slug.startsWith('typing') ||
    slug.startsWith('sanad')
  ) {
    return <TypingCenterShowcase />;
  }

  // AEGIS SOVEREIGN SECURITY & GUARD SERVICES (Project #83)
  if (
    slug === 'security-guard-services' ||
    slug === 'security-services' ||
    slug === 'security' ||
    slug === 'aegis-security' ||
    slug === 'aegis' ||
    slug === 'guard-services' ||
    slug === 'executive-protection' ||
    slug === 'security-guards' ||
    slug.startsWith('security') ||
    slug.startsWith('aegis')
  ) {
    return <AegisSecurityShowcase />;
  }

  // VANGUARD HOLDINGS CORPORATE & ENTERPRISE project route check (Project #22)
  if (
    slug === 'corporate-enterprise' ||
    slug === 'corporate' ||
    slug === 'enterprise' ||
    slug === 'vanguard-holdings' ||
    slug === 'vanguard' ||
    slug === 'project-22' ||
    slug === 'enterprise-corporate' ||
    slug.startsWith('corporate-enterprise') ||
    slug.startsWith('vanguard')
  ) {
    return <CorporateShowcase />;
  }

  // FLAME & FLOUR ARTISAN BAKERY project route check (Project #80)
  if (
    slug === 'artisan-bakery' ||
    slug === 'flame-flour' ||
    slug === 'flameflour' ||
    slug === 'bakery' ||
    slug === 'flame-and-flour' ||
    slug.startsWith('artisan-bakery') ||
    slug.startsWith('flame-flour')
  ) {
    return <FlameFlourShowcase />;
  }

  // NEXARA GAMING & COMPETITIVE ESPORTS project route check (Project #79)
  if (
    slug === 'gaming' ||
    slug === 'nexara' ||
    slug === 'gaming-platform' ||
    slug === 'interactive-entertainment' ||
    slug === 'competitive-gaming' ||
    slug.startsWith('gaming') ||
    slug.startsWith('nexara')
  ) {
    return <NexaraShowcase />;
  }

  // EMBERWILD GLAMPING & CAMPING project route check (Project #78)
  if (
    slug === 'glamping-camping' ||
    slug === 'emberwild' ||
    slug === 'glamping' ||
    slug === 'camping' ||
    slug === 'nature-retreats' ||
    slug.startsWith('glamping') ||
    slug.startsWith('emberwild')
  ) {
    return <EmberwildShowcase />;
  }

  // PRESSORA PRINTING COMPANY project route check (Project #77)
  if (
    slug === 'printing-company' ||
    slug === 'pressora' ||
    slug === 'commercial-printing' ||
    slug === 'print-commerce' ||
    slug.startsWith('printing') ||
    slug.startsWith('pressora')
  ) {
    return <PressoraShowcase />;
  }

  // FROZEN SUPPLY CO. COMMERCIAL COLD-CHAIN & FOODSERVICE SUPPLY (Project #87)
  if (
    slug === 'frozen-supply' ||
    slug === 'frozensupply' ||
    slug === 'frozen-food' ||
    slug === 'cold-supply' ||
    slug === 'frozen-food-supply' ||
    slug === 'project-87' ||
    slug === '87' ||
    slug === 'project-88' ||
    slug.startsWith('frozen-supply') ||
    slug.startsWith('frozensupply')
  ) {
    return <FrozenSupplyShowcase />;
  }

  // FROSTVAULT COLD STORAGE & WAREHOUSING project route check (Project #76)
  if (
    slug === 'cold-storage-warehousing' ||
    slug === 'frostvault' ||
    slug === 'cold-storage' ||
    slug === 'cold-chain' ||
    slug === 'smart-warehouse' ||
    slug.startsWith('cold-storage') ||
    slug.startsWith('frostvault')
  ) {
    return <FrostvaultShowcase />;
  }

  // VELORA LUXURY SPA & WELLNESS RETREAT project route check (Project #75)
  if (
    slug === 'luxury-spa-wellness' ||
    slug === 'velora' ||
    slug === 'wellness-sanctuary' ||
    slug === 'luxury-spa' ||
    slug === 'wellness-retreat' ||
    slug.startsWith('luxury-spa') ||
    slug.startsWith('velora')
  ) {
    return <VeloraShowcase />;
  }

  // AEROVIA FLIGHT & HOTEL BOOKING project route check (Project #74)
  if (
    slug === 'flight-hotel-booking' ||
    slug === 'aerovia' ||
    slug === 'travel-commerce' ||
    slug === 'flight-booking' ||
    slug === 'hotel-booking' ||
    slug.startsWith('flight-hotel') ||
    slug.startsWith('aerovia')
  ) {
    return <AeroviaShowcase />;
  }

  // MEDIVANTA MEDICINE SUPPLY & DELIVERY project route check (Project #73)
  if (
    slug === 'medicine-supply' ||
    slug === 'medivanta' ||
    slug === 'medicine-delivery' ||
    slug === 'healthcare-delivery' ||
    slug === 'digital-pharmacy' ||
    slug.startsWith('medicine-supp') ||
    slug.startsWith('medivanta')
  ) {
    return <MedivantaShowcase />;
  }

  // VIRELIS MEDICAL DIAGNOSTICS project route check (Project #72)
  if (
    slug === 'medical-diagnostics' ||
    slug === 'virelis' ||
    slug === 'diagnostic-intelligence' ||
    slug === 'medical-diagnostic-intelligence' ||
    slug === 'virelis-diagnostics' ||
    slug.startsWith('medical-diag') ||
    slug.startsWith('virelis')
  ) {
    return <VirelisShowcase />;
  }

  // AQUAVANTA WATER SUPPLY project route check (Project #71)
  if (
    slug === 'water-supply' ||
    slug === 'aquavanta' ||
    slug === 'smart-water-infrastructure' ||
    slug === 'aquavanta-water' ||
    slug.startsWith('water-supp') ||
    slug.startsWith('aquavanta')
  ) {
    return <AquavantaShowcase />;
  }

  // STRATOSYN CLOUD COMPUTING project route check (Project #70)
  if (
    slug === 'cloud-computing' ||
    slug === 'stratosyn' ||
    slug === 'stratosyn-cloud' ||
    slug === 'distributed-cloud' ||
    slug === 'cloud-infrastructure' ||
    slug.startsWith('cloud-comp') ||
    slug.startsWith('stratosyn')
  ) {
    return <StratosynShowcase />;
  }

  // DESERT MIRAGE SAFARIS project route check (Project #69)
  if (
    slug === 'desert-tourism' ||
    slug === 'desert-mirage' ||
    slug === 'desert-mirage-safaris' ||
    slug === 'luxury-desert-safari' ||
    slug.startsWith('desert-tour') ||
    slug.startsWith('desert-mir')
  ) {
    return <DesertMirageShowcase />;
  }

  // TENSORIS ARTIFICIAL INTELLIGENCE project route check
  if (
    slug === 'artificial-intelligence' ||
    slug === 'tensoris' ||
    slug === 'tensoris-ai' ||
    slug === 'enterprise-ai' ||
    slug === 'enterprise-ai-platform' ||
    slug === 'ai-platform' ||
    slug.startsWith('artificial-intel') ||
    slug.startsWith('tensoris')
  ) {
    return <TensorisShowcase />;
  }

  // NOVA REMIT project route check
  if (
    slug === 'money-exchange-remittance' ||
    slug === 'nova-remit' ||
    slug === 'global-remittance' ||
    slug.startsWith('nova-remit')
  ) {
    return <NovaRemitShowcase />;
  }

  // NEXORA PAY project route check
  if (
    slug === 'fintech-payments' ||
    slug === 'nexora-pay' ||
    slug === 'global-payments' ||
    slug.startsWith('fintech-pay') ||
    slug.startsWith('nexora-pay')
  ) {
    return <NexoraPayShowcase />;
  }

  // EVERA WEDDINGS project route check
  if (
    slug === 'wedding-planning' ||
    slug === 'evera-weddings' ||
    slug === 'luxury-wedding-planning' ||
    slug.startsWith('wedding-plan') ||
    slug.startsWith('evera-wed')
  ) {
    return <EveraShowcase />;
  }

  // Aurelis Auto Care project route check
  if (
    slug === 'car-detailing-ceramic-coating' ||
    slug === 'aurelis-auto-care' ||
    slug === 'auto-detailing' ||
    slug.startsWith('car-detailing') ||
    slug.startsWith('aurelis-auto')
  ) {
    return <AurelisShowcase />;
  }

  // Ultra-Luxury Real Estate Development project route check (New Design #12)
  if (
    slug === 'luxury-real-estate-development' ||
    slug === 'aurelia-estates' ||
    slug === 'luxury-residences' ||
    slug.startsWith('luxury-real-estate') ||
    slug.startsWith('aurelia-es')
  ) {
    return <AureliaShowcase />;
  }

  // Ultra-Luxury Culinary & Private Gastronomy project route check (New Design #11)
  if (
    slug === 'private-gastronomy-atelier' ||
    slug === 'maison-eclat' ||
    slug === 'luxury-gastronomy' ||
    slug.startsWith('private-gastronomy') ||
    slug.startsWith('maison-ec')
  ) {
    return <EclatShowcase />;
  }

  // Ultra-Luxury Private Island Resort project route check (New Design #10)
  if (
    slug === 'private-island-resort' ||
    slug === 'solaria-island' ||
    slug === 'luxury-resort' ||
    slug.startsWith('private-island') ||
    slug.startsWith('solaria-is')
  ) {
    return <SolariaShowcase />;
  }

  // Superyacht Charter & Marine Luxury project route check (New Design #09)
  if (
    slug === 'superyacht-charter' ||
    slug === 'nero-marine' ||
    slug === 'yacht-charter' ||
    slug.startsWith('superyacht') ||
    slug.startsWith('nero-mar')
  ) {
    return <NeroShowcase />;
  }

  // Executive Jet Charter & Aviation Management project route check (New Design #08)
  if (
    slug === 'executive-jet-charter' ||
    slug === 'velocity-aviation' ||
    slug === 'private-jet-charter' ||
    slug.startsWith('executive-jet') ||
    slug.startsWith('velocity-avi')
  ) {
    return <VelocityShowcase />;
  }

  // Smart Villa Automation & Architectural Audio project route check (New Design #07)
  if (
    slug === 'luxury-villa-automation' ||
    slug === 'aura-smart-homes' ||
    slug === 'aura-smart' ||
    slug.startsWith('luxury-villa') ||
    slug.startsWith('aura-smart')
  ) {
    return <AuraShowcase />;
  }

  // FinTech Digital Asset Custody Vault project route check (New Design #06)
  if (
    slug === 'institutional-crypto-vault' ||
    slug === 'nexus-vault' ||
    slug === 'nexus-crypto' ||
    slug.startsWith('institutional-crypto') ||
    slug.startsWith('nexus-vault')
  ) {
    return <NexusShowcase />;
  }

  // Royal Falconry & Avian Bio-Tech project route check (New Design #05)
  if (
    slug === 'royal-falconry-sanctuary' ||
    slug === 'falconry' ||
    slug === 'royal-falconry' ||
    slug.startsWith('falconry-') ||
    slug.startsWith('royal-falcon')
  ) {
    return <FalconryShowcase />;
  }

  // Sovereign Cybersecurity & AI SOC project route check (New Design #04)
  if (
    slug === 'sovereign-cybersecurity' ||
    slug === 'cyberfortress' ||
    slug === 'cyber-defense' ||
    slug.startsWith('cyberfortress-') ||
    slug.startsWith('sovereign-cyber')
  ) {
    return <CyberfortressShowcase />;
  }

  // Sovereign Clean Energy & Green Hydrogen project route check (New Design #03)
  if (
    slug === 'clean-energy-hydrogen' ||
    slug === 'solaris' ||
    slug === 'solaris-energy' ||
    slug.startsWith('clean-energy') ||
    slug.startsWith('solaris-')
  ) {
    return <SolarisShowcase />;
  }

  // Hypercar Coachbuilding project route check (New Design #02)
  if (
    slug === 'hypercar-coachbuilding' ||
    slug === 'valkyrie-hypercars' ||
    slug === 'valkyrie' ||
    slug.startsWith('hypercar-') ||
    slug.startsWith('valkyrie-')
  ) {
    return <ValkyrieShowcase />;
  }

  // Longevity & Bio-Tech Clinic project route check (New Design #01)
  if (
    slug === 'longevity-bio-clinic' ||
    slug === 'vita-cell' ||
    slug === 'vitacell' ||
    slug.startsWith('longevity-') ||
    slug.startsWith('vita-')
  ) {
    return <LongevityShowcase />;
  }

  // Fresh Fruits & Vegetables E-Commerce project route check
  if (
    slug === 'fresh-fruits-vegetables' ||
    slug === 'freshaura' ||
    slug === 'fresh-produce' ||
    slug === 'grocery' ||
    slug.startsWith('fresh-') ||
    slug.startsWith('freshaura-')
  ) {
    return <FreshauraShowcase />;
  }

  // Women's Abaya E-Commerce & Haute Couture Atelier (Project #35)
  if (
    slug === 'womens-abaya' ||
    slug === 'abaya-fashion' ||
    slug === 'abaya' ||
    slug === 'modest-fashion' ||
    slug === 'noura' ||
    slug === 'noura-abaya' ||
    slug === 'project-35' ||
    slug === '35' ||
    slug === 'project-27' ||
    slug === '27' ||
    slug.startsWith('abaya-') ||
    slug.startsWith('noura-')
  ) {
    return <NouraAbayaShowcase />;
  }

  // Property Development project route check
  if (
    slug === 'property-development' ||
    slug === 'vantage' ||
    slug === 'developer' ||
    slug.startsWith('vantage-') ||
    slug.startsWith('developer-')
  ) {
    return <VantageShowcase />;
  }

  // Property Management project route check
  if (
    slug === 'property-management' ||
    slug === 'nestora' ||
    slug === 'landlord' ||
    slug.startsWith('property-') ||
    slug.startsWith('nestora-')
  ) {
    return <NestoraShowcase />;
  }

  // Private Wealth & Financial Advisory project route check
  if (
    slug === 'financial-advisory' ||
    slug === 'auren' ||
    slug === 'wealth' ||
    slug === 'private-wealth' ||
    slug.startsWith('financial-') ||
    slug.startsWith('auren-')
  ) {
    return <AurenShowcase />;
  }

  // Accounting & Tax Consultancy project route check
  if (
    slug === 'accounting-tax-consultancy' ||
    slug === 'ledgera' ||
    slug === 'accounting' ||
    slug === 'tax' ||
    slug.startsWith('accounting-') ||
    slug.startsWith('ledgera-')
  ) {
    return <LedgeraShowcase />;
  }

  // Corporate Law Firm project route check
  if (
    slug === 'corporate-law-firm' ||
    slug === 'veritas' ||
    slug === 'law-firm' ||
    slug === 'legal' ||
    slug === 'law' ||
    slug.startsWith('law-') ||
    slug.startsWith('veritas-')
  ) {
    return <VeritasShowcase />;
  }

  // Business Consultancy project route check
  if (
    slug === 'business-consultancy' ||
    slug === 'nexora' ||
    slug === 'consultancy' ||
    slug === 'advisory' ||
    slug === 'business-setup' ||
    slug.startsWith('consultancy-') ||
    slug.startsWith('nexora-')
  ) {
    return <NexoraShowcase />;
  }

  // Resort & Holiday Booking project route check
  if (
    slug === 'resort-holiday-booking' ||
    slug === 'resort' ||
    slug === 'oasira' ||
    slug === 'staycation' ||
    slug.startsWith('resort-') ||
    slug.startsWith('oasira-')
  ) {
    return <OasiraShowcase />;
  }

  // Fast-Food Restaurant project route check
  if (
    slug === 'fast-food-restaurant' ||
    slug === 'fast-food' ||
    slug === 'crispo' ||
    slug === 'fried-chicken' ||
    slug.startsWith('fast-food-') ||
    slug.startsWith('crispo-')
  ) {
    return <CrispoShowcase />;
  }

  // Boutique Luxury Hotel project route check
  if (
    slug === 'boutique-luxury-hotel' ||
    slug === 'hotel' ||
    slug === 'velora-house' ||
    slug === 'velora' ||
    slug.startsWith('hotel-') ||
    slug.startsWith('boutique-')
  ) {
    return <HotelShowcase />;
  }

  // Moving & Relocation project route check
  if (
    slug === 'moving-relocation' ||
    slug === 'moving' ||
    slug === 'nestmove' ||
    slug === 'relocation' ||
    slug.startsWith('moving-') ||
    slug.startsWith('relocation-')
  ) {
    return <MovingShowcase />;
  }

  // Logistics & Delivery project route check
  if (
    slug === 'logistics-delivery' ||
    slug === 'logistics' ||
    slug === 'velox-logistics' ||
    slug === 'velox' ||
    slug.startsWith('logistics-') ||
    slug.startsWith('delivery-')
  ) {
    return <LogisticsShowcase />;
  }

  // Luxury Travel project route check
  if (
    slug === 'luxury-travel' ||
    slug === 'travel' ||
    slug === 'luxury-travel-agency' ||
    slug.startsWith('travel-')
  ) {
    return <TravelShowcase />;
  }

  // Pet Care & Veterinary project route check
  if (
    slug === 'pet-care-veterinary' ||
    slug === 'pet-care' ||
    slug === 'vet' ||
    slug.startsWith('pet-')
  ) {
    return <PetCareShowcase />;
  }

  // Barber Grooming project route check
  if (
    slug === 'barber-grooming' ||
    slug === 'barber' ||
    slug === 'grooming' ||
    slug.startsWith('barber-')
  ) {
    return <BarberShowcase />;
  }

  // Eye Care & Optical Store project route check
  if (
    slug === 'eye-care-optical' ||
    slug === 'optical' ||
    slug === 'eyewear' ||
    slug.startsWith('eye-')
  ) {
    return <OpticalShowcase />;
  }

  // Dental Clinic project route check
  if (
    slug === 'dental-clinic' ||
    slug === 'dental' ||
    slug === 'teeth' ||
    slug.startsWith('dental-')
  ) {
    return <DentalShowcase />;
  }

  // Private Medical Clinic project route check
  if (
    slug === 'private-medical-clinic' ||
    slug === 'clinic' ||
    slug === 'medical-clinic' ||
    slug.startsWith('private-medical') ||
    slug.startsWith('clinic-')
  ) {
    return <ClinicShowcase />;
  }

  // Wellness & Yoga project route check
  if (
    slug === 'wellness-yoga' ||
    slug === 'wellness' ||
    slug === 'yoga' ||
    slug.startsWith('wellness-')
  ) {
    return <WellnessShowcase />;
  }

  // Fitness Gym project route check
  if (
    slug === 'fitness-gym' ||
    slug === 'fitness' ||
    slug === 'gym' ||
    slug.startsWith('fitness-')
  ) {
    return <FitnessShowcase />;
  }

  // Sneaker & Streetwear project route check
  if (
    slug === 'sneaker-streetwear' ||
    slug === 'sneakers' ||
    slug === 'streetwear' ||
    slug.startsWith('sneaker-')
  ) {
    return <SneakerShowcase />;
  }

  // Fashion boutique project route check
  if (
    slug === 'fashion-boutique' ||
    slug === 'fashion' ||
    slug.startsWith('fashion-')
  ) {
    return <FashionShowcase />;
  }

  // Luxury Jewelry project route check
  if (
    slug === 'luxury-jewelry' ||
    slug === 'jewelry' ||
    slug.startsWith('luxury-jewelry') ||
    slug.startsWith('jewelry-')
  ) {
    return <JewelryShowcase />;
  }

  // Perfume & fragrance e-commerce project route check
  if (
    slug === 'perfume-fragrance' ||
    slug === 'luxury-perfume' ||
    slug === 'perfume' ||
    slug === 'fragrance' ||
    slug.startsWith('perfume-') ||
    slug.startsWith('fragrance-') ||
    slug.startsWith('luxury-perfume')
  ) {
    return <PerfumeShowcase />;
  }

  // Construction & interior project route check
  if (
    slug === 'construction-interior' ||
    slug === 'construction' ||
    slug === 'interior' ||
    slug.startsWith('construction-') ||
    slug.startsWith('interior-')
  ) {
    return <ConstructionShowcase />;
  }

  // Digital marketing agency project route check
  if (
    slug === 'digital-marketing-agency' ||
    slug === 'marketing' ||
    slug === 'growth-agency' ||
    slug.startsWith('digital-marketing') ||
    slug.startsWith('marketing-')
  ) {
    return <MarketingShowcase />;
  }

  // Home maintenance project route check
  if (
    slug === 'home-maintenance' ||
    slug === 'maintenance' ||
    slug.startsWith('home-maintenance-') ||
    slug.startsWith('maintenance-')
  ) {
    return <MaintenanceShowcase />;
  }

  // Restaurant & Café project route check
  if (
    slug === 'restaurant-cafe' ||
    slug === 'restaurant' ||
    slug === 'cafe' ||
    slug.startsWith('restaurant-') ||
    slug.startsWith('cafe-')
  ) {
    return <RestaurantShowcase />;
  }

  // Salon & Beauty Studio project route check
  if (
    slug === 'salon-beauty-studio' ||
    slug === 'salon' ||
    slug === 'beauty-studio' ||
    slug.startsWith('salon-') ||
    slug.startsWith('beauty-')
  ) {
    return <SalonShowcase standalone={true} />;
  }

  // Car rental project route check
  if (slug === 'car-rental' || slug === 'car-rental-company' || slug.startsWith('car-rental-')) {
    return <CarRentalShowcase standalone={true} />;
  }

  // Cleaning company project route check
  if (slug === 'cleaning-company' || slug === 'cleaning' || slug.startsWith('cleaning-')) {
    return <CleaningShowcase standalone={true} />;
  }

  // Real estate project slugs check
  if (
    slug === 'real-estate-lead-platform' ||
    slug === 'real-estate' ||
    slug === 'luxestate' ||
    slug === 'the-elysian-beachfront-mansion' ||
    slug === 'the-luminary-sky-penthouse'
  ) {
    return <RealEstateShowcase standalone={true} />;
  }

  // Holiday Home Management (Stayora)
  if (slug === 'holiday-home-management' || slug === 'stayora' || slug.startsWith('stayora-') || slug.startsWith('holiday-home')) {
    return <StayoraShowcase standalone={true} />;
  }

  // Bakery & Cake Studio
  if (slug === 'bakery-cake-studio' || slug === 'bakery' || slug === 'sugar-bloom' || slug.startsWith('bakery-')) {
    return <BakeryShowcase />;
  }

  // Auto Service & Repair (Autovanta)
  if (slug === 'auto-service-repair' || slug === 'autovanta' || slug.startsWith('auto-service')) {
    return <AutovantaShowcase standalone={true} />;
  }

  // Desert Safari Adventure (Dunecraft)
  if (slug === 'desert-safari-adventure' || slug === 'dunecraft' || slug.startsWith('desert-safari')) {
    return <DunecraftShowcase standalone={true} />;
  }

  // Executive Aviation (Skyvault)
  if (slug === 'executive-aviation' || slug === 'skyvault' || slug.startsWith('executive-aviation')) {
    return <SkyvaultShowcase standalone={true} />;
  }

  // Car Detailing & Ceramic Coating (Luxshield)
  if (slug === 'car-detailing-ceramic-coating' || slug === 'luxshield' || slug.startsWith('car-detailing')) {
    return <LuxshieldShowcase standalone={true} />;
  }

  // Car Recovery & Roadside Assistance (Roadforge)
  if (slug === 'car-recovery-roadside-assistance' || slug === 'roadforge' || slug.startsWith('car-recovery')) {
    return <RoadforgeShowcase standalone={true} />;
  }

  // Yacht Charter (Azure)
  if (slug === 'yacht-charter' || slug === 'azure' || slug === 'azure-marine') {
    return <AzureShowcase standalone={true} />;
  }

  // Private Jet Charter (Aerovault)
  if (slug === 'private-jet-charter' || slug === 'aerovault' || slug.startsWith('private-jet')) {
    return <AerovaultShowcase standalone={true} />;
  }

  // Foodstuff Trading (Barakah)
  if (slug === 'foodstuff-trading' || slug === 'barakah' || slug.startsWith('foodstuff')) {
    return <BarakahShowcase standalone={true} />;
  }

  // Direct redirects for multi-component showcases with dedicated static routes
  if (slug === 'business-center-serviced-offices' || slug === 'nexus-workspace' || slug === 'nexus') {
    redirect('/work/business-center-serviced-offices');
  }
  if (slug === 'coding-tech-academy' || slug === 'codeforge') {
    redirect('/work/coding-tech-academy');
  }
  if (slug === 'training-education-institute' || slug === 'eduvanta') {
    redirect('/work/training-education-institute');
  }
  if (slug === 'private-school' || slug === 'altair' || slug === 'altair-academy') {
    redirect('/work/private-school');
  }
  if (slug === 'premium-nursery-preschool' || slug === 'little-horizon') {
    redirect('/work/premium-nursery-preschool');
  }
  if (slug === 'photography-creative-studio' || slug === 'framehaus') {
    redirect('/work/photography-creative-studio');
  }

  // If no match is found, render standard 404 page rather than generic fallback
  notFound();
}

export default async function DynamicProjectPage({ params }: DynamicProjectPageProps) {
  const { slug } = await params;
  const showcase = getProjectShowcase(slug);
  return (
    <>
      <ReadingProgressBar />
      {showcase}
    </>
  );
}
