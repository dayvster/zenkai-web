import { JSX, splitProps } from "solid-js";

export type Props = JSX.SvgSVGAttributes<SVGSVGElement> & { size?: number };

export const Globe = (props: Props) => {
  const [local, rest] = splitProps(props, ["size", "class"]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"
      class={local.class ?? ""} width={local.size ?? 20} height={local.size ?? 20} {...rest}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" />
    </svg>
  );
};
