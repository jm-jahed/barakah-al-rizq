"use client";

import React from "react";
import { ShopPosProvider } from "@/context/ShopPosContext";
import ShopPosApp from "@/components/shop-pos/ShopPosApp";

export default function UniversalRetailPOSPage() {
  return (
    <ShopPosProvider>
      <ShopPosApp />
    </ShopPosProvider>
  );
}

