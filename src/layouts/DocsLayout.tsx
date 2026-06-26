import { JSX } from "solid-js";
import { useLocation } from "@solidjs/router";
import MainLayout from "./MainLayout";

const pages = [
  { label: "Overview", href: "/docs" },
  { label: "Installation", href: "/docs/installation" },
  { label: "Usage", href: "/docs/usage" },
  { label: "CLI Flags", href: "/docs/cli" },
  { label: "Themes", href: "/docs/themes" },
  { label: "Plugins", href: "/docs/plugins" },
  { label: "Keyboard Shortcuts", href: "/docs/shortcuts" },
  { label: "NVIDIA", href: "/docs/nvidia" },
];

export type Props = {
  children: JSX.Element;
};

export const DocsLayout = (props: Props) => {
  const location = useLocation();

  return (
    <MainLayout>
      <div class="px-4 sm:px-6 py-12 sm:py-20 max-w-5xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-10">
          <nav class="lg:w-48 shrink-0">
            <div class="sticky top-20 flex flex-col gap-1">
              {pages.map((p) => (
                <div>
                  <a
                    href={p.href}
                    class={`text-sm transition-colors py-1.5 px-3 rounded-md block ${
                      location.pathname === p.href
                        ? "text-white bg-primary/10 font-semibold"
                        : "text-fg hover:text-primary hover:bg-base-400/50"
                    }`}
                  >
                    {p.label}
                  </a>
                </div>
              ))}
            </div>
          </nav>
          <div class="flex-1 min-w-0 text-fg text-sm leading-relaxed space-y-5 [&_h1]:text-3xl [&_h1]:font-black [&_h1]:text-white [&_h1]:mb-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:flex [&_h2]:items-center [&_h2]:gap-3 [&_h2]:before:block [&_h2]:before:w-1 [&_h2]:before:h-6 [&_h2]:before:bg-primary [&_h2]:before:rounded-full [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_h4]:font-semibold [&_h4]:text-white [&_h4]:mt-6 [&_h4]:mb-2 [&_p]:text-fg [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:mb-4 [&_li]:text-fg [&_li]:leading-relaxed [&_a]:text-primary [&_a]:hover:underline [&_pre]:bg-[#111] [&_pre]:border [&_pre]:border-border/80 [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:text-white [&_pre]:overflow-x-auto [&_pre]:mb-4 [&_code]:text-primary [&_table]:w-full [&_table]:text-sm [&_table]:mb-4 [&_th]:text-left [&_th]:py-2 [&_th]:pr-4 [&_th]:text-muted [&_th]:font-semibold [&_th]:border-b [&_th]:border-border [&_td]:py-2 [&_td]:pr-4 [&_td]:text-fg [&_td]:border-b [&_td]:border-border/50 [&_kbd]:text-white [&_kbd]:font-mono">
            {props.children}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DocsLayout;
