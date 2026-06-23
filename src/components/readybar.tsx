import {JSX} from "solid-js";
import { Card } from "./Card";
import { Button } from "./button";
import { Download } from "./svgs/Download";

export type Props = {
  children?: JSX.Element;
}
export const Readybar = (props: Props) => {
  const {children} = props;
  return <>
    <Card class="flex flex-col gap-4 py-8 mb-8">
      <h2 class="text-center text-2xl text-white font-bold">Ready to power up your app launching?</h2>

      <p class="text-center max-w-lg mx-auto text-muted">
        Zenkai is a fast, modern app launcher your desktop deserves. Built with Zig and Qt6 for maximum 
        responsiveness and balance between convenience and performance.
      </p>
      <div class="flex justify-center">
      <Button variant="solid" class="cursor-pointer gap-2 text-black fill-black">
        <Download />
        DOWNLOAD ZENKAI
      </Button>
      </div>
    </Card>
  </>
}