import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default ({ mode }) => {
  // Carga las variables de entorno según el modo
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };


  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_BACKEND_URL, // URL del backend
          changeOrigin: true, // Cambia el origen de la solicitud a la URL del backend
          secure: false // Si el backend usa HTTPS, ponlo en true
        }
      }
    }
  });
};