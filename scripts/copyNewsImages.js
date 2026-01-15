import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to create slug from folder name (same as in processNewsData.js)
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

// Function to get supported image files from directory
function getImageFiles(dirPath) {
  try {
    const files = fs.readdirSync(dirPath);
    return files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp', '.heic'].includes(ext);
    });
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error.message);
    return [];
  }
}

// Function to get docx file from directory to extract title
function getDocxFile(dirPath) {
  try {
    const files = fs.readdirSync(dirPath);
    return files.find(file => path.extname(file).toLowerCase() === '.docx');
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error.message);
    return null;
  }
}

// Function to copy and organize images
function copyNewsImages() {
  const sourceDir = path.join(__dirname, '../src/pages/tin-tuc/data');
  const targetDir = path.join(__dirname, '../public/images/news');

  // Ensure target directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  try {
    const folders = fs.readdirSync(sourceDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    let totalImagesCopied = 0;

    folders.forEach((folderName) => {
      const sourceFolderPath = path.join(sourceDir, folderName);
      
      // Get docx file to extract title
      const docxFile = getDocxFile(sourceFolderPath);
      let title;
      
      if (!docxFile) {
        console.warn(`No docx file found in ${folderName}, using folder name as title...`);
        // Extract title from folder name
        title = folderName
          .replace(/^\d+\./, '') // Remove leading numbers like "1.", "2.", etc.
          .replace(/^\d+/, '') // Remove standalone numbers
          .trim();
      } else {
        // Extract title and create slug
        title = path.basename(docxFile, '.docx')
          .replace(/^\d+\./, '') // Remove leading numbers like "1."
          .trim();
      }
      
      const slug = createSlug(title);
      
      // Create target directory for this news item
      const targetFolderPath = path.join(targetDir, slug);
      if (!fs.existsSync(targetFolderPath)) {
        fs.mkdirSync(targetFolderPath, { recursive: true });
      }

      // Get and copy images
      const images = getImageFiles(sourceFolderPath);
      let imagesCopied = 0;

      images.forEach((imageName, index) => {
        const sourcePath = path.join(sourceFolderPath, imageName);
        
        // Create new filename with proper extension and sequential number
        const ext = path.extname(imageName).toLowerCase();
        const newFileName = `${String(index + 1).padStart(2, '0')}${ext}`;
        const targetPath = path.join(targetFolderPath, newFileName);

        try {
          fs.copyFileSync(sourcePath, targetPath);
          imagesCopied++;
          console.log(`Copied: ${imageName} -> ${slug}/${newFileName}`);
        } catch (error) {
          console.error(`Error copying ${imageName}:`, error.message);
        }
      });

      totalImagesCopied += imagesCopied;
      console.log(`✓ Processed folder: ${folderName} (${imagesCopied} images)`);
    });

    console.log(`\n🎉 Successfully copied ${totalImagesCopied} images!`);
    console.log(`Images organized in: ${targetDir}`);

  } catch (error) {
    console.error('Error processing images:', error);
  }
}

// Run the script
copyNewsImages();

export { copyNewsImages };