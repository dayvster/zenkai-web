import { JSX, splitProps } from "solid-js";

export type Props = JSX.SvgSVGAttributes<SVGSVGElement> & {
  size?: number;
};

export const Plugin = (props: Props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={local.class ?? ""}
      width={local.size ?? 20}
      height={local.size ?? 20}
      {...rest}
    >
      <path d="M12 2a3 3 0 0 0-3 3v1H7a2 2 0 0 0-2 2v2h1a3 3 0 0 1 0 6H5v2a2 2 0 0 0 2 2h2v-1a3 3 0 0 1 6 0v1h2a2 2 0 0 0 2-2v-2h-1a3 3 0 0 1 0-6h1V8a2 2 0 0 0-2-2h-2V5a3 3 0 0 0-3-3z" />
    </svg>
  );
};
