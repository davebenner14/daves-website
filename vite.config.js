import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist" // ensures consistent output location
  },
  server: {
    historyApiFallback: true // enables fallback routing in dev mode
  }
});
