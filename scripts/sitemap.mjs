// Writes sitemap.xml from the pages the build prerendered, so it always lists exactly the
// pages that exist. Run after `vite build`.
import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const site = "https://zenkai-launcher.netlify.app";
const out = ".output/public";

// Every page is a folder with an index.html; Netlify serves it with a trailing slash.
const urls = readdirSync(out, { recursive: true })
  .filter((file) => file === "index.html" || file.endsWith("/index.html"))
  .map((file) => `${site}/${file.slice(0, -"index.html".length)}`)
  .sort();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;
writeFileSync(join(out, "sitemap.xml"), xml);
console.log(`sitemap.xml: ${urls.length} pages`);
