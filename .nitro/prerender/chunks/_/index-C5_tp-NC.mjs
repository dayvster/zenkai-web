import { createComponent, ssr, ssrHydrationKey, escape, ssrAttribute, ssrElement, mergeProps, ssrStyle, ssrStyleProperty } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { createResource, splitProps, createSignal, createEffect, onCleanup } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/dist/server.js';

var _tmpl$$g = '<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path>';
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
  }, rest), () => ssr(_tmpl$$g), true);
};
var _tmpl$$f = ["<nav", ' class="flex items-center gap-4 border-b border-border px-6 py-3"><div class="flex items-center gap-4"><a href="/" class="font-bold text-primary transition-colors"><img src="imgs/logo.png" alt="Zenkai Logo" class="max-h-6"></a><!--$-->', '<!--/--></div><div class="ml-auto"><a href="https://github.com/dayvster/zenkai" target="_blank" class="block text-fg hover:text-primary fill-white hover:fill-primary transition-all">', "</a></div></nav>"], _tmpl$2$9 = ["<a", ' class="text-fg hover:text-primary transition-colors">', "</a>"];
const NavItems = [{
  label: "Home",
  href: "/",
  icon: "home"
}, {
  label: "Features",
  href: "/#features",
  icon: "features"
}, {
  label: "Docs",
  href: "/docs",
  icon: "docs"
}];
const Navi = () => {
  return ssr(_tmpl$$f, ssrHydrationKey(), escape(NavItems.map((item) => {
    return ssr(_tmpl$2$9, ssrHydrationKey() + ssrAttribute("href", escape(item.href, true), false), escape(item.label));
  })), escape(createComponent(GitHub, {
    size: 20
  })));
};
var _tmpl$$e = ["<section", "><!--$-->", "<!--/--><section", ">", "</section></section>"];
const MainLayout = (props) => {
  const {
    children,
    fullWidth = false
  } = props;
  return ssr(_tmpl$$e, ssrHydrationKey(), escape(createComponent(Navi, {})), ssrAttribute("class", fullWidth ? "" : "max-w-6xl mx-auto", false), escape(children));
};
var _tmpl$$d = ["<a", ' href="', '" target="_blank" class="inline-flex items-center gap-1.5 rounded-full border border-border bg-chip px-2 py-0.5 text-xs text-fg transition-all hover:border-primary hover:bg-bg-hover hover:text-white"><div class="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_3px_1px_var(--color-success)]"></div><span class="font-semibold tracking-tight">', '</span><span class="text-[10px] uppercase">Release</span></a>'];
const fetchLatestTag = async () => {
  var _a, _b;
  const res = await fetch("https://api.github.com/repos/dayvster/zenkai/tags");
  const tags = await res.json();
  return (_b = (_a = tags[0]) == null ? void 0 : _a.name) != null ? _b : "unknown";
};
const ChipVersion = () => {
  var _a;
  const [version] = createResource(fetchLatestTag);
  return ssr(_tmpl$$d, ssrHydrationKey(), `https://github.com/dayvster/zenkai/releases/tag/${escape(version(), true)}`, (_a = escape(version())) != null ? _a : "...");
};
var _tmpl$$c = ["<div", ' class="grid grid-cols-1 grid-rows-1">', "</div>"], _tmpl$2$8 = ["<img", ' class="', '" loading="lazy">'], _tmpl$3$6 = ["<div", ' class="grid grid-cols-1 grid-rows-1 overflow-hidden">', "</div>"], _tmpl$4$4 = ["<img", ' class="', '" style="', '" loading="lazy">'], _tmpl$5$2 = ["<div", ' class="grid grid-cols-1 grid-rows-1" style="', '">', "</div>"], _tmpl$6 = ["<img", ' class="col-span-1 row-span-1 col-start-1 row-start-1 w-full transition-transform duration-600" style="', '" loading="lazy">'], _tmpl$7 = ["<img", ' class="col-span-1 row-span-1 col-start-1 row-start-1 w-full transition-all duration-600" style="', '" loading="lazy">'], _tmpl$8 = ["<div", ' data-track class="', '" style="', '">', "</div>"], _tmpl$9 = ["<div", ' class="', '"><img', ' class="w-full" loading="lazy"></div>'], _tmpl$0 = ["<div", ' class="', '"><!--$-->', '<!--/--><div class="overflow-hidden rounded-md"><style>@keyframes ken-burns { from { transform: scale(1); } to { transform: scale(1.15); } }</style><!--$-->', "<!--/--></div><!--$-->", "<!--/--><!--$-->", '<!--/--><div class="mt-3 flex justify-center gap-2">', "</div></div>"], _tmpl$1 = ["<span", ' class="mb-2 block text-center text-sm font-semibold text-fg">', "</span>"], _tmpl$10 = ["<span", ' class="mt-2 block text-center text-sm font-semibold text-fg">', "</span>"], _tmpl$11 = ["<button", ' class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-base/60 p-2 text-fg opacity-0 backdrop-blur transition-all hover:bg-base/90 group-hover:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button>'], _tmpl$12 = ["<button", ' class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-base/60 p-2 text-fg opacity-0 backdrop-blur transition-all hover:bg-base/90 group-hover:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>'], _tmpl$13 = ["<button", ' class="', '"></button>'];
const ImageSlider = (props) => {
  var _a, _b;
  const [current, setCurrent] = createSignal((_a = props.startIndex) != null ? _a : 0);
  const n = () => props.images.length;
  const clamped = (i) => (i + n()) % n();
  let timer;
  const startTimer = () => {
    var _a2;
    clearInterval(timer);
    if (props.autoPlay !== false) {
      timer = setInterval(() => setCurrent(clamped(current() + 1)), (_a2 = props.interval) != null ? _a2 : 5e3);
    }
  };
  const [offsetX, setOffsetX] = createSignal(0);
  const [dragging, setDragging] = createSignal(false);
  createEffect(() => {
    startTimer();
    onCleanup(() => clearInterval(timer));
  });
  const label = () => {
    var _a2;
    return (_a2 = props.images[current()]) == null ? void 0 : _a2.label;
  };
  const anim = () => {
    var _a2;
    return (_a2 = props.animation) != null ? _a2 : "slide";
  };
  const renderImages = () => {
    const t = anim();
    if (t === "fade") {
      return ssr(_tmpl$$c, ssrHydrationKey(), escape(props.images.map((img, i) => {
        var _a2;
        return ssr(_tmpl$2$8, ssrHydrationKey() + ssrAttribute("src", escape(img.src, true), false) + ssrAttribute("alt", (_a2 = escape(img.alt, true)) != null ? _a2 : "", false), `col-span-1 row-span-1 col-start-1 row-start-1 w-full transition-opacity duration-500 ${i === current() ? "opacity-100" : "opacity-0"}`);
      })));
    }
    if (t === "blur") {
      return ssr(_tmpl$$c, ssrHydrationKey(), escape(props.images.map((img, i) => {
        var _a2;
        return ssr(_tmpl$2$8, ssrHydrationKey() + ssrAttribute("src", escape(img.src, true), false) + ssrAttribute("alt", (_a2 = escape(img.alt, true)) != null ? _a2 : "", false), `col-span-1 row-span-1 col-start-1 row-start-1 w-full transition-all duration-600 ${i === current() ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-lg"}`);
      })));
    }
    if (t === "ken-burns") {
      return ssr(_tmpl$3$6, ssrHydrationKey(), escape(props.images.map((img, i) => {
        var _a2;
        return ssr(_tmpl$4$4, ssrHydrationKey() + ssrAttribute("src", escape(img.src, true), false) + ssrAttribute("alt", (_a2 = escape(img.alt, true)) != null ? _a2 : "", false), `col-span-1 row-span-1 col-start-1 row-start-1 w-full transition-all duration-700 ${i === current() ? "scale-110 opacity-100" : "scale-100 opacity-0"}`, ssrStyle(i === current() ? {
          "animation": "ken-burns 8s ease-in-out infinite alternate"
        } : void 0));
      })));
    }
    if (t === "flip") {
      return ssr(_tmpl$5$2, ssrHydrationKey(), ssrStyleProperty("perspective:", "1200px"), escape(props.images.map((img, i) => {
        var _a2;
        return ssr(_tmpl$6, ssrHydrationKey() + ssrAttribute("src", escape(img.src, true), false) + ssrAttribute("alt", (_a2 = escape(img.alt, true)) != null ? _a2 : "", false), ssrStyleProperty("transform:", `rotateY(${i === current() ? "0deg" : "180deg"})`) + ssrStyleProperty(";backfaceVisibility:", "hidden"));
      })));
    }
    if (t === "cube") {
      return ssr(_tmpl$5$2, ssrHydrationKey(), ssrStyleProperty("perspective:", "800px"), escape(props.images.map((img, i) => {
        var _a2;
        return ssr(_tmpl$7, ssrHydrationKey() + ssrAttribute("src", escape(img.src, true), false) + ssrAttribute("alt", (_a2 = escape(img.alt, true)) != null ? _a2 : "", false), ssrStyleProperty("transform:", `
                  rotateY(${i === current() ? "0deg" : "90deg"})
                  translateZ(${i === current() ? "0px" : "-200px"})
                `) + ssrStyleProperty(";opacity:", i === current() ? 1 : 0) + ssrStyleProperty(";backfaceVisibility:", "hidden"));
      })));
    }
    const isVertical = t === "slide-up" || t === "slide-down";
    const translate = isVertical ? "translateY" : "translateX";
    return ssr(_tmpl$8, ssrHydrationKey(), `flex ${isVertical ? "flex-col" : ""} transition-transform duration-500 ease-out`, ssrStyleProperty("transform:", `${escape(translate, true)}(${-current() * 100}%)`), escape(props.images.map((img) => {
      var _a2;
      return ssr(_tmpl$9, ssrHydrationKey(), `min-w-0 ${isVertical ? "h-full w-full shrink-0" : "w-full shrink-0"}`, ssrAttribute("src", escape(img.src, true), false) + ssrAttribute("alt", (_a2 = escape(img.alt, true)) != null ? _a2 : "", false));
    })));
  };
  return ssr(_tmpl$0, ssrHydrationKey(), `group relative ${(_b = escape(props.class, true)) != null ? _b : ""}`, props.labelPosition === "above" && label() && ssr(_tmpl$1, ssrHydrationKey(), escape(label())), escape(renderImages()), props.labelPosition !== "above" && label() && ssr(_tmpl$10, ssrHydrationKey(), escape(label())), props.showControls !== false && escape([ssr(_tmpl$11, ssrHydrationKey()), ssr(_tmpl$12, ssrHydrationKey())]), (() => {
    const total = n();
    const maxDots = 5;
    const half = Math.floor(maxDots / 2);
    let start = current() - half;
    let end = start + maxDots;
    if (start < 0) {
      start = 0;
      end = maxDots;
    }
    if (end > total) {
      end = total;
      start = total - maxDots;
    }
    return escape(props.images.map((_, i) => ssr(_tmpl$13, ssrHydrationKey(), `h-2 rounded-full transition-all duration-300 ${i >= start && i < end ? "" : "hidden"} ${i === current() ? "w-6 bg-primary" : "w-2 bg-base-50/40 hover:bg-base-50"}`)));
  })());
};
const themes = [{
  src: "imgs/ayu-dark.png",
  label: "Ayu Dark"
}, {
  src: "imgs/dracula.png",
  label: "Dracula"
}, {
  src: "imgs/nord.png",
  label: "Nord"
}, {
  src: "imgs/catppuccin.png",
  label: "Catppuccin"
}];
const ThemeSlider = () => {
  return createComponent(ImageSlider, {
    get images() {
      return themes.map((t) => ({
        src: t.src,
        alt: t.label,
        label: t.label
      }));
    },
    labelPosition: "above",
    animation: "blur",
    interval: 5e3
  });
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
var _tmpl$$b = '<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>';
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
  }, rest), () => ssr(_tmpl$$b), true);
};
var _tmpl$$a = '<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>';
const Code = (props) => {
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
  }, rest), () => ssr(_tmpl$$a), true);
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
var _tmpl$$9 = ["<div", ' class="grid grid-cols-1 md:grid-cols-3 gap-6">', "</div>"], _tmpl$2$7 = ["<span", ' class="text-xs font-semibold uppercase tracking-widest text-primary-100">', "</span>"], _tmpl$3$5 = ["<h3", ' class="text-lg font-bold text-white">', "</h3>"], _tmpl$4$3 = ["<p", ' class="text-sm text-fg leading-relaxed">', "</p>"];
const FeaturesSection = () => {
  const features = [{
    label: "Extend",
    title: "Plugin System",
    desc: "Custom Lua scripting with hooks for keybindings, menus, and deep OS integration. Extend without recompiling."
  }, {
    label: "Speed",
    title: "Fuzzy Search",
    desc: "Instant filtering across thousands of .desktop entries. Type a few characters and results appear in milliseconds."
  }, {
    label: "Style",
    title: "Custom Themes",
    desc: "Full visual customization with custom colors, layouts, and styles. Create your own look or pick from 60+ themes."
  }];
  return ssr(_tmpl$$9, ssrHydrationKey(), escape(features.map((f) => createComponent(Card, {
    "class": "p-6 flex flex-col gap-2",
    get children() {
      return [ssr(_tmpl$2$7, ssrHydrationKey(), escape(f.label)), ssr(_tmpl$3$5, ssrHydrationKey(), escape(f.title)), ssr(_tmpl$4$3, ssrHydrationKey(), escape(f.desc))];
    }
  }))));
};
var _tmpl$$8 = ["<div", ' class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">', "</div>"], _tmpl$2$6 = ["<div", ' class="text-xs font-semibold uppercase tracking-widest text-muted">', "</div>"], _tmpl$3$4 = ["<div", ' class="text-3xl sm:text-4xl font-black text-primary"><!--$-->', "<!--/--><!--$-->", "<!--/--></div>"], _tmpl$4$2 = ["<span", ' class="text-xs font-semibold text-fg align-top">', "</span>"];
const StatsSection = () => {
  const stats = [{
    value: "45-120",
    unit: "ms",
    label: "Startup Time"
  }, {
    value: "40-170",
    unit: "MB",
    label: "Memory"
  }, {
    value: "60+",
    unit: null,
    label: "Built-in Themes"
  }, {
    value: "Zig + Qt",
    unit: null,
    label: "Tech Stack"
  }];
  return ssr(_tmpl$$8, ssrHydrationKey(), escape(stats.map((s) => createComponent(Card, {
    "class": "py-6 flex flex-col items-center gap-1",
    get children() {
      return [ssr(_tmpl$2$6, ssrHydrationKey(), escape(s.label)), ssr(_tmpl$3$4, ssrHydrationKey(), escape(s.value), s.unit && ssr(_tmpl$4$2, ssrHydrationKey(), escape(s.unit)))];
    }
  }))));
};
var _tmpl$$7 = '<circle cx="11" cy="11" r="8"></circle>', _tmpl$2$5 = '<path d="m21 21-4.35-4.35"></path>';
const Search = (props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return ssrElement("svg", mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
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
  }, rest), () => [ssr(_tmpl$$7), ssr(_tmpl$2$5)], true);
};
var _tmpl$$6 = '<path d="M12 2a3 3 0 0 0-3 3v1H7a2 2 0 0 0-2 2v2h1a3 3 0 0 1 0 6H5v2a2 2 0 0 0 2 2h2v-1a3 3 0 0 1 6 0v1h2a2 2 0 0 0 2-2v-2h-1a3 3 0 0 1 0-6h1V8a2 2 0 0 0-2-2h-2V5a3 3 0 0 0-3-3z"></path>';
const Plugin = (props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return ssrElement("svg", mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
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
  }, rest), () => ssr(_tmpl$$6), true);
};
var _tmpl$$5 = '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>', _tmpl$2$4 = '<circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>', _tmpl$3$3 = '<circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>', _tmpl$4$1 = '<circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>', _tmpl$5$1 = '<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.5-4.5-10-10-10z"></path>';
const Palette = (props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return ssrElement("svg", mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
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
  }, rest), () => [ssr(_tmpl$$5), ssr(_tmpl$2$4), ssr(_tmpl$3$3), ssr(_tmpl$4$1), ssr(_tmpl$5$1)], true);
};
var _tmpl$$4 = '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>';
const Folder = (props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return ssrElement("svg", mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
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
  }, rest), () => ssr(_tmpl$$4), true);
};
var _tmpl$$3 = ["<div", ' class="bg-[#111] border border-border/80 rounded-lg font-mono text-sm leading-relaxed w-full lg:w-[480px] shrink-0 overflow-hidden"><div class="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border-b border-border/60"><span class="w-3 h-3 rounded-full bg-red-500"></span><span class="w-3 h-3 rounded-full bg-yellow-500"></span><span class="w-3 h-3 rounded-full bg-green-500"></span><span class="text-xs text-white/40 ml-2">zenkai@launcher \u2014 bash</span></div><div class="p-4"><div class="flex items-center gap-1.5"><span class="text-green-400 shrink-0">~ $</span><span class="text-white">zenkai --theme=ayu-dark</span></div><div class="text-white/70 mt-1.5 ml-[1.125rem]">Theme set to <span class="text-accent">ayu-dark</span></div><div class="flex items-center gap-1.5 mt-3"><span class="text-green-400 shrink-0">~ $</span><span class="text-white">zenkai launch code</span></div><div class="text-white/70 mt-1.5 ml-[1.125rem]">Visual Studio Code \u2014 <span class="text-green-400">62ms</span></div><div class="flex items-center gap-1.5 mt-3"><span class="text-green-400 shrink-0">~ $</span><span class="text-white">zenkai --plugin=calculator --no-dapps</span><span class="inline-block w-[0.6em] h-[1.2em] bg-yellow-400 animate-[blink_1s_step-end_infinite]"></span></div></div></div>'], _tmpl$2$3 = ["<div", '><h2 class="text-3xl sm:text-4xl font-black text-white mb-10">Powerful Simplicity</h2><div class="flex flex-col lg:flex-row gap-10 items-start"><div class="flex flex-col gap-6 flex-1"><div class="grid grid-cols-1 sm:grid-cols-2 gap-6">', "</div></div><!--$-->", "<!--/--></div></div>"], _tmpl$3$2 = ["<div", ' class="flex gap-4 items-start"><!--$-->', '<!--/--><div class="flex flex-col gap-1"><h3 class="font-bold text-primary-100">', '</h3><p class="text-xs text-fg leading-relaxed">', "</p></div></div>"];
const items = [{
  icon: Search,
  title: "Fuzzy Searching",
  desc: "Type a few characters and instantly find any application across thousands of .desktop entries with smart ranking."
}, {
  icon: Plugin,
  title: "Lua Plugins",
  desc: "Extend functionality with Lua scripts. Create custom menus, keybindings, and deep system integrations."
}, {
  icon: Palette,
  title: "QSS Custom Themes",
  desc: "Full visual customization via Qt stylesheets. Design your own look or choose from 60+ built-in themes."
}, {
  icon: Folder,
  title: "Desktop Scanning",
  desc: "Automatically scans and indexes .desktop files across all standard XDG directories for complete coverage."
}];
const Terminal = () => ssr(_tmpl$$3, ssrHydrationKey());
const PowerfulSimplicity = (props) => {
  var _a;
  return ssr(_tmpl$2$3, ssrHydrationKey() + ssrAttribute("class", (_a = escape(props.class, true)) != null ? _a : "", false), escape(items.map((item) => {
    const Icon = item.icon;
    return ssr(_tmpl$3$2, ssrHydrationKey(), escape(createComponent(Icon, {
      "class": "shrink-0 text-primary",
      size: 20
    })), escape(item.title), escape(item.desc));
  })), escape(createComponent(Terminal, {})));
};
var _tmpl$$2 = ["<span", ">--<!--$-->", "<!--/--><!--$-->", '<!--/--><span class="text-muted"> # <!--$-->', "<!--/--></span></span>"], _tmpl$2$2 = ["<h3", ' class="font-bold text-primary">Flexibility & Customization</h3>'], _tmpl$3$1 = ["<div", ' class="flex flex-col gap-1 font-mono text-xs text-fg">', "</div>"], _tmpl$4 = ["<h3", ' class="font-bold text-primary">Performance & Development</h3>'], _tmpl$5 = ["<div", '><div class="flex flex-col lg:flex-row gap-6"><!--$-->', "<!--/--><!--$-->", '<!--/--></div><h3 class="text-center text-sm text-muted mt-4 mb-6">Read more in the <a href="/docs" class="text-primary">docs</a></h3></div>'];
const FlexFlags = [{
  label: "menu",
  value: "name|cmd|icon",
  description: "Add a custom menu entry"
}, {
  label: "theme",
  value: "NAME",
  description: "Change the launcher theme"
}, {
  label: "fullscreen",
  description: "Start fullscreen"
}, {
  label: "monitor",
  value: "N",
  description: "Open on a specific monitor"
}, {
  label: "show-actions",
  description: "Display item actions"
}];
const PerfFlags = [{
  label: "no-plugins",
  description: "Disable plugin loading"
}, {
  label: "plugin",
  value: "NAME",
  description: "Load only one plugin"
}, {
  label: "no-dapps",
  description: "Skip desktop app scanning"
}, {
  label: "benchmark-all",
  description: "Benchmark startup stages"
}];
const FlagLine = (flag) => ssr(_tmpl$$2, ssrHydrationKey(), escape(flag.label), flag.value ? `=${escape(flag.value)}` : "", escape(flag.description));
const CliFlags = (_props) => {
  return ssr(_tmpl$5, ssrHydrationKey(), escape(createComponent(Card, {
    "class": "p-5 flex flex-col gap-3 flex-1",
    get children() {
      return [ssr(_tmpl$2$2, ssrHydrationKey()), ssr(_tmpl$3$1, ssrHydrationKey(), escape(FlexFlags.map(FlagLine)))];
    }
  })), escape(createComponent(Card, {
    "class": "p-5 flex flex-col gap-3 flex-1",
    get children() {
      return [ssr(_tmpl$4, ssrHydrationKey()), ssr(_tmpl$3$1, ssrHydrationKey(), escape(PerfFlags.map(FlagLine)))];
    }
  })));
};
var _tmpl$$1 = ["<h2", ' class="text-center text-2xl text-white font-bold">Ready to power up your app launching?</h2>'], _tmpl$2$1 = ["<p", ' class="text-center max-w-lg mx-auto text-muted">Zenkai is a fast, modern app launcher your desktop deserves. Built with Zig and Qt6 for maximum responsiveness and balance between convenience and performance.</p>'], _tmpl$3 = ["<div", ' class="flex justify-center">', "</div>"];
const Readybar = (props) => {
  const {
    children
  } = props;
  return createComponent(Card, {
    "class": "flex flex-col gap-4 py-8 mb-8",
    get children() {
      return [ssr(_tmpl$$1, ssrHydrationKey()), ssr(_tmpl$2$1, ssrHydrationKey()), ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(Button, {
        variant: "solid",
        "class": "cursor-pointer gap-2 text-black fill-black",
        get children() {
          return [createComponent(Download, {}), "DOWNLOAD ZENKAI"];
        }
      })))];
    }
  });
};
var _tmpl$ = ["<div", ' class="flex flex-col sm:flex-row gap-6 items-center mt-8 sm:mt-16 px-4 sm:px-6"><div class="flex flex-col gap-4 w-full items-center sm:items-start text-center sm:text-left"><div>', '</div><div class="main-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white">Fast & Performant <br><span class="text-primary">App Launcher</span> <br>Built with <span class="text-primary">Zig</span>.</div><div class="w-full max-w-[520px] mt-4"><p>A fast app launcher for Linux and OSX written in Zig with Qt. Scans .desktop files and filters through them with instant fuzzy matching.<br><br>Also supports custom themes, keyboard shortcuts, custom menu input & a robust and flexible Lua Plugin system.</p><div class="mt-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"><!--$-->', "<!--/--><!--$-->", '<!--/--></div></div></div><div class="w-full sm:w-[400px] lg:w-[450px] shrink-0">', "</div></div>"], _tmpl$2 = ["<div", ' class="mt-24 sm:mt-32 px-4 sm:px-6 flex flex-col gap-6 sm:gap-8"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></div>"];
const id$$ = "src/routes/index.tsx?pick=default&pick=$css";
function Home() {
  return createComponent(MainLayout, {
    get children() {
      return [ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(ChipVersion, {})), escape(createComponent(Button, {
        variant: "solid",
        "class": "cursor-pointer gap-2 text-black fill-black",
        get children() {
          return [createComponent(Download, {}), "DOWNLOAD"];
        }
      })), escape(createComponent(Button, {
        variant: "outlined-white",
        "class": "cursor-pointer gap-2 text-white hover:text-black fill-white hover:fill-black transition-all",
        get children() {
          return [createComponent(Code, {
            size: 18
          }), "Source Code"];
        }
      })), escape(createComponent(ThemeSlider, {}))), ssr(_tmpl$2, ssrHydrationKey(), escape(createComponent(FeaturesSection, {})), escape(createComponent(StatsSection, {})), escape(createComponent(PowerfulSimplicity, {
        "class": "mt-16 sm:mt-20"
      })), escape(createComponent(CliFlags, {})), escape(createComponent(Readybar, {})))];
    }
  });
}

export { Home as default, id$$ };
//# sourceMappingURL=index-C5_tp-NC.mjs.map
