import { createComponent, mergeProps, ssr, ssrHydrationKey, escape } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/dist/server.js';
import { useMDXComponents } from 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-mdx@0.0.7_solid-js@1.9.11_vite@7.3.1_jiti@2.7.0_lightningcss@1.32.0_terser@5.46.0_/node_modules/solid-mdx/dist/index.mjs';
import { D as DocsLayout } from './DocsLayout-BQ--F7ga.mjs';
import './MainLayout-NKietwuP.mjs';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/dist/server.js';
import '../virtual/entry.mjs';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/h3@1.15.5/node_modules/h3/dist/index.mjs';
import 'file:///home/dave/Workspace/zenkai-web/node_modules/.pnpm/solid-js@1.9.11/node_modules/solid-js/web/storage/dist/storage.js';

var _tmpl$$1 = ["<div", ' class="overflow-x-auto mb-4"><table class="w-full text-sm border-collapse">', "</table></div>"], _tmpl$2 = ["<th", ' class="text-left py-2 pr-4 text-muted font-semibold border-b border-border">', "</th>"], _tmpl$3 = ["<td", ' class="py-2 pr-4 text-fg border-b border-border/50 font-mono">', "</td>"], _tmpl$4 = ["<td", ' class="py-2 text-fg border-b border-border/50">', "</td>"];
const Table = (props) => {
  return ssr(_tmpl$$1, ssrHydrationKey(), escape(props.children));
};
const Th = (props) => ssr(_tmpl$2, ssrHydrationKey(), escape(props.children));
const Td = (props) => ssr(_tmpl$3, ssrHydrationKey(), escape(props.children));
const TdDesc = (props) => ssr(_tmpl$4, ssrHydrationKey(), escape(props.children));
var _tmpl$ = ["<tr", "><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></tr>"];
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
        children: "General"
      }), createComponent(Table, {
        get children() {
          return [ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Th, {
            children: "Flag"
          })), escape(createComponent(Th, {
            children: "Value"
          })), escape(createComponent(Th, {
            children: "Description"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--help, -h"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "Show help and exit"
          })))];
        }
      }), createComponent(_components.h2, {
        children: "Window & Display"
      }), createComponent(Table, {
        get children() {
          return [ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Th, {
            children: "Flag"
          })), escape(createComponent(Th, {
            children: "Value"
          })), escape(createComponent(Th, {
            children: "Description"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--size"
          })), escape(createComponent(Td, {
            children: "N"
          })), escape(createComponent(TdDesc, {
            children: "Icon size in pixels (default: 32)"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--width"
          })), escape(createComponent(Td, {
            children: "N"
          })), escape(createComponent(TdDesc, {
            children: "Window width in pixels (default: 600)"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--height"
          })), escape(createComponent(Td, {
            children: "N"
          })), escape(createComponent(TdDesc, {
            children: "Window height in pixels (default: 500)"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--fullscreen"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "Start in fullscreen mode"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--monitor"
          })), escape(createComponent(Td, {
            children: "N"
          })), escape(createComponent(TdDesc, {
            children: "Open on a specific monitor (0-based)"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--list-monitors"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "List all available monitors and exit"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--no-icons"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "Hide icons in the list"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--no-bottom-bar"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "Hide the bottom bar"
          })))];
        }
      }), createComponent(_components.h2, {
        children: "Theme"
      }), createComponent(Table, {
        get children() {
          return [ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Th, {
            children: "Flag"
          })), escape(createComponent(Th, {
            children: "Value"
          })), escape(createComponent(Th, {
            children: "Description"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--theme"
          })), escape(createComponent(Td, {
            children: "NAME or path"
          })), escape(createComponent(TdDesc, {
            children: "Set theme by name or path to .qss file"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--list-themes"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "List all 65+ built-in themes and exit"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--theme-reloader"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "Watch .qss files and apply changes on the fly (requires --debug)"
          })))];
        }
      }), createComponent(_components.h2, {
        children: "Desktop Actions"
      }), createComponent(Table, {
        get children() {
          return [ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Th, {
            children: "Flag"
          })), escape(createComponent(Th, {
            children: "Value"
          })), escape(createComponent(Th, {
            children: "Description"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--menu"
          })), escape(createComponent(Td, {
            children: "name|cmd|icon"
          })), escape(createComponent(TdDesc, {
            children: "Add a custom menu entry (repeatable)"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--show-actions"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "Parse and show [Desktop Action] entries"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--actions-bottombar"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "Show desktop actions in the bottom bar"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--no-dapps"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "Skip scanning .desktop files"
          })))];
        }
      }), createComponent(_components.h2, {
        children: "Plugins"
      }), createComponent(Table, {
        get children() {
          return [ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Th, {
            children: "Flag"
          })), escape(createComponent(Th, {
            children: "Value"
          })), escape(createComponent(Th, {
            children: "Description"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--no-plugins"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "Skip loading all plugins"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--plugin"
          })), escape(createComponent(Td, {
            children: "NAME"
          })), escape(createComponent(TdDesc, {
            children: "Only load matching plugin (repeatable)"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--clipboard"
          })), escape(createComponent(Td, {
            children: "CMD"
          })), escape(createComponent(TdDesc, {
            children: "Clipboard command for plugin results (e.g. wl-copy)"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--url-handler"
          })), escape(createComponent(Td, {
            children: "CMD"
          })), escape(createComponent(TdDesc, {
            children: "URL handler for plugin open_url (e.g. firefox --new-tab)"
          })))];
        }
      }), createComponent(_components.h2, {
        children: "Behavior"
      }), createComponent(Table, {
        get children() {
          return [ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Th, {
            children: "Flag"
          })), escape(createComponent(Th, {
            children: "Value"
          })), escape(createComponent(Th, {
            children: "Description"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--close-on-focus-out"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "Close when launcher loses focus"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--no-close-on-focus-out"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "Keep open when focus is lost"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--show-backdrop"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "Show transparent backdrop, click to close"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--language"
          })), escape(createComponent(Td, {
            children: "CODE"
          })), escape(createComponent(TdDesc, {
            children: "Translation language code (e.g. fr, de)"
          })))];
        }
      }), createComponent(_components.h2, {
        children: "Debugging"
      }), createComponent(Table, {
        get children() {
          return [ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Th, {
            children: "Flag"
          })), escape(createComponent(Th, {
            children: "Value"
          })), escape(createComponent(Th, {
            children: "Description"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--debug"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "Enable debug timer and verbose logging"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--benchmark-all"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "Print timing for every startup stage"
          }))), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Td, {
            children: "--verbose, -v"
          })), escape(createComponent(Td, {
            children: "-"
          })), escape(createComponent(TdDesc, {
            children: "Verbose logging"
          })))];
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
//# sourceMappingURL=cli-DbkQetQN.mjs.map
