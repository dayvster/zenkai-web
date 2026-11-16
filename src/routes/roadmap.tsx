import MainLayout from "@/layouts/MainLayout";
import { Card } from "~/components/Card";

// Mirrors ROADMAP.md in the zenkai repository; keep the two in step.
type Item = {
  title: string;
  desc?: string;
  done?: boolean;
};

type Section = {
  section: string;
  intro?: string;
  items: Item[];
};

const roadmap: Section[] = [
  {
    section: "Next release (v1.6)",
    intro: "Most of v1.6 is already on main.",
    items: [
      {
        title: "Settings window",
        desc: "Appearance with a live preview, themes, plugins, opacity, corner radius and text sizes.",
        done: true,
      },
      { title: "Ember theme", done: true },
      { title: "Bottom bar with borderless shortcuts and line icons", done: true },
      { title: "Developer toolbox plugin (dev:) and api.now for plugins", done: true },
      { title: "Square app icon, used by the AUR packages", done: true },
      {
        title: "Source-built zenkai package on the AUR",
        desc: "zenkai-bin is already there.",
      },
    ],
  },
  {
    section: "Up next",
    items: [
      {
        title: "Optional background service with a toggle command",
        desc: "Zenkai starts a new process on every launch, and that stays the default. Anyone who wants it can opt into a resident service that a hotkey shows and hides: it opens instantly and keeps the app cache, the window list and plugin state warm. Clipboard history and per-command hotkeys build on it, so they only work with the service turned on.",
      },
      {
        title: "Clipboard history",
        desc: "Search, pin and paste past copies. Needs the optional background service to watch the clipboard.",
      },
      {
        title: "System commands",
        desc: "Lock, sleep, log out, restart, shut down and empty trash in the main search, for every desktop. Today only the Hyprland plugin has lock and sleep.",
      },
      {
        title: "dmenu mode",
        desc: "Read entries from stdin and print the chosen one, so scripts can use Zenkai as a picker.",
      },
    ],
  },
  {
    section: "Root search",
    items: [
      { title: "Fallback commands", desc: "Such as \"Search the web for ...\" when nothing matches." },
      { title: "Aliases", desc: "A short keyword that runs a specific command." },
      { title: "Favourites", desc: "Pinned to the top of an empty search." },
      { title: "Ranking by use for plugin results", desc: "Not only for apps." },
      { title: "Global hotkeys per command", desc: "Needs the optional background service." },
    ],
  },
  {
    section: "Plugin API",
    items: [
      { title: "Sub-views", desc: "Open a second list from a result, such as a repository's issues." },
      { title: "Detail views", desc: "Formatted text, for things like full JSON or a diff." },
      { title: "Forms and argument fields", desc: "Text inputs and dropdowns before a command runs." },
      { title: "Grid layout", desc: "For emoji, colours and images." },
      { title: "Toasts", desc: "Short confirmations and errors." },
      {
        title: "Plugin index",
        desc: "An install command, so plugins can be found and updated without copying folders by hand.",
      },
    ],
  },
  {
    section: "Later",
    items: [
      {
        title: "Snippets that type themselves",
        desc: "Into other apps when you type their keyword. On Wayland this needs a virtual keyboard tool such as wtype or ydotool.",
      },
      { title: "Indexed file search", desc: "Instead of walking folders at query time." },
      { title: "Calculator history" },
      { title: "Emoji skin tones" },
      {
        title: "Window placement through layer-shell on Wayland",
        desc: "So compositors like KWin stop placing the launcher in the top-left corner.",
      },
    ],
  },
];

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function Roadmap() {
  return (
    <MainLayout>
      <div class="px-4 sm:px-6 py-12 sm:py-20 max-w-4xl mx-auto w-full">
        <div class="text-center mb-10">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            <span class="text-primary">Roadmap</span>
          </h1>
          <p class="text-fg text-lg max-w-2xl mx-auto">
            Where Zenkai is heading, roughly in order. Nothing here has a date, and the order can change.
          </p>
        </div>

        <nav class="flex flex-wrap justify-center gap-2 mb-16">
          {roadmap.map((section) => (
            <a
              href={`#${slug(section.section)}`}
              class="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-border-100 text-fg hover:border-primary hover:text-primary transition-colors"
            >
              {section.section}
            </a>
          ))}
        </nav>

        {roadmap.map((section) => (
          <div class="mb-14 scroll-mt-24" id={slug(section.section)}>
            <h2 class="text-2xl sm:text-3xl font-black text-white mb-3 flex items-center gap-3">
              <span class="w-1.5 h-8 bg-primary rounded-full" />
              {section.section}
            </h2>
            {section.intro && <p class="text-sm text-muted mb-6">{section.intro}</p>}
            <Card class="p-2 sm:p-3 flex flex-col mt-6">
              {section.items.map((item) => (
                <div class="flex items-start gap-4 px-3 sm:px-4 py-4 border-b border-border-100 last:border-b-0">
                  {item.done ? (
                    <span class="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center" title="Done">
                      <svg viewBox="0 0 16 16" class="w-3 h-3" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M3.5 8.5l3 3 6-7" />
                      </svg>
                    </span>
                  ) : (
                    <span class="shrink-0 mt-0.5 w-5 h-5 rounded-full border-2 border-base-50" title="Planned" />
                  )}
                  <div class="flex-1 min-w-0">
                    <h3 class={`text-base font-bold ${item.done ? "text-fg" : "text-white"}`}>{item.title}</h3>
                    {item.desc && <p class="text-sm text-muted leading-relaxed mt-1">{item.desc}</p>}
                  </div>
                </div>
              ))}
            </Card>
          </div>
        ))}

        <Card class="flex flex-col gap-4 py-10 px-6 text-center">
          <h2 class="text-2xl text-white font-bold">Want something on this list?</h2>
          <p class="max-w-lg mx-auto text-muted">
            Ideas and pull requests are welcome. Open an issue to suggest a feature, or read the contributing guide to
            pick one up.
          </p>
          <div class="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://github.com/dayvster/zenkai/issues" target="_blank" class="text-primary hover:underline">
              Open an issue
            </a>
            <a href="https://github.com/dayvster/zenkai/blob/main/CONTRIBUTING.md" target="_blank" class="text-primary hover:underline">
              Contributing guide
            </a>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
