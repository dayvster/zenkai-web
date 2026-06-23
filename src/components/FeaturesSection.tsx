import { Card } from "./Card";

export const FeaturesSection = () => {
  const features = [
    {
      label: "Extend",
      title: "Plugin System",
      desc: "Custom Lua scripting with hooks for keybindings, menus, and deep OS integration. Extend without recompiling.",
    },
    {
      label: "Speed",
      title: "Fuzzy Search",
      desc: "Instant filtering across thousands of .desktop entries. Type a few characters and results appear in milliseconds.",
    },
    {
      label: "Style",
      title: "Custom Themes",
      desc: "Full visual customization with custom colors, layouts, and styles. Create your own look or pick from 60+ themes.",
    },
  ];

  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((f) => (
        <Card class="p-6 flex flex-col gap-2">
          <span class="text-xs font-semibold uppercase tracking-widest text-primary-100">{f.label}</span>
          <h3 class="text-lg font-bold text-white">{f.title}</h3>
          <p class="text-sm text-fg leading-relaxed">{f.desc}</p>
        </Card>
      ))}
    </div>
  );
};
