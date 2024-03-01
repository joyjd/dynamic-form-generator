/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import commonjs from "vite-plugin-commonjs";
import vitePluginRequire from "vite-plugin-require";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    (vitePluginRequire as any).default(),
    commonjs({
      filter(id) {
        if (id.includes("node_modules/redux-storage/build-es")) {
          return true;
        }
      },
    }),
  ],
  build: {
    outDir: "build",
    manifest: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
