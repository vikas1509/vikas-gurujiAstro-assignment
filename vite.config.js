import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@mui/material',
      '@mui/icons-material', // If you're using Material-UI icons
      '@emotion/react',
      '@emotion/styled',
    ],
  },
});
