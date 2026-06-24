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
    p: "p",
    pre: "pre",
    strong: "strong",
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
          }), " for extending functionality. Plugins can hook into keybindings, create custom menus, and integrate deeply with your system."];
        }
      }), createComponent(_components.h2, {
        children: "Plugin Structure"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-lua",
            children: '-- Example Zenkai plugin\nlocal plugin = {\n  name = "calculator",\n  version = "1.0",\n  author = "you"\n}\n\nfunction plugin:init()\n  -- Register a keybinding\n  zenkai.bind("ctrl+shift+c", function()\n    zenkai.open_menu("calculator")\n  end)\n\n  -- Add a custom menu\n  zenkai.add_menu({\n    id = "calculator",\n    title = "Calculator",\n    items = {\n      { label = "Basic", cmd = "qalculate" },\n      { label = "Scientific", cmd = "qalculate --scientific" },\n    }\n  })\nend\n\nreturn plugin\n'
          });
        }
      }), createComponent(_components.h2, {
        children: "Loading Plugins"
      }), createComponent(_components.p, {
        get children() {
          return ["Place your plugin ", createComponent(_components.code, {
            children: ".lua"
          }), " file in the plugins directory for auto-loading, or load a specific plugin:"];
        }
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: "# Load only one plugin\nzenkai --plugin=calculator\n\n# Disable all plugins\nzenkai --no-plugins\n"
          });
        }
      }), createComponent(_components.h2, {
        children: "Plugin API"
      }), createComponent(_components.p, {
        get children() {
          return ["| Function | Description |\n|----------|-------------|\n| ", createComponent(_components.code, {
            children: "zenkai.bind(key, callback)"
          }), " | Register a keyboard shortcut |\n| ", createComponent(_components.code, {
            children: "zenkai.open_menu(id)"
          }), " | Open a custom menu by ID |\n| ", createComponent(_components.code, {
            children: "zenkai.add_menu(config)"
          }), " | Register a new menu |\n| ", createComponent(_components.code, {
            children: "zenkai.execute(cmd)"
          }), " | Run a shell command |\n| ", createComponent(_components.code, {
            children: "zenkai.notify(msg)"
          }), " | Show a desktop notification |"];
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
//# sourceMappingURL=plugins-BuhdMN-P.mjs.map
