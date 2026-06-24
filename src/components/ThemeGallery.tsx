import { createSignal, For } from "solid-js";

export interface ThemeInfo {
  name: string;
  desc: string;
}

export const themes: ThemeInfo[] = [
  
  { name: "arc-dark", desc: "Classic GTK blue/gray" },
  { name: "ayu-dark", desc: "Warm dark Ayu" },
  { name: "ayu-mirage", desc: "Dusky Ayu mirage" },
  { name: "breeze-dark", desc: "KDE Plasma 6 dark" },
  { name: "breeze-light", desc: "KDE Plasma light" },
  { name: "bulma", desc: "Cyan/teal Capsule Corp genius" },
  { name: "buu", desc: "Hot pink Majin menace" },
  { name: "catppuccin", desc: "Soft pastel mocha dark" },
  { name: "catppuccin-frappe", desc: "Warm catppuccin" },
  { name: "catppuccin-latte", desc: "Light catppuccin" },
  { name: "catppuccin-macchiato", desc: "Rich catppuccin" },
  { name: "cobalt", desc: "Deep blue cobalt" },
  { name: "cupertino", desc: "Light macOS Spotlight" },
  { name: "cupertino-dark", desc: "Dark macOS Finder" },
  { name: "dark", desc: "Catppuccin Mocha dark (default)" },
  { name: "dracula", desc: "Dark purple Dracula" },
  { name: "everforest", desc: "Forest green dark" },
  { name: "frieza", desc: "Pale white/purple final form" },
  { name: "github-dark", desc: "GitHub dark" },
  { name: "github-light", desc: "GitHub light" },
  { name: "gohan", desc: "Scholarly purple DBZ" },
  { name: "goku", desc: "Dark blue + orange DBZ" },
  { name: "adwaita", desc: "Light GNOME" },
  { name: "adwaita-dark", desc: "Dark GNOME" },
  { name: "gruvbox", desc: "Warm earthy retro" },
  { name: "high-contrast", desc: "Bold high contrast" },
  { name: "high-contrast-dark", desc: "Bold dark high contrast" },
  { name: "high-contrast-light", desc: "Bold light high contrast" },
  { name: "kanagawa", desc: "Calm dark cyan wave" },
  { name: "kanagawa-dragon", desc: "Earthy muted kanagawa" },
  { name: "kanagawa-lotus", desc: "Warm cream kanagawa light" },
  { name: "launchpad", desc: "Dark macOS-style launcher" },
  { name: "light", desc: "Catppuccin Latte light" },
  { name: "material", desc: "Material Design teal/purple" },
  { name: "matrix", desc: "Green matrix rain" },
  { name: "minimal", desc: "Clean minimal dark" },
  { name: "minimal-light", desc: "Clean light minimal" },
  { name: "monokai", desc: "Vibrant saturated dark" },
  { name: "monokai-pro", desc: "Balanced monokai" },
  { name: "night-owl", desc: "Owl-inspired dark" },
  { name: "noctis", desc: "Deep blue-gray night" },
  { name: "nord", desc: "Frosty blue arctic" },
  { name: "one-dark", desc: "Atom's signature dark" },
  { name: "one-light", desc: "Atom light" },
  { name: "palenight", desc: "Material Palenight" },
  { name: "piccolo", desc: "Namekian guardian green" },
  { name: "poimandres", desc: "Teal/blue creative dark" },
  { name: "retro", desc: "Amber CRT phosphor" },
  { name: "rose-pine", desc: "Rosy pine forest" },
  { name: "rose-pine-dawn", desc: "Light rose pine" },
  { name: "shades-of-purple", desc: "Deep purple" },
  { name: "solarized-dark", desc: "Warm amber scientific" },
  { name: "solarized-light", desc: "Scientific light" },
  { name: "spacegray", desc: "Xcode gray dark" },
  { name: "sweet", desc: "Purple/pink candy" },
  { name: "synthwave84", desc: "Neon retro synthwave" },
  { name: "tien", desc: "Terracotta + Tri-Beam green" },
  { name: "tokyonight", desc: "Deep blue night" },
  { name: "tokyo-night-light", desc: "Light Tokyo day" },
  { name: "tokyo-night-moon", desc: "Purple Tokyo variant" },
  { name: "tokyo-night-storm", desc: "Blue Tokyo variant" },
  { name: "trunks", desc: "Lavender + Capsule Corp blue" },
  { name: "ubuntu", desc: "Warm light Ubuntu" },
  { name: "ubuntu-dark", desc: "Dark Yaru Ubuntu" },
  { name: "vegeta", desc: "Royal blue Saiyan prince" },
  { name: "win95", desc: "Classic Windows 95" },
];

export function ThemeCard(props: { name: string; desc: string }) {
  const [copied, setCopied] = createSignal(false);
  const cmd = `zenkai --theme=${props.name}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div id={`theme-${props.name}`} class="scroll-mt-20">
      <div class="rounded-2xl overflow-hidden">
        <div class="">
          <div class="flex items-baseline gap-4 mb-1">
            <h2 class="">{props.name}</h2>
          </div>
          <div>
            <span class="text-sm text-muted">{props.desc}</span>

          </div>
        </div>
        <img
          src={`/imgs/${props.name}.png`}
          alt={props.name}
          class="w-full"
          loading="lazy"
        />
        <div class="mt-8">
          <h3>How to use it:</h3>
          <div class="group relative max-w-md">
            <pre class="bg-black/60 rounded-lg px-4 py-3 font-mono text-sm text-white/70 overflow-x-auto">$ {cmd}</pre>
            <button
              onClick={copy}
              class="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs font-semibold rounded-md transition-all opacity-0 group-hover:opacity-100 bg-primary text-black hover:brightness-90"
            >
              {copied() ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ThemeGallery(props: { themes: ThemeInfo[] }) {
  return (
    <div class="max-w-6xl mx-auto">
      <div class="mb-12">
        <h1 class="text-4xl sm:text-5xl font-black text-white mb-3">
          Themes
        </h1>
        <p class="text-fg text-lg">
          <span class="text-primary font-semibold">{props.themes.length} built-in themes</span> to match any setup.
        </p>
      </div>

      <div class="flex flex-col gap-20">
        <For each={props.themes}>
          {(t) => <ThemeCard name={t.name} desc={t.desc} />}
        </For>
      </div>
    </div>
  );
}
