import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // warn if a chunk exceeds this size (bytes)
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'vendor_react';
            if (id.includes('framer-motion') || id.includes('gsap')) return 'vendor_motion';
            if (id.includes('recharts')) return 'vendor_chart';
            if (id.includes('lucide-react')) return 'vendor_icons';
            if (id.includes('@radix-ui')) return 'vendor_radix';
            return 'vendor';
          }
        }
      }
    }
  }
}));
