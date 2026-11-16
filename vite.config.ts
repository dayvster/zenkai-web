import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { nitroV2Plugin as nitro } from "@solidjs/vite-plugin-nitro-2";

import { solidStart } from "@solidjs/start/config";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  plugins: [
    tailwindcss(),
    {
      ...mdx({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx"
      }),
      enforce: "pre"
    },
    solidStart({
      extensions: ["mdx", "md"]
    }),
    nitro({
      preset: "static",
      prerender: {
        crawlLinks: true,
        // Crawling starts at the home page. Netlify serves 404.html, with a 404 status, for
        // any URL that has no page.
        routes: ["/", "/404.html"]
      }
    })
  ]
});
