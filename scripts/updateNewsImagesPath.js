import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to update news items with correct image paths
function updateNewsImagesPath() {
  const newsDataPath = path.join(__dirname, '../src/data/newsItems.json');
  
  try {
    const newsData = JSON.parse(fs.readFileSync(newsDataPath, 'utf8'));
    
    // Update each news item
    const updatedNewsItems = newsData.map(item => {
      // Update heroImage path
      const heroImage = `/images/news/${item.slug}/01.jpg`;
      
      // Update images array to use sequential naming
      const images = [];
      const imagesDir = path.join(__dirname, `../public/images/news/${item.slug}`);
      
      if (fs.existsSync(imagesDir)) {
        const files = fs.readdirSync(imagesDir)
          .filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.jpg', '.jpeg', '.png', '.webp', '.heic'].includes(ext);
          })
          .sort(); // Sort to maintain order
        
        files.forEach(file => {
          images.push(`/images/news/${item.slug}/${file}`);
        });
      }

      return {
        ...item,
        heroImage,
        images
      };
    });

    // Write updated data back to file
    fs.writeFileSync(newsDataPath, JSON.stringify(updatedNewsItems, null, 2));
    
    console.log('✓ Updated news items with correct image paths');
    console.log(`✓ Total news items: ${updatedNewsItems.length}`);
    
    return updatedNewsItems;
    
  } catch (error) {
    console.error('Error updating news image paths:', error);
    return [];
  }
}

// Run the script
updateNewsImagesPath();

export { updateNewsImagesPath };