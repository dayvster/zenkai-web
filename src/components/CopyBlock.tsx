import { createSignal } from "solid-js";

export function CopyBlock(props: { code: string; class?: string; style?: string }) {
  const [copied, setCopied] = createSignal(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(props.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div class="group relative">
      <pre class={props.class} style={props.style}>{props.code}</pre>
      <button
        onClick={copy}
        class="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs font-semibold rounded-md transition-all opacity-0 group-hover:opacity-100 bg-primary text-black hover:brightness-90"
      >
        {copied() ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
