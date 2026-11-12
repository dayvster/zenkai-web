import { Card } from "./Card";

export type FlagItem = {
  label: string;
  value?: string;
  description: string;
};

export const FlexFlags: FlagItem[] = [
  { label: "theme", value: "NAME", description: "Pick a theme or .qss file" },
  { label: "window-switcher", description: "Open straight into window switching" },
  { label: "file-previews", description: "Show the file preview pane" },
  { label: "menu", value: "name|cmd|icon", description: "Add a custom entry" },
  { label: "fullscreen", description: "Start fullscreen" },
  { label: "monitor", value: "N", description: "Open on a specific monitor" },
];

export const PerfFlags: FlagItem[] = [
  { label: "no-plugins", description: "Skip loading plugins" },
  { label: "plugin", value: "NAME", description: "Load only this plugin" },
  { label: "no-dapps", description: "Skip app scanning" },
  { label: "no-animations", description: "Disable window animations" },
  { label: "debug", description: "Print startup timings" },
  { label: "benchmark-startup", description: "Report startup JSON and exit" },
];

const FlagLine = (flag: FlagItem) => (
  <div class="flex flex-wrap gap-x-2">
    <span class="text-white">
      --{flag.label}
      {flag.value ? `=${flag.value}` : ""}
    </span>
    <span class="text-muted"># {flag.description}</span>
  </div>
);

export const CliFlags = () => {
  return (
    <div>
      <h2 class="text-2xl sm:text-4xl font-black text-white mb-2">Configure it from the command line</h2>
      <p class="text-fg mb-8">
        Every option is a flag, so one binary can be a launcher, a window switcher or a calculator depending on how
        you start it. Defaults live in <code class="text-primary">zenkai.conf</code>.
      </p>
      <div class="flex flex-col lg:flex-row gap-6">
        <Card class="p-5 flex flex-col gap-3 flex-1">
          <h3 class="font-bold text-primary">Look & behavior</h3>
          <div class="flex flex-col gap-1.5 font-mono text-xs text-fg">{FlexFlags.map(FlagLine)}</div>
        </Card>
        <Card class="p-5 flex flex-col gap-3 flex-1">
          <h3 class="font-bold text-primary">Performance & development</h3>
          <div class="flex flex-col gap-1.5 font-mono text-xs text-fg">{PerfFlags.map(FlagLine)}</div>
        </Card>
      </div>
      <p class="text-center text-sm text-muted mt-5">
        See all 35+ flags in the <a href="/docs/cli" class="text-primary hover:underline">CLI reference</a>
      </p>
    </div>
  );
};

export default CliFlags;
