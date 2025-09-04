import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Modern-Real-Estate-Portfolio-Website/', // 👈 repo name with leading/trailing slash
});
