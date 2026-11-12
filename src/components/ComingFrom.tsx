import { For } from "solid-js";
import { Card } from "./Card";

const alternatives = [
  {
    from: "Raycast or Alfred",
    platform: "macOS",
    pitch: "The same actions-on-everything idea, but free, open source and also on Linux.",
  },
  {
    from: "PowerToys Run",
    platform: "Windows",
    pitch: "Apps, files, a calculator and window switching, plus snapping windows from the keyboard.",
  },
  {
    from: "Rofi, Wofi or Fuzzel",
    platform: "Linux",
    pitch: "No scripts to glue together: windows, files, previews and actions work out of the box.",
  },
  {
    from: "KRunner",
    platform: "KDE Plasma",
    pitch: "Snap windows into layouts from the keyboard, an actions pane on every result, and 65+ themes.",
  },
];

export const ComingFrom = () => (
  <div>
    <span class="text-xs font-semibold uppercase tracking-widest text-primary-100">Switching?</span>
    <h2 class="text-2xl sm:text-4xl font-black text-white mt-2 mb-3">Coming from another launcher?</h2>
    <p class="text-fg max-w-2xl mb-8">
      Zenkai borrows the best ideas from the launchers people already love, and brings them to every desktop.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <For each={alternatives}>
        {(a) => (
          <Card class="p-5 flex flex-col gap-2">
            <span class="text-[10px] font-semibold uppercase tracking-widest text-muted">{a.platform}</span>
            <h3 class="text-white font-bold">{a.from}</h3>
            <p class="text-sm text-fg leading-relaxed">{a.pitch}</p>
          </Card>
        )}
      </For>
    </div>
  </div>
);
