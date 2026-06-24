import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute, ssrElement, mergeProps } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { splitProps } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/dist/server.js';

var _tmpl$$8 = '<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path>';
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
  }, rest), () => ssr(_tmpl$$8), true);
};
var _tmpl$$7 = ["<nav", ' class="sticky top-0 z-50 backdrop-blur-sm bg-base/80 flex items-center gap-4 border-b border-border px-6 py-3"><div class="flex items-center gap-4"><a href="/" class="font-bold text-primary transition-colors"><img src="imgs/logo.png" alt="Zenkai Logo" class="max-h-6"></a><!--$-->', '<!--/--></div><div class="ml-auto"><a href="https://github.com/dayvster/zenkai" target="_blank" class="block text-fg hover:text-primary fill-white hover:fill-primary transition-all">', "</a></div></nav>"], _tmpl$2$4 = ["<a", ' class="text-fg hover:text-primary transition-colors">', "</a>"];
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
  return ssr(_tmpl$$7, ssrHydrationKey(), escape(NavItems.map((item) => {
    return ssr(_tmpl$2$4, ssrHydrationKey() + ssrAttribute("href", escape(item.href, true), false), escape(item.label));
  })), escape(createComponent(GitHub, {
    size: 20
  })));
};
var _tmpl$$6 = ["<section", "><!--$-->", "<!--/--><section", ">", "</section></section>"];
const MainLayout = (props) => {
  const {
    children,
    fullWidth = false
  } = props;
  return ssr(_tmpl$$6, ssrHydrationKey(), escape(createComponent(Navi, {})), ssrAttribute("class", fullWidth ? "" : "max-w-6xl mx-auto", false), escape(children));
};
const Card = (props) => {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return ssrElement("div", mergeProps(rest, {
    get ["class"]() {
      var _a;
      return `border border-border-primary-muted rounded-lg ${(_a = local.class) != null ? _a : ""}`;
    }
  }), () => escape(local.children), true);
};
const variants = {
  solid: "bg-primary hover:bg-primary-hover hover:brightness-90 active:brightness-90",
  outlined: "border-2 border-primary hover:bg-primary active:brightness-90",
  "outlined-white": "border-2 border-white/40 hover:bg-white active:brightness-90",
  ghost: "hover:bg-bg-hover active:bg-bg-active"
};
const Button = (props) => {
  const [local, rest] = splitProps(props, ["variant", "class", "children"]);
  return ssrElement("button", mergeProps(rest, {
    get ["class"]() {
      var _a, _b;
      return `inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${variants[(_a = local.variant) != null ? _a : "solid"]} ${(_b = local.class) != null ? _b : ""}`;
    }
  }), () => escape(local.children), true);
};
var _tmpl$$5 = '<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>';
const Download = (props) => {
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
      return (_a = local.size) != null ? _a : 20;
    },
    get height() {
      var _a;
      return (_a = local.size) != null ? _a : 20;
    }
  }, rest), () => ssr(_tmpl$$5), true);
};
var _tmpl$$4 = '<circle cx="11" cy="11" r="7"></circle>', _tmpl$2$3 = '<path d="m20 20-4.35-4.35"></path>', _tmpl$3$2 = '<path d="M3 16h7"></path>', _tmpl$4$1 = '<path d="M3 19h5"></path>', _tmpl$5$1 = '<path d="M3 13h4"></path>';
const Search = (props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return ssrElement("svg", mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    get ["class"]() {
      var _a;
      return (_a = local.class) != null ? _a : "";
    },
    get width() {
      var _a;
      return (_a = local.size) != null ? _a : 20;
    },
    get height() {
      var _a;
      return (_a = local.size) != null ? _a : 20;
    }
  }, rest), () => [ssr(_tmpl$$4), ssr(_tmpl$2$3), ssr(_tmpl$3$2), ssr(_tmpl$4$1), ssr(_tmpl$5$1)], true);
};
var _tmpl$$3 = '<path d="M12 2a3 3 0 0 0-3 3v1H7a2 2 0 0 0-2 2v2h1a3 3 0 0 1 0 6H5v2a2 2 0 0 0 2 2h2v-1a3 3 0 0 1 6 0v1h2a2 2 0 0 0 2-2v-2h-1a3 3 0 0 1 0-6h1V8a2 2 0 0 0-2-2h-2V5a3 3 0 0 0-3-3z"></path>', _tmpl$2$2 = '<path d="m8 12 2.5 2.5L15 10"></path>';
const Plugin = (props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return ssrElement("svg", mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    get ["class"]() {
      var _a;
      return (_a = local.class) != null ? _a : "";
    },
    get width() {
      var _a;
      return (_a = local.size) != null ? _a : 20;
    },
    get height() {
      var _a;
      return (_a = local.size) != null ? _a : 20;
    }
  }, rest), () => [ssr(_tmpl$$3), ssr(_tmpl$2$2)], true);
};
var _tmpl$$2 = '<path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.51-4.49-10-10-10z"></path>', _tmpl$2$1 = '<circle cx="7.5" cy="9.5" r="1.5" fill="currentColor"></circle>', _tmpl$3$1 = '<circle cx="12" cy="7" r="1.5" fill="currentColor"></circle>', _tmpl$4 = '<circle cx="16.5" cy="9.5" r="1.5" fill="currentColor"></circle>', _tmpl$5 = '<circle cx="8.5" cy="14" r="1" fill="currentColor"></circle>';
const Palette = (props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return ssrElement("svg", mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    get ["class"]() {
      var _a;
      return (_a = local.class) != null ? _a : "";
    },
    get width() {
      var _a;
      return (_a = local.size) != null ? _a : 20;
    },
    get height() {
      var _a;
      return (_a = local.size) != null ? _a : 20;
    }
  }, rest), () => [ssr(_tmpl$$2), ssr(_tmpl$2$1), ssr(_tmpl$3$1), ssr(_tmpl$4), ssr(_tmpl$5)], true);
};
var _tmpl$$1 = '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>', _tmpl$2 = '<circle cx="16" cy="13" r="3"></circle>', _tmpl$3 = '<path d="m18 15 2 2"></path>';
const Folder = (props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return ssrElement("svg", mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    get ["class"]() {
      var _a;
      return (_a = local.class) != null ? _a : "";
    },
    get width() {
      var _a;
      return (_a = local.size) != null ? _a : 20;
    },
    get height() {
      var _a;
      return (_a = local.size) != null ? _a : 20;
    }
  }, rest), () => [ssr(_tmpl$$1), ssr(_tmpl$2), ssr(_tmpl$3)], true);
};
var _tmpl$ = '<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>';
const Code = (props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return ssrElement("svg", mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    get ["class"]() {
      var _a;
      return (_a = local.class) != null ? _a : "";
    },
    get width() {
      var _a;
      return (_a = local.size) != null ? _a : 20;
    },
    get height() {
      var _a;
      return (_a = local.size) != null ? _a : 20;
    }
  }, rest), () => ssr(_tmpl$), true);
};

export { Button as B, Code as C, Download as D, Folder as F, MainLayout as M, Plugin as P, Search as S, Palette as a, Card as b };
//# sourceMappingURL=Code-CyJwcZzu.mjs.map
