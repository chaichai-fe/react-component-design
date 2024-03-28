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
      include: 'src/core', // 需要编译的文件
      exclude: ['src/core/**/__test__', 'src/core/**/style.ts'], // 排除编译的文件
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/core/index.ts'),
      name: 'SFElement',
      fileName: 'sf-element',
      formats: ['es', 'cjs', 'iife'],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
    },
  },
})
