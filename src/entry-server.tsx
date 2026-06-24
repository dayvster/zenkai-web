// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content="Zenkai" />
          <meta property="og:description" content="Fast & Performant App Launcher built with Zig. Scans .desktop files and filters through them with instant fuzzy matching." />
          <meta property="og:image" content="/og-image.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zenkai" />
          <meta name="twitter:description" content="Fast & Performant App Launcher built with Zig" />
          <meta name="twitter:image" content="/og-image.png" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
