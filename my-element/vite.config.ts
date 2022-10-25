import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuejsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path'; //vite 3 不支持commonjs

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuejsx()],
  server: {
    port: 8080,
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
