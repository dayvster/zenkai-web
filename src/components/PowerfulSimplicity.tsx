import { For } from "solid-js";

// What you can type into the one search bar, and what Zenkai does with it.
const queries = [
  { query: "fire", result: "Firefox", note: "Fuzzy-matched app, Enter launches it" },
  { query: "win: term", result: "kitty — ~/Workspace", note: "Focus an open window" },
  { query: "~/Documents", result: "Documents/", note: "Browse folders, preview files" },
  { query: "file: report", result: "report-q3.pdf", note: "Search filenames under your home" },
  { query: "32 f to c", result: "0 c", note: "Units and currencies, Enter copies" },
  { query: "sqrt(144) + 3", result: "15", note: "Scientific calculator" },
  { query: "link: zig allocator", result: "Search GitHub", note: "Quicklinks with your own URLs" },
  { query: "snip: greeting", result: "Hi there, …", note: "Copy saved text snippets" },
];

const SearchDemo = () => (
  <div class="bg-[#111] border border-border/80 rounded-xl text-sm w-full lg:w-[480px] shrink-0 overflow-hidden shadow-2xl shadow-black/40">
    <div class="flex items-center gap-3 px-4 py-3.5 border-b border-border/60 bg-[#161a22]">
      <span class="text-primary font-mono">›</span>
      <span class="text-white/40">Search apps, windows, files…</span>
    </div>
    <ul class="p-2">
      <For each={queries}>
        {(q, i) => (
          <li class={`flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-lg ${i() === 1 ? "bg-primary/15" : ""}`}>
            <code class="font-mono text-[11px] sm:text-xs text-primary w-24 sm:w-36 shrink-0 truncate">{q.query}</code>
            <div class="min-w-0">
              <div class="text-white text-sm truncate">{q.result}</div>
              <div class="text-white/40 text-xs truncate">{q.note}</div>
            </div>
          </li>
        )}
      </For>
    </ul>
    <div class="flex justify-between px-4 py-2 border-t border-border/60 text-[11px] text-white/40 font-mono">
      <span>Enter open</span>
      <span>Ctrl+K actions</span>
      <span>Ctrl+P preview</span>
    </div>
  </div>
);

export const PowerfulSimplicity = (props: { class?: string }) => {
  return (
    <div class={props.class ?? ""}>
      <div class="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        <div class="flex-1 flex flex-col gap-5">
          <span class="text-xs font-semibold uppercase tracking-widest text-primary-100">One search bar</span>
          <h2 class="text-2xl sm:text-4xl font-black text-white">Everything is a few keystrokes away</h2>
          <p class="text-fg leading-relaxed">
            Apps, open windows, files, calculations, links and snippets all live in the same list.
            Type a prefix like <code class="text-primary">win:</code> or <code class="text-primary">file:</code> to
            narrow it down, or just start typing.
          </p>
          <p class="text-fg leading-relaxed">
            Every result has an actions menu behind <kbd class="kbd">Ctrl+K</kbd>, and file results can show a
            preview pane with <kbd class="kbd">Ctrl+P</kbd>.
          </p>
          <a href="/docs/usage" class="text-primary font-semibold hover:underline">How searching works →</a>
        </div>
        <SearchDemo />
      </div>
    </div>
  );
};
