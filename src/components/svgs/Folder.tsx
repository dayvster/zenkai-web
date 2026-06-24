import { JSX, splitProps } from "solid-js";

export type Props = JSX.SvgSVGAttributes<SVGSVGElement> & {
  size?: number;
};

export const Folder = (props: Props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={local.class ?? ""}
      width={local.size ?? 20}
      height={local.size ?? 20}
      {...rest}
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
};
