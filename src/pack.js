import { generateFonts, FontAssetType, OtherAssetType } from 'fantasticon';

generateFonts({
  inputDir: './icons',         // 你的 SVG 图标目录
  outputDir: './public',       // 生成的字体和资源文件输出目录
  name: 'ic',         // 字体名
  fontTypes: [
    FontAssetType.EOT,
    FontAssetType.WOFF2,
    FontAssetType.WOFF,
    FontAssetType.TTF,
    FontAssetType.SVG
  ],
  assetTypes: [
    OtherAssetType.CSS,
    OtherAssetType.HTML,
    OtherAssetType.JSON
  ],
  prefix: 'icon',            // CSS class 前缀
  fontHeight: 1000,
  normalize: true,
  descent: 200
}).then(result => {
  console.log('✅ 字体生成成功');
}).catch(err => {
  console.error('❌ 字体生成失败:', err);
});