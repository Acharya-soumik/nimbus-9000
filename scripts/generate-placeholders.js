const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const BLOG_IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'blog');

// Ensure directory exists
if (!fs.existsSync(BLOG_IMAGES_DIR)) {
  fs.mkdirSync(BLOG_IMAGES_DIR, { recursive: true });
}

const imagesToGenerate = [
  { name: 'money-recovery-guide.jpg', title: 'Money Recovery Guide', color: '#1a365d' },
  { name: 'cost-timeline.jpg', title: 'Cost and Timeline', color: '#2b6cb0' },
  { name: 'when-to-send-notice.jpg', title: 'When to Send Notice', color: '#2c5282' },
  { name: 'notice-format.jpg', title: 'Notice Format', color: '#2a4365' },
  { name: 'after-notice.jpg', title: 'What Happens After', color: '#1a365d' },
  // Adding placeholders for others if needed
];

async function generatePlaceholders() {
  console.log('Generating placeholder images...');

  for (const img of imagesToGenerate) {
    const outputPath = path.join(BLOG_IMAGES_DIR, img.name);
    
    // Create SVG with text
    const svg = `
      <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="630" fill="${img.color}"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="60" fill="white" text-anchor="middle" dy=".3em">${img.title}</text>
        <text x="50%" y="80%" font-family="Arial, sans-serif" font-size="30" fill="rgba(255,255,255,0.7)" text-anchor="middle">VakalatnaamaToday</text>
      </svg>
    `;

    try {
      await sharp(Buffer.from(svg))
        .jpeg({ quality: 90 })
        .toFile(outputPath);
      console.log(`✓ Generated ${img.name}`);
    } catch (err) {
      console.error(`✗ Failed to generate ${img.name}:`, err);
    }
  }
}

generatePlaceholders();
