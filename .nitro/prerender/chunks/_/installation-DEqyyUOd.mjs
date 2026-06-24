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
        children: "Installation"
      }), createComponent(_components.p, {
        get children() {
          return ["Download the latest release from the ", createComponent(_components.a, {
            href: "https://github.com/dayvster/zenkai/releases",
            children: "GitHub releases page"
          }), "."];
        }
      }), createComponent(_components.h2, {
        children: "Requirements"
      }), createComponent(_components.ul, {
        get children() {
          return ["\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Linux"
              }), " (X11 or Wayland) or ", createComponent(_components.strong, {
                children: "macOS"
              })];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Qt6"
              }), " runtime libraries"];
            }
          }), "\n"];
        }
      }), createComponent(_components.h2, {
        children: "Linux"
      }), createComponent(_components.h3, {
        children: "Download the binary"
      }), createComponent(_components.p, {
        children: "Grab the latest Linux tarball from the releases page and extract it:"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: "tar xzf zenkai-*.tar.gz\n./zenkai\n"
          });
        }
      }), createComponent(_components.h3, {
        children: "Install system-wide"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: "sudo cp zenkai /usr/local/bin/\n"
          });
        }
      }), createComponent(_components.h2, {
        children: "macOS"
      }), createComponent(_components.p, {
        get children() {
          return ["Download the macOS ", createComponent(_components.code, {
            children: ".dmg"
          }), " from the releases page, mount it, and drag Zenkai to your Applications folder."];
        }
      }), createComponent(_components.h2, {
        children: "Build from Source"
      }), createComponent(_components.h3, {
        children: "Dependencies"
      }), createComponent(_components.ul, {
        get children() {
          return ["\n", createComponent(_components.li, {
            children: "Zig (latest)"
          }), "\n", createComponent(_components.li, {
            children: "Qt6 development libraries"
          }), "\n", createComponent(_components.li, {
            children: "CMake"
          }), "\n"];
        }
      }), createComponent(_components.h3, {
        children: "Build"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: "git clone https://github.com/dayvster/zenkai.git\ncd zenkai\nmkdir build && cd build\ncmake ..\nmake -j$(nproc)\n"
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
//# sourceMappingURL=installation-DEqyyUOd.mjs.map
