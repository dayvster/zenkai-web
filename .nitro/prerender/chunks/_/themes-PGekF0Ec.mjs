import { createComponent, ssr, ssrHydrationKey, escape, ssrAttribute } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { createSignal } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/dist/server.js';
import { D as DocsLayout } from './DocsLayout-BQ--F7ga.mjs';
import './MainLayout-NKietwuP.mjs';
import '../virtual/entry.mjs';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/h3@1.15.5/node_modules/h3/dist/index.mjs';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/storage/dist/storage.js';

var _tmpl$ = ["<div", ' class="border border-border-primary-muted rounded-lg overflow-hidden"><div class="p-5 pb-3"><div class="flex items-baseline gap-3 mb-1"><h3 class="text-xl font-bold text-white">', '</h3><span class="text-sm text-muted">', '</span></div></div><img src="', '"', ' class="w-full" loading="lazy"><div class="p-5 pt-4"><p class="text-sm text-fg font-semibold mb-2">Try it</p><div class="group relative"><pre class="bg-[#111] border border-border/80 rounded-lg p-4 font-mono text-sm text-white overflow-x-auto">', '</pre><button class="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs font-semibold rounded-md transition-all opacity-0 group-hover:opacity-100 bg-primary text-black hover:brightness-90">', "</button></div></div></div>"], _tmpl$2 = ["<div", ' class="px-4 sm:px-6 py-12 sm:py-20 max-w-6xl mx-auto"><div class="mb-12"><h1 class="text-4xl sm:text-5xl font-black text-white mb-4">Themes</h1><p class="text-fg text-lg">Zenkai ships with <span class="text-primary font-semibold"><!--$-->', '<!--/--> built-in themes</span>. Browse the gallery, then copy the command to try one.</p></div><div class="flex flex-col gap-6">', "</div></div>"];
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
function ThemeCard(props) {
  const [copied, setCopied] = createSignal(false);
  const cmd = `zenkai --theme=${props.name}`;
  return ssr(_tmpl$, ssrHydrationKey(), escape(props.name), escape(props.desc), `/imgs/${escape(props.name, true)}.png`, ssrAttribute("alt", escape(props.name, true), false), escape(cmd), copied() ? "Copied!" : "Copy");
}
function Themes() {
  return createComponent(DocsLayout, {
    get children() {
      return ssr(_tmpl$2, ssrHydrationKey(), escape(themes.length), escape(themes.map((t) => createComponent(ThemeCard, {
        get name() {
          return t.name;
        },
        get desc() {
          return t.desc;
        }
      }))));
    }
  });
}

export { Themes as default, id$$ };
//# sourceMappingURL=themes-PGekF0Ec.mjs.map
