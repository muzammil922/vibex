import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode: _mode }) => {
  // Auto-detect repo name in GitHub Actions to set correct base for Pages
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
  const base = repo ? `/${repo}/` : '/'

  return {
    plugins: [react()],
    base,
  }
})
