/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: ['dist/types'], // 输出目录
      include: 'src/package', // 需要编译的文件
      exclude: ['src/package/**/__test__', 'src/package/**/style.ts'], // 排除编译的文件
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/package/index.ts'),
      name: 'AntDMiniUI',
      fileName: 'antd-mini-ui',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
        },
      },
    },
  },
})
