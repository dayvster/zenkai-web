import { JSX, splitProps } from "solid-js";

export type Props = JSX.SvgSVGAttributes<SVGSVGElement> & {
  size?: number;
};

export const Code = (props: Props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class={local.class ?? ""}
      width={local.size ?? 20}
      height={local.size ?? 20}
      {...rest}
    >
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </svg>
  );
};
