import { cn } from "@/lib/utils";

type BadgeVariant = "success" | "warning" | "danger" | "muted" | "gold";

const variantClasses: Record<BadgeVariant, string> = {
  success: "bg-success/15 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-destructive/15 text-destructive",
  muted: "bg-secondary text-muted-foreground",
  gold: "bg-gold-light text-primary",
};

interface StatusBadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const StatusBadge = ({ variant, children, className }: StatusBadgeProps) => (
  <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold", variantClasses[variant], className)}>
    {children}
  </span>
);

export default StatusBadge;
