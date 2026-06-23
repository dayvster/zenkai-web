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
              <Button variant="solid" class="cursor-pointer gap-2 text-black fill-black">
                <Download />
                DOWNLOAD
              </Button>
              <Button variant="outlined-white" class="cursor-pointer gap-2 text-white hover:text-black fill-white hover:fill-black transition-all">
                <Code size={18} />
                Source Code
              </Button>
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
        <Readybar />
      </div>
    </MainLayout>
  )
}