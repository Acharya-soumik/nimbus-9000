const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const BLOG_IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'blog');

// Ensure directory exists
if (!fs.existsSync(BLOG_IMAGES_DIR)) {
  console.log(`Directory not found: ${BLOG_IMAGES_DIR}`);
  console.log('Creating directory...');
  fs.mkdirSync(BLOG_IMAGES_DIR, { recursive: true });
}

async function compressImages() {
  console.log(`Scanning for images in: ${BLOG_IMAGES_DIR}`);
  
  try {
    const files = fs.readdirSync(BLOG_IMAGES_DIR);
    const imageFiles = files.filter(file => /\.(png|jpg|jpeg)$/i.test(file));
    
    if (imageFiles.length === 0) {
      console.log('No PNG/JPG images found to compress.');
      return;
    }

    console.log(`Found ${imageFiles.length} images. Starting compression...`);

    for (const file of imageFiles) {
      const inputPath = path.join(BLOG_IMAGES_DIR, file);
      const filename = path.parse(file).name;
      const outputPath = path.join(BLOG_IMAGES_DIR, `${filename}.avif`);

      // Skip if AVIF already exists and is newer than source
      if (fs.existsSync(outputPath)) {
        const inputStats = fs.statSync(inputPath);
        const outputStats = fs.statSync(outputPath);
        
        if (outputStats.mtime > inputStats.mtime) {
          console.log(`Skipping ${file} - AVIF already up to date.`);
          continue;
        }
      }

      console.log(`Compressing ${file}...`);
      
      await sharp(inputPath)
        .avif({ quality: 75 })
        .toFile(outputPath);
        
      const inputStats = fs.statSync(inputPath);
      const outputStats = fs.statSync(outputPath);
      const saving = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(2);
      
      console.log(`✓ Generated ${filename}.avif (${(outputStats.size / 1024).toFixed(2)} KB) - Saved ${saving}%`);
    }
    
    console.log('\nAll images processed successfully!');
    
  } catch (error) {
    console.error('Error processing images:', error);
    process.exit(1);
  }
}

compressImages();
