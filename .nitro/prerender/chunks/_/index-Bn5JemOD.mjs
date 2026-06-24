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
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return createComponent(DocsLayout, {
    get children() {
      return [createComponent(_components.h1, {
        children: "Overview"
      }), createComponent(_components.p, {
        get children() {
          return ["Zenkai is a fast app launcher for Linux and macOS written in ", createComponent(_components.strong, {
            children: "Zig"
          }), " with ", createComponent(_components.strong, {
            children: "Qt6"
          }), ". It scans .desktop files and filters through them with instant fuzzy matching."];
        }
      }), createComponent(_components.h2, {
        children: "What is Zenkai?"
      }), createComponent(_components.p, {
        children: "Zenkai is designed to be the fastest way to launch applications on your desktop. Unlike traditional application menus, Zenkai provides instant search results as you type, with smart ranking that learns your habits."
      }), createComponent(_components.h2, {
        children: "Key Features"
      }), createComponent(_components.ul, {
        get children() {
          return ["\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Fuzzy Search"
              }), " \u2014 Type a few characters and find any application instantly"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Lua Plugin System"
              }), " \u2014 Extend functionality with Lua scripts"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "60+ Themes"
              }), " \u2014 Full visual customization via Qt stylesheets"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Desktop Scanning"
              }), " \u2014 Automatic indexing of all XDG directories"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "CLI Control"
              }), " \u2014 Full command-line interface for power users"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Keyboard Shortcuts"
              }), " \u2014 Navigate entirely from the keyboard"];
            }
          }), "\n"];
        }
      }), createComponent(_components.h2, {
        children: "Tech Stack"
      }), createComponent(_components.p, {
        children: "| Component | Technology |\n|-----------|------------|\n| Language | Zig |\n| UI Framework | Qt6 |\n| Scripting | Lua |\n| Build System | CMake |\n| Platforms | Linux (X11/Wayland), macOS |"
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
//# sourceMappingURL=index-Bn5JemOD.mjs.map
