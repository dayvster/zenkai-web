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
                children: "Zig 0.16.0"
              }), " \u2014 the compiler and build system"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "Qt 6.8.2 development libraries"
              }), " (Core, Gui, Widgets)"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "GCC or Clang"
              }), " \u2014 for linking C++ code (Qt is written in C++)"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "libstdc++ or libc++"
              }), " \u2014 C++ standard library"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.strong, {
                children: "pkg-config"
              }), " \u2014 helps find Qt headers and libraries"];
            }
          }), "\n"];
        }
      }), createComponent(_components.h3, {
        children: "Zig"
      }), createComponent(_components.p, {
        get children() {
          return ["Download the tarball for your architecture from ", createComponent(_components.a, {
            href: "https://ziglang.org/download/",
            children: "ziglang.org/download"
          }), ", extract it, and put the ", createComponent(_components.code, {
            children: "zig"
          }), " binary in your ", createComponent(_components.code, {
            children: "PATH"
          }), "."];
        }
      }), createComponent(_components.h2, {
        children: "Linux"
      }), createComponent(_components.h3, {
        children: "Debian / Ubuntu / Mint"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: "sudo apt install gcc libstdc++-14-dev-$(dpkg --print-architecture)-cross qt6-base-dev\n"
          });
        }
      }), createComponent(_components.h3, {
        children: "Fedora"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: "sudo dnf install gcc libstdc++-devel qt6-qtbase-devel\n"
          });
        }
      }), createComponent(_components.h3, {
        children: "Arch"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: "sudo pacman -S gcc qt6-base\n"
          });
        }
      }), createComponent(_components.h3, {
        children: "openSUSE"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: "sudo zypper install qt6-base-devel\n"
          });
        }
      }), createComponent(_components.h3, {
        children: "FreeBSD"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: "sudo pkg install qt6-base\n"
          });
        }
      }), createComponent(_components.h2, {
        children: "Build from Source"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: "git clone https://github.com/dayvster/zenkai.git\ncd zenkai\nzig build\n"
          });
        }
      }), createComponent(_components.p, {
        get children() {
          return ["Binary at ", createComponent(_components.code, {
            children: "zig-out/bin/zenkai"
          }), "."];
        }
      }), createComponent(_components.p, {
        get children() {
          return ["Zig fetches the following automatically when you run ", createComponent(_components.code, {
            children: "zig build"
          }), ":"];
        }
      }), createComponent(_components.ul, {
        get children() {
          return ["\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.a, {
                href: "https://github.com/rcalixte/libqt6zig",
                children: "libqt6zig"
              }), " \u2014 Zig bindings for Qt6"];
            }
          }), "\n", createComponent(_components.li, {
            get children() {
              return [createComponent(_components.a, {
                href: "https://github.com/masterQ32/ziglua",
                children: "ziglua"
              }), " \u2014 Zig bindings for Lua"];
            }
          }), "\n"];
        }
      }), createComponent(_components.h2, {
        children: "Verify"
      }), createComponent(_components.pre, {
        get children() {
          return createComponent(_components.code, {
            className: "language-bash",
            children: "./zig-out/bin/zenkai --help\n"
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
//# sourceMappingURL=installation-BRbkiThf.mjs.map
