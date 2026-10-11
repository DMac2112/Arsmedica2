// GitHub Pages build: prerenders every route to static HTML under /Arsmedica2/.
// The normal `vite.config.ts` (SSR / Cloudflare Worker) is untouched; this file
// is only used by `npm run build:pages` and the Pages workflow.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  vite: { base: "/Arsmedica2/" },
  tanstackStart: {
    server: { entry: "server" },
    router: { basepath: "/Arsmedica2" },
    prerender: { enabled: true, crawlLinks: true, failOnError: true },
  },
});
