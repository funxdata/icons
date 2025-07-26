import { UpfileToUpYun,readDirFiles } from "./upfiles.js";

// 示例用法
const dir_files = await readDirFiles('./public')
for (let index = 0; index < dir_files.length; index++) {
    const element = dir_files[index];
    let res = await UpfileToUpYun("uifonts",element)
    // console.log(res)
}
