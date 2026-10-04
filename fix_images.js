const fs = require('fs');
const path = require('path');

const seedPath = path.join(__dirname, 'src', 'services', 'retail-pos', 'db', 'retailSeed.ts');
let content = fs.readFileSync(seedPath, 'utf8');

// Find all products and their names to replace their images
// It looks like:
// name: 'India Gate Basmati Rice Classic 5kg',
// ...
// image: 'https://...',

content = content.replace(/name:\s*'([^']+)',[\s\S]*?image:\s*'([^']+)',/g, (match, name, image) => {
    // encode the name for the placeholder URL
    // replace spaces with +
    const text = encodeURIComponent(name);
    const newImage = `https://placehold.co/400x300/121622/D4AF37/webp?text=${text}`;
    return match.replace(image, newImage);
});

fs.writeFileSync(seedPath, content, 'utf8');
console.log('Images updated in retailSeed.ts');
