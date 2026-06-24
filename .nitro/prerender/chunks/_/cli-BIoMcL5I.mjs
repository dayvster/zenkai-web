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
    ...useMDXComponents(),
    ...props.components
  };
  return createComponent(DocsLayout, {
    get children() {
      return [createComponent(_components.h1, {
        children: "CLI Flags"
      }), createComponent(_components.p, {
        children: "Zenkai provides a full set of command-line flags for customization and control."
      }), createComponent(_components.h2, {
        children: "Flexibility & Customization"
      }), createComponent(_components.p, {
        get children() {
          return ["| Flag | Value | Description |\n|------|-------|-------------|\n| ", createComponent(_components.code, {
            children: "--menu"
          }), " | ", createComponent(_components.code, {
            children: "name|cmd|icon"
          }), " | Add a custom menu entry |\n| ", createComponent(_components.code, {
            children: "--theme"
          }), " | ", createComponent(_components.code, {
            children: "NAME"
          }), " | Change the launcher theme |\n| ", createComponent(_components.code, {
            children: "--fullscreen"
          }), " | \u2014 | Start in fullscreen mode |\n| ", createComponent(_components.code, {
            children: "--monitor"
          }), " | ", createComponent(_components.code, {
            children: "N"
          }), " | Open on a specific monitor |\n| ", createComponent(_components.code, {
            children: "--show-actions"
          }), " | \u2014 | Display available actions for each item |"];
        }
      }), createComponent(_components.h2, {
        children: "Performance & Development"
      }), createComponent(_components.p, {
        get children() {
          return ["| Flag | Value | Description |\n|------|-------|-------------|\n| ", createComponent(_components.code, {
            children: "--no-plugins"
          }), " | \u2014 | Disable all plugin loading |\n| ", createComponent(_components.code, {
            children: "--plugin"
          }), " | ", createComponent(_components.code, {
            children: "NAME"
          }), " | Load only one specific plugin |\n| ", createComponent(_components.code, {
            children: "--no-dapps"
          }), " | \u2014 | Skip desktop application scanning |\n| ", createComponent(_components.code, {
            children: "--benchmark-all"
          }), " | \u2014 | Benchmark every startup stage |"];
        }
      }), createComponent(_components.h2, {
        children: "Examples"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: '# Use a dark theme\nzenkai --theme=ayu-dark\n\n# Fullscreen on second monitor\nzenkai --fullscreen --monitor=2\n\n# Load only the calculator plugin for testing\nzenkai --plugin=calculator\n\n# Benchmark startup performance\nzenkai --benchmark-all\n\n# Custom menu with launch\nzenkai --menu="Calc|qalculate|calc"\n'
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
//# sourceMappingURL=cli-BIoMcL5I.mjs.map
