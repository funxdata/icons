import fs from 'node:fs/promises';
import path from 'node:path';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const UpyunCfgJson = {
  AccessKey: process.env.AccessKey,
  SecretAccessKey: process.env.SecretAccessKey,
  bucketname: process.env.UPX_SERVICENAME,
};

const s3 = new S3Client({
  endpoint: "https://s3.api.upyun.com",
  region: "us-east-1",
  credentials: {
    accessKeyId: UpyunCfgJson.AccessKey,
    secretAccessKey: UpyunCfgJson.SecretAccessKey,
  },
  forcePathStyle: true,
});

// 简单映射扩展名到 MIME 类型（可按需扩展）
const mimeTypes = {
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.html': 'text/html',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf',
  '.txt': 'text/plain',
};

export const UpfileToUpYun = async (remoteDir, local_file) => {
  try {
    const fileContent = await fs.readFile(local_file);
    const fileName = path.basename(local_file);
    const ext = path.extname(fileName).toLowerCase();

    const remoteKey = path.posix.join(remoteDir, fileName);

    // 根据扩展名设置 ContentType，默认 application/octet-stream
    const ContentType = mimeTypes[ext] || 'application/octet-stream';

    const command = new PutObjectCommand({
      Bucket: UpyunCfgJson.bucketname,
      Key: remoteKey,
      Body: fileContent,
      ContentType,
    });

    await s3.send(command);
    console.log(`上传成功: ${remoteKey} (Content-Type: ${ContentType})`);
  } catch (err) {
    console.error("上传失败", err);
  }
};

export const readDirFiles = async (dirPath) => {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    return entries
      .filter(entry => entry.isFile())
      .map(entry => path.join(dirPath, entry.name));
  } catch (err) {
    console.error('❌ 读取失败:', err);
    return [];
  }
};
