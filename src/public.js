import path from 'path'
import { fileURLToPath } from 'url'
import { UpfileToUpYun,readDirFiles } from "./upfiles.js";
// 获取 __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname)

// 示例用法
const publicDir = path.resolve(__dirname, '../public')
console.log(publicDir)
const dir_files = await readDirFiles(publicDir)
console.log(dir_files)
for (let index = 0; index < dir_files.length; index++) {
    const element = dir_files[index];
    let res = await UpfileToUpYun("uiicons",element)
    // console.log(res)
}
