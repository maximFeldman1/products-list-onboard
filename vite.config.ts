import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
  },
  server: {
    port: 3000,
  },
});
