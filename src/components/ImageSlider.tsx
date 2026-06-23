import { createSignal, createEffect, onCleanup, JSX } from "solid-js";

export type ImageSlide = {
  src: string;
  alt?: string;
  label?: JSX.Element;
};

export type AnimationType = "slide" | "fade" | "slide-up" | "slide-down" | "ken-burns" | "blur" | "flip" | "cube";

export type Props = {
  images: ImageSlide[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  labelPosition?: "above" | "below";
  animation?: AnimationType;
  startIndex?: number;
  class?: string;
};

export const ImageSlider = (props: Props) => {
  const [current, setCurrent] = createSignal(props.startIndex ?? 0);
  const n = () => props.images.length;
  const clamped = (i: number) => (i + n()) % n();

  let timer: ReturnType<typeof setInterval>;

  const startTimer = () => {
    clearInterval(timer);
    if (props.autoPlay !== false) {
      timer = setInterval(() => setCurrent(clamped(current() + 1)), props.interval ?? 5000);
    }
  };

  const goTo = (i: number) => { setCurrent(clamped(i)); startTimer(); };
  const next = () => { setCurrent(clamped(current() + 1)); startTimer(); };
  const prev = () => { setCurrent(clamped(current() - 1)); startTimer(); };

  let containerRef: HTMLDivElement | undefined;
  const [offsetX, setOffsetX] = createSignal(0);
  const [dragging, setDragging] = createSignal(false);

  const onTouchStart = (e: TouchEvent) => {
    setDragging(true);
    setOffsetX(e.touches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!dragging()) return;
    const dx = e.touches[0].clientX - offsetX();
    const el = containerRef?.querySelector<HTMLDivElement>("[data-track]");
    if (el) {
      el.style.transition = "none";
      el.style.transform = `translateX(${-current() * 100 + dx / el.offsetWidth * 100}%)`;
    }
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (!dragging()) return;
    setDragging(false);
    const dx = e.changedTouches[0].clientX - offsetX();
    const el = containerRef?.querySelector<HTMLDivElement>("[data-track]");
    if (el) el.style.transition = "";
    if (Math.abs(dx) > 50) dx > 0 ? prev() : next();
    else {
      const el2 = containerRef?.querySelector<HTMLDivElement>("[data-track]");
      if (el2) el2.style.transform = `translateX(-${current() * 100}%)`;
    }
  };

  createEffect(() => {
    startTimer();
    onCleanup(() => clearInterval(timer));
  });

  const label = () => props.images[current()]?.label;
  const anim = () => props.animation ?? "slide";

  const renderImages = () => {
    const t = anim();

    if (t === "fade") {
      return (
        <div class="grid grid-cols-1 grid-rows-1">
          {props.images.map((img, i) => (
            <img
              src={img.src}
              alt={img.alt ?? ""}
              class={`col-span-1 row-span-1 col-start-1 row-start-1 w-full transition-opacity duration-500 ${i === current() ? "opacity-100" : "opacity-0"}`}
              loading="lazy"
            />
          ))}
        </div>
      );
    }

    if (t === "blur") {
      return (
        <div class="grid grid-cols-1 grid-rows-1">
          {props.images.map((img, i) => (
            <img
              src={img.src}
              alt={img.alt ?? ""}
              class={`col-span-1 row-span-1 col-start-1 row-start-1 w-full transition-all duration-600 ${i === current() ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-lg"}`}
              loading="lazy"
            />
          ))}
        </div>
      );
    }

    if (t === "ken-burns") {
      return (
        <div class="grid grid-cols-1 grid-rows-1 overflow-hidden">
          {props.images.map((img, i) => (
            <img
              src={img.src}
              alt={img.alt ?? ""}
              class={`col-span-1 row-span-1 col-start-1 row-start-1 w-full transition-all duration-700 ${
                i === current()
                  ? "scale-110 opacity-100"
                  : "scale-100 opacity-0"
              }`}
              style={i === current() ? { "animation": "ken-burns 8s ease-in-out infinite alternate" } : undefined}
              loading="lazy"
            />
          ))}
        </div>
      );
    }

    if (t === "flip") {
      return (
        <div class="grid grid-cols-1 grid-rows-1" style={{ perspective: "1200px" }}>
          {props.images.map((img, i) => (
            <img
              src={img.src}
              alt={img.alt ?? ""}
              class="col-span-1 row-span-1 col-start-1 row-start-1 w-full transition-transform duration-600"
              style={{
                transform: `rotateY(${i === current() ? "0deg" : "180deg"})`,
                backfaceVisibility: "hidden",
              }}
              loading="lazy"
            />
          ))}
        </div>
      );
    }

    if (t === "cube") {
      return (
        <div class="grid grid-cols-1 grid-rows-1" style={{ perspective: "800px" }}>
          {props.images.map((img, i) => (
            <img
              src={img.src}
              alt={img.alt ?? ""}
              class="col-span-1 row-span-1 col-start-1 row-start-1 w-full transition-all duration-600"
              style={{
                transform: `
                  rotateY(${i === current() ? "0deg" : "90deg"})
                  translateZ(${i === current() ? "0px" : "-200px"})
                `,
                opacity: i === current() ? 1 : 0,
                backfaceVisibility: "hidden",
              }}
              loading="lazy"
            />
          ))}
        </div>
      );
    }

    const isVertical = t === "slide-up" || t === "slide-down";
    const translate = isVertical ? "translateY" : "translateX";

    return (
      <div
        data-track
        class={`flex ${isVertical ? "flex-col" : ""} transition-transform duration-500 ease-out`}
        style={{ transform: `${translate}(${-current() * 100}%)` }}
      >
        {props.images.map((img) => (
          <div class={`min-w-0 ${isVertical ? "h-full w-full shrink-0" : "w-full shrink-0"}`}>
            <img src={img.src} alt={img.alt ?? ""} class="w-full" loading="lazy" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div ref={containerRef} class={`group relative ${props.class ?? ""}`} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      {props.labelPosition === "above" && label() && (
        <span class="mb-2 block text-center text-sm font-semibold text-fg">{label()}</span>
      )}
      <div class="overflow-hidden rounded-md">
        <style>{`@keyframes ken-burns { from { transform: scale(1); } to { transform: scale(1.15); } }`}</style>
        {renderImages()}
      </div>
      {props.labelPosition !== "above" && label() && (
        <span class="mt-2 block text-center text-sm font-semibold text-fg">{label()}</span>
      )}

      {props.showControls !== false && (
        <>
          <button onClick={prev} class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-base/60 p-2 text-fg opacity-0 backdrop-blur transition-all hover:bg-base/90 group-hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={next} class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-base/60 p-2 text-fg opacity-0 backdrop-blur transition-all hover:bg-base/90 group-hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </>
      )}

      <div class="mt-3 flex justify-center gap-2">
        {(() => {
          const total = n();
          const maxDots = 5;
          const half = Math.floor(maxDots / 2);
          let start = current() - half;
          let end = start + maxDots;
          if (start < 0) { start = 0; end = maxDots; }
          if (end > total) { end = total; start = total - maxDots; }
          return props.images.map((_, i) => (
            <button
              onClick={() => goTo(i)}
              class={`h-2 rounded-full transition-all duration-300 ${
                i >= start && i < end ? "" : "hidden"
              } ${i === current() ? "w-6 bg-primary" : "w-2 bg-base-50/40 hover:bg-base-50"}`}
            />
          ));
        })()}
      </div>
    </div>
  );
};
