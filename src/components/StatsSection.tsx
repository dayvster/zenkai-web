import { Card } from "./Card";

export const StatsSection = () => {
  const stats = [
    { value: "45-120", unit: "ms", label: "Startup Time" },
    { value: "40-170", unit: "MB", label: "Memory" },
    { value: "60+", unit: null, label: "Built-in Themes" },
    { value: "Zig + Qt", unit: null, label: "Tech Stack" },
  ];

  return (
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((s) => (
        <Card class="py-6 flex flex-col items-center gap-1">
          <div class="text-xs font-semibold uppercase tracking-widest text-muted">{s.label}</div>

          <div class="text-3xl sm:text-4xl font-black text-primary">
            {s.value}
            {s.unit && <span class="text-xs font-semibold text-fg align-top">{s.unit}</span>}
          </div>
          </Card>
        ))}
    </div>
  );
};
