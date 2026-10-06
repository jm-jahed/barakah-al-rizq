import workerModule from '../cloudflare-email-worker/src/index.js';

async function runWorkerSimulation() {
  console.log('Testing Cloudflare Email Worker simulation...');
  const worker = workerModule;

  const sampleMime = [
    'From: "John Buyer" <john@purchasing-uae.com>',
    'To: orders@barakahalrizquae.com',
    'Subject: =?UTF-8?B?TmV3IFdob2xlc2FsZSBPcmRlciAjOTk0ODI=?=',
    'Date: Tue, 06 Oct 2026 10:00:00 +0400',
    'Message-ID: <test-mime-' + Date.now() + '@purchasing-uae.com>',
    'MIME-Version: 1.0',
    'Content-Type: multipart/alternative; boundary="BOUNDARY123"',
    '',
    '--BOUNDARY123',
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: quoted-printable',
    '',
    'Hello Barakah Team,=0D=0APlease confirm 50 crates of Grade A Onions.',
    '',
    '--BOUNDARY123',
    'Content-Type: text/html; charset=utf-8',
    'Content-Transfer-Encoding: quoted-printable',
    '',
    '<p>Hello Barakah Team,<br>Please confirm <b>50 crates</b> of Grade A Onions.</p>',
    '',
    '--BOUNDARY123--'
  ].join('\r\n');

  const rawBytes = new TextEncoder().encode(sampleMime);

  const mockMessage = {
    from: 'john@purchasing-uae.com',
    to: 'orders@barakahalrizquae.com',
    headers: {
      get: (h) => {
        if (h.toLowerCase() === 'subject') return 'New Wholesale Order #99482';
        if (h.toLowerCase() === 'message-id') return '<test-mime-' + Date.now() + '@purchasing-uae.com>';
        return null;
      }
    },
    raw: new ReadableStream({
      start(controller) {
        controller.enqueue(rawBytes);
        controller.close();
      }
    }),
    forward: async (dest) => console.log('Mock forwarded to:', dest)
  };

  const env = {
    WEBHOOK_URL: 'https://barakahalrizquae.com/api/webhooks/incoming-email',
    INCOMING_EMAIL_WEBHOOK_SECRET: 'barakah_incoming_webhook_sec_2026_x89',
    GMAIL_BACKUP_EMAIL: 'barakahalrizquae@gmail.com'
  };

  await worker.email(mockMessage, env, {});
  console.log('Simulation complete!');
}

runWorkerSimulation();
