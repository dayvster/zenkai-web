import { createComponent, ssr, ssrHydrationKey, escape, ssrAttribute } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { M as MainLayout } from './MainLayout-NKietwuP.mjs';
import { a as useLocation } from '../virtual/entry.mjs';

var _tmpl$ = ["<div", ' class="px-4 sm:px-6 py-12 sm:py-20 max-w-5xl mx-auto"><div class="flex flex-col lg:flex-row gap-10"><nav class="lg:w-48 shrink-0"><div class="flex flex-col gap-1 sticky top-20">', '</div></nav><div class="flex-1 min-w-0 text-fg text-sm leading-relaxed space-y-5 [&amp;_h1]:text-3xl [&amp;_h1]:font-black [&amp;_h1]:text-white [&amp;_h1]:mb-6 [&amp;_h2]:text-2xl [&amp;_h2]:font-bold [&amp;_h2]:text-white [&amp;_h2]:mt-10 [&amp;_h2]:mb-4 [&amp;_h2]:flex [&amp;_h2]:items-center [&amp;_h2]:gap-3 [&amp;_h2]:before:block [&amp;_h2]:before:w-1 [&amp;_h2]:before:h-6 [&amp;_h2]:before:bg-primary [&amp;_h2]:before:rounded-full [&amp;_h3]:text-lg [&amp;_h3]:font-bold [&amp;_h3]:text-white [&amp;_h3]:mt-8 [&amp;_h3]:mb-3 [&amp;_h4]:font-semibold [&amp;_h4]:text-white [&amp;_h4]:mt-6 [&amp;_h4]:mb-2 [&amp;_p]:text-fg [&amp;_p]:leading-relaxed [&amp;_p]:mb-4 [&amp;_ul]:list-disc [&amp;_ul]:pl-5 [&amp;_ul]:space-y-1.5 [&amp;_ul]:mb-4 [&amp;_li]:text-fg [&amp;_li]:leading-relaxed [&amp;_a]:text-primary [&amp;_a]:hover:underline [&amp;_pre]:bg-[#111] [&amp;_pre]:border [&amp;_pre]:border-border/80 [&amp;_pre]:rounded-lg [&amp;_pre]:p-4 [&amp;_pre]:font-mono [&amp;_pre]:text-sm [&amp;_pre]:text-white [&amp;_pre]:overflow-x-auto [&amp;_pre]:mb-4 [&amp;_code]:text-primary [&amp;_table]:w-full [&amp;_table]:text-sm [&amp;_table]:mb-4 [&amp;_th]:text-left [&amp;_th]:py-2 [&amp;_th]:pr-4 [&amp;_th]:text-muted [&amp;_th]:font-semibold [&amp;_th]:border-b [&amp;_th]:border-border [&amp;_td]:py-2 [&amp;_td]:pr-4 [&amp;_td]:text-fg [&amp;_td]:border-b [&amp;_td]:border-border/50 [&amp;_kbd]:text-white [&amp;_kbd]:font-mono">', "</div></div></div>"], _tmpl$2 = ["<a", ' class="', '">', "</a>"];
const pages = [{
  label: "Overview",
  href: "/docs"
}, {
  label: "Installation",
  href: "/docs/installation"
}, {
  label: "Usage",
  href: "/docs/usage"
}, {
  label: "CLI Flags",
  href: "/docs/cli"
}, {
  label: "Themes",
  href: "/docs/themes"
}, {
  label: "Plugins",
  href: "/docs/plugins"
}, {
  label: "Keyboard Shortcuts",
  href: "/docs/shortcuts"
}];
const DocsLayout = (props) => {
  const location = useLocation();
  return createComponent(MainLayout, {
    get children() {
      return ssr(_tmpl$, ssrHydrationKey(), escape(pages.map((p) => ssr(_tmpl$2, ssrHydrationKey() + ssrAttribute("href", escape(p.href, true), false), `text-sm transition-colors py-1.5 px-3 rounded-md ${location.pathname === p.href ? "text-white bg-primary/10 font-semibold" : "text-fg hover:text-primary hover:bg-base-400/50"}`, escape(p.label)))), escape(props.children));
    }
  });
};

export { DocsLayout as D };
//# sourceMappingURL=DocsLayout-BQ--F7ga.mjs.map
