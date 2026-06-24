import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute, ssrElement, mergeProps } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { splitProps } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/dist/server.js';

var _tmpl$$2 = '<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path>';
const GitHub = (props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return ssrElement("svg", mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "inherit",
    get ["class"]() {
      var _a;
      return (_a = local.class) != null ? _a : "";
    },
    get width() {
      var _a;
      return (_a = local.size) != null ? _a : 24;
    },
    get height() {
      var _a;
      return (_a = local.size) != null ? _a : 24;
    }
  }, rest), () => ssr(_tmpl$$2), true);
};
var _tmpl$$1 = ["<nav", ' class="sticky top-0 z-50 backdrop-blur-sm bg-base/80 flex items-center gap-4 border-b border-border px-6 py-3"><div class="flex items-center gap-4"><a href="/" class="font-bold text-primary transition-colors"><img src="imgs/logo.png" alt="Zenkai Logo" class="max-h-6"></a><!--$-->', '<!--/--></div><div class="ml-auto"><a href="https://github.com/dayvster/zenkai" target="_blank" class="block text-fg hover:text-primary fill-white hover:fill-primary transition-all">', "</a></div></nav>"], _tmpl$2 = ["<a", ' class="text-fg hover:text-primary transition-colors">', "</a>"];
const NavItems = [{
  label: "Home",
  href: "/",
  icon: "home"
}, {
  label: "Features",
  href: "/features",
  icon: "features"
}, {
  label: "Docs",
  href: "/docs",
  icon: "docs"
}];
const Navi = () => {
  return ssr(_tmpl$$1, ssrHydrationKey(), escape(NavItems.map((item) => {
    return ssr(_tmpl$2, ssrHydrationKey() + ssrAttribute("href", escape(item.href, true), false), escape(item.label));
  })), escape(createComponent(GitHub, {
    size: 20
  })));
};
var _tmpl$ = ["<section", "><!--$-->", "<!--/--><section", ">", "</section></section>"];
const MainLayout = (props) => {
  const {
    children,
    fullWidth = false
  } = props;
  return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Navi, {})), ssrAttribute("class", fullWidth ? "" : "max-w-6xl mx-auto", false), escape(children));
};

export { MainLayout as M };
//# sourceMappingURL=MainLayout-NKietwuP.mjs.map
