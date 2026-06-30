const fs = require('fs');
const path = require('path');

const template = (title, htmlContent) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Advizmo Design Language</title>
  <style>
    :root {
      --text-primary: #111827;
      --text-secondary: #4B5563;
      --text-tertiary: #6B7280;
      --text-disabled: #9CA3AF;
      --bg-page: #F9FAFB;
      --bg-surface: #FFFFFF;
      --bg-subtle: #F3F4F6;
      --border: #E5E7EB;
      --blue-500: #3B82F6;
      --blue-600: #2563EB;
      --blue-700: #1D4ED8;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: var(--bg-page);
      color: var(--text-primary);
      line-height: 1.6;
    }
    .header {
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border);
      padding: 16px 24px;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .header-inner {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .header h1 { font-size: 18px; font-weight: 600; }
    .header a { color: var(--blue-600); text-decoration: none; font-size: 14px; }
    .header a:hover { text-decoration: underline; }
    .content {
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 24px;
      background: var(--bg-surface);
      min-height: calc(100vh - 60px);
    }
    h1 { font-size: 32px; font-weight: 700; margin: 32px 0 16px; color: var(--text-primary); }
    h1:first-child { margin-top: 0; }
    h2 { font-size: 24px; font-weight: 600; margin: 32px 0 16px; padding-bottom: 8px; border-bottom: 2px solid var(--bg-subtle); color: var(--text-primary); }
    h3 { font-size: 20px; font-weight: 600; margin: 24px 0 12px; color: var(--text-primary); }
    h4 { font-size: 16px; font-weight: 600; margin: 16px 0 8px; color: var(--text-primary); }
    p { margin-bottom: 12px; color: var(--text-secondary); }
    ul, ol { margin-left: 24px; margin-bottom: 16px; }
    li { margin-bottom: 8px; color: var(--text-secondary); }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid var(--border); }
    th { background: var(--bg-subtle); font-weight: 600; font-size: 14px; color: var(--text-primary); }
    td { font-size: 14px; color: var(--text-secondary); }
    code { background: var(--bg-subtle); padding: 2px 6px; border-radius: 4px; font-family: 'SF Mono', Monaco, monospace; font-size: 13px; color: var(--blue-600); }
    pre { background: var(--bg-subtle); padding: 16px; border-radius: 8px; overflow-x: auto; margin: 16px 0; }
    pre code { background: none; padding: 0; color: var(--text-primary); }
    blockquote { border-left: 4px solid var(--blue-600); padding: 12px 16px; margin: 16px 0; background: var(--bg-subtle); }
    hr { border: none; border-top: 2px solid var(--bg-subtle); margin: 32px 0; }
    strong { font-weight: 600; color: var(--text-primary); }
    em { color: var(--text-tertiary); }
    a { color: var(--blue-600); }
    input[type="checkbox"] { margin-right: 8px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="header-inner">
      <h1>${title}</h1>
      <a href="index.html">← Back to Home</a>
    </div>
  </div>
  <div class="content">
    ${htmlContent}
  </div>
</body>
</html>`;

// Simple markdown to HTML converter
function mdToHtml(md) {
  let html = md;

  // Remove TOC links (markdown links in TOC)
  // html = html.replace(/\[([^\]]+)\]\(#[^\)]+\)/g, '$1');

  // Code blocks
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (m, lang, code) => {
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<pre><code class="language-${lang}">${escaped}</code></pre>`;
  });

  // Tables
  html = html.replace(/^(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)*)/gm, (m, header, sep, body) => {
    const headers = header.split('|').filter(c => c.trim()).map(c => `<th>${c.trim()}</th>`).join('');
    const rows = body.trim().split('\n').map(row => {
      const cells = row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    return `<table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>`;
  });

  // Headers
  html = html.replace(/^######\s+(.+)$/gm, '<h6>$1</h6>');
  html = html.replace(/^#####\s+(.+)$/gm, '<h5>$1</h5>');
  html = html.replace(/^####\s+(.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^###\s+(.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^#\s+(.+)$/gm, '<h1>$1</h1>');

  // Horizontal rules
  html = html.replace(/^---+$/gm, '<hr>');

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Checkboxes
  html = html.replace(/^- \[ \]\s+(.+)$/gm, '<li><input type="checkbox" disabled> $1</li>');
  html = html.replace(/^- \[x\]\s+(.+)$/gm, '<li><input type="checkbox" checked disabled> $1</li>');

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`);

  // Ordered lists
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');

  // Paragraphs (lines that aren't already HTML)
  html = html.replace(/^(?!<[a-z])((?!^\s*$).+)$/gm, (m) => {
    if (m.trim() === '') return m;
    if (m.trim().startsWith('<')) return m;
    return `<p>${m}</p>`;
  });

  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');

  // Line breaks
  html = html.replace(/\n{2,}/g, '\n');

  return html;
}

// Process files
const dir = 'D:\\Advizmo\\Open Code building design system';

const fetchFiles = [
  { md: 'Advizmo-Component-Library-v1.md', title: 'Component Library' },
  { md: 'Advizmo-Financial-Components-v1.md', title: 'Financial Components' },
  { md: 'Advizmo-Product-Patterns-v1.md', title: 'Product Patterns' },
  { md: 'Advizmo-Design-Tokens-Architecture-v1.md', title: 'Token Architecture' },
  { md: 'Advizmo-Data-Visualization-System-v1.md', title: 'Charts & Data' },
  { md: 'Advizmo-Figma-Implementation-Guide-v1.md', title: 'Figma Guide' },
  { md: 'Advizmo-Forms-Data-Entry-System-v1.md', title: 'Forms & Data Entry' },
  { md: 'Advizmo-Navigation-Layout-System-v1.md', title: 'Navigation & Layout' },
  { md: 'Advizmo-Engineering-Implementation-Developer-Handoff-v1.md', title: 'Engineering Handoff' },
];

let count = 0;
for (const file of fetchFiles) {
  const mdPath = path.join(dir, file.md);
  const htmlPath = path.join(dir, file.md.replace('.md', '.html'));

  if (!fs.existsSync(mdPath)) {
    console.log(`SKIP: ${file.md} not found`);
    continue;
  }

  const md = fs.readFileSync(mdPath, 'utf-8');
  const htmlContent = mdToHtml(md);
  const fullHtml = template(file.title, htmlContent);

  fs.writeFileSync(htmlPath, fullHtml, 'utf-8');
  count++;
  console.log(`OK: ${file.md.replace('.md', '.html')} (${(fullHtml.length / 1024).toFixed(0)}KB)`);
}

console.log(`\nConverted ${count} files`);
