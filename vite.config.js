import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/',
    publicDir: 'public', // Ensures .nojekyll and other public files are copied to dist
})
