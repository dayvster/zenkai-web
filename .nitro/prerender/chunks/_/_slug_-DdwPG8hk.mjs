import { createComponent, mergeProps, ssr, ssrHydrationKey, escape } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { useMDXComponents } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-mdx@0.0.7_solid-js@1.9.11_vite@7.3.1_jiti@2.7.0_lightningcss@1.32.0_terser@5.46.0_/node_modules/solid-mdx/dist/index.mjs';
import { u as useParams } from '../virtual/entry.mjs';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/h3@1.15.5/node_modules/h3/dist/index.mjs';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/dist/server.js';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/storage/dist/storage.js';

var _tmpl$ = ["<a", ' href="/blog" class="inline-block mb-4 text-sm text-blue-600 hover:underline">\u2190 Back to blog</a>'], _tmpl$2 = ["<code", ' class="rounded bg-gray-200 px-1">', "</code>"], _tmpl$3 = ["<div", ' class="mt-8 rounded-lg bg-gray-50 p-6 text-sm text-gray-600">', "</div>"];
const route = {
  info: {
    enableScrollRestoration: false
  }
};
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return [ssr(_tmpl$, ssrHydrationKey()), "\n", createComponent(_components.h1, {
    get children() {
      return ["Blog Post: ", useParams().slug];
    }
  }), "\n", ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(_components.p, {
    get children() {
      return ["This page was prerendered at build time via SSG.\nThe slug ", ssr(_tmpl$2, ssrHydrationKey(), escape(useParams().slug)), "\nwas specified in the prerender config."];
    }
  })))];
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

export { MDXContent as default, route };
//# sourceMappingURL=_slug_-DdwPG8hk.mjs.map
