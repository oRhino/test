## vite 配置别名@

- vite.config.ts

```
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path"; //vite 3 不支持commonjs
// const path = require('path') //vite 2

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
  },
  resolve: {
    // 配置路径别名
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
```

- tsconfig.json

```
//添加
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
```
