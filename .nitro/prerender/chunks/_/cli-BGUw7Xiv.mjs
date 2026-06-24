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
        children: "Window & Display"
      }), createComponent(_components.p, {
        get children() {
          return ["| Flag | Value | Description |\n|------|-------|-------------|\n| ", createComponent(_components.code, {
            children: "--size"
          }), " | ", createComponent(_components.code, {
            children: "N"
          }), " | Icon size in pixels (default: 32) |\n| ", createComponent(_components.code, {
            children: "--width"
          }), " | ", createComponent(_components.code, {
            children: "N"
          }), " | Window width in pixels (default: 600) |\n| ", createComponent(_components.code, {
            children: "--height"
          }), " | ", createComponent(_components.code, {
            children: "N"
          }), " | Window height in pixels (default: 500) |\n| ", createComponent(_components.code, {
            children: "--fullscreen"
          }), " | \u2014 | Start in fullscreen mode |\n| ", createComponent(_components.code, {
            children: "--monitor"
          }), " | ", createComponent(_components.code, {
            children: "N"
          }), " | Open on a specific monitor (0-based) |\n| ", createComponent(_components.code, {
            children: "--list-monitors"
          }), " | \u2014 | List all available monitors and exit |\n| ", createComponent(_components.code, {
            children: "--no-icons"
          }), " | \u2014 | Hide icons in the list |\n| ", createComponent(_components.code, {
            children: "--no-bottom-bar"
          }), " | \u2014 | Hide the bottom bar |"];
        }
      }), createComponent(_components.h2, {
        children: "Theme"
      }), createComponent(_components.p, {
        get children() {
          return ["| Flag | Value | Description |\n|------|-------|-------------|\n| ", createComponent(_components.code, {
            children: "--theme"
          }), " | ", createComponent(_components.code, {
            children: "NAME"
          }), " or ", createComponent(_components.code, {
            children: "path"
          }), " | Set theme by name or path to .qss file |\n| ", createComponent(_components.code, {
            children: "--list-themes"
          }), " | \u2014 | List all 65+ built-in themes and exit |\n| ", createComponent(_components.code, {
            children: "--theme-reloader"
          }), " | \u2014 | Watch .qss files and apply changes on the fly (requires --debug) |"];
        }
      }), createComponent(_components.h2, {
        children: "Desktop Actions"
      }), createComponent(_components.p, {
        get children() {
          return ["| Flag | Value | Description |\n|------|-------|-------------|\n| ", createComponent(_components.code, {
            children: "--menu"
          }), " | ", createComponent(_components.code, {
            children: "name\\|cmd\\|icon"
          }), " | Add a custom menu entry (repeatable) |\n| ", createComponent(_components.code, {
            children: "--show-actions"
          }), " | \u2014 | Parse and show [Desktop Action] entries |\n| ", createComponent(_components.code, {
            children: "--actions-bottombar"
          }), " | \u2014 | Show desktop actions in the bottom bar |\n| ", createComponent(_components.code, {
            children: "--no-dapps"
          }), " | \u2014 | Skip scanning .desktop files |"];
        }
      }), createComponent(_components.h2, {
        children: "Plugins"
      }), createComponent(_components.p, {
        get children() {
          return ["| Flag | Value | Description |\n|------|-------|-------------|\n| ", createComponent(_components.code, {
            children: "--no-plugins"
          }), " | \u2014 | Skip loading all plugins |\n| ", createComponent(_components.code, {
            children: "--plugin"
          }), " | ", createComponent(_components.code, {
            children: "NAME"
          }), " | Only load matching plugin (repeatable) |\n| ", createComponent(_components.code, {
            children: "--clipboard"
          }), " | ", createComponent(_components.code, {
            children: "CMD"
          }), " | Clipboard command for plugin results (e.g. ", createComponent(_components.code, {
            children: "wl-copy"
          }), ") |\n| ", createComponent(_components.code, {
            children: "--url-handler"
          }), " | ", createComponent(_components.code, {
            children: "CMD"
          }), " | URL handler for plugin open_url (e.g. ", createComponent(_components.code, {
            children: "firefox --new-tab"
          }), ") |"];
        }
      }), createComponent(_components.h2, {
        children: "Behavior"
      }), createComponent(_components.p, {
        get children() {
          return ["| Flag | Value | Description |\n|------|-------|-------------|\n| ", createComponent(_components.code, {
            children: "--close-on-focus-out"
          }), " | \u2014 | Close when launcher loses focus |\n| ", createComponent(_components.code, {
            children: "--no-close-on-focus-out"
          }), " | \u2014 | Keep open when focus is lost |\n| ", createComponent(_components.code, {
            children: "--show-backdrop"
          }), " | \u2014 | Show transparent backdrop, click to close |\n| ", createComponent(_components.code, {
            children: "--language"
          }), " | ", createComponent(_components.code, {
            children: "CODE"
          }), " | Translation language code (e.g. ", createComponent(_components.code, {
            children: "fr"
          }), ", ", createComponent(_components.code, {
            children: "de"
          }), ") |"];
        }
      }), createComponent(_components.h2, {
        children: "Debugging"
      }), createComponent(_components.p, {
        get children() {
          return ["| Flag | Value | Description |\n|------|-------|-------------|\n| ", createComponent(_components.code, {
            children: "--debug"
          }), " | \u2014 | Enable debug timer and verbose logging |\n| ", createComponent(_components.code, {
            children: "--benchmark-all"
          }), " | \u2014 | Print timing for every startup stage |\n| ", createComponent(_components.code, {
            children: "--verbose"
          }), ", ", createComponent(_components.code, {
            children: "-v"
          }), " | \u2014 | Verbose logging |\n| ", createComponent(_components.code, {
            children: "--help"
          }), ", ", createComponent(_components.code, {
            children: "-h"
          }), " | \u2014 | Show help and exit |"];
        }
      }), createComponent(_components.h2, {
        children: "Examples"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: `# Everyday launch
zenkai

# Dracula theme, bigger icons, wider window
zenkai --theme=dracula --size=48 --width=800

# Fullscreen icon grid on second monitor
zenkai --theme=launchpad --fullscreen --monitor=1

# Custom menu entries, skip desktop scanning
zenkai --menu="Firefox|firefox|firefox" --menu="Terminal|alacritty|terminal"

# Minimal look
zenkai --no-icons --no-bottom-bar

# Copy URLs to clipboard instead of opening
zenkai --clipboard="wl-copy"

# Plugin-only mode
zenkai --no-dapps --plugin=calculator

# Hot-reload a theme you're working on
zenkai --debug --theme-reloader --theme=./my-theme.qss

# Low memory mode
./zenkai.sh

# See all monitors
zenkai --list-monitors

# See all themes
zenkai --list-themes
`
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
//# sourceMappingURL=cli-BGUw7Xiv.mjs.map
