import { JSX, splitProps } from "solid-js";

export type ButtonVariant = "solid" | "outlined" | "outlined-white" | "ghost";

export type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  solid: "bg-primary hover:bg-primary-hover hover:brightness-90 active:brightness-90",
  outlined: "border-2 border-primary hover:bg-primary active:brightness-90",
  "outlined-white": "border-2 border-white/40 hover:bg-white active:brightness-90",
  ghost: "hover:bg-bg-hover active:bg-bg-active",
};

export const Button = (props: ButtonProps) => {
  const [local, rest] = splitProps(props, ["variant", "class", "children"]);

  return (
    <button
      {...rest}
      class={`inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${variants[local.variant ?? "solid"]} ${local.class ?? ""}`}
    >
      {local.children}
    </button>
  );
};
