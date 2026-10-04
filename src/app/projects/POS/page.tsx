import React from "react";
import type { Metadata } from "next";
import { RestaurantPosApp } from "@/components/restaurant-pos/RestaurantPosApp";

export const metadata: Metadata = {
  title: "RESTAURANT POS — Smart Restaurant Management & Instant Billing (UAE) | WebStudio AE",
  description: "Enterprise UAE Smart Restaurant POS System & Billing ERP with live thermal receipts, table management, KDS, staff PIN security, and AED multi-currency support. Get 1st Month Free & Custom Pricing.",
  openGraph: {
    title: "RESTAURANT POS — Smart Restaurant Management & Instant Billing (UAE)",
    description: "Enterprise UAE Smart Restaurant POS System & Billing ERP with live thermal receipts, table management, KDS, staff PIN security, and AED multi-currency support. Get 1st Month Free & Custom Pricing.",
    url: "https://webstudioae.com/projects/pos",
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

export default function ProjectsPosLowercaseAliasPage() {
  return <RestaurantPosApp />;
}
