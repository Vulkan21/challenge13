#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Настройка marked
marked.setOptions({
  breaks: true,
  gfm: true
});

// Пути
const contentDir = './src/content';
const templateDir = './src/templates';
const outputDir = './dist';

// Читаем шаблон
const template = fs.readFileSync(path.join(templateDir, 'page.html'), 'utf8');

// Создаем выходную директорию
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Обрабатываем все Markdown файлы
fs.readdirSync(contentDir).forEach(file => {
  if (path.extname(file) === '.md') {
    const mdContent = fs.readFileSync(path.join(contentDir, file), 'utf8');

    // Извлекаем заголовок первого уровня для title
    const titleMatch = mdContent.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1] : 'Site222';

    // Конвертируем Markdown в HTML
    const htmlContent = marked(mdContent);

    // Заменяем плейсхолдеры в шаблоне
    const finalHtml = template
      .replace('{{TITLE}}', title)
      .replace('{{CONTENT}}', htmlContent);

    // Определяем имя выходного файла
    const outputFileName = path.basename(file, '.md') === 'home'
      ? 'index.html'
      : path.basename(file, '.md') + '.html';

    // Записываем файл
    fs.writeFileSync(path.join(outputDir, outputFileName), finalHtml);

    console.log(`✅ ${file} → ${outputFileName}`);
  }
});

console.log('🎉 Markdown → HTML конвертация завершена!');