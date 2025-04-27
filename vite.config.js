import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // serve from “/” in dev, but from “/<repo>/” in production builds
  base: command === 'serve' 
    ? '/' 
    : '/tdweb/',     // ← your repo name, with leading+trailing slash
  plugins: [react()],
}))