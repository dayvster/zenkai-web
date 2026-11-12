import { Card } from "./Card";

export const StatsSection = () => {
  const stats = [
    { value: "~30", unit: "ms", label: "First paint" },
    { value: "~90", unit: "ms", label: "Apps listed" },
    { value: "~34", unit: "MB", label: "Own memory" },
    { value: "65+", unit: null, label: "Themes" },
  ];

  return (
    <div>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
      {stats.map((s) => (
        <Card class="py-4 sm:py-6 flex flex-col items-center gap-1">
          <div class="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted">{s.label}</div>
          <div class="text-2xl sm:text-4xl font-black text-primary">
            {s.value}
            {s.unit && <span class="text-xs font-semibold text-fg align-top">{s.unit}</span>}
          </div>
        </Card>
      ))}
    </div>
    <p class="mt-3 text-center text-[11px] text-muted">
      Measured with <code>zenkai --benchmark-startup</code> on Arch Linux, KDE Plasma 6, 116 apps. Memory is PSS: shared Qt
      libraries are counted proportionally.
    </p>
    </div>
  );
};
