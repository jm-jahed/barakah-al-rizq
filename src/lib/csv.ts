/**
 * RFC 4180 Compliant CSV Parser and Formatter with UTF-8 BOM Support
 * Tailored for Barakah Al Rizq Foodstuff Trading L.L.C.
 * Supports Unicode, Arabic, Bangla, multi-line cells, and escaped quotes.
 */

export const UTF8_BOM = '\uFEFF';

/**
 * Escapes a single cell value for CSV
 */
export function escapeCsvCell(value: unknown): string {
  if (value === null || value === undefined) {
    return '';
  }
  const str = String(value);
  if (
    str.includes('"') ||
    str.includes(',') ||
    str.includes('\n') ||
    str.includes('\r') ||
    str.includes(';')
  ) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

/**
 * Generates an RFC 4180 CSV string with UTF-8 BOM from rows
 */
export function stringifyCsv(rows: (string | number | null | undefined)[][]): string {
  const content = rows.map((row) => row.map(escapeCsvCell).join(',')).join('\r\n');
  return UTF8_BOM + content;
}

/**
 * Robust RFC 4180 CSV Parser
 * Handles commas, quotes, linebreaks, Arabic/Bangla Unicode, and escaped quotes.
 */
export function parseCsv(csvText: string): string[][] {
  // Strip BOM if present
  let cleanText = csvText;
  if (cleanText.charCodeAt(0) === 0xfeff) {
    cleanText = cleanText.slice(1);
  }

  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = '';
  let insideQuotes = false;
  let i = 0;
  const len = cleanText.length;

  while (i < len) {
    const char = cleanText[i];
    const nextChar = i + 1 < len ? cleanText[i + 1] : null;

    if (insideQuotes) {
      if (char === '"') {
        if (nextChar === '"') {
          // Escaped quote
          currentCell += '"';
          i += 2;
          continue;
        } else {
          // End of quoted cell
          insideQuotes = false;
          i++;
          continue;
        }
      } else {
        currentCell += char;
        i++;
        continue;
      }
    } else {
      if (char === '"') {
        insideQuotes = true;
        i++;
        continue;
      } else if (char === ',') {
        currentRow.push(currentCell.trim());
        currentCell = '';
        i++;
        continue;
      } else if (char === '\r') {
        if (nextChar === '\n') {
          i++; // Skip \r in \r\n
        }
        currentRow.push(currentCell.trim());
        if (currentRow.some((c) => c.length > 0)) {
          rows.push(currentRow);
        }
        currentRow = [];
        currentCell = '';
        i++;
        continue;
      } else if (char === '\n') {
        currentRow.push(currentCell.trim());
        if (currentRow.some((c) => c.length > 0)) {
          rows.push(currentRow);
        }
        currentRow = [];
        currentCell = '';
        i++;
        continue;
      } else {
        currentCell += char;
        i++;
        continue;
      }
    }
  }

  // Push trailing cell and row
  if (currentCell.length > 0 || currentRow.length > 0) {
    currentRow.push(currentCell.trim());
    if (currentRow.some((c) => c.length > 0)) {
      rows.push(currentRow);
    }
  }

  return rows;
}
