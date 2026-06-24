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
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return createComponent(DocsLayout, {
    get children() {
      return [createComponent(_components.h1, {
        children: "Themes"
      }), createComponent(_components.p, {
        get children() {
          return ["Zenkai ships with ", createComponent(_components.strong, {
            children: "over 60 built-in themes"
          }), ". Switch between them at any time using the ", createComponent(_components.code, {
            children: "--theme"
          }), " flag:"];
        }
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: "zenkai --theme=catppuccin\n"
          });
        }
      }), createComponent(_components.h2, {
        children: "Built-in Themes"
      }), createComponent(_components.p, {
        children: "Some of the available themes include:"
      }), createComponent(_components.ul, {
        get children() {
          return ["\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Catppuccin"
              }), " (Mocha, Macchiato, Frapp\xE9, Latte)"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Tokyo Night"
              }), " (Storm, Moon, Light)"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return createComponent(_components.strong, {
                children: "Nord"
              });
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return createComponent(_components.strong, {
                children: "Dracula"
              });
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Solarized"
              }), " (Dark, Light)"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return createComponent(_components.strong, {
                children: "Gruvbox"
              });
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Rose Pine"
              }), " (Dawn)"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Kanagawa"
              }), " (Dragon, Lotus)"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Monokai"
              }), " (Pro)"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "One Dark"
              }), " / ", createComponent(_components.strong, {
                children: "One Light"
              })];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Ayu"
              }), " (Dark, Mirage)"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return createComponent(_components.strong, {
                children: "And many more..."
              });
            }
          }), "\n"];
        }
      }), createComponent(_components.h2, {
        children: "Custom Themes"
      }), createComponent(_components.p, {
        get children() {
          return ["Themes use ", createComponent(_components.strong, {
            children: "Qt stylesheets (QSS)"
          }), " for full visual customization. To create your own theme:"];
        }
      }), createComponent(_components.ol, {
        get children() {
          return ["\n", createComponent(_components.li, {
            get children() {
              return ["Create a ", createComponent(_components.code, {
                children: ".qss"
              }), " file with your styles"];
            }
          }), "\n", createComponent(_components.li, {
            children: "Place it in the themes directory"
          }), "\n", createComponent(_components.li, {
            get children() {
              return ["Select it with ", createComponent(_components.code, {
                children: "--theme=your-theme-name"
              })];
            }
          }), "\n"];
        }
      }), createComponent(_components.p, {
        children: "Each theme can customize colors, spacing, fonts, borders, and every visual aspect of the launcher."
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
//# sourceMappingURL=themes-DRM1nT1E.mjs.map
