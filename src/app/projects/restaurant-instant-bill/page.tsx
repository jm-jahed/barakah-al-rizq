import React from "react";
import type { Metadata } from "next";
import { RestaurantPosApp } from "@/components/restaurant-pos/RestaurantPosApp";

export const metadata: Metadata = {
  title: "RESTAURANT POS — UAE Restaurant Instant Billing & Kitchen KDS Platform | WebStudio AE",
  description: "Commercial UAE restaurant instant billing POS system with 100+ menu catalog, Table management, Kitchen Display System (KDS), 5% VAT calculation, Cash/Card tender, and bilingual 80mm thermal receipts.",
  openGraph: {
    title: "RESTAURANT POS — UAE Restaurant Instant Billing & Kitchen KDS Platform",
    description: "Commercial UAE restaurant instant billing POS system with 100+ menu catalog, Table management, Kitchen Display System (KDS), 5% VAT calculation, Cash/Card tender, and bilingual 80mm thermal receipts.",
    url: "https://webstudioae.com/projects/restaurant-instant-bill",
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
    title: "RESTAURANT POS — UAE Restaurant Instant Billing & Kitchen KDS Platform",
    description: "Commercial UAE restaurant instant billing POS system with 100+ menu catalog, Table management, Kitchen Display System (KDS), 5% VAT calculation, Cash/Card tender, and bilingual 80mm thermal receipts.",
    images: ["https://webstudioae.com/pos-promo.jpg"],
  },
};

export default function RestaurantInstantBillPage() {
  return <RestaurantPosApp />;
}
