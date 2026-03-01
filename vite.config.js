import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'docs',   // 👈 build thẳng vào docs
    emptyOutDir: true
  },
  base: './'          // 👈 BẮT BUỘC cho GitHub Pages
})