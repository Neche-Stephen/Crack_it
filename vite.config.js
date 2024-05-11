import dotenv from 'dotenv';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// run package config
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define process env
  // define: {
  //   'process.env': process.env
  // },
  define: {

    'process.env.VITE_APP_FLUTTER_API_KEY':JSON.stringify(process.env.VITE_APP_FLUTTER_API_KEY),
    'process.env.VITE_APP_API_URL':JSON.stringify(process.env.VITE_APP_API_URL)
    
    },
    server : {
      port: 3000
    }
})
