import { createComponent, mergeProps, ssr, ssrHydrationKey, escape } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { useMDXComponents } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-mdx@0.0.7_solid-js@1.9.11_vite@7.3.1_jiti@2.7.0_lightningcss@1.32.0_terser@5.46.0_/node_modules/solid-mdx/dist/index.mjs';
import { createSignal } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/dist/server.js';

var _tmpl$$1 = ["<button", ' class="increment" type="button">Clicks: <!--$-->', "<!--/--></button>"];
function Counter() {
  const [count, setCount] = createSignal(0);
  return ssr(_tmpl$$1, ssrHydrationKey(), escape(count()));
}
var _tmpl$ = ["<div", ' class="flex flex-col items-center gap-4 mt-8"><div class="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white font-semibold shadow-lg">', '</div><button class="cursor-pointer rounded-lg bg-gray-800 px-4 py-2 text-sm text-white hover:bg-gray-700 active:scale-95 transition-all">', "</button></div>"];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return [createComponent(_components.h1, {
    children: "Hello World!"
  }), "\n", createComponent(Counter, {}), "\n", ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(_components.p, {
    children: "Tailwind v4 is working!"
  })), escape(createComponent(_components.p, {
    children: "Click me"
  }))), "\n", createComponent(_components.p, {
    get children() {
      return ["Visit ", createComponent(_components.a, {
        href: "https://solidjs.com",
        children: "https://solidjs.com"
      }), " to learn how to build Solid apps."];
    }
  })];
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent, props);
    }
  })) : _createMdxContent(props);
}

export { MDXContent as default };
//# sourceMappingURL=index-BoSMfAh_.mjs.map
