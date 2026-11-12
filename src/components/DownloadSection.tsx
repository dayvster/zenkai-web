import { createResource, For, Show } from "solid-js";
import { latestRelease, type Asset } from "~/lib/release";
import { Card } from "./Card";
import { CopyBlock } from "./CopyBlock";

const RELEASES = "https://github.com/dayvster/zenkai/releases";


type Kind = { label: string; note: string; match: RegExp; install?: (file: string) => string };

// Asset types we know how to describe, per platform. Anything a release adds later
// (e.g. a Windows .zip or macOS .dmg) shows up as soon as it matches here.
const platforms: { name: string; kinds: Kind[]; fallback: string }[] = [
  {
    name: "Linux",
    fallback: "",
    kinds: [
      {
        label: "AppImage",
        note: "Runs on most distros, nothing to install",
        match: /\.AppImage$/i,
        install: (f) => `chmod +x ${f}\n./${f}`,
      },
      {
        label: "Debian / Ubuntu",
        note: ".deb package",
        match: /\.deb$/i,
        install: (f) => `sudo apt install ./${f}`,
      },
      {
        label: "Arch Linux",
        note: "pacman package",
        match: /\.pkg\.tar\.zst$/i,
        install: (f) => `sudo pacman -U ${f}`,
      },
      {
        label: "Tarball",
        note: "Plain binary archive",
        match: /linux.*\.tar\.gz$/i,
      },
    ],
  },
  {
    name: "Windows",
    fallback: "No Windows build in the latest release yet. Build it with zig build deploy-windows.",
    kinds: [
      { label: "Windows", note: "Portable build", match: /(windows|win64|win32).*\.(zip|exe|msi)$|\.(exe|msi)$/i },
    ],
  },
  {
    name: "macOS",
    fallback: "No macOS build in the latest release yet. Build it from source.",
    kinds: [{ label: "macOS", note: "App bundle", match: /(macos|darwin|osx).*\.(zip|dmg|tar\.gz)$|\.dmg$/i }],
  },
];

const arch = (name: string) => (/(i686|i386)/.test(name) ? "32-bit" : "64-bit");
const size = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;

export const DownloadSection = () => {
  const [release] = createResource(latestRelease);

  const assetsFor = (kind: Kind) =>
    (release()?.assets ?? [])
      .filter((a) => kind.match.test(a.name))
      // 64-bit first
      .sort((a, b) => arch(a.name).localeCompare(arch(b.name)) * -1);

  return (
    <div id="download" class="scroll-mt-24">
      <h2 class="text-2xl sm:text-4xl font-black text-white mb-2">Download</h2>
      <p class="text-fg mb-8">
        <Show when={release()} fallback={<>Grab the latest release from GitHub.</>}>
          Latest release: <a href={release()!.html_url} target="_blank" class="text-primary font-semibold hover:underline">{release()!.tag_name}</a>.
          Checksums are in <code class="text-primary">SHA256SUMS</code>.
        </Show>
      </p>

      <Show
        when={release()}
        fallback={
          <Show when={!release.loading} fallback={<Card class="p-6 text-muted">Loading the latest release…</Card>}>
            {/* GitHub's API is unavailable or rate limited: still point people at the right files */}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card class="p-5 flex flex-col gap-2">
                <p class="font-bold text-white">Linux</p>
                <p class="text-sm text-fg">AppImage, .deb, Arch package and tarball, for 64-bit and 32-bit.</p>
                <a href={`${RELEASES}/latest`} target="_blank" class="mt-auto text-sm font-semibold text-primary hover:underline">
                  Latest release on GitHub →
                </a>
              </Card>
              <Card class="p-5 flex flex-col gap-2">
                <p class="font-bold text-white">Windows</p>
                <p class="text-sm text-fg">Build with zig build deploy-windows for a self-contained folder.</p>
                <a href="/docs/installation" class="mt-auto text-sm font-semibold text-primary hover:underline">Install guide →</a>
              </Card>
              <Card class="p-5 flex flex-col gap-2">
                <p class="font-bold text-white">macOS</p>
                <p class="text-sm text-fg">Build from source with Zig and Qt 6.</p>
                <a href="/docs/installation" class="mt-auto text-sm font-semibold text-primary hover:underline">Install guide →</a>
              </Card>
            </div>
          </Show>
        }
      >
        <div class="flex flex-col gap-8">
          <For each={platforms}>
            {(platform) => {
              const kinds = platform.kinds.filter((k) => assetsFor(k).length > 0);
              return (
                <div>
                  <h3 class="text-lg font-bold text-white mb-3">{platform.name}</h3>
                  <Show
                    when={kinds.length > 0}
                    fallback={
                      <p class="text-sm text-muted">
                        {platform.fallback}{" "}
                        <a href="/docs/installation" class="text-primary hover:underline">Install guide →</a>
                      </p>
                    }
                  >
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <For each={kinds}>
                        {(kind) => {
                          const files = assetsFor(kind);
                          return (
                            <Card class="p-5 flex flex-col gap-3">
                              <div>
                                <p class="font-bold text-white">{kind.label}</p>
                                <p class="text-xs text-muted">{kind.note}</p>
                              </div>
                              <div class="flex flex-wrap gap-2">
                                <For each={files}>
                                  {(f) => (
                                    <a
                                      href={f.browser_download_url}
                                      class="text-xs font-semibold px-3 py-1.5 rounded-md bg-primary text-black hover:brightness-90"
                                    >
                                      {arch(f.name)} · {size(f.size)}
                                    </a>
                                  )}
                                </For>
                              </div>
                              <Show when={kind.install}>
                                <CopyBlock
                                  code={kind.install!(files[0].name)}
                                  class="bg-[#111] border border-border/80 rounded-lg p-3 font-mono text-xs text-white overflow-x-auto"
                                />
                              </Show>
                            </Card>
                          );
                        }}
                      </For>
                    </div>
                  </Show>
                </div>
              );
            }}
          </For>
        </div>
      </Show>
    </div>
  );
};
