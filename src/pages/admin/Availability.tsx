import { classes } from "@/data/mockData";
import SpotGauge from "@/components/SpotGauge";
import StatusBadge from "@/components/StatusBadge";

const AdminAvailability = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-black">Vagas Disponíveis</h1>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {classes.map((c) => {
        const available = c.capacity - c.enrolled;
        const pctAvailable = available / c.capacity;
        const borderColor = available === 0 ? "border-destructive/30" : pctAvailable < 0.3 ? "border-warning/30" : "border-success/30";

        return (
          <div key={c.id} className={`rounded-lg bg-card p-5 shadow-card border-l-4 ${borderColor}`}>
            <div className="flex items-start justify-between">
              <h3 className="font-bold">{c.name}</h3>
              <StatusBadge variant="gold">{c.level}</StatusBadge>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{c.schedule}</p>
            <p className="text-xs text-muted-foreground">{c.teacher}</p>
            <div className="mt-3">
              <SpotGauge enrolled={c.enrolled} capacity={c.capacity} />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default AdminAvailability;
