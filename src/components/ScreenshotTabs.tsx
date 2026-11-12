import { createEffect, createSignal, For, Show } from "solid-js";

type Shot = {
  key: string;
  label: string;
  title: string;
  body: string;
  points: string[];
  tryIt: string;
  keys?: string[];
  docs: { href: string; label: string };
};

const shots: Shot[] = [
  {
    key: "launcher",
    label: "Launcher",
    title: "Find any app in a few keystrokes",
    body: "Zenkai lists every app on your system and narrows it down as you type. Fuzzy matching means 'ff' finds Firefox and 'blnd' finds Blender, and icons only load for the rows you can actually see, so it opens fast even with hundreds of apps.",
    points: ["Reads .desktop files and Start Menu shortcuts", "Desktop actions like New Private Window", "Custom entries with --menu"],
    tryIt: "zenkai",
    keys: ["Enter", "Ctrl+K", "Esc"],
    docs: { href: "/docs/usage", label: "Usage guide" },
  },
  {
    key: "switcher",
    label: "Window switcher",
    title: "Jump to any open window",
    body: "Start Zenkai with --window-switcher, or type win: in the normal launcher, to see every open window with its app's icon. Filter by title or app name and press Enter to bring it to the front, even if it's minimized.",
    points: ["KDE Plasma, Hyprland, Sway, X11, Windows and macOS", "Leaves Zenkai itself out of the list", "Works without any plugins"],
    tryIt: "zenkai --window-switcher",
    keys: ["Enter", "Ctrl+K"],
    docs: { href: "/docs/window-switcher", label: "Window switcher docs" },
  },
  {
    key: "window-actions",
    label: "Window actions",
    title: "Snap windows without touching the mouse",
    body: "Press Ctrl+K on a window to open its actions pane. Snap it to any half of the screen, maximize or center it, or throw it onto your next monitor. Layouts respect panels, docks and display scaling.",
    points: ["Left, right, top and bottom halves", "Maximize and center", "Move to the next display"],
    tryIt: "win: firefox",
    keys: ["Ctrl+K", "↑ ↓", "Enter"],
    docs: { href: "/docs/window-switcher", label: "Arranging windows" },
  },
  {
    key: "browse",
    label: "Browse folders",
    title: "A file browser in your search bar",
    body: "Type any path and Zenkai lists its contents, folders first. Keep typing to filter, Enter to step into a folder or open a file with its default app, and pick .. to go back up.",
    points: ["Works with ~, / and Windows paths", "file: searches filenames under your home", "Optional preview pane with Ctrl+P"],
    tryIt: "~/Documents/",
    keys: ["Enter", "Ctrl+P"],
    docs: { href: "/docs/files", label: "Files & previews" },
  },
  {
    key: "file-actions",
    label: "File actions",
    title: "Do things with files, not just open them",
    body: "Ctrl+K on a file or folder gives you everything you'd reach for a file manager for: copy the path, reveal it in your file manager, create files and folders, rename, or move it to the trash.",
    points: ["Move to Trash always asks first", "Never overwrites existing files", "No shell commands involved"],
    tryIt: "~/Documents/report.pdf",
    keys: ["Ctrl+K"],
    docs: { href: "/docs/files", label: "File actions" },
  },
  {
    key: "calculator",
    label: "Calculator",
    title: "A scientific calculator, always one key away",
    body: "Type a sum and the answer shows up as you type. Enter copies it to your clipboard and leaves Zenkai open, so you can keep calculating.",
    points: ["sqrt, sin, log, min, max and more", "Percentages like 15% of 80", "Works completely offline"],
    tryIt: "sqrt(144) + 3",
    keys: ["Enter to copy"],
    docs: { href: "/docs/built-in-tools", label: "Built-in tools" },
  },
  {
    key: "convert",
    label: "Conversions",
    title: "Units and currencies, no website needed",
    body: "Convert lengths, weights, temperatures, speeds, data sizes and more by just typing them. Currency conversion uses daily reference rates, and only the currency codes ever leave your machine.",
    points: ["Bits vs bytes, MB vs MiB", "Temperatures like 32 f to c", "Currencies like 100 USD to EUR"],
    tryIt: "2 GiB to MiB",
    keys: ["Enter to copy"],
    docs: { href: "/docs/built-in-tools", label: "Built-in tools" },
  },
  {
    key: "quicklinks",
    label: "Quicklinks",
    title: "Search the web or your own links",
    body: "Type link: followed by anything to search Google or GitHub straight away. Add your own sites and search URLs to a small JSON file and they show up here too.",
    points: ["{query} placeholders in your URLs", "Turn off the built-in searches if you like", "Pair with snip: for saved text"],
    tryIt: "link: zig allocator",
    keys: ["Enter"],
    docs: { href: "/docs/built-in-tools", label: "Quicklinks & snippets" },
  },
  {
    key: "url",
    label: "URLs",
    title: "Type a URL, land on the page",
    body: "When what you type looks like a web address, Zenkai offers to open it in your default browser, shown with that browser's own icon. Normal searches are left alone.",
    points: ["Bare domains open over HTTPS", "localhost:3000 just works", "Uses your system default browser"],
    tryIt: "github.com/dayvster/zenkai",
    keys: ["Enter"],
    docs: { href: "/docs/built-in-tools", label: "URL suggestions" },
  },
  {
    key: "themes",
    label: "Themes",
    title: "Make it look like your desktop",
    body: "Pick from more than 65 built-in themes, from Dracula and Catppuccin to Win95, or write your own in Qt stylesheets and watch it update live as you save.",
    points: ["native follows your system colors", "Bring your own .qss file", "Live reloading for theme authors"],
    tryIt: "zenkai --theme=dracula",
    docs: { href: "/docs/themes", label: "Browse themes" },
  },
];

