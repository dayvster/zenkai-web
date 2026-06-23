import { JSX } from "solid-js";
import { Card } from "./Card";

export type Props = {
  children?: JSX.Element;
};

export type FlagItem = {
  label: string;
  value?: string;
  description: string;
};

export const FlexFlags: FlagItem[] = [
  {
    label: "menu",
    value: "name|cmd|icon",
    description: "Add a custom menu entry",
  },
  {
    label: "theme",
    value: "NAME",
    description: "Change the launcher theme",
  },
  {
    label: "fullscreen",
    description: "Start fullscreen",
  },
  {
    label: "monitor",
    value: "N",
    description: "Open on a specific monitor",
  },
  {
    label: "show-actions",
    description: "Display item actions",
  },
];

export const PerfFlags: FlagItem[] = [
  {
    label: "no-plugins",
    description: "Disable plugin loading",
  },
  {
    label: "plugin",
    value: "NAME",
    description: "Load only one plugin",
  },
  {
    label: "no-dapps",
    description: "Skip desktop app scanning",
  },
  {
    label: "benchmark-all",
    description: "Benchmark startup stages",
  },
];

const FlagLine = (flag: FlagItem) => (
  <span>
    --{flag.label}
    {flag.value ? `=${flag.value}` : ""}
    <span class="text-muted"> # {flag.description}</span>
  </span>
);

export const CliFlags = (_props: Props) => {
  return (
    <div>
    <div class="flex flex-col lg:flex-row gap-6">
      <Card class="p-5 flex flex-col gap-3 flex-1">
        <h3 class="font-bold text-primary">Flexibility & Customization</h3>

        <div class="flex flex-col gap-1 font-mono text-xs text-fg">
          {FlexFlags.map(FlagLine)}
        </div>
      </Card>

      <Card class="p-5 flex flex-col gap-3 flex-1">
        <h3 class="font-bold text-primary">Performance & Development</h3>

        <div class="flex flex-col gap-1 font-mono text-xs text-fg">
          {PerfFlags.map(FlagLine)}
        </div>
      </Card>
    </div>
    <h3 class="text-center text-sm text-muted mt-4 mb-6">Read more in the <a href="/docs" class="text-primary">docs</a></h3>
    </div>
  );
};

export default CliFlags;