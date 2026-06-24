import { JSX } from "solid-js";
import { Navi } from "@/components/navi";

export type Props = {
  children: JSX.Element;
  fullWidth?: boolean;
}

export const MainLayout = (props: Props) => {
  const {children, fullWidth=false} = props;

  return (
    <div class="min-h-screen flex flex-col">
      <Navi />
      <div class={`flex-1 flex flex-col ${fullWidth ? "" : "max-w-6xl mx-auto w-full"}`}>
        {children}
      </div>
      <footer class="border-t border-border/40">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <p class="text-sm font-bold text-white mb-3">Zenkai</p>
              <p class="text-xs text-muted leading-relaxed mb-4">A fast app launcher for Linux. Written in Zig with Qt6.</p>
              <a href="https://www.buymeacoffee.com/dayvi1990T" target="_blank">
                <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" class="h-10" />
              </a>
            </div>
            <div>
              <p class="text-sm font-bold text-white mb-3">Source</p>
              <div class="flex flex-col gap-1.5">
                <a href="https://github.com/dayvster/zenkai" target="_blank" class="text-xs text-muted hover:text-primary transition-colors">GitHub</a>
                <a href="https://github.com/dayvster/zenkai/releases" target="_blank" class="text-xs text-muted hover:text-primary transition-colors">Releases</a>
                <a href="https://github.com/dayvster/zenkai/blob/main/CONTRIBUTING.md" target="_blank" class="text-xs text-muted hover:text-primary transition-colors">Contributing</a>
                <a href="https://github.com/dayvster/zenkai/blob/main/LICENCE.md" target="_blank" class="text-xs text-muted hover:text-primary transition-colors">License</a>
              </div>
            </div>
            <div>
              <p class="text-sm font-bold text-white mb-3">Built on</p>
              <div class="flex flex-col gap-1.5">
                <a href="https://github.com/rcalixte/libqt6zig" target="_blank" class="text-xs text-muted hover:text-primary transition-colors">libqt6zig</a>
                <a href="https://github.com/masterQ32/ziglua" target="_blank" class="text-xs text-muted hover:text-primary transition-colors">ziglua</a>
              </div>
            </div>
          </div>
          <div class="mt-8 pt-5 border-t border-border/30 text-center text-xs text-muted/50">
            &copy; {new Date().getFullYear()} Zenkai
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;