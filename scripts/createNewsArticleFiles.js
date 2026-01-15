import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Template for news article page with content
const newsArticleTemplate = (newsItem) => `---
import NewsDetail from "../../components/templates/NewsDetail.astro";

const date = "${newsItem.date}";
const title = "${newsItem.title.replace(/"/g, '\\"')}";
const image = "${newsItem.heroImage}";
---

<NewsDetail date={date} title={title} image={image}>
  <section>
    <p>
      Đây là nội dung bài viết <strong>${newsItem.title}</strong> được tổ chức bởi Công ty Bình Phát. 
      Đây là một sự kiện ý nghĩa và được toàn thể CBNV tham gia tích cực.
    </p>
  </section>

  <figure>
    <img
      src="${newsItem.heroImage}"
      alt="${newsItem.title}"
      class="w-full h-auto rounded-lg shadow-md"
    />
    <figcaption>
      Hình ảnh từ sự kiện ${newsItem.title}
    </figcaption>
  </figure>

  <section>
    <h2>Chi tiết sự kiện</h2>
    <p>
      Sự kiện diễn ra vào ngày ${formatDate(newsItem.date)} tại Công ty Bình Phát với sự tham gia của toàn thể cán bộ nhân viên. 
      Đây là một dịp đặc biệt để gắn kết tập thể và tôn vinh những giá trị tốt đẹp trong văn hóa doanh nghiệp.
    </p>
    
    <p>
      Công ty Bình Phát luôn chú trọng đến việc xây dựng môi trường làm việc tích cực, 
      tạo điều kiện cho nhân viên phát triển và gắn bó lâu dài với doanh nghiệp.
    </p>
  </section>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
${newsItem.images.slice(1, 5).map(img => `    <figure>
      <img
        src="${img}"
        alt="${newsItem.title}"
        class="w-full h-auto rounded-lg shadow-md"
      />
    </figure>`).join('\n')}
  </div>

  <section>
    <h2>Ý nghĩa và tác động</h2>
    <p>
      Những hoạt động như thế này không chỉ tạo ra không khí vui tươi, gắn kết trong công ty 
      mà còn thể hiện sự quan tâm sâu sắc của ban lãnh đạo đối với đời sống tinh thần của nhân viên.
    </p>
    
    <p>
      Công ty Bình Phát tin rằng, một môi trường làm việc tích cực và văn hóa doanh nghiệp mạnh mẽ 
      sẽ là nền tảng vững chắc cho sự phát triển bền vững trong tương lai.
    </p>
  </section>

${newsItem.images.length > 5 ? `  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
${newsItem.images.slice(5).map(img => `    <figure>
      <img
        src="${img}"
        alt="${newsItem.title}"
        class="w-full h-auto rounded-lg shadow-md"
      />
    </figure>`).join('\n')}
  </div>` : ''}
</NewsDetail>
`;

// Template for image-only news (no docx content)
const imageOnlyTemplate = (newsItem) => `---
import NewsDetail from "../../components/templates/NewsDetail.astro";

const date = "${newsItem.date}";
const title = "${newsItem.title.replace(/"/g, '\\"')}";
const image = "${newsItem.heroImage}";
---

<NewsDetail date={date} title={title} image={image}>
  <section>
    <p>
      Hình ảnh từ hoạt động <strong>${newsItem.title}</strong> tại Công ty Bình Phát vào ngày ${formatDate(newsItem.date)}.
    </p>
  </section>

  <figure>
    <img
      src="${newsItem.heroImage}"
      alt="${newsItem.title}"
      class="w-full h-auto rounded-lg shadow-md"
    />
    <figcaption>
      ${newsItem.title}
    </figcaption>
  </figure>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
${newsItem.images.slice(1).map(img => `    <figure>
      <img
        src="${img}"
        alt="${newsItem.title}"
        class="w-full h-auto rounded-lg shadow-md"
      />
    </figure>`).join('\n')}
  </div>

  <section>
    <p class="text-center text-gray-600 italic">
      Cảm ơn tất cả các thành viên đã tham gia và đóng góp vào thành công của hoạt động này.
    </p>
  </section>
</NewsDetail>
`;

// Helper function to format date in Vietnamese
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Function to create news article files
function createNewsArticleFiles() {
  const newsDataPath = path.join(__dirname, '../src/data/newsItems.json');
  const outputDir = path.join(__dirname, '../src/pages/tin-tuc');

  try {
    const newsData = JSON.parse(fs.readFileSync(newsDataPath, 'utf8'));
    let createdCount = 0;

    newsData.forEach(newsItem => {
      const fileName = `${newsItem.slug}.astro`;
      const filePath = path.join(outputDir, fileName);
      
      // Skip if file already exists to avoid overwriting existing news
      if (fs.existsSync(filePath)) {
        console.log(`⏭️ Skipped: ${fileName} (already exists)`);
        return;
      }

      // Choose template based on whether news item has docx file or not
      const content = newsItem.hasDocx ? newsArticleTemplate(newsItem) : imageOnlyTemplate(newsItem);
      
      try {
        fs.writeFileSync(filePath, content);
        console.log(`✓ Created: ${fileName}`);
        createdCount++;
      } catch (error) {
        console.error(`✗ Failed to create ${fileName}:`, error.message);
      }
    });

    console.log(`\n🎉 Successfully created ${createdCount} news article files!`);
    console.log(`📁 Files created in: ${outputDir}`);

  } catch (error) {
    console.error('Error creating news article files:', error);
  }
}

// Run the script
createNewsArticleFiles();

export { createNewsArticleFiles };