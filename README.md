# 🇦🇪 Barakah Al Rizq Foodstuff Trading L.L.C.

Official production web application and wholesale commodity pricing platform for **Barakah Al Rizq Foodstuff Trading L.L.C.**, headquartered at Al Aweer Central Fruit & Vegetable Market, Ras Al Khor, Dubai, United Arab Emirates.

## 📌 Company Overview

* **Legal Entity:** Barakah Al Rizq Foodstuff Trading L.L.C.
* **License & Origin:** Dubai, United Arab Emirates
* **Headquarters:** Office No. M02, Building No. 3, Above Zam Zam Supermarket, Al Aweer Central Fruit & Vegetable Market, Ras Al Khor, Dubai, UAE
* **Managing Director:** Habeeb Khan
* **Primary Phone:** +971 56 944 8850
* **Official Email:** barakahalrizquae@gmail.com
* **Official Domain:** [https://barakahalrizquae.com](https://barakahalrizquae.com)

---

## 🛠️ Technology Stack

* **Framework:** Next.js 16 (App Router) with Turbopack
* **Language:** TypeScript 5
* **Styling:** Tailwind CSS 4 (Vanilla styling tokens)
* **Database:** MongoDB Atlas (`barakah_al_rizq`) with local resilient dual-store JSON adapter
* **State Management:** Dynamic UAE Trading Session detection (Morning, Midday, Evening)
* **Icons:** Lucide React

---

## 🌟 Key Platform Features

1. **Dual Wholesale Pricing Architecture:**
   * **Container Wholesale (Import/Export):** 40ft Reefer & 20ft dry bulk container procurement direct from Jebel Ali Port.
   * **Dubai Market Wholesale (Trading Floor):** Daily spot rates per box/bag direct from Al Aweer Central Market.
2. **Dynamic UAE Trading Session Engine:**
   * Morning (06:30 GST), Midday (12:30 GST), Evening (18:00 GST) automated freshness evaluation.
3. **Admin Wholesale Pricing Portal:**
   * Real-time price updates, Excel/CSV bulk import, and audit logging at `/admin/foodstuff-prices`.
4. **Instant RFQ & Trade Inquiry:**
   * Container quote modal and direct WhatsApp integration (+971 56 944 8850).

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
