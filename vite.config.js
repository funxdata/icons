/*
 * @Author: dowell87
 * @Date: 2021-08-27 23:50:14
 * @Descripttion: 
 * @LastEditTime: 2021-11-03 17:53:59
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir:'lib/',
    lib:{
      entry: 'packages/install.js',
      name: 'vangofont',
      fileName: (format) => `vangofont.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
