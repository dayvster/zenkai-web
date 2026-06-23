import { JSX } from "solid-js";
import { Navi } from "@/components/navi";

export type Props = {
  children: JSX.Element;
  fullWidth?: boolean;
}

export const MainLayout = (props: Props) => {
  const {children, fullWidth=false} = props;
  return (
    <section>
      <Navi />
      <section class={fullWidth ? "" : "max-w-6xl mx-auto"}>
        {children}
      </section>
    </section>
  );
}

export default MainLayout;