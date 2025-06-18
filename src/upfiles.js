// import Upyun from 'upyun'
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from 'fs/promises';
import path from 'path';
const fileData = await fs.readFile('./upconfig.json', 'utf-8');
const UpyunCfgJson = JSON.parse(fileData);
const s3 = new S3Client({
  endpoint: "https://s3.api.upyun.com", // 又拍云提供的 S3 Endpoint
  region: "us-east-1",                         // 固定即可（又拍云不依赖 region）
  credentials: {
    accessKeyId: UpyunCfgJson.AccessKey,
    secretAccessKey: UpyunCfgJson.SecretAccessKey,
  },
  forcePathStyle: true, // 必须设为 true
});

export const UpfileToUpYun=async (remoteDir,local_file)=>{
    // ✅ 读取本地文件内容
    const fileContent = await fs.readFile(local_file);
    // ✅ 获取文件名
    const fileName = path.basename(local_file);

    // ✅ 构建 remoteKey，例如 uploads/myfile.txt
    const remoteKey = path.posix.join(remoteDir, fileName); // 使用 posix 以确保是 "/" 分隔
    const command = new PutObjectCommand({
        Bucket: UpyunCfgJson.bucketname,
        Key: remoteKey,
        Body: fileContent,
        ContentType: 'application/octet-stream', // 可根据需要设置为 image/png, text/plain 等
      
    });
    s3.send(command)
        .then((res) => console.log("上传成功"))
        .catch((err) => console.error("上传失败", err));
}


export const readDirFiles=async (dirPath)=>{
    try {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });
  
      const files = entries
        .filter(entry => entry.isFile())               // 仅保留文件
        .map(entry => path.join(dirPath, entry.name)); // 拼接完整路径
  
      return files;
    } catch (err) {
    //   console.error('❌ 读取目录失败:', err);
      return [];
    }
  }

