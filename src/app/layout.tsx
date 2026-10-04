import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Barakah Al Rizq Foodstuff Trading L.L.C | UAE Foodstuff Importer & Wholesaler',
  description: 'Barakah Al Rizq Foodstuff Trading L.L.C is a premier UAE-based foodstuff trading company specializing in import, export, container wholesale, and daily trading floor market distribution across Dubai, UAE, and GCC markets.',
  keywords: [
    'Barakah Al Rizq Foodstuff Trading',
    'Dubai Foodstuff Importer',
    'Al Aweer Vegetable Market Wholesaler',
    'UAE Fruit and Vegetable Supplier',
    'Basmati Rice Wholesale Dubai',
    'Spices Importer Ras Al Khor',
    'MD HABEER KHAN'
  ],
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Barakah Al Rizq Foodstuff Trading L.L.C | UAE Foodstuff Importer & Wholesaler',
    description: 'Leading UAE foodstuff import, export, wholesale, and bulk supply enterprise headquartered at Al Aweer Vegetable Market, Ras Al Khor, Dubai.',
    images: ['https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1200&auto=format&fit=crop'],
    url: 'https://barakahalrizquae.com',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Scheherazade+New:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0B0907] text-gray-100 min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
