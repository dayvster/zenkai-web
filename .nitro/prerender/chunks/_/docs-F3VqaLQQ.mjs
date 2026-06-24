import { createComponent, ssr, ssrHydrationKey, escape, ssrAttribute } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { M as MainLayout } from './MainLayout-NKietwuP.mjs';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/dist/server.js';

var _tmpl$ = ["<p", ">Zenkai is a fast app launcher for Linux and macOS written in Zig with Qt6. It scans .desktop files and filters through them with instant fuzzy matching. It also supports custom themes, keyboard shortcuts, custom menu input and a robust Lua plugin system.</p>"], _tmpl$2 = ["<p", ">Download the latest release from GitHub. Zenkai is available for Linux and macOS.</p>"], _tmpl$3 = ["<h4", ">Requirements</h4>"], _tmpl$4 = ["<ul", "><li>Linux (X11/Wayland) or macOS</li><li>Qt6 runtime</li></ul>"], _tmpl$5 = ["<p", ">Launch Zenkai from your terminal or application menu:</p>"], _tmpl$6 = ["<pre", ' class="bg-[#111] border border-border/80 rounded-lg p-4 font-mono text-sm text-white overflow-x-auto">zenkai</pre>'], _tmpl$7 = ["<p", ">Start typing to filter through your applications. Press Enter to launch the selected app.</p>"], _tmpl$8 = ["<p", ">Zenkai provides a range of CLI flags for customization and control:</p>"], _tmpl$9 = ["<table", ' class="w-full text-sm"><thead><tr class="border-b border-border"><th class="text-left py-2 pr-4 text-muted font-semibold">Flag</th><th class="text-left py-2 pr-4 text-muted font-semibold">Value</th><th class="text-left py-2 text-muted font-semibold">Description</th></tr></thead><tbody><tr class="border-b border-border/50"><td class="py-2 pr-4 font-mono text-white">--menu</td><td class="py-2 pr-4 font-mono text-muted">name|cmd|icon</td><td class="py-2 text-fg">Add a custom menu entry</td></tr><tr class="border-b border-border/50"><td class="py-2 pr-4 font-mono text-white">--theme</td><td class="py-2 pr-4 font-mono text-muted">NAME</td><td class="py-2 text-fg">Change the launcher theme</td></tr><tr class="border-b border-border/50"><td class="py-2 pr-4 font-mono text-white">--fullscreen</td><td class="py-2 pr-4 font-mono text-muted">&mdash;</td><td class="py-2 text-fg">Start fullscreen</td></tr><tr class="border-b border-border/50"><td class="py-2 pr-4 font-mono text-white">--monitor</td><td class="py-2 pr-4 font-mono text-muted">N</td><td class="py-2 text-fg">Open on a specific monitor</td></tr><tr class="border-b border-border/50"><td class="py-2 pr-4 font-mono text-white">--show-actions</td><td class="py-2 pr-4 font-mono text-muted">&mdash;</td><td class="py-2 text-fg">Display item actions</td></tr><tr class="border-b border-border/50"><td class="py-2 pr-4 font-mono text-white">--no-plugins</td><td class="py-2 pr-4 font-mono text-muted">&mdash;</td><td class="py-2 text-fg">Disable plugin loading</td></tr><tr class="border-b border-border/50"><td class="py-2 pr-4 font-mono text-white">--plugin</td><td class="py-2 pr-4 font-mono text-muted">NAME</td><td class="py-2 text-fg">Load only one specific plugin</td></tr><tr class="border-b border-border/50"><td class="py-2 pr-4 font-mono text-white">--no-dapps</td><td class="py-2 pr-4 font-mono text-muted">&mdash;</td><td class="py-2 text-fg">Skip desktop app scanning</td></tr><tr><td class="py-2 pr-4 font-mono text-white">--benchmark-all</td><td class="py-2 pr-4 font-mono text-muted">&mdash;</td><td class="py-2 text-fg">Benchmark startup stages</td></tr></tbody></table>'], _tmpl$0 = ["<p", ">Zenkai ships with over 60 built-in themes. Switch between them at any time:</p>"], _tmpl$1 = ["<pre", ' class="bg-[#111] border border-border/80 rounded-lg p-4 font-mono text-sm text-white overflow-x-auto">zenkai --theme=catppuccin</pre>'], _tmpl$10 = ["<p", ">Themes use Qt stylesheets (QSS) for full visual customization. Create your own theme by writing a QSS file.</p>"], _tmpl$11 = ["<p", ">Zenkai supports Lua scripting for extending functionality. Plugins can hook into keybindings, create custom menus, and integrate deeply with your system.</p>"], _tmpl$12 = ["<h4", ">Basic Plugin Structure</h4>"], _tmpl$13 = ["<pre", ' class="bg-[#111] border border-border/80 rounded-lg p-4 font-mono text-sm text-white overflow-x-auto">-- Example Zenkai plugin\nlocal plugin = {\n  name = "calculator",\n  version = "1.0",\n  author = "you"\n}\n\nfunction plugin:init()\n  -- Register keybindings\n  zenkai.bind("ctrl+shift+c", function()\n    zenkai.open_menu("calculator")\n  end)\nend\n\nreturn plugin</pre>'], _tmpl$14 = ["<p", '>Load your plugin with the <code class="text-primary">--plugin</code> flag or place it in the plugins directory for auto-loading.</p>'], _tmpl$15 = ["<p", ">Zenkai provides keyboard shortcuts for efficient navigation:</p>"], _tmpl$16 = ["<ul", '><li><kbd class="text-white font-mono">Type</kbd> &mdash; Filter applications</li><li><kbd class="text-white font-mono">Enter</kbd> &mdash; Launch selected</li><li><kbd class="text-white font-mono">Esc</kbd> &mdash; Close Zenkai</li><li><kbd class="text-white font-mono">Ctrl+N</kbd> &mdash; Next item</li><li><kbd class="text-white font-mono">Ctrl+P</kbd> &mdash; Previous item</li></ul>'], _tmpl$17 = ["<div", ' class="px-4 sm:px-6 py-12 sm:py-20 max-w-4xl mx-auto"><div class="mb-12"><h1 class="text-4xl sm:text-5xl font-black text-white mb-4">Documentation</h1><p class="text-fg text-lg">Everything you need to know about using Zenkai.</p></div><div class="flex flex-col lg:flex-row gap-10"><nav class="lg:w-48 shrink-0"><div class="flex flex-col gap-1 sticky top-20">', '</div></nav><div class="flex-1 min-w-0"><div class="flex flex-col gap-10">', "</div></div></div></div>"], _tmpl$18 = ["<a", ' href="', '" class="text-sm text-fg hover:text-primary transition-colors py-1">', "</a>"], _tmpl$19 = ["<section", '><h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-3"><span class="w-1 h-6 bg-primary rounded-full"></span><!--$-->', '<!--/--></h2><div class="text-fg text-sm leading-relaxed space-y-4">', "</div></section>"];
const id$$ = "src/routes/docs.tsx?pick=default&pick=$css";
const sections = [{
  id: "overview",
  title: "Overview",
  content: ssr(_tmpl$, ssrHydrationKey())
}, {
  id: "installation",
  title: "Installation",
  content: [ssr(_tmpl$2, ssrHydrationKey()), ssr(_tmpl$3, ssrHydrationKey()), ssr(_tmpl$4, ssrHydrationKey())]
}, {
  id: "usage",
  title: "Usage",
  content: [ssr(_tmpl$5, ssrHydrationKey()), ssr(_tmpl$6, ssrHydrationKey()), ssr(_tmpl$7, ssrHydrationKey())]
}, {
  id: "cli",
  title: "CLI Flags",
  content: [ssr(_tmpl$8, ssrHydrationKey()), ssr(_tmpl$9, ssrHydrationKey())]
}, {
  id: "themes",
  title: "Themes",
  content: [ssr(_tmpl$0, ssrHydrationKey()), ssr(_tmpl$1, ssrHydrationKey()), ssr(_tmpl$10, ssrHydrationKey())]
}, {
  id: "plugins",
  title: "Plugins",
  content: [ssr(_tmpl$11, ssrHydrationKey()), ssr(_tmpl$12, ssrHydrationKey()), ssr(_tmpl$13, ssrHydrationKey()), ssr(_tmpl$14, ssrHydrationKey())]
}, {
  id: "shortcuts",
  title: "Keyboard Shortcuts",
  content: [ssr(_tmpl$15, ssrHydrationKey()), ssr(_tmpl$16, ssrHydrationKey())]
}];
function Docs() {
  return createComponent(MainLayout, {
    get children() {
      return ssr(_tmpl$17, ssrHydrationKey(), escape(sections.map((s) => ssr(_tmpl$18, ssrHydrationKey(), `#${escape(s.id, true)}`, escape(s.title)))), escape(sections.map((s) => ssr(_tmpl$19, ssrHydrationKey() + ssrAttribute("id", escape(s.id, true), false), escape(s.title), escape(s.content)))));
    }
  });
}

export { Docs as default, id$$ };
//# sourceMappingURL=docs-F3VqaLQQ.mjs.map
