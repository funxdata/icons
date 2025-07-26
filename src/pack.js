import { createRequire } from 'module';
import fs from 'fs/promises';
import path from 'path';
const require = createRequire(import.meta.url);
const webfont = require('webfont').default;

const FONT_DIR = './public';
const OUTPUT_DIR = './public';

const config = {
  files: './icons/*.svg', // SVG 图标路径
  fontName: 'ic',
  formats: ['ttf', 'woff', 'woff2'],
  template: 'css', // 可选: 'css', 'html', 'json'
  dest: OUTPUT_DIR
};

const generate = async () => {
  try {
    // 调用 webfont 打包字体
    const result = await webfont(config);

    // 确保输出目录存在
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    await fs.mkdir(FONT_DIR, { recursive: true });

    // 写入字体文件
    const fontFiles = {
      [`${config.fontName}.ttf`]: result.ttf,
      [`${config.fontName}.woff`]: result.woff,
      [`${config.fontName}.woff2`]: result.woff2,
    };

    for (const [fileName, buffer] of Object.entries(fontFiles)) {
      if (buffer) {
        const filePath = path.join(FONT_DIR, fileName);
        await fs.writeFile(filePath, buffer);
        console.log(`✔ Generated font: ${fileName}`);
      }
    }

    // 写入 CSS 模板（可选）
    if (result.template) {
      const cssPath = path.join(OUTPUT_DIR, `${config.fontName}.css`);
      await fs.writeFile(cssPath, result.template);
      console.log(`✔ Generated CSS: ${config.fontName}.css`);
    }

  } catch (err) {
    console.error('❌ Font generation failed:', err);
  }
};

await generate();