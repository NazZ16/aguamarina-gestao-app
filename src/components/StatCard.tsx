import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  subtitle?: string;
  trend?: string;
  className?: string;
}

const StatCard = ({ title, value, icon: Icon, subtitle, trend, className }: StatCardProps) => (
  <div className={cn("rounded-lg bg-card p-5 shadow-card", className)}>
    <div className="flex items-start justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="mt-1 text-2xl font-black">{value}</p>
        {subtitle && <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>}
        {trend && <p className="mt-0.5 text-xs text-success font-semibold">{trend}</p>}
      </div>
      {Icon && (
        <div className="rounded-lg bg-gold-light p-2">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      )}
    </div>
  </div>
);

export default StatCard;
