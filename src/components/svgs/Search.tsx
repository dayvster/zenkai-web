import { JSX, splitProps } from "solid-js";

export type Props = JSX.SvgSVGAttributes<SVGSVGElement> & {
  size?: number;
};

export const Search = (props: Props) => {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
};
