import { createComponent, ssr, ssrHydrationKey, escape } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { M as MainLayout } from './MainLayout-NKietwuP.mjs';
import { C as Card } from './Card-BCycr2Ac.mjs';
import { S as Search, F as Folder, P as Plugin, C as Code, a as Palette, B as Button, D as Download } from './Code-DWt9p78R.mjs';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/dist/server.js';

var _tmpl$ = ["<h2", ' class="text-2xl text-white font-bold">Ready to try Zenkai?</h2>'], _tmpl$2 = ["<p", ' class="max-w-lg mx-auto text-muted">Download the latest release and experience the fastest app launcher for Linux and macOS.</p>'], _tmpl$3 = ["<div", ' class="flex justify-center">', "</div>"], _tmpl$4 = ["<div", ' class="px-4 sm:px-6 py-12 sm:py-20 max-w-6xl mx-auto"><div class="text-center mb-16"><h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">Everything <span class="text-primary">Zenkai</span></h1><p class="text-fg text-lg max-w-2xl mx-auto">A fast app launcher for Linux and macOS built with Zig and Qt6. Every feature designed for speed, flexibility, and control.</p></div><!--$-->', "<!--/--><!--$-->", "<!--/--></div>"], _tmpl$5 = ["<div", ' class="mb-16"><h2 class="text-2xl sm:text-3xl font-black text-white mb-8 flex items-center gap-3"><span class="w-1.5 h-8 bg-primary rounded-full"></span><!--$-->', '<!--/--></h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6">', "</div></div>"], _tmpl$6 = ["<div", ' class="flex items-start gap-4"><div class="shrink-0 w-10 h-10 rounded-lg bg-primary flex items-center justify-center">', '</div><div class="flex-1 min-w-0"><h3 class="text-lg font-bold text-white">', '</h3><p class="text-sm text-fg leading-relaxed mt-1">', "</p></div></div>"], _tmpl$7 = ["<div", ' class="grid grid-cols-2 gap-2 mt-2">', "</div>"], _tmpl$8 = ["<div", ' class="flex items-center gap-2 text-xs text-muted"><span class="w-1 h-1 rounded-full bg-primary shrink-0"></span><!--$-->', "<!--/--></div>"];
const id$$ = "src/routes/features.tsx?pick=default&pick=$css";
const features = [{
  section: "Search & Launch",
  items: [{
    icon: Search,
    title: "Fuzzy Search",
    desc: "Type a few characters and instantly find any application across thousands of .desktop entries with smart ranking.",
    details: ["Instant filtering as you type", "Smart frequency-based ranking", "Subsequence matching", "Thousands of entries in milliseconds"]
  }, {
    icon: Search,
    title: "Desktop Actions",
    desc: "Parse [Desktop Action ...] entries from .desktop files for actions like 'New Window' or 'New Private Window'.",
    details: ["Show actions in list with --show-actions", "Show actions in bottom bar with --actions-bottombar", "Supports any .desktop action entry", "Deep integration with desktop files"]
  }, {
    icon: Folder,
    title: "Desktop Scanning",
    desc: "Automatically scans and indexes .desktop files across all standard XDG directories for complete application coverage.",
    details: ["XDG directory scanning", "Automatic indexing", "Complete app coverage", "Skip scanning with --no-dapps"]
  }, {
    icon: Search,
    title: "Icon Grid View",
    desc: "Fullscreen icon grid layout with pill-shaped search bar. Switch with --theme=launchpad --fullscreen for a launcher-style interface.",
    details: ["Grid-based icon layout", "Pill-shaped search bar", "Fullscreen immersive mode", "Great for touchscreens"]
  }]
}, {
  section: "Plugins & Extensibility",
  items: [{
    icon: Plugin,
    title: "Lua Plugin System",
    desc: "Extend Zenkai with Lua scripts. Drop a directory into external/plugins/ with a manifest.json and main.lua and the launcher picks it up automatically.",
    details: ["Full Lua scripting API", "on_query and on_open hooks", "Add custom results with api.add_result", "Keep launcher open with NoReturn type"]
  }, {
    icon: Code,
    title: "Custom Menu Entries",
    desc: "Add custom entries directly from the command line. No .desktop file needed.",
    details: ["Format: --menu=name|cmd|icon", "Repeatable for multiple entries", "Skips .desktop scanning when used", "Perfect for quick launch scripts"]
  }, {
    icon: Plugin,
    title: "Clipboard & URL Handling",
    desc: "Pipe content into a clipboard command or set a custom URL handler for plugin results.",
    details: ["--clipboard for copy-to-clipboard", "--url-handler for custom browser", "Avoid xdg-open launching browser", "Works with xclip, wl-copy, etc"]
  }]
}, {
  section: "Themes & Visual",
  items: [{
    icon: Palette,
    title: "65+ Built-in Themes",
    desc: "Full visual customization via Qt stylesheets. Choose from 65+ built-in themes covering everything from Catppuccin to Dracula to Win95.",
    details: ["65+ curated themes included", "QSS-based styling", "Custom .qss file support", "Browse with --list-themes"]
  }, {
    icon: Palette,
    title: "Live Theme Reloader",
    desc: "Edit .qss files and see changes instantly with the theme reloader. No restart needed.",
    details: ["Hot-reload QSS files", "Instant visual feedback", "Requires --debug flag", "Use --theme-reloader flag"]
  }, {
    icon: Code,
    title: "Flexible Window Control",
    desc: "Control every aspect of the launcher window from the command line.",
    details: ["Icon size with --size=N", "Window width with --width=N", "Window height with --height=N", "Defaults: 32px icons, 600x500"]
  }, {
    icon: Code,
    title: "Minimal Mode",
    desc: "Strip down the UI for a clean, focused launcher experience.",
    details: ["Hide icons with --no-icons", "Hide bottom bar with --no-bottom-bar", "Combine for ultra-minimal look", "Perfect for keyboard-only users"]
  }]
}, {
  section: "Display & Behavior",
  items: [{
    icon: Code,
    title: "Multi-Monitor Support",
    desc: "Open Zenkai on any monitor. Defaults to the monitor under your cursor.",
    details: ["Select monitor with --monitor=N", "0-based indexing", "List monitors with --list-monitors", "Fullscreen works across monitors"]
  }, {
    icon: Code,
    title: "Fullscreen Mode",
    desc: "Start in fullscreen for a more immersive experience. Auto-switches to XWayland on Wayland when combined with --monitor.",
    details: ["Fullscreen with --fullscreen", "Auto-detects Wayland", "Switches to XCB on Wayland", "Great with icon grid themes"]
  }, {
    icon: Code,
    title: "Backdrop & Focus Control",
    desc: "Control how Zenkai behaves when it loses focus. Show a backdrop to detect clicks outside.",
    details: ["Close on focus out with --close-on-focus-out", "Stay open with --no-close-on-focus-out", "Show backdrop with --show-backdrop", "Click backdrop to close"]
  }]
}, {
  section: "Performance & Debugging",
  items: [{
    icon: Code,
    title: "Lightning Fast Startup",
    desc: "Zenkai launches in 45-120ms thanks to its Zig core. No waiting around.",
    details: ["45-120ms startup time", "Written in Zig for maximum speed", "Qt6 for lightweight UI", "Minimal memory footprint"]
  }, {
    icon: Code,
    title: "Low Memory Mode",
    desc: "On Nvidia or when you want a lighter footprint, the zenkai.sh wrapper brings RAM down to 20-50MB.",
    details: ["20-50MB with low-memory mode", "40-170MB normal mode", "Included zenkai.sh wrapper script", "No background processes"]
  }, {
    icon: Code,
    title: "Benchmarking & Debugging",
    desc: "Built-in tools for measuring and debugging performance.",
    details: ["Benchmark with --benchmark-all", "Debug timer with --debug", "Verbose logging with --verbose, -v", "Theme reloader for development"]
  }]
}, {
  section: "Platform & Language",
  items: [{
    icon: Code,
    title: "Cross-Platform",
    desc: "Zenkai runs on Linux (X11 and Wayland) and macOS with a native Qt6 interface.",
    details: ["Linux X11 and Wayland support", "macOS native support", "Wayland auto-detection", "Qt6 native widgets"]
  }, {
    icon: Code,
    title: "Translations",
    desc: "Use Zenkai in your language with the built-in translation system.",
    details: ["Language selection with --language=CODE", "Community-translated strings", "Easy to add new translations", "Falls back to English"]
  }]
}];
function Features() {
  return createComponent(MainLayout, {
    get children() {
      return ssr(_tmpl$4, ssrHydrationKey(), escape(features.map((section) => ssr(_tmpl$5, ssrHydrationKey(), escape(section.section), escape(section.items.map((f) => {
        const Icon = f.icon;
        return createComponent(Card, {
          "class": "p-6 flex flex-col gap-4",
          get children() {
            return [ssr(_tmpl$6, ssrHydrationKey(), escape(createComponent(Icon, {
              size: 20,
              "class": "fill-black text-black"
            })), escape(f.title), escape(f.desc)), "details" in f && f.details && ssr(_tmpl$7, ssrHydrationKey(), escape(f.details.map((d) => ssr(_tmpl$8, ssrHydrationKey(), escape(d)))))];
          }
        });
      }))))), escape(createComponent(Card, {
        "class": "flex flex-col gap-4 py-10 px-6 text-center",
        get children() {
          return [ssr(_tmpl$, ssrHydrationKey()), ssr(_tmpl$2, ssrHydrationKey()), ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(Button, {
            variant: "solid",
            "class": "cursor-pointer gap-2 text-black fill-black",
            get children() {
              return [createComponent(Download, {}), "DOWNLOAD ZENKAI"];
            }
          })))];
        }
      })));
    }
  });
}

export { Features as default, id$$ };
//# sourceMappingURL=features-brV7aLIg.mjs.map
