import { JSX } from "solid-js";
import { useLocation } from "@solidjs/router";
import MainLayout from "./MainLayout";
import Seo from "~/components/Seo";

// The sidebar, and each page's title and description for search engines.
const pages = [
  { label: "Overview", href: "/docs", title: "Documentation", description: "How to install, use, configure and extend Zenkai, the keyboard-driven app launcher and window switcher built with Zig and Qt6." },
  { label: "Installation", href: "/docs/installation", description: "Install Zenkai from the AUR (zenkai-bin or zenkai), as an AppImage, .deb or tarball, or build it from source with Zig." },
  { label: "Usage", href: "/docs/usage", description: "Start Zenkai and use its search bar: apps, windows, files, math and more, plus launch modes and the actions menu." },
  { label: "Hotkey Setup", href: "/docs/hotkeys", description: "Bind Zenkai and its window switcher to a key in KDE Plasma, Hyprland, Sway, i3, GNOME, Windows and macOS." },
  { label: "Keyboard Shortcuts", href: "/docs/shortcuts", description: "Every keyboard shortcut in Zenkai, for using the launcher without a mouse." },
  { label: "Window Switcher", href: "/docs/window-switcher", description: "Switch between open windows on KDE Plasma, Hyprland, Sway, X11, Windows and macOS, and snap them to halves, maximize or move them between displays." },
  { label: "Browser Extension", href: "/docs/browser", description: "Search and switch browser tabs, history and bookmarks from Zenkai, in Firefox and Chromium-based browsers like Chrome, Brave, Edge and Vivaldi." },
  { label: "Files & Previews", href: "/docs/files", description: "Browse folders, search filenames and preview files from Zenkai's search bar." },
  { label: "Built-in Tools", href: "/docs/built-in-tools", description: "The plugins that ship with Zenkai: calculator, unit and currency conversion, quicklinks, snippets, an emoji picker and more." },
  { label: "Configuration", href: "/docs/configuration", description: "Every setting in zenkai.conf, with its default." },
  { label: "CLI Flags", href: "/docs/cli", description: "Zenkai's command-line flags, which override zenkai.conf." },
  { label: "Themes", href: "/docs/themes", description: "Browse Zenkai's built-in themes." },
  { label: "Your First Plugin", href: "/docs/first-plugin", description: "A ten-minute tutorial: build a bookmarks plugin for Zenkai in Lua." },
  { label: "Writing Plugins", href: "/docs/plugins", description: "The reference for writing Zenkai plugins in Lua 5.4: directory layout, manifest.json, hooks and the API." },
  { label: "NVIDIA", href: "/docs/nvidia", description: "Environment variables that fix Qt 6 rendering issues with Zenkai on NVIDIA GPUs." },
];

export type Props = {
  children: JSX.Element;
};

export const DocsLayout = (props: Props) => {
  const location = useLocation();
  const page = () => pages.find((p) => p.href === location.pathname.replace(/\/$/, "")) ?? pages[0];

  return (
    <MainLayout>
      <Seo title={page().title ?? page().label} description={page().description} />
      <div class="px-4 sm:px-6 py-12 sm:py-20 max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-10">
          <nav class="lg:w-48 shrink-0">
            <div class="sticky top-20 flex flex-col gap-1">
              {pages.map((p) => (
                <div>
                  <a
                    href={p.href}
                    class={`text-sm transition-colors py-1.5 px-3 rounded-md block ${
                      location.pathname === p.href
                        ? "text-white bg-primary/10 font-semibold"
                        : "text-fg hover:text-primary hover:bg-base-400/50"
                    }`}
                  >
                    {p.label}
                  </a>
                </div>
              ))}
            </div>
          </nav>
          <div class="flex-1 min-w-0 text-fg text-sm leading-relaxed space-y-5 [&_h1]:text-3xl [&_h1]:font-black [&_h1]:text-white [&_h1]:mb-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:flex [&_h2]:items-center [&_h2]:gap-3 [&_h2]:before:block [&_h2]:before:w-1 [&_h2]:before:h-6 [&_h2]:before:bg-primary [&_h2]:before:rounded-full [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_h4]:font-semibold [&_h4]:text-white [&_h4]:mt-6 [&_h4]:mb-2 [&_p]:text-fg [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:mb-4 [&_li]:text-fg [&_li]:leading-relaxed [&_a]:text-primary [&_a]:hover:underline [&_pre]:bg-[#111] [&_pre]:border [&_pre]:border-border/80 [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:text-white [&_pre]:overflow-x-auto [&_pre]:mb-4 [&_code]:text-primary [&_table]:w-full [&_table]:text-sm [&_table]:mb-4 [&_th]:text-left [&_th]:py-2 [&_th]:pr-4 [&_th]:text-muted [&_th]:font-semibold [&_th]:border-b [&_th]:border-border [&_td]:py-2 [&_td]:pr-4 [&_td]:text-fg [&_td]:border-b [&_td]:border-border/50 [&_kbd]:text-white [&_kbd]:font-mono">
            {props.children}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DocsLayout;
