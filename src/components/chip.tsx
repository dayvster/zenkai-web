import { JSX } from "solid-js";

export type Props = {
  children: JSX.Element;
}

export const Chip = (props: Props) => {
  return <div class="inline-flex items-center gap-2 rounded-full border border-border bg-chip px-3 py-1 text-sm text-fg">
    {props.children}
  </div>
}