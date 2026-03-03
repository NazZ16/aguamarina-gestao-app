import { cn } from "@/lib/utils";

interface SpotGaugeProps {
  enrolled: number;
  capacity: number;
  className?: string;
}

const SpotGauge = ({ enrolled, capacity, className }: SpotGaugeProps) => {
  const pct = (enrolled / capacity) * 100;
  const available = capacity - enrolled;
  const color = available === 0 ? "bg-destructive" : available / capacity < 0.3 ? "bg-warning" : "bg-success";

  return (
    <div className={cn("space-y-1", className)}>
      <div className="flex justify-between text-xs">
        <span className="font-medium">{enrolled}/{capacity}</span>
        <span className="text-muted-foreground">{available} vaga{available !== 1 ? "s" : ""}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div className={cn("h-full rounded-full transition-all", color)} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

export default SpotGauge;
