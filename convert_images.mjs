import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function convertImagesInDirectory(directory) {
  if (!fs.existsSync(directory)) return;
  
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await convertImagesInDirectory(fullPath);
    } else if (/\.(png|jpe?g)$/i.test(file)) {
      const parsedPath = path.parse(fullPath);
      const outputFilename = path.join(parsedPath.dir, parsedPath.name + '.webp');
      
      console.log(`Converting ${fullPath} to ${outputFilename}`);
      
      try {
        await sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(outputFilename);
          
        fs.unlinkSync(fullPath); // remove original
      } catch (err) {
        console.error(`Error converting ${fullPath}:`, err);
      }
    }
  }
}

async function run() {
  await convertImagesInDirectory('public');
  await convertImagesInDirectory('src/assets');
  console.log('Conversion complete!');
}

run();
