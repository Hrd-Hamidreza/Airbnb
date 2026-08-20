//! ---------------------------------------- Import
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
//! ---------------------------------------- Variables
const __dirname = path.dirname(fileURLToPath(import.meta.url));
//! ---------------------------------------- Export
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
