import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Comenta o elimina la configuración del proxy si existe
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5000',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
});
