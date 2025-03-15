import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  css: {
    devSourcemap: true,
  },
  plugins: [vue()],
  preview: {
		port: 3000,
		strictPort: true,
		host: '0.0.0.0',
		allowedHosts: true,
	},
	server: {
		allowedHosts: true
	},
});
