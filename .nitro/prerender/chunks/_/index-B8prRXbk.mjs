import { createComponent, mergeProps, ssr, ssrHydrationKey, escape } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { useMDXComponents } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-mdx@0.0.7_solid-js@1.9.11_vite@7.3.1_jiti@2.7.0_lightningcss@1.32.0_terser@5.46.0_/node_modules/solid-mdx/dist/index.mjs';
import { createSignal } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/dist/server.js';

var _tmpl$ = ["<button", ' class="increment" type="button">Clicks: <!--$-->', "<!--/--></button>"];
function Counter() {
  const [count, setCount] = createSignal(0);
  return ssr(_tmpl$, ssrHydrationKey(), escape(count()));
}
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
  }), "\n", createComponent(Counter, {}), "\n", createComponent(_components.p, {
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
//# sourceMappingURL=index-B8prRXbk.mjs.map
