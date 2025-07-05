import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // 開発時はルートパス、本番時はGitHub Pages用のパス
  base: command === 'build' ? '/about-me/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
}))
