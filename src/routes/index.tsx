import { createSignal } from "solid-js";
import MainLayout from "@/layouts/MainLayout";
import { ChipVersion } from "@/components/chipversion";
import { ThemeSlider } from "@/components/ThemeSlider";
import { Button } from "@/components/button";
import { Download } from "@/components/svgs/Download";
import { Code } from "@/components/svgs/Code";
import { FeaturesSection } from "@/components/FeaturesSection";
import { StatsSection } from "@/components/StatsSection";
import { PowerfulSimplicity } from "@/components/PowerfulSimplicity";
import { Card } from "~/components/Card";
import CliFlags from "~/components/cliflags";
import { Readybar } from "~/components/readybar";

export default function Home() {
  const [copied, setCopied] = createSignal(false);
  const buildCmd = `git clone https://github.com/dayvster/zenkai
cd zenkai
zig build`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(buildCmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <MainLayout>

      <div class="flex flex-col sm:flex-row gap-6 items-center mt-8 sm:mt-16 px-4 sm:px-6">
        <div class="flex flex-col gap-4 w-full items-center sm:items-start text-center sm:text-left">
          <div>
            <ChipVersion />
          </div>
          <div class="main-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white">
          Fast & Performant <br />
          <span class="text-primary">App Launcher</span> <br />
          Built with <span class="text-primary">Zig</span>.

         
        </div>
         <div class="w-full max-w-[520px] mt-4">
            <p>
              A fast app launcher for Linux and OSX written in Zig with Qt. Scans .desktop files and filters
              through them with instant fuzzy matching.
              <br/>
              <br/>
              Also supports custom themes, keyboard shortcuts, custom menu input & a robust and flexible Lua Plugin system.
            </p>
            <div class="mt-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <a href="https://github.com/dayvster/zenkai/releases" target="_blank">
                <Button variant="solid" class="cursor-pointer gap-2 text-black fill-black">
                  <Download />
                  DOWNLOAD
                </Button>
              </a>
              <a href="https://github.com/dayvster/zenkai" target="_blank">
                <Button variant="outlined-white" class="cursor-pointer gap-2 text-white hover:text-black fill-white hover:fill-black transition-all">
                  <Code size={18} />
                  Source Code
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div class="w-full sm:w-[400px] lg:w-[450px] shrink-0">
          <ThemeSlider />
        </div>
      </div>

      <div class="mt-24 sm:mt-32 px-4 sm:px-6 flex flex-col gap-6 sm:gap-8">
        <FeaturesSection />
        <StatsSection />
        <PowerfulSimplicity class="mt-16 sm:mt-20" />
        <CliFlags />
      </div>

      <div class="px-4 sm:px-6 mt-24 sm:mt-32 max-w-6xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-black text-white mb-2">Build it from source</h2>
        <p class="text-fg mb-10">Build Zenkai yourself with Zig and Qt6.</p>

        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div class="lg:w-1/2">
            <p class="text-sm font-bold text-white mb-4">Dependencies</p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <div>
                  <p class="text-sm text-white font-semibold">Zig 0.16.0</p>
                  <p class="text-xs text-muted">The compiler and build system. Download from ziglang.org or use your distro's package manager.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <div>
                  <p class="text-sm text-white font-semibold">Qt 6.8.2</p>
                  <p class="text-xs text-muted">Development libraries (Core, Gui, Widgets). Install qt6-base-dev or equivalent.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <div>
                  <p class="text-sm text-white font-semibold">GCC or Clang</p>
                  <p class="text-xs text-muted">Used by Zig to link C++ code (Qt is written in C++).</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <div>
                  <p class="text-sm text-white font-semibold">libstdc++ or libc++</p>
                  <p class="text-xs text-muted">The C++ standard library, comes with your compiler.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <div>
                  <p class="text-sm text-white font-semibold">pkg-config</p>
                  <p class="text-xs text-muted">Helps the build system find Qt headers and libraries.</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="lg:w-1/2">
            <div class="bg-primary rounded-2xl p-6 sm:p-8">
              <p class="text-black font-bold text-lg mb-1">Build from source</p>
              <p class="text-black/70 text-sm mb-5">Zig fetches dependencies automatically. No manual setup needed.</p>
              <div class="group relative">
                <pre class="bg-black rounded-xl p-4 font-mono text-sm text-white/90 overflow-x-auto leading-relaxed">{buildCmd}</pre>
                <button
                  onClick={copy}
                  class="absolute right-2 top-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all opacity-0 group-hover:opacity-100 bg-primary text-black hover:brightness-90"
                >
                  {copied() ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-24 sm:mt-32 px-4 sm:px-6 flex flex-col gap-6 sm:gap-8">
        <Readybar />
      </div>
    </MainLayout>
  )
}