import { For } from "solid-js";
import MainLayout from "@/layouts/MainLayout";
import { ChipVersion } from "@/components/chipversion";
import { HeroDemo } from "@/components/HeroDemo";
import { Button } from "@/components/button";
import { Download } from "@/components/svgs/Download";
import { Code } from "@/components/svgs/Code";
import { FeaturesSection } from "@/components/FeaturesSection";
import { StatsSection } from "@/components/StatsSection";
import { WindowSwitcherSection } from "@/components/WindowSwitcherSection";
import { CopyBlock } from "~/components/CopyBlock";
import CliFlags from "~/components/cliflags";
import { ComingFrom } from "~/components/ComingFrom";
import { Readybar } from "~/components/readybar";
import { DownloadSection } from "~/components/DownloadSection";
import { ScreenshotTabs } from "~/components/ScreenshotTabs";

const buildCmd = `git clone https://github.com/dayvster/zenkai
cd zenkai
zig build`;

const proofPoints = [
  { strong: "Window switching that works on Wayland:", rest: "KDE Plasma, Hyprland and Sway, plus X11, Windows and macOS." },
  { strong: "Actions on every result:", rest: "Ctrl+K to snap a window, rename a file or copy a path." },
  { strong: "About 30 ms to first paint,", rest: "and around 34 MB of memory of its own." },
];

const dependencies = [
  { name: "Zig 0.17.0", desc: "The compiler and build system. Get it from ziglang.org; most distro packages are too old." },
  { name: "Qt 6.8.2", desc: "Development libraries for Core, Gui, Widgets and Svg (qt6-base and qt6-svg)." },
  { name: "GCC or Clang", desc: "Zig uses it to link the C++ parts, since Qt is written in C++." },
  { name: "pkg-config", desc: "Helps the build find the Qt headers and libraries on Linux." },
];

export default function Home() {
  return (
    <MainLayout>
      <section class="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center mt-6 sm:mt-16 px-4 sm:px-6">
        <div class="flex flex-col gap-5 w-full items-center lg:items-start text-center lg:text-left">
          <ChipVersion />
          <h1 class="main-heading text-[2.5rem] sm:text-6xl lg:text-[4.25rem] font-black text-white leading-[1.05]">
            Your whole desktop, <br class="hidden sm:block" />
            <span class="text-primary">one keystroke away.</span>
          </h1>
          <p class="max-w-[560px] text-base sm:text-lg text-fg leading-relaxed">
            Zenkai is a fast, keyboard-first launcher. Open apps, jump between windows, browse and preview files,
            calculate and convert, all from one search bar. Native code, no Electron, nothing running in the background.
          </p>

          <ul class="flex flex-col gap-2 text-sm text-left">
            <For each={proofPoints}>
              {(p) => (
                <li class="flex items-start gap-2.5">
                  <span class="mt-0.5 text-primary font-bold">✓</span>
                  <span class="text-fg">
                    <span class="text-white font-semibold">{p.strong}</span> {p.rest}
                  </span>
                </li>
              )}
            </For>
          </ul>

          <div class="mt-1 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto">
            <a href="#download">
              <Button variant="solid" class="w-full sm:w-auto cursor-pointer gap-2 text-black fill-black">
                <Download />
                Download for Linux
              </Button>
            </a>
            <a href="https://github.com/dayvster/zenkai" target="_blank">
              <Button variant="outlined-white" class="w-full sm:w-auto cursor-pointer gap-2 text-white hover:text-black fill-white hover:fill-black transition-all">
                <Code size={18} />
                View on GitHub
              </Button>
            </a>
          </div>

          <div class="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center lg:justify-start text-xs text-muted">
            <img
              src="https://img.shields.io/github/stars/dayvster/zenkai?style=flat&label=stars&color=fe9132&labelColor=1F2430"
              alt="GitHub stars"
              height="20"
              class="h-5"
            />
            <span>Open source · GPL-3.0</span>
            <span>No account, no telemetry</span>
            <span>macOS & Windows: build from source</span>
          </div>
        </div>

        <div class="w-full sm:w-[560px] lg:w-[600px] xl:w-[640px] shrink-0">
          <HeroDemo />
        </div>
      </section>

      <section class="mt-16 sm:mt-32 px-4 sm:px-6 flex flex-col gap-3 sm:gap-8">
        <FeaturesSection />
        <StatsSection />
      </section>

      <section class="mt-16 sm:mt-32 px-4 sm:px-6">
        <ScreenshotTabs />
      </section>

      <section class="mt-16 sm:mt-32 px-4 sm:px-6">
        <WindowSwitcherSection />
      </section>

      <section class="mt-16 sm:mt-32 px-4 sm:px-6">
        <ComingFrom />
      </section>

      <section class="px-4 sm:px-6 mt-16 sm:mt-32">
        <DownloadSection />
      </section>

      <section class="px-4 sm:px-6 mt-16 sm:mt-32">
        <h2 class="text-2xl sm:text-4xl font-black text-white mb-2">Build it from source</h2>
        <p class="text-fg mb-10">
          Zig fetches libqt6zig, ziglua and kwinctl by itself, so you only need the toolchain and Qt.{" "}
          <a href="/docs/installation" class="text-primary hover:underline">Full install guide →</a>
        </p>

        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <ul class="lg:w-1/2 space-y-4">
            <For each={dependencies}>
              {(d) => (
                <li class="flex items-start gap-3">
                  <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <div>
                    <p class="text-sm text-white font-semibold">{d.name}</p>
                    <p class="text-xs text-muted">{d.desc}</p>
                  </div>
                </li>
              )}
            </For>
          </ul>

          <div class="lg:w-1/2">
            <div class="bg-primary rounded-2xl p-5 sm:p-8">
              <p class="text-black font-bold text-lg mb-1">Build from source</p>
              <p class="text-black/70 text-sm mb-5">The binary ends up in zig-out/bin/zenkai.</p>
              <CopyBlock
                code={buildCmd}
                class="bg-black rounded-xl p-4 font-mono text-xs sm:text-sm text-white/90 whitespace-pre-wrap break-all leading-relaxed"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="mt-16 sm:mt-32 px-4 sm:px-6">
        <CliFlags />
      </section>

      <section class="mt-16 sm:mt-32 px-4 sm:px-6">
        <Readybar />
      </section>
    </MainLayout>
  );
}
