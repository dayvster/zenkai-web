import { ssrElement, mergeProps, ssr, escape } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { splitProps } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/dist/server.js';

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
var _tmpl$$4 = '<circle cx="11" cy="11" r="8"></circle>', _tmpl$2$1 = '<path d="m21 21-4.35-4.35"></path>';
const Search = (props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return ssrElement("svg", mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2.5",
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
  }, rest), () => [ssr(_tmpl$$4), ssr(_tmpl$2$1)], true);
};
var _tmpl$$3 = '<path d="M12 2a3 3 0 0 0-3 3v1H7a2 2 0 0 0-2 2v2h1a3 3 0 0 1 0 6H5v2a2 2 0 0 0 2 2h2v-1a3 3 0 0 1 6 0v1h2a2 2 0 0 0 2-2v-2h-1a3 3 0 0 1 0-6h1V8a2 2 0 0 0-2-2h-2V5a3 3 0 0 0-3-3z"></path>';
const Plugin = (props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return ssrElement("svg", mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2.5",
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
  }, rest), () => ssr(_tmpl$$3), true);
};
var _tmpl$$2 = '<circle cx="13.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"></circle>', _tmpl$2 = '<circle cx="17.5" cy="10.5" r="1.5" fill="currentColor" stroke="none"></circle>', _tmpl$3 = '<circle cx="8.5" cy="7.5" r="1.5" fill="currentColor" stroke="none"></circle>', _tmpl$4 = '<circle cx="6.5" cy="12.5" r="1.5" fill="currentColor" stroke="none"></circle>', _tmpl$5 = '<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.5-4.5-10-10-10z"></path>';
const Palette = (props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return ssrElement("svg", mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2.5",
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
  }, rest), () => [ssr(_tmpl$$2), ssr(_tmpl$2), ssr(_tmpl$3), ssr(_tmpl$4), ssr(_tmpl$5)], true);
};
var _tmpl$$1 = '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>';
const Folder = (props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return ssrElement("svg", mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2.5",
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
  }, rest), () => ssr(_tmpl$$1), true);
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

export { Button as B, Code as C, Download as D, Folder as F, Plugin as P, Search as S, Palette as a, Card as b };
//# sourceMappingURL=Code-COiaCVbt.mjs.map
