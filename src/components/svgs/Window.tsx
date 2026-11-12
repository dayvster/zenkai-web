import { JSX, splitProps } from "solid-js";

export type Props = JSX.SvgSVGAttributes<SVGSVGElement> & { size?: number };

export const Window = (props: Props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"
      class={local.class ?? ""} width={local.size ?? 20} height={local.size ?? 20} {...rest}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M12 9v11" />
    </svg>
  );
};
