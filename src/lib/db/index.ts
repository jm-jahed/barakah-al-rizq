import fs from 'fs';
import path from 'path';
import {
  AdminUser,
  Project,
  Service,
  PricingPackage,
  Testimonial,
  BlogPost,
  Lead,
  NewsletterSubscriber,
  SiteSetting,
  HomepageContent,
  NavigationItem,
  FAQItem,
  MediaItem,
  SEOConfig,
  ActivityLog,
  AnalyticsEvent,
  FoodstuffProduct,
  FoodstuffContainerPrice,
  FoodstuffMarketPrice,
  FoodstuffPriceHistory,
  FoodstuffUpdateSchedule,
  FoodstuffPriceSource,
  FoodstuffBusinessStatus,
  FoodstuffCategoryItem,
} from './types';
import {
  DEFAULT_FOODSTUFF_SCHEDULE,
  DEFAULT_FOODSTUFF_CATEGORIES,
  getInitialFoodstuffProducts,
  getInitialContainerPrices,
  getInitialMarketPrices,
  calculatePricePerKg,
  getDynamicUAESession,
} from '../foodstuff/utils';

interface DatabaseSchema {
  adminUsers: AdminUser[];
  projects: Project[];
  services: Service[];
  pricingPackages: PricingPackage[];
  testimonials: Testimonial[];
  blogPosts: BlogPost[];
  leads: Lead[];
  newsletterSubscribers: NewsletterSubscriber[];
  siteSettings: SiteSetting[];
  homepageContent: HomepageContent;
  navigationItems: NavigationItem[];
  faqItems: FAQItem[];
  mediaItems: MediaItem[];
  seoConfig: SEOConfig;
  activityLogs: ActivityLog[];
  analyticsEvents: AnalyticsEvent[];
  foodstuffProducts?: FoodstuffProduct[];
  foodstuffCategories?: FoodstuffCategoryItem[];
  foodstuffContainerPrices?: FoodstuffContainerPrice[];
  foodstuffMarketPrices?: FoodstuffMarketPrice[];
  foodstuffPriceHistory?: FoodstuffPriceHistory[];
  foodstuffUpdateSchedule?: FoodstuffUpdateSchedule;
}

function getDBFilePath(): string {
  if (process.env.DB_FILE_PATH) {
    return process.env.DB_FILE_PATH;
  }
  const barakahPath = path.join(process.cwd(), 'data', 'barakah', 'barakah.db.json');
  if (fs.existsSync(barakahPath)) {
    return barakahPath;
  }
  const legacyBackupPath = path.join(process.cwd(), 'data', 'backups', 'legacy_webstudioae.db.json');
  if (fs.existsSync(legacyBackupPath)) {
    return legacyBackupPath;
  }
  return path.join(process.cwd(), 'data', 'webstudioae.db.json');
}

function ensureDirectory(filePath: string) {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  } catch {
    // Ignore in restricted environments
  }
}

