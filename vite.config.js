import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || "";

          if (/\.(png|jpe?g|webp|avif|svg)$/i.test(name)) {
            return "assets/[name][extname]";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
})
