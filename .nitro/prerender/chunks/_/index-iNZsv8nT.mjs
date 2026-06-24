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
    a: "a",
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
        children: "A fast app launcher for Linux. Written in Zig with Qt6."
      }), createComponent(_components.p, {
        children: "It scans your .desktop files from the usual places, shows you everything in a searchable list, and lets you filter through it as you type with fuzzy matching."
      }), createComponent(_components.h2, {
        children: "Key Features"
      }), createComponent(_components.ul, {
        get children() {
          return ["\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Fuzzy Search"
              }), " - Type a few characters and find any application instantly"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "65+ Themes"
              }), " - Full visual customization via Qt stylesheets"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Lua Plugin System"
              }), " - Extend with Lua scripts via on_query/on_open hooks"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Desktop Actions"
              }), " - Parse [Desktop Action] entries from .desktop files"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Desktop Scanning"
              }), " - Automatic indexing of all XDG directories"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Icon Grid View"
              }), " - Fullscreen icon grid layout with launchpad theme"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Full CLI Control"
              }), " - 25+ command-line flags for every setting"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Translations"
              }), " - Multi-language support with --language flag"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Theme Reloader"
              }), " - Live QSS reloading for theme development"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Low Memory Mode"
              }), " - 20-50MB with included zenkai.sh wrapper"];
            }
          }), "\n"];
        }
      }), createComponent(_components.h2, {
        children: "Tech Stack"
      }), createComponent(_components.p, {
        children: "| Component | Technology |\n|-----------|------------|\n| Language | Zig |\n| UI Framework | Qt6 (Core, Gui, Widgets) |\n| Scripting | Lua (via ziglua) |\n| Build System | Zig Build |\n| Platforms | Linux (X11/Wayland), macOS |"
      }), createComponent(_components.h2, {
        children: "Credits"
      }), createComponent(_components.p, {
        get children() {
          return ["Built on ", createComponent(_components.a, {
            href: "https://github.com/rcalixte/libqt6zig",
            children: "libqt6zig"
          }), " by ", createComponent(_components.a, {
            href: "https://github.com/rcalixte",
            children: "rcalixte"
          }), " - Zig bindings for Qt6."];
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
//# sourceMappingURL=index-iNZsv8nT.mjs.map
