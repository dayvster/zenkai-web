import { createComponent, mergeProps, ssr, ssrHydrationKey } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { useMDXComponents } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-mdx@0.0.7_solid-js@1.9.11_vite@7.3.1_jiti@2.7.0_lightningcss@1.32.0_terser@5.46.0_/node_modules/solid-mdx/dist/index.mjs';

var _tmpl$ = ["<div", ' class="flex flex-col gap-4 max-w-md mx-auto mt-8"><a href="/blog/hello-tailwind" class="rounded-lg border border-gray-200 p-4 text-left hover:border-blue-400 hover:shadow-md transition-all"><div class="font-semibold text-lg">Hello Tailwind</div><div class="text-sm text-gray-500">Getting started with Tailwind CSS v4</div></a><a href="/blog/ssg-with-solidstart" class="rounded-lg border border-gray-200 p-4 text-left hover:border-blue-400 hover:shadow-md transition-all"><div class="font-semibold text-lg">SSG with SolidStart</div><div class="text-sm text-gray-500">Static site generation explained</div></a></div>'];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    ...useMDXComponents(),
    ...props.components
  };
  return [createComponent(_components.h1, {
    children: "Blog"
  }), "\n", ssr(_tmpl$, ssrHydrationKey())];
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
//# sourceMappingURL=index-CBBaJshA.mjs.map
