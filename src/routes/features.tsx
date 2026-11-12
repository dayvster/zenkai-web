import MainLayout from "@/layouts/MainLayout";
import { Card } from "~/components/Card";
import { Button } from "@/components/button";
import { Download } from "@/components/svgs/Download";
import { Search } from "~/components/svgs/Search";
import { Plugin } from "~/components/svgs/Plugin";
import { Palette } from "~/components/svgs/Palette";
import { Folder } from "~/components/svgs/Folder";
import { Code } from "~/components/svgs/Code";
import { Window } from "~/components/svgs/Window";
import { Keyboard } from "~/components/svgs/Keyboard";
import { Calculator } from "~/components/svgs/Calculator";
import { Bolt } from "~/components/svgs/Bolt";

const features = [
  {
    section: "Search & Launch",
    items: [
      {
        icon: Search,
        title: "Fuzzy Search",
        desc: "Type a few characters and find any application instantly. Results are ranked as you type.",
        details: [
          "Instant filtering as you type",
          "Subsequence matching",
          "Thousands of entries in milliseconds",
          "Icons load only when rows are painted",
        ],
      },
      {
        icon: Folder,
        title: "App Discovery",
        desc: "Finds apps wherever your platform keeps them: .desktop files on Linux and Start Menu shortcuts on Windows.",
        details: [
          "All standard XDG directories",
          "Windows .lnk and .url shortcuts",
          "Skip scanning with --no-dapps",
          "Add entries with --menu=name|cmd|icon",
        ],
      },
      {
        icon: Code,
        title: "Desktop Actions",
        desc: "Shows [Desktop Action] entries such as New Window or New Private Window, in the list or in the bottom bar.",
        details: [
          "--show-actions lists them",
          "--actions-bottombar puts them in the footer",
          "Ctrl+1 to Ctrl+0 run the first ten",
          "Works with any .desktop action",
        ],
      },
      {
        icon: Code,
        title: "Run Mode (Windows)",
        desc: "Start with --run to type a command or URL and open it with the Windows shell, like Win+R.",
        details: [
          "No run: prefix needed",
          "Commands and URLs",
          "Uses the Windows shell",
          "Lazy-loaded run: plugin",
        ],
      },
    ],
  },
  {
    section: "Windows & Layouts",
    items: [
      {
        icon: Window,
        title: "Window Switcher",
        desc: "Type win: to list open windows with their app icons, filter by title or app and press Enter to focus one.",
        details: [
          "--window-switcher opens straight into it",
          "Leaves Zenkai itself out of the list",
          "Restores minimized windows",
          "Disable with --no-window-switcher",
        ],
      },
      {
        icon: Window,
        title: "Window Layouts",
        desc: "Press Ctrl+K on a window to snap it to a half, maximize it, center it or move it to the next display.",
        details: [
          "Left, right, top and bottom halves",
          "Maximize and center",
          "Move to next display",
          "Respects panels, docks and scaling",
        ],
      },
      {
        icon: Window,
        title: "Every Major Desktop",
        desc: "Native backends for Windows and macOS, plus KDE Plasma 6, Hyprland, Sway and any EWMH window manager on X11.",
        details: [
          "KDE Plasma 6 needs no extra tools",
          "Hyprland via hyprctl, Sway via swaymsg",
          "X11 via wmctrl and xrandr",
          "macOS via Accessibility APIs",
        ],
      },
    ],
  },
  {
    section: "Files & Actions",
    items: [
      {
        icon: Folder,
        title: "File Browser & Search",
        desc: "Type a path like ~/Documents to browse it, or file: report to search filenames under your home folder.",
        details: [
          "Folders first, paged in groups of 128",
          "Incremental search, no index to build",
          "Configurable roots and excludes",
          "Windows and Unix style paths",
        ],
      },
      {
        icon: Folder,
        title: "File Previews",
        desc: "Turn on the preview pane with --file-previews or toggle it any time with Ctrl+P.",
        details: [
          "Text and code with syntax colors",
          "Images up to 16 megapixels",
          "Folder listings",
          "No scripts or external viewers run",
        ],
      },
      {
        icon: Keyboard,
        title: "Actions Menu",
        desc: "Ctrl+K opens a searchable menu of actions for the selected result, from Copy Name to Move to Trash.",
        details: [
          "Reveal, rename, new file, new folder",
          "Move to Trash with confirmation",
          "Copy paths, URLs and window titles",
          "New Window / Private Window for browsers",
        ],
      },
    ],
  },
  {
    section: "Built-in Tools",
    items: [
      {
        icon: Calculator,
        title: "Scientific Calculator",
        desc: "Type an expression and the answer appears as the top result. Enter copies it.",
        details: [
          "sqrt, sin, log, min, max and more",
          "Percentages like 15% of 80",
          "Constants pi, tau and e",
          "Works offline",
        ],
      },
      {
        icon: Calculator,
        title: "Unit & Currency Conversion",
        desc: "Convert length, mass, temperature, data sizes and more. Currencies use daily reference rates from Frankfurter.",
        details: [
          "100 cm to m, 32 f to c",
          "2 GiB to MiB, bits vs bytes",
          "100 USD to EUR",
          "Only currency codes are sent",
        ],
      },
      {
        icon: Bolt,
        title: "Quicklinks & Snippets",
        desc: "Search the web or your own saved links with link:, and copy saved text with snip:.",
        details: [
          "Google and GitHub search built in",
          "{query} placeholders in your URLs",
          "Multi-line snippets",
          "Configured with simple JSON files",
        ],
      },
      {
        icon: Bolt,
        title: "Emoji Picker",
        desc: "Type a colon and a word, like :fire or :laugh, to find any emoji by name or feeling. Enter copies it.",
        details: [
          "1,898 emoji with Unicode keywords",
          "Shown as real icons",
          "Copy the emoji or its codepoints",
          "Works offline",
        ],
      },
      {
        icon: Bolt,
        title: "URL Suggestions",
        desc: "Type a domain like github.com and Zenkai offers to open it in your default browser, with that browser's icon.",
        details: [
          "Bare domains default to HTTPS",
          "localhost:PORT support",
          "Ignores normal multi-word searches",
          "Uses the system default browser",
        ],
      },
    ],
  },
  {
    section: "Plugins & Extensibility",
    items: [
      {
        icon: Plugin,
        title: "Lua Plugin System",
        desc: "Drop a folder with a manifest.json and a main.lua into a plugin directory and Zenkai picks it up.",
        details: [
          "Hooks for queries, opens and actions",
          "Add results, actions and previews",
          "Lazy loading with activation prefixes",
          "Sandboxed, with an instruction limit",
        ],
      },
      {
        icon: Plugin,
        title: "Native Helpers for Plugins",
        desc: "Plugins get safe access to the clipboard, the filesystem, HTTPS requests and the default browser.",
        details: [
          "api.copy_text and api.open_browser",
          "api.read_dir and api.path_info",
          "Async api.http_get",
          "No shell interpolation",
        ],
      },
      {
        icon: Code,
        title: "Clipboard & URL Handling",
        desc: "Pipe plugin output into a clipboard command or pick which program opens URLs.",
        details: [
          "--clipboard=wl-copy",
          "--url-handler=\"firefox --new-tab\"",
          "Works with xclip, wl-copy and others",
          "Defaults to xdg-open",
        ],
      },
    ],
  },
  {
    section: "Themes & Look",
    items: [
      {
        icon: Palette,
        title: "65+ Built-in Themes",
        desc: "From Catppuccin to Dracula to Win95, plus a native theme that follows your system's light/dark mode and accent color.",
        details: [
          "QSS-based styling",
          "Bring your own .qss file",
          "native theme for macOS and Windows",
          "Browse with --list-themes",
        ],
      },
      {
        icon: Palette,
        title: "Live Theme Reloader",
        desc: "Edit a .qss file and see changes instantly, no restart needed.",
        details: [
          "Hot-reloads QSS files",
          "Instant visual feedback",
          "Use --debug --theme-reloader",
          "Great for theme authors",
        ],
      },
      {
        icon: Code,
        title: "Window & Layout Control",
        desc: "Size, icons, footer, animations and fullscreen are all one flag or config line away.",
        details: [
          "--size, --width and --height",
          "--no-icons and --no-bottom-bar",
          "--fullscreen and --monitor=N",
          "Configurable animations and easing",
        ],
      },
      {
        icon: Code,
        title: "Focus & Backdrop",
        desc: "Choose what happens when Zenkai loses focus, and optionally dim the screen behind it.",
        details: [
          "--close-on-focus-out",
          "--no-close-on-focus-out",
          "--show-backdrop",
          "Click the backdrop to close",
        ],
      },
    ],
  },
  {
    section: "Performance & Platforms",
    items: [
      {
        icon: Bolt,
        title: "Fast Startup",
        desc: "About 30 ms to first paint and 90 ms until your apps are listed. Plugins load after the first paint, and icons only when they scroll into view.",
        details: [
          "~30 ms to first paint",
          "Plugins deferred until after first paint",
          "Lazy icon loading",
          "--benchmark-startup to measure yours",
        ],
      },
      {
        icon: Bolt,
        title: "Light on Memory",
        desc: "Around 34 MB of its own memory, with the Qt libraries shared with the rest of your desktop. No background process: it only runs while it's open.",
        details: [
          "~34 MB own memory (PSS)",
          "No daemon, no tray icon",
          "No Electron or web view",
          "See the NVIDIA page for GPU tips",
        ],
      },
      {
        icon: Code,
        title: "Linux, macOS & Windows",
        desc: "One codebase with native integrations on every platform: XDG on Linux, AppKit on macOS, Win32 on Windows. Linux has ready-made downloads; macOS and Windows build from source.",
        details: [
          "X11 and Wayland",
          "Native macOS window handling",
          "Self-contained Windows build",
          "Config in XDG or %APPDATA% paths",
        ],
      },
      {
        icon: Code,
        title: "Translations",
        desc: "Use Zenkai in your language with --language=CODE. Falls back to English.",
        details: [
          "--language=fr, --language=de, …",
          "Community-translated strings",
          "Easy to add a language",
          "English fallback",
        ],
      },
    ],
  },
];

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function Features() {
  return (
    <MainLayout>
      <div class="px-4 sm:px-6 py-12 sm:py-20 max-w-7xl mx-auto">
        <div class="text-center mb-10">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Everything <span class="text-primary">Zenkai</span>
          </h1>
          <p class="text-fg text-lg max-w-2xl mx-auto">
            A fast launcher, window switcher and file browser for Linux, macOS and Windows, built with Zig and Qt6.
            Here is everything it can do.
          </p>
        </div>

        <nav class="flex flex-wrap justify-center gap-2 mb-16">
          {features.map((section) => (
            <a
              href={`#${slug(section.section)}`}
              class="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-border-100 text-fg hover:border-primary hover:text-primary transition-colors"
            >
              {section.section}
            </a>
          ))}
        </nav>

        {features.map((section) => (
          <div class="mb-16 scroll-mt-24" id={slug(section.section)}>
            <h2 class="text-2xl sm:text-3xl font-black text-white mb-8 flex items-center gap-3">
              <span class="w-1.5 h-8 bg-primary rounded-full" />
              {section.section}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((f) => {
                const Icon = f.icon;
                return (
                  <Card class="p-6 flex flex-col gap-4">
                    <div class="flex items-start gap-4">
                      <div class="shrink-0 w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                        <Icon size={20} class="text-black" />
                      </div>
                      <div class="flex-1 min-w-0">
                        <h3 class="text-lg font-bold text-white">{f.title}</h3>
                        <p class="text-sm text-fg leading-relaxed mt-1">{f.desc}</p>
                      </div>
                    </div>
                    {"details" in f && f.details && (
                      <div class="grid grid-cols-2 gap-2 mt-2">
                        {f.details.map((d) => (
                          <div class="flex items-center gap-2 text-xs text-muted">
                            <span class="w-1 h-1 rounded-full bg-primary shrink-0" />
                            {d}
                          </div>
                        ))}
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        ))}

        <Card class="flex flex-col gap-4 py-10 px-6 text-center">
          <h2 class="text-2xl text-white font-bold">Ready to try Zenkai?</h2>
          <p class="max-w-lg mx-auto text-muted">
            Download the latest release for Linux, macOS or Windows, or build it from source.
          </p>
          <div class="flex justify-center">
            <a href="/#download">
              <Button variant="solid" class="cursor-pointer gap-2 text-black fill-black">
                <Download />
                Download for Linux
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
