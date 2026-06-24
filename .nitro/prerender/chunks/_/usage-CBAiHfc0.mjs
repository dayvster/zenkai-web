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
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return createComponent(DocsLayout, {
    get children() {
      return [createComponent(_components.h1, {
        children: "Usage"
      }), createComponent(_components.p, {
        children: "Launch Zenkai from your terminal or application menu:"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: "zenkai\n"
          });
        }
      }), createComponent(_components.p, {
        get children() {
          return ["Start typing to filter through your applications. The results update instantly as you type. Press ", createComponent(_components.strong, {
            children: "Enter"
          }), " to launch the selected application."];
        }
      }), createComponent(_components.h2, {
        children: "Basic Workflow"
      }), createComponent(_components.ol, {
        get children() {
          return ["\n", createComponent(_components.li, {
            children: "Open Zenkai (via hotkey or terminal)"
          }), "\n", createComponent(_components.li, {
            children: "Type part of the application name"
          }), "\n", createComponent(_components.li, {
            children: "Results appear instantly with fuzzy matching"
          }), "\n", createComponent(_components.li, {
            get children() {
              return ["Press ", createComponent(_components.strong, {
                children: "Enter"
              }), " to launch, or ", createComponent(_components.strong, {
                children: "Esc"
              }), " to close"];
            }
          }), "\n"];
        }
      }), createComponent(_components.h2, {
        children: "Examples"
      }), createComponent(_components.p, {
        children: "Launch with a specific theme:"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: "zenkai --theme=catppuccin\n"
          });
        }
      }), createComponent(_components.p, {
        children: "Start in fullscreen mode on monitor 1:"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: "zenkai --fullscreen --monitor=1\n"
          });
        }
      }), createComponent(_components.p, {
        children: "Add a custom menu entry:"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: 'zenkai --menu="Terminal|alacritty|terminal"\n'
          });
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
//# sourceMappingURL=usage-CBAiHfc0.mjs.map
