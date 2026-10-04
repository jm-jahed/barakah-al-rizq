/**
 * Tafqeet - Arabic and English Number-to-Words Converter for UAE Currency (AED & Fils)
 * Formats exactly to official UAE accounting standards (e.g. "فقط ألف وخمسمائة وخمسة وسبعون درهم وصفر فلس لا غير")
 */

const onesArabic = [
  "",
  "واحد",
  "اثنان",
  "ثلاثة",
  "أربعة",
  "خمسة",
  "ستة",
  "سبعة",
  "ثمانية",
  "تسعة",
  "عشرة",
  "أحد عشر",
  "اثنا عشر",
  "ثلاثة عشر",
  "أربعة عشر",
  "خمسة عشر",
  "ستة عشر",
  "سبعة عشر",
  "ثمانية عشر",
  "تسعة عشر",
];

const tensArabic = [
  "",
  "عشرة",
  "عشرون",
  "ثلاثون",
  "أربعون",
  "خمسون",
  "ستون",
  "سبعون",
  "ثمانون",
  "تسعون",
];

const hundredsArabic = [
  "",
  "مائة",
  "مائتان",
  "ثلاث مائة",
  "أربع مائة",
  "خمس مائة",
  "ست مائة",
  "سبع مائة",
  "ثمان مائة",
  "تسع مائة",
];

function convertGroupUnderThousand(n: number): string {
  if (n === 0) return "";
  const parts: string[] = [];

  const h = Math.floor(n / 100);
  const remainder = n % 100;

  if (h > 0) {
    parts.push(hundredsArabic[h]);
  }

  if (remainder > 0) {
    if (remainder < 20) {
      parts.push(onesArabic[remainder]);
    } else {
      const o = remainder % 10;
      const t = Math.floor(remainder / 10);
      if (o > 0) {
        parts.push(`${onesArabic[o]} و ${tensArabic[t]}`);
      } else {
        parts.push(tensArabic[t]);
      }
    }
  }

  return parts.join(" و ");
}

export function numberToArabicWords(amount: number): string {
  if (isNaN(amount) || amount === 0) {
    return "فقط صفر درهم لاغير";
  }

  const absAmount = Math.abs(amount);
  const integerPart = Math.floor(absAmount);
  // Support 2/3 decimal places (fils)
  const decimalPart = Math.round((absAmount - integerPart) * 100);
  const fils = Math.round(decimalPart);

  const parts: string[] = [];

  if (integerPart === 0) {
    parts.push("صفر درهم");
  } else {
    // Process Billions, Millions, Thousands, Ones
    const billions = Math.floor(integerPart / 1_000_000_000);
    const millions = Math.floor((integerPart % 1_000_000_000) / 1_000_000);
    const thousands = Math.floor((integerPart % 1_000_000) / 1_000);
    const ones = integerPart % 1_000;

    const groupParts: string[] = [];

    if (billions > 0) {
      if (billions === 1) groupParts.push("مليار");
      else if (billions === 2) groupParts.push("ملياران");
      else if (billions >= 3 && billions <= 10) groupParts.push(`${convertGroupUnderThousand(billions)} مليارات`);
      else groupParts.push(`${convertGroupUnderThousand(billions)} مليار`);
    }

    if (millions > 0) {
      if (millions === 1) groupParts.push("مليون");
      else if (millions === 2) groupParts.push("مليونان");
      else if (millions >= 3 && millions <= 10) groupParts.push(`${convertGroupUnderThousand(millions)} ملايين`);
      else groupParts.push(`${convertGroupUnderThousand(millions)} مليون`);
    }

    if (thousands > 0) {
      if (thousands === 1) groupParts.push("ألف");
      else if (thousands === 2) groupParts.push("ألفان");
      else if (thousands >= 3 && thousands <= 10) groupParts.push(`${convertGroupUnderThousand(thousands)} آلاف`);
      else groupParts.push(`${convertGroupUnderThousand(thousands)} ألف`);
    }

    if (ones > 0) {
      groupParts.push(convertGroupUnderThousand(ones));
    }

    const dirhamsText = groupParts.join(" و ");
    parts.push(`${dirhamsText} درهم`);
  }

  // Fils part
  if (fils > 0) {
    const filsText = convertGroupUnderThousand(fils);
    parts.push(`و ${filsText} فلساً`);
  }

  return `فقط ${parts.join(" ")} لاغير`;
}

// English words converter
const onesEnglish = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];

const tensEnglish = [
  "",
  "",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

function convertGroupUnderThousandEn(n: number): string {
  if (n === 0) return "";
  let str = "";
  const h = Math.floor(n / 100);
  const remainder = n % 100;

  if (h > 0) {
    str += `${onesEnglish[h]} Hundred`;
    if (remainder > 0) str += " and ";
  }

  if (remainder > 0) {
    if (remainder < 20) {
      str += onesEnglish[remainder];
    } else {
      const o = remainder % 10;
      const t = Math.floor(remainder / 10);
      str += tensEnglish[t];
      if (o > 0) str += `-${onesEnglish[o]}`;
    }
  }

  return str;
}

export function numberToEnglishWords(amount: number): string {
  if (isNaN(amount) || amount === 0) {
    return "Zero UAE Dirhams Only";
  }

  const absAmount = Math.abs(amount);
  const integerPart = Math.floor(absAmount);
  const fils = Math.round((absAmount - integerPart) * 100);

  const millions = Math.floor(integerPart / 1_000_000);
  const thousands = Math.floor((integerPart % 1_000_000) / 1_000);
  const ones = integerPart % 1_000;

  const parts: string[] = [];

  if (millions > 0) {
    parts.push(`${convertGroupUnderThousandEn(millions)} Million`);
  }
  if (thousands > 0) {
    parts.push(`${convertGroupUnderThousandEn(thousands)} Thousand`);
  }
  if (ones > 0) {
    parts.push(convertGroupUnderThousandEn(ones));
  }

  let result = parts.length > 0 ? `${parts.join(" ")} UAE Dirhams` : "";

  if (fils > 0) {
    result += ` and ${convertGroupUnderThousandEn(fils)} Fils`;
  }

  return `${result} Only`;
}
