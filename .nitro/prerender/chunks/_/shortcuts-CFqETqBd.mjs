import { createComponent, mergeProps } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { useMDXComponents } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-mdx@0.0.7_solid-js@1.9.11_vite@7.3.1_jiti@2.7.0_lightningcss@1.32.0_terser@5.46.0_/node_modules/solid-mdx/dist/index.mjs';
import { D as DocsLayout } from './DocsLayout-BQ--F7ga.mjs';
import './MainLayout-NKietwuP.mjs';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/dist/server.js';
import '../virtual/entry.mjs';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/h3@1.15.5/node_modules/h3/dist/index.mjs';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/storage/dist/storage.js';

function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return createComponent(DocsLayout, {
    get children() {
      return [createComponent(_components.h1, {
        children: "Keyboard Shortcuts"
      }), createComponent(_components.p, {
        children: "Navigate Zenkai entirely from the keyboard for maximum efficiency."
      }), createComponent(_components.h2, {
        children: "Basic Navigation"
      }), createComponent(_components.p, {
        get children() {
          return ["| Key | Action |\n|-----|--------|\n| ", createComponent(_components.code, {
            children: "Type"
          }), " | Filter applications by name |\n| ", createComponent(_components.code, {
            children: "Enter"
          }), " | Launch the selected application |\n| ", createComponent(_components.code, {
            children: "Esc"
          }), " | Close Zenkai |"];
        }
      }), createComponent(_components.h2, {
        children: "List Navigation"
      }), createComponent(_components.p, {
        get children() {
          return ["| Key | Action |\n|-----|--------|\n| ", createComponent(_components.code, {
            children: "Ctrl+N"
          }), " or ", createComponent(_components.code, {
            children: "Down"
          }), " | Select next item |\n| ", createComponent(_components.code, {
            children: "Ctrl+P"
          }), " or ", createComponent(_components.code, {
            children: "Up"
          }), " | Select previous item |\n| ", createComponent(_components.code, {
            children: "Ctrl+F"
          }), " | Focus search input |"];
        }
      }), createComponent(_components.h2, {
        children: "Tips"
      }), createComponent(_components.ul, {
        get children() {
          return ["\n", createComponent(_components.li, {
            children: "The search is fuzzy \u2014 you don't need to type the full name"
          }), "\n", createComponent(_components.li, {
            children: "Results are ranked by relevance and usage frequency"
          }), "\n", createComponent(_components.li, {
            children: "Keyboard shortcuts can be customized via the Lua plugin system"
          }), "\n"];
        }
      })];
    }
  });
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
//# sourceMappingURL=shortcuts-CFqETqBd.mjs.map
