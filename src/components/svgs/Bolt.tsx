import { JSX, splitProps } from "solid-js";

export type Props = JSX.SvgSVGAttributes<SVGSVGElement> & { size?: number };

export const Bolt = (props: Props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"
      class={local.class ?? ""} width={local.size ?? 20} height={local.size ?? 20} {...rest}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
};
