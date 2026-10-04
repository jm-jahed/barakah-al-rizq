const fs = require('fs');
const path = require('path');
const https = require('https');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function scrapeAll() {
  let allProducts = [];
  let page = 1;
  let hasMore = true;

  console.log('Fetching products from poshabaya.ae...');

  while (hasMore) {
    const url = `https://www.poshabaya.ae/products.json?limit=250&page=${page}`;
    console.log(`Fetching page ${page}: ${url}`);
    try {
      const data = await fetchJson(url);
      if (data && data.products && data.products.length > 0) {
        allProducts = allProducts.concat(data.products);
        console.log(`Page ${page} fetched: ${data.products.length} products (Total so far: ${allProducts.length})`);
        page++;
        if (data.products.length < 250) {
          hasMore = false;
        }
      } else {
        hasMore = false;
      }
    } catch (err) {
      console.error(`Error on page ${page}:`, err.message);
      hasMore = false;
    }
  }

  console.log(`Total raw products fetched: ${allProducts.length}`);

  // Transform into NouraProduct format
  const formattedProducts = allProducts.map((p, idx) => {
    const primaryImg = p.images && p.images.length > 0 ? p.images[0].src : 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop';
    const secondaryImgs = p.images && p.images.length > 1 ? p.images.slice(1, 5).map(img => img.src) : [primaryImg];
    
    // First variant price
    const firstVariant = p.variants && p.variants.length > 0 ? p.variants[0] : {};
    const priceAed = Math.round(parseFloat(firstVariant.price) || 350);
    const comparePrice = parseFloat(firstVariant.compare_at_price);
    const originalPriceAED = comparePrice && comparePrice > priceAed ? Math.round(comparePrice) : Math.round(priceAed * 1.25);

    // Extract sizes
    let sizes = ['52"', '54"', '56"', '58"', '60"'];
    if (p.options) {
      const sizeOpt = p.options.find(o => o.name.toLowerCase().includes('size') || o.name.toLowerCase().includes('length'));
      if (sizeOpt && sizeOpt.values && sizeOpt.values.length > 0) {
        sizes = sizeOpt.values;
      }
    }

    // Colors
    let colors = [{ name: 'Classic Black', hex: '#0a0a0a' }];
    if (p.options) {
      const colorOpt = p.options.find(o => o.name.toLowerCase().includes('color') || o.name.toLowerCase().includes('colour'));
      if (colorOpt && colorOpt.values && colorOpt.values.length > 0) {
        colors = colorOpt.values.map(c => ({
          name: c,
          hex: c.toLowerCase().includes('green') ? '#064e3b' : (c.toLowerCase().includes('beige') || c.toLowerCase().includes('brown') ? '#8b7355' : (c.toLowerCase().includes('grey') ? '#4b5563' : (c.toLowerCase().includes('blue') ? '#1e3a8a' : (c.toLowerCase().includes('white') ? '#f3f4f6' : '#0a0a0a'))))
        }));
      }
    }

    // Clean body description
    const rawDesc = (p.body_html || '').replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
    const overview = rawDesc || `${p.title} - Handcrafted luxury abaya tailored with premium fabrics in the UAE.`;

    // Category deduction
    let category = 'Luxury Abayas';
    const titleLower = p.title.toLowerCase();
    const typeLower = (p.product_type || '').toLowerCase();
    if (titleLower.includes('kaftan') || typeLower.includes('kaftan')) category = 'Moroccan Kaftans';
    else if (titleLower.includes('open') || titleLower.includes('kimono')) category = 'Open Abayas';
    else if (titleLower.includes('dress') || typeLower.includes('dress')) category = 'Modest Occasion Dresses';
    else if (titleLower.includes('embroid') || titleLower.includes('zari')) category = 'Embroidered Abayas';
    else if (titleLower.includes('satin') || titleLower.includes('silk')) category = 'Satin & Silk Abayas';
    else if (titleLower.includes('crepe') || titleLower.includes('linen')) category = 'Linen & Crepe Abayas';
    else if (titleLower.includes('eid') || titleLower.includes('ramadan')) category = 'Ramadan & Eid Edit';

    let collection = 'SIGNATURE ABAYAS';
    if (idx < 30) collection = 'NEW ARRIVALS';
    else if (idx < 80) collection = 'EID COLLECTION';
    else if (idx < 140) collection = 'RAMADAN EDIT';
    else if (idx < 200) collection = 'EVENING EDIT';
    else collection = 'EVERYDAY LUXURY';

    // Badge
    let badge = undefined;
    if (idx % 7 === 0) badge = 'BESTSELLER';
    else if (idx % 9 === 0) badge = 'NEW ARRIVAL';
    else if (idx % 11 === 0) badge = 'EID EDITION';
    else if (idx % 13 === 0) badge = 'LIMITED';

    return {
      id: `posh-${p.id || idx + 1}`,
      name: p.title,
      category,
      collection,
      priceAED: priceAed,
      originalPriceAED: originalPriceAED,
      badge,
      colorOptions: colors,
      sizes: sizes,
      fabric: titleLower.includes('silk') ? 'Pure Mulberry Silk' : (titleLower.includes('organza') ? 'French Crushed Organza' : (titleLower.includes('velvet') ? 'Italian Silk Velvet' : (titleLower.includes('crepe') ? 'Dubai Luxury Crepe' : 'Japanese Royal Nida'))),
      fit: 'Relaxed Modest Cut',
      closure: 'Front-Open with Snap Buttons & Matching Belt',
      finishingDetails: 'Complimentary Matching Sheila Scarf Included',
      occasion: 'Casual Elegance & Special Gatherings',
      care: 'Dry clean recommended / Cool iron on reverse',
      rating: +(4.8 + (idx % 3) * 0.1).toFixed(1),
      reviewsCount: 14 + (idx % 45),
      image: primaryImg,
      secondaryImages: secondaryImgs,
      overview: overview.slice(0, 300),
      isNewArrival: idx < 40,
      isBestseller: idx % 5 === 0,
      inStock: true
    };
  });

  // Save raw data
  const jsonOutPath = path.join(__dirname, '..', 'src', 'data', 'poshAbayaCatalog.json');
  fs.writeFileSync(jsonOutPath, JSON.stringify(formattedProducts, null, 2), 'utf8');
  console.log(`Saved ${formattedProducts.length} items to ${jsonOutPath}`);

  return formattedProducts;
}

scrapeAll().catch(console.error);
