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
    h3: "h3",
    li: "li",
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
        children: "Plugins"
      }), createComponent(_components.p, {
        get children() {
          return ["Zenkai supports ", createComponent(_components.strong, {
            children: "Lua scripting"
          }), " for extending functionality. Drop a directory into ", createComponent(_components.code, {
            children: "external/plugins/"
          }), " with a ", createComponent(_components.code, {
            children: "manifest.json"
          }), " and a ", createComponent(_components.code, {
            children: "main.lua"
          }), " and the launcher picks it up automatically."];
        }
      }), createComponent(_components.h2, {
        children: "manifest.json"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-json",
            children: '{\n  "name": "my-plugin",\n  "version": "1.0.0",\n  "main": "main.lua",\n  "description": "What it does",\n  "author": "you"\n}\n'
          });
        }
      }), createComponent(_components.h2, {
        children: "Hooks"
      }), createComponent(_components.p, {
        children: "Hooks are detected automatically from your Lua functions."
      }), createComponent(_components.h3, {
        get children() {
          return createComponent(_components.code, {
            children: "on_query(query)"
          });
        }
      }), createComponent(_components.p, {
        get children() {
          return ["Called when the user types. Add results with ", createComponent(_components.code, {
            children: "api.add_result()"
          }), "."];
        }
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-lua",
            children: 'function on_query(query)\n  if query == "ping" then\n    api.add_result("Pong!", "it works", "face-smile", "NoReturn")\n  end\nend\n'
          });
        }
      }), createComponent(_components.h3, {
        get children() {
          return createComponent(_components.code, {
            children: "on_open(id)"
          });
        }
      }), createComponent(_components.p, {
        get children() {
          return ["Called when a result is selected. The ", createComponent(_components.code, {
            children: "id"
          }), " matches what ", createComponent(_components.code, {
            children: "add_result"
          }), " returned."];
        }
      }), createComponent(_components.h2, {
        children: "API"
      }), createComponent(_components.p, {
        get children() {
          return ["| Function | Description |\n|----------|-------------|\n| ", createComponent(_components.code, {
            children: "api.add_result(title, subtitle, icon, result_type)"
          }), " | Add a result to the list. Returns an id for on_open(). |\n| ", createComponent(_components.code, {
            children: "api.open_url(url)"
          }), " | Open a URL when the result is selected |\n| ", createComponent(_components.code, {
            children: "api.log(message)"
          }), " | Print to the debug log |"];
        }
      }), createComponent(_components.p, {
        get children() {
          return [createComponent(_components.code, {
            children: "result_type"
          }), " is optional:"];
        }
      }), createComponent(_components.ul, {
        get children() {
          return ["\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.code, {
                children: '"ExecCmd"'
              }), " (default) - Closes the launcher and fires ", createComponent(_components.code, {
                children: "on_open"
              })];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.code, {
                children: '"NoReturn"'
              }), " - Keeps the launcher open (useful for calculators, dialogs, etc.)"];
            }
          }), "\n"];
        }
      }), createComponent(_components.h2, {
        children: "Loading Plugins"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: "# Auto-load all plugins in external/plugins/\nzenkai\n\n# Load only one specific plugin\nzenkai --plugin=calculator\n\n# Load multiple specific plugins\nzenkai --plugin=calculator --plugin=notes\n\n# Disable all plugins\nzenkai --no-plugins\n\n# Plugin-only mode, no desktop apps\nzenkai --no-dapps --plugin=calculator\n\n# Calculator with a theme, no icons\nzenkai --no-dapps --plugin=calculator --theme=dracula --no-icons\n"
          });
        }
      }), createComponent(_components.h2, {
        children: "Example Plugin"
      }), createComponent(_components.p, {
        get children() {
          return ["See ", createComponent(_components.code, {
            children: "external/plugins/calculator/"
          }), " for a full working example."];
        }
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-lua",
            children: 'function on_query(query)\n  local result = try_calculate(query)\n  if result then\n    api.add_result(result, "press enter to copy", "calc", "NoReturn")\n  end\nend\n\nfunction on_open(id)\n  api.open_url("https://www.google.com/search?q=" .. id)\nend\n'
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
//# sourceMappingURL=plugins-CKV__MUV.mjs.map
