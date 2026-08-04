const fs = require('fs');
const path = require('path');

let output = '# Portfolio Content\n\n';

function walk(dir) {
  if (dir.includes('node_modules') || dir.includes('dist') || dir.includes('.git') || dir.includes('.vercel')) return;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walk(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      const content = fs.readFileSync(filePath, 'utf-8');
      output += `## ${path.relative(__dirname, filePath)}\n\n\`\`\`tsx\n${content}\n\`\`\`\n\n`;
    }
  }
}

walk(__dirname);

fs.writeFileSync(path.join(__dirname, 'all_portfolio_content.md'), output);
console.log('Successfully created all_portfolio_content.md');
