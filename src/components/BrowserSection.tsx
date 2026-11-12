import { For } from "solid-js";
import { Card } from "./Card";

const prefixes = [
  { prefix: "tab:", desc: "Find any open tab by title or URL. Enter switches to it." },
  { prefix: "bm:", desc: "Search bookmarks and folders, then rename, move or delete them." },
  { prefix: "hist:", desc: "Search your history and reopen a page." },
];

const tabActions = ["Close", "Reload", "Duplicate", "Pin / Unpin", "Mute / Unmute", "Move to New Window", "Close Other Tabs", "Bookmark", "Copy URL"];

export const browsers = [
  { name: "Brave", detail: "Load unpacked" },
  { name: "Chrome and Chromium", detail: "Load unpacked" },
  { name: "Edge and Vivaldi", detail: "Load unpacked" },
  { name: "Firefox", detail: "Temporary add-on" },
];

// Looping recording of the browser plugin driving a real Brave window.
export const BrowserDemo = () => (
  <figure class="relative">
    <div class="absolute -inset-6 bg-primary/10 blur-3xl rounded-full -z-10" aria-hidden="true" />
    <video
      class="w-full rounded-2xl border border-border-100 shadow-2xl shadow-black/60"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      poster="/imgs/browser-poster.webp"
      width="1280"
      height="720"
      aria-label="Zenkai switching to an MDN tab with tab: mdn, pinning Hacker News with Ctrl+K, then opening the Zig Standard Library bookmark with bm: zig std"
    >
      <source src="/videos/zenkai-browser.mp4" type="video/mp4" />
      <source src="/videos/zenkai-browser.webm" type="video/webm" />
    </video>
    <figcaption class="mt-3 text-center text-xs text-muted">Recorded in Brave on Hyprland.</figcaption>
  </figure>
);

export const BrowserSection = (props: { class?: string }) => {
  return (
    <div class={props.class ?? ""}>
      <div class="flex flex-col gap-5 max-w-3xl">
        <span class="text-xs font-semibold uppercase tracking-widest text-primary-100">Browser extension</span>
        <h2 class="text-2xl sm:text-4xl font-black text-white">Your tabs, bookmarks and history, in the launcher.</h2>
        <p class="text-fg leading-relaxed">
          Zenkai Web is a small extension for Chromium-based browsers and Firefox. With it installed, Zenkai searches the
          tabs of every browser and window you have open, switches to one with Enter, and manages your bookmarks without
          opening the browser's bookmark manager.
        </p>
      </div>

      <div class="mt-10 flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
        <div class="w-full lg:flex-1 min-w-0">
          <BrowserDemo />
        </div>

        <div class="w-full lg:w-[400px] shrink-0 flex flex-col gap-5">
          <ul class="flex flex-col gap-4">
            <For each={prefixes}>
              {(p) => (
                <li class="flex items-start gap-3">
                  <code class="text-primary font-mono text-sm font-bold px-2 py-0.5 rounded-md border border-border-100 bg-base-400/40 shrink-0">
                    {p.prefix}
                  </code>
                  <span class="text-fg text-sm leading-relaxed">{p.desc}</span>
                </li>
              )}
            </For>
          </ul>

          <p class="text-fg text-sm leading-relaxed">
            Press <kbd class="kbd">Ctrl+K</kbd> on a tab for more:
          </p>
          <div class="flex flex-wrap gap-2">
            <For each={tabActions}>
              {(a) => <span class="text-xs px-2.5 py-1 rounded-full border border-border-100 text-fg">{a}</span>}
            </For>
          </div>

          <Card class="p-5 sm:p-6 mt-1">
            <p class="text-sm font-bold text-white mb-1">Works with</p>
            <p class="text-xs text-muted mb-3">The companion app runs on Linux for now.</p>
            <ul class="flex flex-col divide-y divide-border-100">
              <For each={browsers}>
                {(b) => (
                  <li class="flex items-center justify-between gap-4 py-2.5">
                    <span class="flex items-center gap-2.5 text-white font-semibold text-sm">
                      <span class="w-1.5 h-1.5 rounded-full bg-success" />
                      {b.name}
                    </span>
                    <span class="text-xs text-muted text-right">{b.detail}</span>
                  </li>
                )}
              </For>
            </ul>
            <p class="mt-4 text-xs text-muted leading-relaxed">
              Everything stays on your machine. The extension only talks to a local helper, never to a server.
            </p>
            <a href="/docs/browser" class="inline-block mt-4 text-sm text-primary font-semibold hover:underline">
              Browser extension docs →
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};
