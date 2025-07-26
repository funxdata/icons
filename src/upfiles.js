// import Upyun from 'upyun'
import fs from 'node:fs/promises'; // 推荐使用 promises API
import path from 'node:path';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
const UpyunCfgJson = {
  AccessKey: process.env.AccessKey,
  SecretAccessKey: process.env.SecretAccessKey,
  bucketname: process.env.UPX_SERVICENAME,
};
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


export const readDirFiles = async (dirPath) => {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true })
    return entries
      .filter(entry => entry.isFile())
      .map(entry => path.join(dirPath, entry.name))
  } catch (err) {
    console.error('❌ 读取失败:', err)
    return []
  }
}

