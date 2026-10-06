# Barakah Al Rizq — Cloudflare Email Routing Worker

This Cloudflare Worker connects all inbound business emails directly to the **Barakah Al Rizq Email Portal** and preserves the authentic raw email backup in Gmail.

---

## 1. How It Works

```
CLIENT EMAIL
   │
   ▼
[info@ / sales@ / orders@ / habeeb@barakahalrizquae.com]
   │
   ▼
Cloudflare MX Records
   │
   ▼
Cloudflare Email Routing Rule (Send to Worker)
   │
   ▼
[barakah-email-worker]
   ├── 1. message.forward('barakahalrizquae@gmail.com') (Gmail Backup Copy)
   └── 2. PostalMime Parser (Extract text, sanitized HTML, headers, attachment metadata)
             │
             ▼
      POST https://barakahalrizquae.com/api/webhooks/incoming-email
      (Authenticated via X-Webhook-Secret)
             │
             ▼
      MongoDB / Local Inbox Storage
             │
             ▼
      Dedicated Email Portal (https://inbox.barakahalrizquae.com)
```

---

## 2. Environment Variables in Cloudflare Worker

Configure the following under **Worker Settings** → **Variables & Secrets**:

| Variable Name | Value | Description |
|---|---|---|
| `WEBHOOK_URL` | `https://barakahalrizquae.com/api/webhooks/incoming-email` | Webhook ingestion endpoint on production server |
| `INCOMING_EMAIL_WEBHOOK_SECRET` | `barakah_incoming_webhook_sec_2026_x89` | Secret token verified in constant-time |
| `GMAIL_BACKUP_EMAIL` | `barakahalrizquae@gmail.com` | Destination for original un-modified MIME backup |

---

## 3. Cloudflare Dashboard Setup (3 Steps)

### Step A: Destination Address
1. Go to **Email Routing** → **Destination addresses**.
2. Verify that `barakahalrizquae@gmail.com` is present and **Active**.

### Step B: Create / Deploy Worker
1. Go to **Workers & Pages** → **Create application** → **Worker**.
2. Name it `barakah-email-worker`.
3. Deploy the code from `src/index.js` (with package dependency `postal-mime`).
4. Set the 3 Environment Variables listed in Section 2 above.

### Step C: Attach Worker to Email Routing Rules
1. Go to **Email Routing** → **Routing rules**.
2. For each of the 4 official mailboxes:
   - `info@barakahalrizquae.com` → Action: **Send to Worker** (`barakah-email-worker`)
   - `sales@barakahalrizquae.com` → Action: **Send to Worker** (`barakah-email-worker`)
   - `orders@barakahalrizquae.com` → Action: **Send to Worker** (`barakah-email-worker`)
   - `habeeb@barakahalrizquae.com` → Action: **Send to Worker** (`barakah-email-worker`)
   *(Alternatively: Set **Catch-all rule** → Action: **Send to Worker** `barakah-email-worker`)*
3. Save changes.

---

## 4. Features & Safeguards

- **Strict Recipient Binding:** Recipient mailbox is always determined from the actual `toEmail`.
- **Zero-Data Loss:** Gmail forwarding happens immediately before webhook dispatch.
- **Idempotency:** Unique `messageId` prevents duplicate entries even on duplicate deliveries.
- **Resilience:** Automatic 3-stage exponential backoff retry on webhook network glitches.
- **Attachment Safety:** Stores attachment metadata (filename, MIME type, size) without database bloat.
