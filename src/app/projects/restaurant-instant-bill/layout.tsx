import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RESTAURANT POS — Smart Restaurant Management & Instant Billing (UAE)",
  description:
    "Commercial UAE Restaurant POS + Instant Billing, Floor & Table Management, Kitchen Display System (KDS), 5% UAE VAT, and 80mm Thermal Receipt Generation in English & Arabic RTL.",
};

export default function RestaurantPosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
