import { JSX, splitProps } from "solid-js";

export type CardProps = JSX.HTMLAttributes<HTMLDivElement> & {
  class?: string;
};

export const Card = (props: CardProps) => {
  const [local, rest] = splitProps(props, ["class", "children"]);

  return (
    <div
      {...rest}
      class={`border border-border-primary-muted rounded-lg ${local.class ?? ""}`}
    >
      {local.children}
    </div>
  );
};
