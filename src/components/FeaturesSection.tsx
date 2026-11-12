import { Card } from "./Card";
import { Search } from "./svgs/Search";
import { Window } from "./svgs/Window";
import { Folder } from "./svgs/Folder";
import { Keyboard } from "./svgs/Keyboard";
import { Calculator } from "./svgs/Calculator";
import { Plugin } from "./svgs/Plugin";

const features = [
  {
    icon: Search,
    label: "Launch",
    title: "Open anything in a few keys",
    desc: "Fuzzy search finds the app you mean from a couple of letters, across .desktop files and Start Menu shortcuts.",
  },
  {
    icon: Window,
    label: "Switch",
    title: "Never hunt for a window again",
    desc: "Type win: and a few letters to jump to any open window, even on Wayland, then snap it into place.",
  },
  {
    icon: Folder,
    label: "Browse",
    title: "Your files, without a file manager",
    desc: "Browse folders, search filenames and preview text, code and images right from the search bar.",
  },
  {
    icon: Keyboard,
    label: "Act",
    title: "Do more than open things",
    desc: "Ctrl+K on any result to copy a path, rename a file, snap a window or open a private browser window.",
  },
  {
    icon: Calculator,
    label: "Calculate",
    title: "Skip the calculator app",
    desc: "Math, unit conversions and currency rates as you type. Enter copies the answer.",
  },
  {
    icon: Plugin,
    label: "Extend",
    title: "Make it yours",
    desc: "Add your own results, actions and previews with a few lines of Lua, no recompiling.",
  },
];

export const FeaturesSection = () => {
  return (
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
      {features.map((f) => {
        const Icon = f.icon;
        return (
          <Card class="p-4 sm:p-6 flex flex-col gap-1.5 sm:gap-2 transition-colors hover:border-primary/60">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Icon size={18} />
              </span>
              <span class="hidden sm:inline text-xs font-semibold uppercase tracking-widest text-primary-100">{f.label}</span>
            </div>
            <h3 class="text-sm sm:text-lg font-bold text-white mt-1 leading-snug">{f.title}</h3>
            <p class="text-xs sm:text-sm text-fg leading-relaxed">{f.desc}</p>
          </Card>
        );
      })}
    </div>
  );
};
