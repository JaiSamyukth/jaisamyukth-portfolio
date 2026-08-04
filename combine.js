const fs = require('fs');
const path = require('path');

const directories = ['pages', 'data', 'components'];
let output = '# Portfolio Content\n\n';

directories.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.ts') || file.endsWith('.tsx'));
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      output += `## ${dir}/${file}\n\n\`\`\`tsx\n${content}\n\`\`\`\n\n`;
    });
  }
});

fs.writeFileSync(path.join(__dirname, 'all_portfolio_content.md'), output);
console.log('Successfully created all_portfolio_content.md');
