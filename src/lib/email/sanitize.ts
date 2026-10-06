/**
 * HTML Sanitization and Text Extraction utility for Incoming Email Inbox
 * Strips XSS vectors: scripts, iframes, inline event handlers, javascript: URIs
 */

export function sanitizeHtml(rawHtml: string): string {
  if (!rawHtml || typeof rawHtml !== 'string') return '';

  let sanitized = rawHtml;

  // 1. Strip dangerous tags and their contents
  const dangerousTags = [
    'script',
    'iframe',
    'object',
    'embed',
    'applet',
    'base',
    'meta',
    'form',
    'input',
    'button',
    'textarea',
    'select',
    'option',
  ];

  for (const tag of dangerousTags) {
    const reg = new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}>`, 'gi');
    sanitized = sanitized.replace(reg, '');
    const selfClosingReg = new RegExp(`<${tag}\\b[^>]*\\/?>`, 'gi');
    sanitized = sanitized.replace(selfClosingReg, '');
  }

  // 2. Strip event handlers (e.g. onload=, onclick=, onerror=, onmouseover=)
  sanitized = sanitized.replace(/\s+on[a-zA-Z]+\s*=\s*(?:'[^']*'|"[^"]*"|[^\s>]+)/gi, '');

  // 3. Strip javascript:, vbscript:, data:text/html URIs in href, src, action, background
  sanitized = sanitized.replace(/\b(href|src|action|background|formaction)\s*=\s*(?:'javascript:[^']*'|"javascript:[^"]*"|javascript:[^\s>]+)/gi, '$1="#"');
  sanitized = sanitized.replace(/\b(href|src|action|background|formaction)\s*=\s*(?:'vbscript:[^']*'|"vbscript:[^"]*"|vbscript:[^\s>]+)/gi, '$1="#"');
  sanitized = sanitized.replace(/\b(href|src|action|background|formaction)\s*=\s*(?:'data:text\/html[^']*'|"data:text\/html[^"]*"|data:text\/html[^\s>]+)/gi, '$1="#"');

  // 4. Neutralize target attributes on links so they open in safe new tabs with rel="noopener noreferrer"
  sanitized = sanitized.replace(/<a\b([^>]*)>/gi, (match, attrs) => {
    let cleanAttrs = attrs.replace(/\btarget\s*=\s*(?:'[^']*'|"[^"]*"|[^\s>]+)/gi, '');
    cleanAttrs = cleanAttrs.replace(/\brel\s*=\s*(?:'[^']*'|"[^"]*"|[^\s>]+)/gi, '');
    return `<a ${cleanAttrs.trim()} target="_blank" rel="noopener noreferrer">`;
  });

  return sanitized.trim();
}

export function stripMimeHeaders(rawText: string): string {
  if (!rawText || typeof rawText !== 'string') return '';
  const lines = rawText.split(/\r?\n/);
  const cleanLines: string[] = [];

  for (const rawLine of lines) {
    const trimmed = rawLine.trim();
    if (!trimmed && cleanLines.length === 0) continue;
    // Strip technical headers that sometimes leak into body
    if (/^Content-(Type|Transfer-Encoding|Disposition|ID):/i.test(trimmed)) continue;
    if (/^charset\s*=/i.test(trimmed)) continue;
    if (/^MIME-Version:/i.test(trimmed)) continue;
    if (/^--[a-zA-Z0-9_-]+--?$/.test(trimmed)) continue;
    if (/^(Received|X-[a-zA-Z0-9-]+|DKIM-Signature):/i.test(trimmed)) continue;
    cleanLines.push(rawLine);
  }

  return cleanLines.join('\n').trim();
}

export function extractPreviewText(textBody: string, htmlBody?: string, maxLength: number = 160): string {
  const cleanedText = stripMimeHeaders(textBody);
  if (cleanedText && cleanedText.trim()) {
    const clean = cleanedText.replace(/\s+/g, ' ').trim();
    return clean.length > maxLength ? `${clean.slice(0, maxLength).trim()}...` : clean;
  }

  if (htmlBody && typeof htmlBody === 'string' && htmlBody.trim()) {
    // Strip HTML tags and decode common entities
    const stripped = htmlBody
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, ' ')
      .trim();

    return stripped.length > maxLength ? `${stripped.slice(0, maxLength).trim()}...` : stripped;
  }

  return '';
}
