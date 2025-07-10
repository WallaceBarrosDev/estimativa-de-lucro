import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/estimativa-de-lucro/', // 👈 isso aqui é ESSENCIAL
  plugins: [vue()]
})
