import { defineConfig } from "vite";
import * as path from 'path'
import vue from "@vitejs/plugin-vue";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
const pathSrc = path.resolve(__dirname, "src");
 
export default defineConfig({
  base: "/atools/",

  plugins: [
    vue({ reactivityTransform: true }),

    AutoImport({
      imports:['vue','vue-router','vue/macros','pinia','@vueuse/core',],
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"),
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, "types", "components.d.ts"),
    }),
  ],
  server: {
    port: 7200,
  },
});
