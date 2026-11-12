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
      <h2 class="text-center text-2xl text-white font-bold">Stop reaching for the mouse.</h2>

      <p class="text-center max-w-lg mx-auto text-muted">
        Zenkai is free, open source and takes a minute to set up. Install it, bind it to a key, and your whole
        desktop is a few keystrokes away.
      </p>
      <div class="flex justify-center">
      <a href="/#download">
        <Button variant="solid" class="cursor-pointer gap-2 text-black fill-black">
          <Download />
          Download for Linux
        </Button>
      </a>
      </div>
    </Card>
  </>
}