import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 開発時はルートパス、本番時はGitHub Pages用のパス
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