export const ScreenshotTabs = (props: { class?: string }) => {
  const [active, setActive] = createSignal(0);
  const current = () => shots[active()];
  const step = (d: number) => setActive((active() + d + shots.length) % shots.length);

  // Keep the selected tab visible in the scrolling phone bar (without scrolling the page).
  let bar: HTMLDivElement | undefined;
  createEffect(() => {
    const i = active();
    const el = bar?.querySelectorAll<HTMLElement>("[role=tab]")[i];
    if (!bar || !el) return;
    bar.scrollTo({ left: el.offsetLeft - (bar.clientWidth - el.offsetWidth) / 2, behavior: "smooth" });
  });

  return (
    <div class={props.class ?? ""}>
      <span class="text-xs font-semibold uppercase tracking-widest text-primary-100">See it in action</span>
      <h2 class="text-2xl sm:text-4xl font-black text-white mt-2 mb-3">One search bar, a lot of tricks</h2>
      <p class="text-fg max-w-2xl mb-8">
        These are real screenshots from a KDE Plasma desktop. Pick a tab to see what each part of Zenkai does and how
        to try it yourself.
      </p>

      {/* Phones: one scrolling row. Tablets: two even rows. Desktop uses the side list below. */}
      <div class="lg:hidden relative mb-6">
        <div
          ref={bar}
          class="-mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto md:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div role="tablist" class="flex w-max gap-1 md:w-full md:grid md:grid-cols-5">
            <For each={shots}>
              {(s, i) => (
                <button
                  role="tab"
                  aria-selected={active() === i()}
                  onClick={() => setActive(i())}
                  class={`whitespace-nowrap text-sm font-semibold px-4 py-2.5 transition-colors duration-300 cursor-pointer ${
                    active() === i() ? "bg-primary text-black" : "text-primary hover:bg-primary/10"
                  }`}
                >
                  {s.label}
                </button>
              )}
            </For>
          </div>
        </div>
        {/* Fade hints that the phone row scrolls */}
        <div class="md:hidden pointer-events-none absolute inset-y-0 -right-4 w-12 bg-gradient-to-l from-base to-transparent" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[210px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)] gap-6 lg:gap-10 items-start">
        {/* Desktop: a vertical list with a sliding highlight */}
        <div
          role="tablist"
          aria-orientation="vertical"
          class="hidden lg:flex relative flex-col gap-1 p-1.5 lg:sticky lg:top-20"
        >
          <div
            aria-hidden="true"
            class="absolute left-1.5 right-1.5 top-1.5 h-14 bg-primary shadow-lg shadow-primary/20 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateY(${active() * 60}px)` }}
          />
          <For each={shots}>
            {(s, i) => (
              <button
                role="tab"
                aria-selected={active() === i()}
                onClick={() => setActive(i())}
                class={`group relative z-10 h-14 shrink-0 text-left px-4 flex flex-col justify-center cursor-pointer transition-colors duration-300 ${
                  active() === i() ? "text-black" : "text-primary hover:bg-primary/10"
                }`}
              >
                <span class="text-sm font-semibold leading-tight">
                  {s.label}
                  <span class={`inline-block ml-1 transition-all duration-300 ${active() === i() ? "opacity-100" : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"}`}>→</span>
                </span>
                <span
                  class={`font-mono text-[11px] truncate transition-colors duration-300 ${
                    active() === i() ? "text-black/60" : "text-muted"
                  }`}
                >
                  {s.tryIt}
                </span>
              </button>
            )}
          </For>
        </div>

        {/* The selected shot; keyed so it re-mounts and replays the entrance animation */}
        <Show when={current()} keyed>
          {(c) => (
            <div class="@container min-w-0">
              <div class="grid grid-cols-1 @2xl:grid-cols-[minmax(0,1fr)_minmax(240px,320px)] gap-6 @2xl:gap-8 items-start">
              <div class="zk-pop w-full max-w-2xl mx-auto @2xl:max-w-none">
                <div class="overflow-hidden rounded-xl border border-border-100 shadow-2xl shadow-black/50">
                  {/* On narrow panels, zoom past the wallpaper border so the UI stays readable */}
                  <img
                    src={`/imgs/screens/${c.key}.webp`}
                    alt={`Zenkai ${c.label.toLowerCase()} screenshot`}
                    width="1200"
                    height="1038"
                    class="w-full scale-[1.2] @2xl:scale-100 transition-transform"
                  />
                </div>
                <div class="flex items-center justify-between mt-4 text-sm gap-3">
                  <button onClick={() => step(-1)} class="min-h-11 px-5 py-2.5 lg:min-h-0 lg:p-0 text-sm font-semibold lg:font-normal border border-border-100 lg:border-0 text-primary lg:text-fg hover:text-primary hover:border-primary active:bg-primary/10 lg:active:bg-transparent cursor-pointer transition-colors" aria-label="Previous screenshot">
                    ← Prev
                  </button>
                  <div class="flex gap-1.5" aria-hidden="true">
                    <For each={shots}>
                      {(_, i) => (
                        <span
                          class={`h-1.5 rounded-full transition-all duration-500 ${
                            active() === i() ? "w-6 bg-primary" : "w-1.5 bg-border-100"
                          }`}
                        />
                      )}
                    </For>
                  </div>
                  <button onClick={() => step(1)} class="min-h-11 px-5 py-2.5 lg:min-h-0 lg:p-0 text-sm font-semibold lg:font-normal border border-border-100 lg:border-0 text-primary lg:text-fg hover:text-primary hover:border-primary active:bg-primary/10 lg:active:bg-transparent cursor-pointer transition-colors" aria-label="Next screenshot">
                    Next →
                  </button>
                </div>
              </div>

              <div class="flex flex-col gap-4 sm:gap-5 w-full max-w-2xl mx-auto @2xl:max-w-none">
                <h3 class="zk-rise text-xl sm:text-2xl xl:text-3xl font-black text-white leading-tight" style={{ "animation-delay": "40ms" }}>
                  {c.title}
                </h3>
                <p class="zk-rise text-fg leading-relaxed" style={{ "animation-delay": "100ms" }}>
                  {c.body}
                </p>

                <ul class="flex flex-col gap-2">
                  <For each={c.points}>
                    {(p, i) => (
                      <li class="zk-rise flex items-start gap-3 text-sm text-fg" style={{ "animation-delay": `${160 + i() * 60}ms` }}>
                        <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {p}
                      </li>
                    )}
                  </For>
                </ul>

                <div
                  class="zk-rise rounded-xl border border-border-100 bg-bg-elevated p-4 flex flex-col gap-3"
                  style={{ "animation-delay": "360ms" }}
                >
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-widest text-muted mb-1.5">Try it</p>
                    <code class="font-mono text-sm text-primary break-all">{c.tryIt}</code>
                  </div>
                  <Show when={c.keys}>
                    <div class="flex flex-wrap items-center gap-2">
                      <For each={c.keys}>{(k) => <kbd class="kbd">{k}</kbd>}</For>
                    </div>
                  </Show>
                </div>

                <a
                  href={c.docs.href}
                  class="zk-rise text-primary font-semibold hover:underline self-start"
                  style={{ "animation-delay": "420ms" }}
                >
                  {c.docs.label} →
                </a>
              </div>
            </div>
            </div>
          )}
        </Show>
      </div>

      {/* Warm the cache so switching tabs is instant */}
      <div class="hidden" aria-hidden="true">
        <For each={shots}>{(s) => <img src={`/imgs/screens/${s.key}.webp`} alt="" />}</For>
      </div>
    </div>
  );
};
