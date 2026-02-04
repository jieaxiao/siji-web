const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(__dirname, '../src/content/posts');

// Ensure directory exists
if (!fs.existsSync(postsDirectory)) {
  console.error(`Directory not found: ${postsDirectory}`);
  process.exit(1);
}

const fileNames = fs.readdirSync(postsDirectory);
let updatedCount = 0;

fileNames.forEach((fileName) => {
  if (!fileName.endsWith('.md')) return;

  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  
  // Add slug if missing or incorrect (matching filename without extension)
  const slug = fileName.replace(/\.md$/, '');
  
  // Check if update is needed
  if (!matterResult.data.slug || matterResult.data.slug !== slug) {
    matterResult.data.slug = slug;
    
    // Stringify content back to markdown with frontmatter
    const updatedContent = matter.stringify(matterResult.content, matterResult.data);
    fs.writeFileSync(fullPath, updatedContent);
    console.log(`Updated slug for: ${fileName} -> ${slug}`);
    updatedCount++;
  }
});

console.log(`\nProcess completed. Updated ${updatedCount} files.`);
