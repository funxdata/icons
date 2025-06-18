import { generateFonts } from 'fantasticon';
import fs from 'fs/promises';
import path from 'path';

const FONT_DIR = './public/fonts';
const OUTPUT_DIR ="./public";
const config = {
  name: 'funxdataicons',
  inputDir: './icons', // (required)
  outputDir: './public', // (required)
  fontTypes: ['ttf', 'woff', 'woff2'],
  assetTypes: ['ts', 'css', 'json', 'html'],
  fontsUrl: './fonts',
  formatOptions: {
      woff: {
        // Woff Extended Metadata Block - see https://www.w3.org/TR/WOFF/#Metadata
        metadata: '...'
      },
      json: {
        // render the JSON human readable with two spaces indentation (default is none, so minified)
        indent: 2
      },
      ts: {
        // select what kind of types you want to generate (default `['enum', 'constant', 'literalId', 'literalKey']`)
        types: ['constant', 'literalId'],
        // render the types with `'` instead of `"` (default is `"`)
        singleQuotes: true,
        // customise names used for the generated types and constants
        enumName: 'MyIconType',
        constantName: 'MY_CODEPOINTS'
        // literalIdName: 'IconId',
        // literalKeyName: 'IconKey'
    }
  },
  codepoints: {
    'chevron-left': 57344, // decimal representation of 0xe000
    'chevron-right': 57345,
    'thumbs-up': 57358,
    'thumbs-down': 57359
  },
  getIconId: ({ basename }) => {
    return basename.replace(/^\d+_/, '');
  }
};

const res =  await generateFonts(config);
console.log(res)

// ✅ 生成后手动移动字体文件到 fonts/
await fs.mkdir(FONT_DIR, { recursive: true });

const fontExts = ['.woff', '.woff2', '.ttf'];
const files = await fs.readdir(OUTPUT_DIR);
for (const file of files) {
  if (fontExts.includes(path.extname(file))) {
    const src = path.join(OUTPUT_DIR, file);
    const dest = path.join(FONT_DIR, file);

    await fs.rename(src, dest); // 移动（也会删除原文件）
    console.log(`✔ moved: ${file}`);
  }
}
