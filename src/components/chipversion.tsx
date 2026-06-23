import { createResource } from "solid-js";

export type TagResponse = {
  name: string;
  commit: {
    sha: string;
  };
}

const fetchLatestTag = async () => {
  const res = await fetch("https://api.github.com/repos/dayvster/zenkai/tags");
  const tags = await res.json();
  return tags[0]?.name ?? "unknown";
};

export const ChipVersion = () => {
  const [version] = createResource(fetchLatestTag);


  return (
    <a  href={`https://github.com/dayvster/zenkai/releases/tag/${version()}`} 
        target="_blank" 
        class="inline-flex items-center gap-1.5 rounded-full border border-border bg-chip px-2 py-0.5 text-xs text-fg transition-all hover:border-primary hover:bg-bg-hover hover:text-white">
      <div class="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_3px_1px_var(--color-success)]" />
      <span class="font-semibold tracking-tight">{version() ?? "..."}</span>
      <span class="text-[10px] uppercase">Release</span>
    </a>
  );
}
