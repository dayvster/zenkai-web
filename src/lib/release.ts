// One shared, cached lookup of the latest GitHub release. The version chip and the
// download section both use it, so a page view costs at most one API request, and
// repeat visits within an hour cost none (GitHub allows 60 unauthenticated requests
// per hour per IP).

export type Asset = { name: string; browser_download_url: string; size: number };
export type Release = { tag_name: string; html_url: string; assets: Asset[] };

const KEY = "zenkai-latest-release";
const MAX_AGE_MS = 60 * 60 * 1000;
let pending: Promise<Release | null> | null = null;

const readCache = (): Release | null => {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    const { at, release } = JSON.parse(raw);
    return Date.now() - at < MAX_AGE_MS ? release : null;
  } catch {
    return null;
  }
};

const writeCache = (release: Release) => {
  try {
    sessionStorage.setItem(KEY, JSON.stringify({ at: Date.now(), release }));
  } catch {}
};

export const latestRelease = (): Promise<Release | null> => {
  if (typeof window === "undefined") return Promise.resolve(null);
  pending ??= (async () => {
    const cached = readCache();
    if (cached) return cached;
    try {
      const res = await fetch("https://api.github.com/repos/dayvster/zenkai/releases/latest");
      if (!res.ok) return null;
      const release = (await res.json()) as Release;
      writeCache(release);
      return release;
    } catch {
      return null;
    }
  })();
  return pending;
};
