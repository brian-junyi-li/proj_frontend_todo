import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // expose BACKEND_* env variables (e.g. BACKEND_URL) to client code
  envPrefix: ['VITE_', 'BACKEND_'],
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
