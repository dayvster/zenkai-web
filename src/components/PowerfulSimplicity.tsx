import { Search } from "./svgs/Search";
import { Plugin } from "./svgs/Plugin";
import { Palette } from "./svgs/Palette";
import { Folder } from "./svgs/Folder";
import { Card } from "./Card";

const items = [
  {
    icon: Search,
    title: "Fuzzy Searching",
    desc: "Type a few characters and instantly find any application across thousands of .desktop entries with smart ranking.",
  },
  {
    icon: Plugin,
    title: "Lua Plugins",
    desc: "Extend functionality with Lua scripts. Create custom menus, keybindings, and deep system integrations.",
  },
  {
    icon: Palette,
    title: "QSS Custom Themes",
    desc: "Full visual customization via Qt stylesheets. Design your own look or choose from 60+ built-in themes.",
  },
  {
    icon: Folder,
    title: "Desktop Scanning",
    desc: "Automatically scans and indexes .desktop files across all standard XDG directories for complete coverage.",
  },
];

const Terminal = () => (
  <div class="bg-[#111] border border-border/80 rounded-lg font-mono text-sm leading-relaxed w-full lg:w-[480px] shrink-0 overflow-hidden">
    <div class="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border-b border-border/60">
      <span class="w-3 h-3 rounded-full bg-red-500" />
      <span class="w-3 h-3 rounded-full bg-yellow-500" />
      <span class="w-3 h-3 rounded-full bg-green-500" />
      <span class="text-xs text-white/40 ml-2">zenkai@launcher — bash</span>
    </div>
    <div class="p-4">
      <div class="flex items-center gap-1.5">
        <span class="text-green-400 shrink-0">~ $</span>
        <span class="text-white">zenkai --theme=ayu-dark</span>
      </div>
      <div class="text-white/70 mt-1.5 ml-[1.125rem]">Theme set to <span class="text-accent">ayu-dark</span></div>
      <div class="flex items-center gap-1.5 mt-3">
        <span class="text-green-400 shrink-0">~ $</span>
        <span class="text-white">zenkai launch code</span>
      </div>
      <div class="text-white/70 mt-1.5 ml-[1.125rem]">Visual Studio Code — <span class="text-green-400">62ms</span></div>
      <div class="flex items-center gap-1.5 mt-3">
        <span class="text-green-400 shrink-0">~ $</span>
        <span class="text-white">zenkai --plugin=calculator --no-dapps</span>
        <span class="inline-block w-[0.6em] h-[1.2em] bg-yellow-400 animate-[blink_1s_step-end_infinite]" />
      </div>
    </div>
  </div>
);

export const PowerfulSimplicity = (props: { class?: string }) => {
  return (
    <div class={props.class ?? ""}>
      <h2 class="text-3xl sm:text-4xl font-black text-white mb-10">Powerful Simplicity</h2>
      <div class="flex flex-col lg:flex-row gap-10 items-start">
        <div class="flex flex-col gap-6 flex-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div class="flex gap-4 items-start">
                  <Icon class="shrink-0 text-primary" size={20} />
                  <div class="flex flex-col gap-1">
                    <h3 class="font-bold text-primary-100">{item.title}</h3>
                    <p class="text-xs text-fg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
        <Terminal />
      </div>
    </div>
  );
};
