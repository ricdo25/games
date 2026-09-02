import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: reemplazá esto por el nombre EXACTO de tu repositorio en GitHub.
  // Ej: si tu repo se llama "mi-galeria-juegos", queda base: '/mi-galeria-juegos/'
  base: '/NOMBRE-DE-TU-REPO/',
})
