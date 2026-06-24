import { createComponent, ssr, ssrHydrationKey, escape, ssrAttribute } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { D as DocsLayout } from './DocsLayout-BQ--F7ga.mjs';
import { C as Card } from './Card-BCycr2Ac.mjs';
import './MainLayout-NKietwuP.mjs';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/dist/server.js';
import '../virtual/entry.mjs';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/h3@1.15.5/node_modules/h3/dist/index.mjs';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/storage/dist/storage.js';

var _tmpl$ = ["<div", ' class="px-4 sm:px-6 py-12 sm:py-20 max-w-6xl mx-auto"><div class="mb-12"><h1 class="text-4xl sm:text-5xl font-black text-white mb-4">Themes</h1><p class="text-fg text-lg">Zenkai ships with <span class="text-primary font-semibold"><!--$-->', '<!--/--> built-in themes</span>. Browse the gallery below, then launch with <code class="text-primary">zenkai --theme=&lt;name&gt;</code>.</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">', "</div></div>"], _tmpl$2 = ["<img", ' src="', '"', ' class="w-full aspect-[4/3] object-cover" loading="lazy">'], _tmpl$3 = ["<div", ' class="p-4 flex flex-col gap-2"><div class="flex items-center justify-between gap-2"><h3 class="font-bold text-white text-sm truncate">', '</h3><span class="text-xs text-muted shrink-0">', '</span></div><pre class="bg-base-400/50 rounded px-2 py-1.5 text-xs font-mono text-fg overflow-x-auto">zenkai --theme=<!--$-->', "<!--/--></pre></div>"];
const id$$ = "src/routes/docs/themes.tsx?pick=default&pick=$css";
const themes = [{
  name: "adwaita",
  desc: "Light GNOME"
}, {
  name: "adwaita-dark",
  desc: "Dark GNOME"
}, {
  name: "arc-dark",
  desc: "Classic GTK blue/gray"
}, {
  name: "ayu-dark",
  desc: "Warm dark Ayu"
}, {
  name: "ayu-mirage",
  desc: "Dusky Ayu mirage"
}, {
  name: "breeze-dark",
  desc: "KDE Plasma 6 dark"
}, {
  name: "breeze-light",
  desc: "KDE Plasma light"
}, {
  name: "bulma",
  desc: "Cyan/teal Capsule Corp genius"
}, {
  name: "buu",
  desc: "Hot pink Majin menace"
}, {
  name: "catppuccin",
  desc: "Soft pastel mocha dark"
}, {
  name: "catppuccin-frappe",
  desc: "Warm catppuccin"
}, {
  name: "catppuccin-latte",
  desc: "Light catppuccin"
}, {
  name: "catppuccin-macchiato",
  desc: "Rich catppuccin"
}, {
  name: "cobalt",
  desc: "Deep blue cobalt"
}, {
  name: "cupertino",
  desc: "Light macOS Spotlight"
}, {
  name: "cupertino-dark",
  desc: "Dark macOS Finder"
}, {
  name: "dark",
  desc: "Catppuccin Mocha dark (default)"
}, {
  name: "dracula",
  desc: "Dark purple Dracula"
}, {
  name: "everforest",
  desc: "Forest green dark"
}, {
  name: "frieza",
  desc: "Pale white/purple final form"
}, {
  name: "github-dark",
  desc: "GitHub dark"
}, {
  name: "github-light",
  desc: "GitHub light"
}, {
  name: "gohan",
  desc: "Scholarly purple DBZ"
}, {
  name: "goku",
  desc: "Dark blue + orange DBZ"
}, {
  name: "gruvbox",
  desc: "Warm earthy retro"
}, {
  name: "high-contrast",
  desc: "Bold high contrast"
}, {
  name: "high-contrast-dark",
  desc: "Bold dark high contrast"
}, {
  name: "high-contrast-light",
  desc: "Bold light high contrast"
}, {
  name: "kanagawa",
  desc: "Calm dark cyan wave"
}, {
  name: "kanagawa-dragon",
  desc: "Earthy muted kanagawa"
}, {
  name: "kanagawa-lotus",
  desc: "Warm cream kanagawa light"
}, {
  name: "launchpad",
  desc: "Dark macOS-style launcher"
}, {
  name: "light",
  desc: "Catppuccin Latte light"
}, {
  name: "material",
  desc: "Material Design teal/purple"
}, {
  name: "matrix",
  desc: "Green matrix rain"
}, {
  name: "minimal",
  desc: "Clean minimal dark"
}, {
  name: "minimal-light",
  desc: "Clean light minimal"
}, {
  name: "monokai",
  desc: "Vibrant saturated dark"
}, {
  name: "monokai-pro",
  desc: "Balanced monokai"
}, {
  name: "night-owl",
  desc: "Owl-inspired dark"
}, {
  name: "noctis",
  desc: "Deep blue-gray night"
}, {
  name: "nord",
  desc: "Frosty blue arctic"
}, {
  name: "one-dark",
  desc: "Atom's signature dark"
}, {
  name: "one-light",
  desc: "Atom light"
}, {
  name: "palenight",
  desc: "Material Palenight"
}, {
  name: "piccolo",
  desc: "Namekian guardian green"
}, {
  name: "poimandres",
  desc: "Teal/blue creative dark"
}, {
  name: "retro",
  desc: "Amber CRT phosphor"
}, {
  name: "rose-pine",
  desc: "Rosy pine forest"
}, {
  name: "rose-pine-dawn",
  desc: "Light rose pine"
}, {
  name: "shades-of-purple",
  desc: "Deep purple"
}, {
  name: "solarized-dark",
  desc: "Warm amber scientific"
}, {
  name: "solarized-light",
  desc: "Scientific light"
}, {
  name: "spacegray",
  desc: "Xcode gray dark"
}, {
  name: "sweet",
  desc: "Purple/pink candy"
}, {
  name: "synthwave84",
  desc: "Neon retro synthwave"
}, {
  name: "tien",
  desc: "Terracotta + Tri-Beam green"
}, {
  name: "tokyonight",
  desc: "Deep blue night"
}, {
  name: "tokyo-night-light",
  desc: "Light Tokyo day"
}, {
  name: "tokyo-night-moon",
  desc: "Purple Tokyo variant"
}, {
  name: "tokyo-night-storm",
  desc: "Blue Tokyo variant"
}, {
  name: "trunks",
  desc: "Lavender + Capsule Corp blue"
}, {
  name: "ubuntu",
  desc: "Warm light Ubuntu"
}, {
  name: "ubuntu-dark",
  desc: "Dark Yaru Ubuntu"
}, {
  name: "vegeta",
  desc: "Royal blue Saiyan prince"
}, {
  name: "win95",
  desc: "Classic Windows 95"
}];
function Themes() {
  return createComponent(DocsLayout, {
    get children() {
      return ssr(_tmpl$, ssrHydrationKey(), escape(themes.length), escape(themes.map((t) => createComponent(Card, {
        "class": "overflow-hidden",
        get children() {
          return [ssr(_tmpl$2, ssrHydrationKey(), `/imgs/${escape(t.name, true)}.png`, ssrAttribute("alt", escape(t.name, true), false)), ssr(_tmpl$3, ssrHydrationKey(), escape(t.name), escape(t.desc), escape(t.name))];
        }
      }))));
    }
  });
}

export { Themes as default, id$$ };
//# sourceMappingURL=themes-CxAf0_Zr.mjs.map
