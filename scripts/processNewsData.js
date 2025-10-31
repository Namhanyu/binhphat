import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to create slug from folder name
function createSlug(folderName) {
  return folderName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Function to extract date from folder name or content
function extractDate(folderName, docxFileName) {
  // Try to extract date from folder name first
  const datePatterns = [
    /(\d{1,2})-(\d{1,2})/g, // 20-10, 13-10, etc.
    /(\d{1,2})\/(\d{1,2})/g, // 20/10, 13/10, etc.
    /8-3/g, // Special case for 8-3
  ];

  let extractedDate = new Date();
  
  // Set default year to 2024 or 2025 based on content
  if (folderName.includes('2024')) {
    extractedDate.setFullYear(2024);
  } else {
    extractedDate.setFullYear(2025);
  }

  // Extract month and day
  if (folderName.includes('20-10')) {
    extractedDate.setMonth(9, 20); // October 20
  } else if (folderName.includes('13-10')) {
    extractedDate.setMonth(9, 13); // October 13
  } else if (folderName.includes('10-10')) {
    extractedDate.setMonth(9, 10); // October 10
  } else if (folderName.includes('8-3')) {
    extractedDate.setMonth(2, 8); // March 8
  } else {
    // Generate random date for others
    const randomDay = Math.floor(Math.random() * 28) + 1;
    const randomMonth = Math.floor(Math.random() * 12);
    extractedDate.setMonth(randomMonth, randomDay);
  }

  return extractedDate;
}

// Function to get all image files from directory
function getImageFiles(dirPath) {
  const files = fs.readdirSync(dirPath);
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp', '.heic'].includes(ext);
  });
}

// Function to get docx file from directory
function getDocxFile(dirPath) {
  const files = fs.readdirSync(dirPath);
  return files.find(file => path.extname(file).toLowerCase() === '.docx');
}

// Function to extract title from folder name
function extractTitleFromFolderName(folderName) {
  return folderName
    .replace(/^\d+\./, '') // Remove leading numbers like "1.", "2.", etc.
    .replace(/^\d+/, '') // Remove standalone numbers
    .trim();
}

// Main processing function
function processNewsData() {
  const dataDir = path.join(__dirname, '../src/pages/tin-tuc/data');
  const newsItems = [];

  try {
    const folders = fs.readdirSync(dataDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    folders.forEach((folderName, index) => {
      const folderPath = path.join(dataDir, folderName);
      
      // Get docx file (title source)
      const docxFile = getDocxFile(folderPath);
      let title;
      let hasDocx = true;
      
      if (!docxFile) {
        console.warn(`No docx file found in ${folderName}, using folder name as title`);
        title = extractTitleFromFolderName(folderName);
        hasDocx = false;
      } else {
        // Extract title from docx filename
        title = path.basename(docxFile, '.docx')
          .replace(/^\d+\./, '') // Remove leading numbers like "1."
          .trim();
      }

      // Create slug
      const slug = createSlug(title);

      // Extract date
      const date = extractDate(folderName, docxFile);

      // Get images
      const images = getImageFiles(folderPath);

      // Skip if no images found
      if (images.length === 0) {
        console.warn(`No images found in ${folderName}, skipping...`);
        return;
      }

      // Create news item
      const newsItem = {
        id: index + 1,
        title: title,
        slug: slug,
        date: date.toISOString().split('T')[0], // YYYY-MM-DD format
        folderName: folderName,
        docxFile: docxFile || null,
        hasDocx: hasDocx,
        images: images,
        heroImage: images[0] || '', // Use first image as hero
      };

      newsItems.push(newsItem);
    });

    // Sort by date (newest first)
    newsItems.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Write to JSON file
    const outputPath = path.join(__dirname, '../src/data/newsItems.json');
    fs.writeFileSync(outputPath, JSON.stringify(newsItems, null, 2));

    console.log(`Processed ${newsItems.length} news items`);
    console.log('News data written to:', outputPath);
    
    return newsItems;

  } catch (error) {
    console.error('Error processing news data:', error);
    return [];
  }
}

// Run the script
processNewsData();

export { processNewsData };