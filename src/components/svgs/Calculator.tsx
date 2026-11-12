import { JSX, splitProps } from "solid-js";

export type Props = JSX.SvgSVGAttributes<SVGSVGElement> & { size?: number };

export const Calculator = (props: Props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"
      class={local.class ?? ""} width={local.size ?? 20} height={local.size ?? 20} {...rest}>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h8" />
    </svg>
  );
};
