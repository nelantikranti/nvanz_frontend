import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import prerender from "@prerenderer/rollup-plugin"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),

     prerender({
      routes: [
        "/",
        "/contact-us",
       "/about-us",
       "/contact-us"
      ],
      renderer: "@prerenderer/renderer-puppeteer",
      rendererOptions: {
        renderAfterTime: 2000, // wait for React and Helmet to finish
      },
    }),
    
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
