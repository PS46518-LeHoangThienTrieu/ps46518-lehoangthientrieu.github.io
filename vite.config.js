import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './',           // ✅ QUAN TRỌNG
  build: {
    outDir: '.',     // hoặc 'dist' – chọn 1
    emptyOutDir: true
  }
})