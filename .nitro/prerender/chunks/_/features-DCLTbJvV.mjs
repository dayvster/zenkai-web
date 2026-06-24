import { createComponent, ssr, ssrHydrationKey, escape } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { M as MainLayout, S as Search, P as Plugin, a as Palette, F as Folder, C as Code, b as Card, B as Button, D as Download } from './Code-BMhzukwB.mjs';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/dist/server.js';

var _tmpl$ = ["<h2", ' class="text-2xl text-white font-bold">Ready to try Zenkai?</h2>'], _tmpl$2 = ["<p", ' class="max-w-lg mx-auto text-muted">Download the latest release and experience the fastest app launcher for Linux and macOS.</p>'], _tmpl$3 = ["<div", ' class="flex justify-center">', "</div>"], _tmpl$4 = ["<div", ' class="px-4 sm:px-6 py-12 sm:py-20 max-w-6xl mx-auto"><div class="text-center mb-16"><h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">Everything <span class="text-primary">Zenkai</span></h1><p class="text-fg text-lg max-w-2xl mx-auto">A fast app launcher for Linux and macOS built with Zig and Qt6. Every feature designed for speed, flexibility, and control.</p></div><!--$-->', "<!--/--><!--$-->", "<!--/--></div>"], _tmpl$5 = ["<div", ' class="mb-16"><h2 class="text-2xl sm:text-3xl font-black text-white mb-8 flex items-center gap-3"><span class="w-1.5 h-8 bg-primary rounded-full"></span><!--$-->', '<!--/--></h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6">', "</div></div>"], _tmpl$6 = ["<div", ' class="flex items-start gap-4"><div class="shrink-0 w-10 h-10 rounded-lg bg-primary flex items-center justify-center">', '</div><div class="flex-1 min-w-0"><h3 class="text-lg font-bold text-white">', '</h3><p class="text-sm text-fg leading-relaxed mt-1">', "</p></div></div>"], _tmpl$7 = ["<div", ' class="grid grid-cols-2 gap-2 mt-2">', "</div>"], _tmpl$8 = ["<div", ' class="flex items-center gap-2 text-xs text-muted"><span class="w-1 h-1 rounded-full bg-primary shrink-0"></span><!--$-->', "<!--/--></div>"];
const id$$ = "src/routes/features.tsx?pick=default&pick=$css";
const features = [{
  section: "Core",
  items: [{
    icon: Search,
    title: "Fuzzy Search",
    desc: "Type a few characters and instantly find any application across thousands of .desktop entries with smart ranking and instant feedback.",
    details: ["Instant filtering as you type", "Smart result ranking", "Subsequence matching", "Thousands of entries in milliseconds"]
  }, {
    icon: Plugin,
    title: "Lua Plugin System",
    desc: "Extend Zenkai with Lua scripts. Create custom menus, keybindings, and deep system integrations without recompiling.",
    details: ["Full Lua scripting API", "Hook into keybindings and menus", "Deep OS integration", "Plugin management CLI flags"]
  }, {
    icon: Palette,
    title: "Custom Themes",
    desc: "Full visual customization via Qt stylesheets. Choose from 60+ built-in themes or create your own look.",
    details: ["60+ built-in themes", "QSS-based styling", "Custom color schemes", "Live theme switching"]
  }, {
    icon: Folder,
    title: "Desktop Scanning",
    desc: "Automatically scans and indexes .desktop files across all standard XDG directories for complete application coverage.",
    details: ["XDG directory scanning", "Automatic indexing", "Complete app coverage", "Skip scanning with --no-dapps"]
  }]
}, {
  section: "Performance",
  items: [{
    icon: Code,
    title: "Lightning Fast Startup",
    desc: "Zenkai launches in 45-120ms thanks to its Zig core. No waiting around \u2014 it's ready when you are.",
    details: ["45-120ms startup time", "Written in Zig for maximum speed", "Qt6 for lightweight UI", "Minimal memory footprint"]
  }, {
    icon: Code,
    title: "Low Memory Usage",
    desc: "Only 40-170MB of RAM. Zenkai stays out of your way and doesn't hog resources.",
    details: ["40-170MB memory usage", "Efficient resource management", "No background bloat", "Benchmark with --benchmark-all"]
  }]
}, {
  section: "CLI & Control",
  items: [{
    icon: Code,
    title: "Custom Menu Entries",
    desc: "Add custom menu entries directly from the command line with --menu=name|cmd|icon."
  }, {
    icon: Code,
    title: "Fullscreen Mode",
    desc: "Start Zenkai in fullscreen mode with --fullscreen for a more immersive launcher experience."
  }, {
    icon: Code,
    title: "Multi-Monitor Support",
    desc: "Open Zenkai on a specific monitor using --monitor=N. Perfect for multi-display setups."
  }, {
    icon: Code,
    title: "Show Actions",
    desc: "Display available actions for each item with --show-actions. See what you can do at a glance."
  }]
}, {
  section: "Development",
  items: [{
    icon: Code,
    title: "Benchmarking",
    desc: "Benchmark every startup stage with --benchmark-all. Fine-tune performance for your system."
  }, {
    icon: Code,
    title: "Plugin Control",
    desc: "Disable all plugins with --no-plugins or load a specific plugin with --plugin=NAME for testing."
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
//# sourceMappingURL=features-DCLTbJvV.mjs.map
