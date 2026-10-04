/**
 * GCC / Gulf Countries & Currencies Definition & Helper
 */

export interface GccCurrency {
  country: string;
  currencyCode: string;
  currencySymbol: string;
  currencySymbolAr: string;
  currencyName: string;
  flag: string;
  defaultVatPercent: number;
  decimals: number;
}

export const GCC_CURRENCIES: Record<string, GccCurrency> = {
  "United Arab Emirates": {
    country: "United Arab Emirates",
    currencyCode: "AED",
    currencySymbol: "Dhs",
    currencySymbolAr: "د.إ",
    currencyName: "United Arab Emirates Dirham",
    flag: "🇦🇪",
    defaultVatPercent: 5,
    decimals: 2,
  },
  "Saudi Arabia": {
    country: "Saudi Arabia",
    currencyCode: "SAR",
    currencySymbol: "﷼",
    currencySymbolAr: "ر.س",
    currencyName: "Saudi Riyal",
    flag: "🇸🇦",
    defaultVatPercent: 15,
    decimals: 2,
  },
  Qatar: {
    country: "Qatar",
    currencyCode: "QAR",
    currencySymbol: "﷼",
    currencySymbolAr: "ر.ق",
    currencyName: "Qatari Riyal",
    flag: "🇶🇦",
    defaultVatPercent: 0,
    decimals: 2,
  },
  Kuwait: {
    country: "Kuwait",
    currencyCode: "KWD",
    currencySymbol: "د.ك",
    currencySymbolAr: "د.ك",
    currencyName: "Kuwaiti Dinar",
    flag: "🇰🇼",
    defaultVatPercent: 0,
    decimals: 3,
  },
  Bahrain: {
    country: "Bahrain",
    currencyCode: "BHD",
    currencySymbol: "BD",
    currencySymbolAr: "د.ب",
    currencyName: "Bahraini Dinar",
    flag: "🇧🇭",
    defaultVatPercent: 10,
    decimals: 3,
  },
  Oman: {
    country: "Oman",
    currencyCode: "OMR",
    currencySymbol: "﷼",
    currencySymbolAr: "ر.ع",
    currencyName: "Omani Rial",
    flag: "🇴🇲",
    defaultVatPercent: 5,
    decimals: 3,
  },
};

export const getGccInfoByCountry = (country: string): GccCurrency => {
  return GCC_CURRENCIES[country] || GCC_CURRENCIES["United Arab Emirates"];
};

export const formatGccCurrency = (
  amount: number,
  symbol: string = "Dhs",
  lang: "en" | "ar" = "en",
  decimals: number = 2
): string => {
  const num = (amount || 0).toFixed(decimals);

  if (lang === "ar") {
    // If UAE, use standard Arabic Dirham symbol
    if (symbol === "Dhs" || symbol === "AED") {
      return `${num} د.إ`;
    }
    return `${num} ${symbol}`;
  }

  // English formatting
  return `${symbol} ${num}`;
};