function getInitialData(): DatabaseSchema {
  return {
    adminUsers: [
      {
        id: 'admin-1',
        name: 'Md Jahedul Islam',
        email: 'admin@barakahalrizquae.com',
        passwordHash: '8b7d9b9c0a1e2f3d4c5b6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d',
        role: 'SUPERADMIN',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'admin-2',
        name: 'Platform Administrator',
        email: 'admin@pos.ae',
        passwordHash: '8b7d9b9c0a1e2f3d4c5b6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d',
        role: 'SUPERADMIN',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'admin-3',
        name: 'Rashid Al Nuaimi',
        email: 'owner@dubaimarina.ae',
        passwordHash: '8b7d9b9c0a1e2f3d4c5b6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d',
        role: 'SUPERADMIN',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'admin-4',
        name: 'Rashid Al Nuaimi',
        email: 'owner@dubai.ae',
        passwordHash: '8b7d9b9c0a1e2f3d4c5b6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d',
        role: 'SUPERADMIN',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
    projects: [
      { id: 'p-1', slug: 'property-development', title: 'LUXESTATE UAE', category: 'Real Estate', description: 'Luxury Off-Plan Real Estate Platform', shortDescription: 'Premium off-plan portal', featured: true, published: true, order: 1, heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { id: 'p-2', slug: 'corporate-law-firm', title: 'VALOR LEGAL', category: 'Corporate Law', description: 'UAE Corporate Law Firm Platform', shortDescription: 'Executive legal portal', featured: true, published: true, order: 2, heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { id: 'p-3', slug: 'business-center-serviced-offices', title: 'NEXUS WORKSPACE', category: 'Business Centers', description: 'Premium UAE Serviced Offices & Business Centers', shortDescription: 'Turnkey private office suites', featured: true, published: true, order: 3, heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    ],
    services: [
      { id: 's-1', title: 'Bespoke Web Application Development', slug: 'web-development', description: 'Custom Next.js 16 & TypeScript enterprise web applications.', icon: 'Code', featured: true, published: true, order: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { id: 's-2', title: 'High-Converting UI/UX System Design', slug: 'ui-ux-design', description: 'Architectural modern design systems tailored for UAE luxury industries.', icon: 'Palette', featured: true, published: true, order: 2, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { id: 's-3', title: 'AI Agent & Workflow Integration', slug: 'ai-automation', description: 'Autonomous agentic workflows, dynamic prompt builders, and LLM integrations.', icon: 'Cpu', featured: true, published: true, order: 3, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    ],
    pricingPackages: [
      { id: 'pr-1', name: 'Starter Digital', slug: 'starter', priceAED: 799, description: 'Essential web platform for emerging startups and small businesses.', features: ['Custom Next.js 16 Web App', 'Responsive Design', 'Contact Form Integration', 'Basic SEO Setup'], featured: false, published: true, order: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { id: 'pr-2', name: 'Growth Enterprise', slug: 'growth', priceAED: 1499, description: 'Comprehensive digital experience for growing UAE mid-size firms.', features: ['Full Bespoke Architecture', 'Interactive Calculators / Modals', 'Admin CMS Portal Access', 'WhatsApp Lead Routing', 'Sub-5s Prerendering'], featured: true, published: true, order: 2, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
      { id: 'pr-3', name: 'Bespoke Corporate', slug: 'premium', priceAED: 2499, description: 'Full-scale luxury digital transformation for established corporations.', features: ['Multi-Branch / Multi-Tenant Support', 'Full Admin CMS & CRM Backend', 'AI Agent Workflow Automation', '24/7 Dedicated SLA Support'], featured: false, published: true, order: 3, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    ],
    testimonials: [
      { id: 't-1', name: 'Sheikh Hamdan Al Qasimi', role: 'Managing Director', company: 'Apex Global Investments', message: 'WebStudioAE delivered our corporate platform in record time. Sub-second load speeds and flawless execution.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', rating: 5, published: true, order: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    ],
    blogPosts: [
      { id: 'b-1', slug: 'nextjs-16-sub-5s-static-builds', title: 'Architecting Sub-5s Static Prerendering with Next.js 16 App Router', excerpt: 'How we achieved 0 hydration errors and lightning-fast compile times across 58 static routes.', content: 'Building enterprise web applications requires strict separation of concerns, zero layout shift, and clean static prerendering...', coverImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80', category: 'Engineering', author: 'Md Jahedul Islam', published: true, publishedAt: new Date().toISOString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    ],
    leads: [
      { id: 'lead-1', name: 'Tariq Al Mansoori', email: 'tariq@apexcapital.ae', phone: '+971 50 123 4567', company: 'Apex Capital', service: 'Growth Enterprise', budget: 'AED 15,000 - 30,000', message: 'We require a full custom platform rebuild with investor portals.', source: 'website', status: 'NEW', notes: 'Initial inquiry received via website.', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    ],
    newsletterSubscribers: [],
    siteSettings: [
      { id: 'set-1', key: 'agency_email', value: 'barakahalrizquae@gmail.com', updatedAt: new Date().toISOString() },
      { id: 'set-2', key: 'agency_phone', value: '+971 4 800 63987', updatedAt: new Date().toISOString() },
      { id: 'set-3', key: 'agency_whatsapp', value: 'https://wa.me/971480063987', updatedAt: new Date().toISOString() },
    ],
    homepageContent: {
      heroEyebrow: "DUBAI & ABU DHABI LUXURY DIGITAL AGENCY",
      heroHeadline: "Architecting High-Impact Digital Experiences for UAE Leaders.",
      heroSubtitle: "We engineer bespoke, sub-second web platforms, enterprise AI agent integrations, and scalable Webpack production architectures for ambitious UAE brands.",
      heroPrimaryCtaLabel: "Book Technical Consultation",
      heroPrimaryCtaUrl: "#contact",
      heroSecondaryCtaLabel: "Explore 51 Industry Platforms",
      heroSecondaryCtaUrl: "#work",
      aboutTitle: "Engineering Discipline & Working Philosophy",
      aboutDescription: "Behind every high-performance web platform is a commitment to continuous learning, architectural discipline, and commercial result.",
      statsProjects: "51+",
      statsClients: "98%",
      statsUaeDistricts: "3 Districts",
      statsCompileRate: "100%",
      selectedProjectIds: ["p-1", "p-3"],
    },
    navigationItems: [
      { id: 'nav-1', label: 'Work', url: '#work', order: 1, visible: true },
      { id: 'nav-2', label: 'Services', url: '#services', order: 2, visible: true },
      { id: 'nav-3', label: 'Expertise', url: '#expertise', order: 3, visible: true },
      { id: 'nav-4', label: 'Pricing', url: '#pricing', order: 4, visible: true },
      { id: 'nav-5', label: 'FAQ', url: '#faq', order: 5, visible: true },
      { id: 'nav-6', label: 'Contact', url: '#contact', order: 6, visible: true },
    ],
    faqItems: [
      { id: 'faq-1', question: 'How quickly can WebStudioAE deploy a standalone UAE industry platform?', answer: 'Our custom Next.js 16 architectures compile to static production builds within 24 to 72 hours, with sub-5s prerendering.', category: 'General', order: 1, published: true },
      { id: 'faq-2', question: 'Are your platforms 100% brand-isolated?', answer: 'Yes. Each project features isolated color tokens, custom monograms, distinct typography, and zero agency contamination.', category: 'Branding', order: 2, published: true },
    ],
    mediaItems: [],
    seoConfig: {
      defaultTitle: 'WebStudioAE — Bespoke UAE Web Development & Digital Solutions',
      defaultDescription: 'Architecting high-impact Next.js 16 web applications, AI workflows, and digital platforms across Dubai and Abu Dhabi.',
      ogImage: 'https://barakahalrizquae.com/og-image.jpg',
      indexingEnabled: true,
    },
    activityLogs: [
      { id: 'act-1', user: 'admin@barakahalrizquae.com', action: 'SYSTEM_INITIALIZED', entity: 'Control Center', timestamp: new Date().toISOString() },
    ],
    analyticsEvents: [],
    foodstuffProducts: getInitialFoodstuffProducts(),
    foodstuffContainerPrices: getInitialContainerPrices(getInitialFoodstuffProducts()),
    foodstuffMarketPrices: getInitialMarketPrices(getInitialFoodstuffProducts()),
    foodstuffPriceHistory: [],
    foodstuffUpdateSchedule: DEFAULT_FOODSTUFF_SCHEDULE,
  };
}

let inMemoryDB: DatabaseSchema | null = null;
let lastDBMtime = 0;

function hydrateFoodstuffData(parsed: Record<string, any>, initial: DatabaseSchema) {
  const initialProds = getInitialFoodstuffProducts();
  const foodstuffProducts: FoodstuffProduct[] = Array.isArray(parsed.foodstuffProducts) && parsed.foodstuffProducts.length > 0
    ? parsed.foodstuffProducts
    : initialProds;

  const foodstuffContainerPrices: FoodstuffContainerPrice[] = Array.isArray(parsed.foodstuffContainerPrices) && parsed.foodstuffContainerPrices.length > 0
    ? parsed.foodstuffContainerPrices
    : getInitialContainerPrices(foodstuffProducts);

  const foodstuffMarketPrices: FoodstuffMarketPrice[] = Array.isArray(parsed.foodstuffMarketPrices) && parsed.foodstuffMarketPrices.length > 0
    ? parsed.foodstuffMarketPrices
    : getInitialMarketPrices(foodstuffProducts);

  const foodstuffCategories: FoodstuffCategoryItem[] = Array.isArray(parsed.foodstuffCategories) && parsed.foodstuffCategories.length > 0
    ? parsed.foodstuffCategories
    : DEFAULT_FOODSTUFF_CATEGORIES;

  const foodstuffPriceHistory: FoodstuffPriceHistory[] = Array.isArray(parsed.foodstuffPriceHistory)
    ? parsed.foodstuffPriceHistory
    : [];

  const foodstuffUpdateSchedule: FoodstuffUpdateSchedule = parsed.foodstuffUpdateSchedule || DEFAULT_FOODSTUFF_SCHEDULE;

  return {
    foodstuffProducts,
    foodstuffCategories,
    foodstuffContainerPrices,
    foodstuffMarketPrices,
    foodstuffPriceHistory,
    foodstuffUpdateSchedule,
  };
}

export function readDB(): DatabaseSchema {
  try {
    const filePath = getDBFilePath();
    ensureDirectory(filePath);

    if (fs.existsSync(filePath)) {
      const stat = fs.statSync(filePath);
      if (inMemoryDB && stat.mtimeMs === lastDBMtime) {
        return inMemoryDB;
      }
      lastDBMtime = stat.mtimeMs;

      const raw = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(raw);
      const initial = getInitialData();
      const foodstuffHydrated = hydrateFoodstuffData(parsed, initial);

      inMemoryDB = {
        ...parsed,
        adminUsers: parsed.adminUsers || initial.adminUsers,
        projects: parsed.projects || initial.projects,
        services: parsed.services || initial.services,
        pricingPackages: parsed.pricingPackages || initial.pricingPackages,
        testimonials: parsed.testimonials || initial.testimonials,
        blogPosts: parsed.blogPosts || initial.blogPosts,
        leads: parsed.leads || initial.leads,
        newsletterSubscribers: parsed.newsletterSubscribers || initial.newsletterSubscribers,
        siteSettings: parsed.siteSettings || initial.siteSettings,
        homepageContent: parsed.homepageContent || initial.homepageContent,
        navigationItems: parsed.navigationItems || initial.navigationItems,
        faqItems: parsed.faqItems || initial.faqItems,
        mediaItems: parsed.mediaItems || initial.mediaItems,
        seoConfig: parsed.seoConfig || initial.seoConfig,
        activityLogs: parsed.activityLogs || initial.activityLogs,
        analyticsEvents: parsed.analyticsEvents || initial.analyticsEvents,
        ...foodstuffHydrated,
      };
      return inMemoryDB as DatabaseSchema;
    }

    // Try reading seed data from local data directory
    try {
      const barakahSeed = path.join(process.cwd(), 'data', 'barakah', 'barakah.db.json');
      const legacySeed = path.join(process.cwd(), 'data', 'backups', 'legacy_webstudioae.db.json');
      const fallbackSeed = path.join(process.cwd(), 'data', 'webstudioae.db.json');
      const seedPath = fs.existsSync(barakahSeed) ? barakahSeed : (fs.existsSync(legacySeed) ? legacySeed : fallbackSeed);
      if (fs.existsSync(seedPath)) {
        const raw = fs.readFileSync(seedPath, 'utf-8');
        const parsed = JSON.parse(raw);
        const initial = getInitialData();
        const foodstuffHydrated = hydrateFoodstuffData(parsed, initial);

        const seedDB: DatabaseSchema = {
          ...parsed,
          adminUsers: parsed.adminUsers || initial.adminUsers,
          projects: parsed.projects || initial.projects,
          services: parsed.services || initial.services,
          pricingPackages: parsed.pricingPackages || initial.pricingPackages,
          testimonials: parsed.testimonials || initial.testimonials,
          blogPosts: parsed.blogPosts || initial.blogPosts,
          leads: parsed.leads || initial.leads,
          newsletterSubscribers: parsed.newsletterSubscribers || initial.newsletterSubscribers,
          siteSettings: parsed.siteSettings || initial.siteSettings,
          homepageContent: parsed.homepageContent || initial.homepageContent,
          navigationItems: parsed.navigationItems || initial.navigationItems,
          faqItems: parsed.faqItems || initial.faqItems,
          mediaItems: parsed.mediaItems || initial.mediaItems,
          seoConfig: parsed.seoConfig || initial.seoConfig,
          activityLogs: parsed.activityLogs || initial.activityLogs,
          analyticsEvents: parsed.analyticsEvents || initial.analyticsEvents,
          ...foodstuffHydrated,
        };
        inMemoryDB = seedDB;
        try {
          fs.writeFileSync(filePath, JSON.stringify(seedDB, null, 2), 'utf-8');
        } catch {
          // Ignore
        }
        return seedDB;
      }
    } catch {
      // Fallback
    }

    const initial = getInitialData();
    inMemoryDB = initial;
    try {
      fs.writeFileSync(filePath, JSON.stringify(initial, null, 2), 'utf-8');
    } catch {
      // Ignore
    }
    return initial;
  } catch {
    const fallback = getInitialData();
    inMemoryDB = fallback;
    return fallback;
  }
}

export function writeDB(data: DatabaseSchema) {
  inMemoryDB = data;
  try {
    const filePath = getDBFilePath();
    ensureDirectory(filePath);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    // In serverless environments, writing to disk might be read-only; in-memory state is preserved.
  }
}

export function logActivity(user: string, action: string, entity: string) {
  const data = readDB();
  data.activityLogs = data.activityLogs || [];
  data.activityLogs.unshift({
    id: 'act-' + Date.now(),
    user,
    action,
    entity,
    timestamp: new Date().toISOString(),
  });
  writeDB(data);
}

export const db = {
  adminUsers: {
    findUnique: (email: string) => {
      const data = readDB();
      const users = data?.adminUsers || getInitialData().adminUsers;
      return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    },
    updatePassword: (email: string, passwordHash: string) => {
      const data = readDB();
      data.adminUsers = data.adminUsers || [];
      const idx = data.adminUsers.findIndex((u) => u.email.toLowerCase() === email.toLowerCase());
      if (idx !== -1) {
        data.adminUsers[idx].passwordHash = passwordHash;
        data.adminUsers[idx].updatedAt = new Date().toISOString();
        writeDB(data);
      }
    },
  },
  leads: {
    findMany: () => readDB().leads || [],
    create: (lead: Omit<Lead, 'id' | 'createdAt' | 'updatedAt' | 'status'> & { status?: Lead['status'] }) => {
      const data = readDB();
      data.leads = data.leads || [];
      const newLead: Lead = {
        ...lead,
        id: 'lead-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
        status: lead.status || 'NEW',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      data.leads.unshift(newLead);
      writeDB(data);
      logActivity('system', 'LEAD_CREATED', newLead.id);
      return newLead;
    },
    update: (id: string, updates: Partial<Lead>) => {
      const data = readDB();
      data.leads = data.leads || [];
      const idx = data.leads.findIndex((l) => l.id === id);
      if (idx !== -1) {
        data.leads[idx] = { ...data.leads[idx], ...updates, updatedAt: new Date().toISOString() };
        writeDB(data);
        logActivity('admin@barakahalrizquae.com', 'LEAD_UPDATED', id);
        return data.leads[idx];
      }
      return null;
    },
    delete: (id: string) => {
      const data = readDB();
      data.leads = (data.leads || []).filter((l) => l.id !== id);
      writeDB(data);
      logActivity('admin@barakahalrizquae.com', 'LEAD_DELETED', id);
    },
  },
  projects: {
    findMany: () => readDB().projects || [],
    create: (proj: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
      const data = readDB();
      data.projects = data.projects || [];
      const newProj: Project = {
        ...proj,
        id: 'proj-' + Date.now(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      data.projects.push(newProj);
      writeDB(data);
      logActivity('admin@barakahalrizquae.com', 'PROJECT_CREATED', newProj.id);
      return newProj;
    },
  },
  services: { findMany: () => readDB().services || [] },
  pricing: { findMany: () => readDB().pricingPackages || [] },
  testimonials: { findMany: () => readDB().testimonials || [] },
  blog: {
    findMany: () => readDB().blogPosts || [],
    findBySlug: (slug: string) => (readDB().blogPosts || []).find((b) => b.slug === slug),
  },
  newsletter: {
    findMany: () => readDB().newsletterSubscribers || [],
    subscribe: (email: string) => {
      const data = readDB();
      data.newsletterSubscribers = data.newsletterSubscribers || [];
      let existing = data.newsletterSubscribers.find((s) => s.email.toLowerCase() === email.toLowerCase());
      if (!existing) {
        existing = {
          id: 'sub-' + Date.now(),
          email: email.toLowerCase(),
          subscribed: true,
          createdAt: new Date().toISOString(),
        };
        data.newsletterSubscribers.unshift(existing);
        writeDB(data);
        logActivity('user', 'NEWSLETTER_SUBSCRIBED', email);
      }
      return existing;
    },
  },
  settings: {
    findMany: () => readDB().siteSettings,
    update: (key: string, value: string) => {
      const data = readDB();
      const idx = data.siteSettings.findIndex((s) => s.key === key);
      if (idx !== -1) {
        data.siteSettings[idx].value = value;
        data.siteSettings[idx].updatedAt = new Date().toISOString();
      } else {
        data.siteSettings.push({ id: 'set-' + Date.now(), key, value, updatedAt: new Date().toISOString() });
      }
      writeDB(data);
      logActivity('admin@barakahalrizquae.com', 'SETTING_UPDATED', key);
    },
  },
  homepage: {
    get: () => readDB().homepageContent,
    update: (content: Partial<HomepageContent>) => {
      const data = readDB();
      data.homepageContent = { ...data.homepageContent, ...content };
      writeDB(data);
      logActivity('admin@barakahalrizquae.com', 'HOMEPAGE_UPDATED', 'homepage');
      return data.homepageContent;
    },
  },
  navigation: {
    findMany: () => readDB().navigationItems,
    update: (items: NavigationItem[]) => {
      const data = readDB();
      data.navigationItems = items;
      writeDB(data);
      logActivity('admin@barakahalrizquae.com', 'NAVIGATION_UPDATED', 'navigation');
      return data.navigationItems;
    },
  },
  faq: { findMany: () => readDB().faqItems },
  media: { findMany: () => readDB().mediaItems },
  seo: {
    get: () => readDB().seoConfig,
    update: (config: Partial<SEOConfig>) => {
      const data = readDB();
      data.seoConfig = { ...data.seoConfig, ...config };
      writeDB(data);
      logActivity('admin@barakahalrizquae.com', 'SEO_UPDATED', 'seo');
      return data.seoConfig;
    },
  },
  analytics: {
    log: (eventName: string, path: string, metadata?: string) => {
      const data = readDB();
      data.analyticsEvents.unshift({
        id: 'evt-' + Date.now(),
        eventName,
        path,
        metadata,
        createdAt: new Date().toISOString(),
      });
      writeDB(data);
    },
  },
  activity: { findMany: () => readDB().activityLogs },
  foodstuff: {
    getCategories: () => readDB().foodstuffCategories || DEFAULT_FOODSTUFF_CATEGORIES,
    getCategoryById: (id: string) => (readDB().foodstuffCategories || DEFAULT_FOODSTUFF_CATEGORIES).find((c) => c.id === id),
    saveCategory: (category: FoodstuffCategoryItem, updatedBy: string = 'admin') => {
      const data = readDB();
      data.foodstuffCategories = data.foodstuffCategories || [...DEFAULT_FOODSTUFF_CATEGORIES];
      const idx = data.foodstuffCategories.findIndex((c) => c.id === category.id);
      const now = new Date().toISOString();
      if (idx >= 0) {
        data.foodstuffCategories[idx] = { ...data.foodstuffCategories[idx], ...category, updatedAt: now };
      } else {
        data.foodstuffCategories.push({ ...category, createdAt: category.createdAt || now, updatedAt: now });
      }
      writeDB(data);
      logActivity(updatedBy, 'CATEGORY_SAVED', category.id);
      return category;
    },
    getProducts: () => readDB().foodstuffProducts || [],
    getProductById: (id: string) => (readDB().foodstuffProducts || []).find((p) => p.id === id),
    saveProduct: (product: FoodstuffProduct, updatedBy: string = 'admin') => {
      const data = readDB();
      data.foodstuffProducts = data.foodstuffProducts || [];
      const idx = data.foodstuffProducts.findIndex((p) => p.id === product.id);
      const now = new Date().toISOString();
      if (idx >= 0) {
        data.foodstuffProducts[idx] = { ...data.foodstuffProducts[idx], ...product, updatedAt: now };
      } else {
        data.foodstuffProducts.push({ ...product, createdAt: product.createdAt || now, updatedAt: now });
      }
      writeDB(data);
      logActivity(updatedBy, 'PRODUCT_SAVED', product.id);
      return product;
    },
    getContainerPrices: () => readDB().foodstuffContainerPrices || [],
    getMarketPrices: () => readDB().foodstuffMarketPrices || [],
    getPriceHistory: (limit: number = 100) => (readDB().foodstuffPriceHistory || []).slice(0, limit),
    getSchedule: () => readDB().foodstuffUpdateSchedule || DEFAULT_FOODSTUFF_SCHEDULE,

    updateSchedule: (updates: Partial<FoodstuffUpdateSchedule>) => {
      const data = readDB();
      const current = data.foodstuffUpdateSchedule || DEFAULT_FOODSTUFF_SCHEDULE;
      data.foodstuffUpdateSchedule = {
        ...current,
        ...updates,
      };
      writeDB(data);
      logActivity('admin', 'FOODSTUFF_SCHEDULE_UPDATED', 'foodstuffUpdateSchedule');
      return data.foodstuffUpdateSchedule;
    },

    updateContainerPrice: (
      id: string,
      updates: Partial<FoodstuffContainerPrice>,
      updatedBy: string,
      source: FoodstuffPriceSource = 'ADMIN_VERIFIED_RATE_SHEET'
    ): FoodstuffContainerPrice | null => {
      const data = readDB();
      data.foodstuffContainerPrices = data.foodstuffContainerPrices || [];
      const idx = data.foodstuffContainerPrices.findIndex((c) => c.id === id);
      if (idx === -1) return null;

      const existing = data.foodstuffContainerPrices[idx];
      const prod = (data.foodstuffProducts || []).find((p) => p.id === existing.productId);
      const nowISO = new Date().toISOString();
      const dynamicSession = getDynamicUAESession(data.foodstuffUpdateSchedule).session;

      const oldPrice = existing.priceAED;
      const newPrice = updates.priceAED !== undefined ? updates.priceAED : oldPrice;
      const netWeight = updates.netWeightKg !== undefined ? updates.netWeightKg : existing.netWeightKg;
      const calcKg = calculatePricePerKg(newPrice, netWeight);

      const oldStatus = existing.businessStatus;
      const newStatus = updates.businessStatus || (newPrice === null ? 'PRICE_ON_REQUEST' : existing.businessStatus);

      const updatedRecord: FoodstuffContainerPrice = {
        ...existing,
        ...updates,
        priceAED: newPrice,
        netWeightKg: netWeight,
        calculatedPricePerKg: calcKg,
        businessStatus: newStatus,
        lastUpdated: nowISO,
        updateSession: updates.updateSession || dynamicSession,
        updateSource: source,
        updatedBy,
      };

      data.foodstuffContainerPrices[idx] = updatedRecord;

      // Price history entry (first entry has oldPriceAED: null)
      const diff = oldPrice !== null && newPrice !== null ? parseFloat((newPrice - oldPrice).toFixed(2)) : null;
      const pct = oldPrice !== null && oldPrice > 0 && newPrice !== null 
        ? parseFloat((((newPrice - oldPrice) / oldPrice) * 100).toFixed(1)) 
        : null;

      data.foodstuffPriceHistory = data.foodstuffPriceHistory || [];
      data.foodstuffPriceHistory.unshift({
        id: `fph-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        priceType: 'CONTAINER',
        priceRecordId: existing.id,
        productId: existing.productId,
        productName: prod?.name || existing.productId,
        packagingDetails: updatedRecord.packagingDetails,
        oldPriceAED: oldPrice,
        newPriceAED: newPrice,
        differenceAED: diff,
        changePercent: pct,
        oldStatus,
        newStatus,
        session: dynamicSession,
        source,
        updatedBy,
        timestamp: nowISO,
        notes: updates.quotationNotes,
      });

      if (data.foodstuffUpdateSchedule) {
        data.foodstuffUpdateSchedule.lastSyncAt = nowISO;
      }

      writeDB(data);
      logActivity(updatedBy, 'CONTAINER_PRICE_UPDATED', `${existing.productId}: ${oldPrice} -> ${newPrice}`);
      return updatedRecord;
    },

    updateMarketPrice: (
      id: string,
      updates: Partial<FoodstuffMarketPrice>,
      updatedBy: string,
      source: FoodstuffPriceSource = 'AL_AWEER_MARKET_UPDATE'
    ): FoodstuffMarketPrice | null => {
      const data = readDB();
      data.foodstuffMarketPrices = data.foodstuffMarketPrices || [];
      const idx = data.foodstuffMarketPrices.findIndex((m) => m.id === id);
      if (idx === -1) return null;

      const existing = data.foodstuffMarketPrices[idx];
      const prod = (data.foodstuffProducts || []).find((p) => p.id === existing.productId);
      const nowISO = new Date().toISOString();
      const dynamicSession = getDynamicUAESession(data.foodstuffUpdateSchedule).session;

      const oldPrice = existing.priceAED;
      const newPrice = updates.priceAED !== undefined ? updates.priceAED : oldPrice;
      const netWeight = updates.netWeightKg !== undefined ? updates.netWeightKg : existing.netWeightKg;
      const calcKg = calculatePricePerKg(newPrice, netWeight);

      let trend: 'UP' | 'DOWN' | 'STABLE' | null = existing.trend;
      let pct: number | null = null;
      let diff: number | null = null;

      if (oldPrice !== null && newPrice !== null) {
        diff = parseFloat((newPrice - oldPrice).toFixed(2));
        if (oldPrice > 0) {
          pct = parseFloat((((newPrice - oldPrice) / oldPrice) * 100).toFixed(1));
        }
        trend = newPrice > oldPrice ? 'UP' : newPrice < oldPrice ? 'DOWN' : 'STABLE';
      }

      const oldStatus = existing.businessStatus;
      const newStatus = updates.businessStatus || (newPrice === null ? 'PRICE_ON_REQUEST' : existing.businessStatus);

      const updatedRecord: FoodstuffMarketPrice = {
        ...existing,
        ...updates,
        priceAED: newPrice,
        previousPriceAED: oldPrice,
        changePercent: pct,
        trend,
        netWeightKg: netWeight,
        calculatedPricePerKg: calcKg,
        businessStatus: newStatus,
        lastUpdated: nowISO,
        marketSession: updates.marketSession || dynamicSession,
        updateSource: source,
        updatedBy,
      };

      data.foodstuffMarketPrices[idx] = updatedRecord;

      data.foodstuffPriceHistory = data.foodstuffPriceHistory || [];
      data.foodstuffPriceHistory.unshift({
        id: `fph-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        priceType: 'DUBAI_MARKET',
        priceRecordId: existing.id,
        productId: existing.productId,
        productName: prod?.name || existing.productId,
        packagingDetails: updatedRecord.packagingDetails,
        oldPriceAED: oldPrice,
        newPriceAED: newPrice,
        differenceAED: diff,
        changePercent: pct,
        oldStatus,
        newStatus,
        session: dynamicSession,
        source,
        updatedBy,
        timestamp: nowISO,
      });

      if (data.foodstuffUpdateSchedule) {
        data.foodstuffUpdateSchedule.lastSyncAt = nowISO;
      }

      writeDB(data);
      logActivity(updatedBy, 'MARKET_PRICE_UPDATED', `${existing.productId}: ${oldPrice} -> ${newPrice}`);
      return updatedRecord;
    },

    bulkUpdate: (
      type: 'CONTAINER' | 'DUBAI_MARKET',
      rows: Array<{
        productId: string;
        priceAED: number | null;
        packagingUnit?: string;
        packagingDetails?: string;
        netWeightKg?: number | null;
        businessStatus?: FoodstuffBusinessStatus;
        moq?: string;
        containerAvailability?: string;
        minPurchaseQty?: string;
        quotationNotes?: string;
      }>,
      updatedBy: string,
      source: FoodstuffPriceSource
    ) => {
      const data = readDB();
      const nowISO = new Date().toISOString();
      const dynamicSession = getDynamicUAESession(data.foodstuffUpdateSchedule).session;
      let updatedCount = 0;

      data.foodstuffPriceHistory = data.foodstuffPriceHistory || [];

      if (type === 'CONTAINER') {
        data.foodstuffContainerPrices = data.foodstuffContainerPrices || [];
        for (const row of rows) {
          const idx = data.foodstuffContainerPrices.findIndex((c) => c.productId === row.productId);
          if (idx === -1) continue;

          const existing = data.foodstuffContainerPrices[idx];
          const prod = (data.foodstuffProducts || []).find((p) => p.id === existing.productId);
          const oldPrice = existing.priceAED;
          const newPrice = row.priceAED;
          const netWeight = row.netWeightKg !== undefined ? row.netWeightKg : existing.netWeightKg;
          const calcKg = calculatePricePerKg(newPrice, netWeight);
          const oldStatus = existing.businessStatus;
          const newStatus = row.businessStatus || (newPrice === null ? 'PRICE_ON_REQUEST' : 'AVAILABLE');

          data.foodstuffContainerPrices[idx] = {
            ...existing,
            priceAED: newPrice,
            packagingUnit: row.packagingUnit || existing.packagingUnit,
            packagingDetails: row.packagingDetails || existing.packagingDetails,
            netWeightKg: netWeight,
            calculatedPricePerKg: calcKg,
            moq: row.moq || existing.moq,
            containerAvailability: row.containerAvailability || existing.containerAvailability,
            businessStatus: newStatus,
            quotationNotes: row.quotationNotes || existing.quotationNotes,
            lastUpdated: nowISO,
            updateSession: dynamicSession,
            updateSource: source,
            updatedBy,
          };

          const diff = oldPrice !== null && newPrice !== null ? parseFloat((newPrice - oldPrice).toFixed(2)) : null;
          const pct = oldPrice !== null && oldPrice > 0 && newPrice !== null 
            ? parseFloat((((newPrice - oldPrice) / oldPrice) * 100).toFixed(1)) 
            : null;

          data.foodstuffPriceHistory.unshift({
            id: `fph-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
            priceType: 'CONTAINER',
            priceRecordId: existing.id,
            productId: existing.productId,
            productName: prod?.name || existing.productId,
            packagingDetails: row.packagingDetails || existing.packagingDetails,
            oldPriceAED: oldPrice,
            newPriceAED: newPrice,
            differenceAED: diff,
            changePercent: pct,
            oldStatus,
            newStatus,
            session: dynamicSession,
            source,
            updatedBy,
            timestamp: nowISO,
          });

          updatedCount++;
        }
      } else {
        data.foodstuffMarketPrices = data.foodstuffMarketPrices || [];
        for (const row of rows) {
          const idx = data.foodstuffMarketPrices.findIndex((m) => m.productId === row.productId);
          if (idx === -1) continue;

          const existing = data.foodstuffMarketPrices[idx];
          const prod = (data.foodstuffProducts || []).find((p) => p.id === existing.productId);
          const oldPrice = existing.priceAED;
          const newPrice = row.priceAED;
          const netWeight = row.netWeightKg !== undefined ? row.netWeightKg : existing.netWeightKg;
          const calcKg = calculatePricePerKg(newPrice, netWeight);
          const oldStatus = existing.businessStatus;
          const newStatus = row.businessStatus || (newPrice === null ? 'PRICE_ON_REQUEST' : 'AVAILABLE');

          let trend: 'UP' | 'DOWN' | 'STABLE' | null = existing.trend;
          let pct: number | null = null;
          let diff: number | null = null;

          if (oldPrice !== null && newPrice !== null) {
            diff = parseFloat((newPrice - oldPrice).toFixed(2));
            if (oldPrice > 0) {
              pct = parseFloat((((newPrice - oldPrice) / oldPrice) * 100).toFixed(1));
            }
            trend = newPrice > oldPrice ? 'UP' : newPrice < oldPrice ? 'DOWN' : 'STABLE';
          }

          data.foodstuffMarketPrices[idx] = {
            ...existing,
            priceAED: newPrice,
            previousPriceAED: oldPrice,
            changePercent: pct,
            trend,
            packagingUnit: row.packagingUnit || existing.packagingUnit,
            packagingDetails: row.packagingDetails || existing.packagingDetails,
            netWeightKg: netWeight,
            calculatedPricePerKg: calcKg,
            minPurchaseQty: row.minPurchaseQty || existing.minPurchaseQty,
            businessStatus: newStatus,
            lastUpdated: nowISO,
            marketSession: dynamicSession,
            updateSource: source,
            updatedBy,
          };

          data.foodstuffPriceHistory.unshift({
            id: `fph-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
            priceType: 'DUBAI_MARKET',
            priceRecordId: existing.id,
            productId: existing.productId,
            productName: prod?.name || existing.productId,
            packagingDetails: row.packagingDetails || existing.packagingDetails,
            oldPriceAED: oldPrice,
            newPriceAED: newPrice,
            differenceAED: diff,
            changePercent: pct,
            oldStatus,
            newStatus,
            session: dynamicSession,
            source,
            updatedBy,
            timestamp: nowISO,
          });

          updatedCount++;
        }
      }

      if (data.foodstuffUpdateSchedule) {
        data.foodstuffUpdateSchedule.lastSyncAt = nowISO;
      }

      writeDB(data);
      logActivity(updatedBy, 'FOODSTUFF_BULK_UPDATE', `Updated ${updatedCount} ${type} price records via ${source}`);
      return { updatedCount, timestamp: nowISO };
    },
  },
};
