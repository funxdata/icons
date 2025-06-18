import { UpfileToUpYun,readDirFiles } from "./upfiles.js";

// 示例用法
const dir_files = await readDirFiles('./public')
for (let index = 0; index < dir_files.length; index++) {
    const element = dir_files[index];
    let res = await UpfileToUpYun("iconfonts",element)
    // console.log(res)
}
const fonst_files = await readDirFiles('./public/fonts')
for (let index = 0; index < fonst_files.length; index++) {
    const element = fonst_files[index];
    let res = await UpfileToUpYun("iconfonts/fonts",element)
    // console.log(res)
}