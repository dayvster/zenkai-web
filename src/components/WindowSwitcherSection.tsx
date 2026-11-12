import { For } from "solid-js";
import { Card } from "./Card";

export const windowPlatforms = [
  { name: "Windows", detail: "Native Win32, nothing to install" },
  { name: "macOS", detail: "Native AppKit, needs Accessibility access" },
  { name: "KDE Plasma 6", detail: "Wayland and X11, nothing to install" },
  { name: "Hyprland", detail: "Uses hyprctl" },
  { name: "Sway", detail: "Uses swaymsg" },
  { name: "X11", detail: "Uses wmctrl and xrandr" },
];

const layouts = ["Left Half", "Right Half", "Top Half", "Bottom Half", "Maximize", "Center Window", "Move to Next Display"];

export const WindowSwitcherSection = (props: { class?: string }) => {
  return (
    <div class={props.class ?? ""}>
      <div class="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div class="flex-1 flex flex-col gap-5">
          <span class="text-xs font-semibold uppercase tracking-widest text-primary-100">Window switcher</span>
          <h2 class="text-2xl sm:text-4xl font-black text-white">Jump to any window. Put it where you want it.</h2>
          <p class="text-fg leading-relaxed">
            Type <code class="text-primary">win:</code> to list your open windows with their app icons, filter by title
            or app name and press Enter to focus one. Or start Zenkai with{" "}
            <code class="text-primary">--window-switcher</code> and bind it to a hotkey for a dedicated switcher.
          </p>
          <p class="text-fg leading-relaxed">
            Press <kbd class="kbd">Ctrl+K</kbd> on a window to arrange it. Layouts respect panels, docks and scaled
            displays across every monitor.
          </p>
          <div class="flex flex-wrap gap-2">
            <For each={layouts}>
              {(l) => <span class="text-xs px-2.5 py-1 rounded-full border border-border-100 text-fg">{l}</span>}
            </For>
          </div>
        </div>

        <Card class="p-5 sm:p-6 lg:w-[440px] shrink-0">
          <p class="text-sm font-bold text-white mb-4">Works on</p>
          <ul class="flex flex-col divide-y divide-border-100">
            <For each={windowPlatforms}>
              {(p) => (
                <li class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-4 py-2.5">
                  <span class="flex items-center gap-2.5 text-white font-semibold text-sm">
                    <span class="w-1.5 h-1.5 rounded-full bg-success" />
                    {p.name}
                  </span>
                  <span class="text-xs text-muted sm:text-right pl-4 sm:pl-0">{p.detail}</span>
                </li>
              )}
            </For>
          </ul>
          <a href="/docs/window-switcher" class="inline-block mt-5 text-sm text-primary font-semibold hover:underline">
            Window switcher docs →
          </a>
        </Card>
      </div>
    </div>
  );
};
