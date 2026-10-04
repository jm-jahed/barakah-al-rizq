/**
 * WebStudio AE — LinkedIn Post Publishing CLI
 * Manual Approval & Live Preview Studio
 * 
 * Usage:
 *   node scripts/publishLinkedIn.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Load environment variables from .env.local
const envPath = path.join(__dirname, '..', '.env.local');
let token = process.env.LINKEDIN_ACCESS_TOKEN;
let authorUrn = process.env.LINKEDIN_AUTHOR_URN;

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const tokenMatch = envContent.match(/LINKEDIN_ACCESS_TOKEN=["']?([^"'\r\n]+)["']?/);
  if (tokenMatch) token = tokenMatch[1];
  const urnMatch = envContent.match(/LINKEDIN_AUTHOR_URN=["']?([^"'\r\n]+)["']?/);
  if (urnMatch) authorUrn = urnMatch[1];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

// Preset Marketing Post Templates for WebStudio AE
const TEMPLATES = [
  {
    title: 'Flagship Announcement: WebStudio AE 2026',
    commentary: `Proud to unveil WebStudio AE — engineered from the ground up for UAE enterprises and global scale. 🇦🇪✨

We build bespoke Next.js 16 web platforms, sub-50ms e-commerce engines, and enterprise OpenAI RAG agents that redefine digital performance in Dubai and beyond.

Explore our latest live client architectures and interactive project matrix:
https://webstudioae.com

#WebEngineering #Nextjs #DubaiTech #UAEBusiness #FinTech #FullStack #SoftwareArchitecture`,
    linkUrl: 'https://webstudioae.com',
    linkTitle: 'WebStudio AE — Flagship Web Engineering & Digital Architecture',
    linkDescription: 'Bespoke Next.js 16 Web Platforms & AI Solutions for UAE & Global Leaders.',
  },
  {
    title: 'Case Study Showcase: Flame & Flour Artisan Bakery POS',
    commentary: `Case Study: Flame & Flour Artisan Bakery POS 🥖⚡

A look inside our high-velocity Next.js 16 e-commerce platform built for high-throughput Dubai bakery logistics:
• Instant AED Checkout & Apple Pay integration
• Sub-50ms TTFB across GCC Edge nodes
• Real-time kitchen inventory sync

Full interactive case study:
https://webstudioae.com/work/flame-and-flour

#ECommerce #Nextjs #WebDevelopment #UXDesign #Dubai`,
    linkUrl: 'https://webstudioae.com/work/flame-and-flour',
    linkTitle: 'Flame & Flour — Artisan Bakery POS & Omnichannel Commerce',
    linkDescription: 'Flagship Next.js 16 e-commerce architecture with instant AED settlement.',
  },
  {
    title: 'Case Study Showcase: Nexara Autonomous Logistics',
    commentary: `Next-Gen Air Freight: Nexara Logistics Platform ✈️🌐

Engineered an enterprise autonomous dispatch matrix with live telemetry tracking, route optimization, and multi-tenant security.

Check out the full interactive blueprint:
https://webstudioae.com/work/nexara

#AI #Logistics #EnterpriseArchitecture #Nextjs #Dubai`,
    linkUrl: 'https://webstudioae.com/work/nexara',
    linkTitle: 'Nexara Logistics — Autonomous Air Freight Telemetry',
    linkDescription: 'Autonomous cargo telemetry and enterprise dispatch matrix.',
  },
];

async function getProfileUrn() {
  if (authorUrn) return authorUrn;
  try {
    const res = await fetch('https://api.linkedin.com/v2/userinfo', {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) {
      const data = await res.json();
      return `urn:li:person:${data.sub}`;
    }
  } catch (err) {}
  return null;
}

async function publishPost(payload, resolvedUrn) {
  const postBody = {
    author: resolvedUrn,
    commentary: payload.commentary,
    visibility: 'PUBLIC',
    distribution: {
      feedDistribution: 'MAIN_FEED',
      targetEntities: [],
      thirdPartyDistributionChannels: [],
    },
    lifecycleState: 'PUBLISHED',
    isReshareDisabledByAuthor: false,
  };

  if (payload.linkUrl) {
    postBody.content = {
      article: {
        source: payload.linkUrl,
        title: payload.linkTitle || 'WebStudio AE',
        description: payload.linkDescription || 'Flagship Web Engineering',
      },
    };
  }

  const res = await fetch('https://api.linkedin.com/rest/posts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'LinkedIn-Version': '202401',
      'X-Restli-Protocol-Version': '2.0.0',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postBody),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`LinkedIn Error (${res.status}): ${errText}`);
  }

  const postId = res.headers.get('x-restli-id') || res.headers.get('location') || 'Success';
  return postId;
}

async function main() {
  console.log('\n======================================================');
  console.log('   LINKEDIN PUBLISHING STUDIO — WEBSTUDIO AE');
  console.log('======================================================\n');

  if (!token) {
    console.error('❌ Error: No LINKEDIN_ACCESS_TOKEN found in .env.local');
    process.exit(1);
  }

  let resolvedUrn = await getProfileUrn();

  if (!resolvedUrn) {
    console.log('⚠️  Could not auto-detect profile URN from token.');
    const inputUrn = await askQuestion('Please enter your LinkedIn Person URN (e.g. urn:li:person:YOUR_ID or Organization URN urn:li:organization:ORG_ID): ');
    if (!inputUrn.trim()) {
      console.log('❌ URN is required to publish.');
      process.exit(1);
    }
    resolvedUrn = inputUrn.trim();
  }

  console.log(`\n✅ Authenticated Author: ${resolvedUrn}\n`);

  console.log('Select an option:');
  console.log('1. Use Flagship Announcement Template');
  console.log('2. Use Flame & Flour Case Study Template');
  console.log('3. Use Nexara Logistics Case Study Template');
  console.log('4. Write Custom Post\n');

  const choice = await askQuestion('Choose an option (1-4): ');

  let postPayload;

  if (choice === '1') {
    postPayload = TEMPLATES[0];
  } else if (choice === '2') {
    postPayload = TEMPLATES[1];
  } else if (choice === '3') {
    postPayload = TEMPLATES[2];
  } else {
    const text = await askQuestion('\nEnter post text (use \\n for line breaks):\n');
    const link = await askQuestion('\nEnter optional website link (or press enter to skip): ');
    postPayload = {
      commentary: text.replace(/\\n/g, '\n'),
      linkUrl: link.trim() || undefined,
      linkTitle: link.trim() ? 'WebStudio AE — Flagship Web Engineering' : undefined,
    };
  }

  console.log('\n------------------------------------------------------');
  console.log('               PREVIEW OF YOUR POST:');
  console.log('------------------------------------------------------');
  console.log(postPayload.commentary);
  if (postPayload.linkUrl) {
    console.log(`\n🔗 Attached Link: ${postPayload.linkUrl}`);
    console.log(`📌 Title: ${postPayload.linkTitle}`);
  }
  console.log('------------------------------------------------------\n');

  const confirm = await askQuestion('⚠️  DO YOU APPROVE PUBLISHING THIS POST TO LINKEDIN NOW? (yes/no): ');

  if (confirm.toLowerCase() === 'yes' || confirm.toLowerCase() === 'y') {
    console.log('\n🚀 Dispatching post to LinkedIn API...');
    try {
      const postId = await publishPost(postPayload, resolvedUrn);
      console.log(`\n🎉 SUCCESS! Post has been published live on LinkedIn.`);
      console.log(`Post ID: ${postId}\n`);
    } catch (err) {
      console.error(`\n❌ Publishing failed:`, err.message);
    }
  } else {
    console.log('\n🛑 Publishing cancelled. Nothing was posted.\n');
  }

  rl.close();
}

main();
