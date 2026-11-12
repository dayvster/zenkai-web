// Looping screen recording of Zenkai on a real desktop. Falls back to a still
// screenshot if the browser can't play the video (or before it loads).
export const HeroDemo = () => (
  <figure class="relative">
    <div class="absolute -inset-6 bg-primary/10 blur-3xl rounded-full -z-10" aria-hidden="true" />
    <video
      class="w-full rounded-2xl border border-border-100 shadow-2xl shadow-black/60"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      poster="/imgs/demo-poster.webp"
      width="1280"
      height="720"
      aria-label="Zenkai launching Blender, switching to Kate and snapping it to the left half, then calculating sqrt(144) + 3"
    >
      <source src="/videos/zenkai-demo.mp4" type="video/mp4" />
      <source src="/videos/zenkai-demo.webm" type="video/webm" />
    </video>
    <figcaption class="mt-3 text-center text-xs text-muted">Recorded on KDE Plasma 6.</figcaption>
  </figure>
);
