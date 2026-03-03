import { classes } from "@/data/mockData";

const weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex"];
const hours = Array.from({ length: 13 }, (_, i) => `${String(8 + i).padStart(2, "0")}:00`);
const todayDayIndex = new Date().getDay();
const todayDayName = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"][todayDayIndex];

const ClassMap = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-black">Mapa de Aulas</h1>

    <div className="overflow-auto rounded-lg bg-card shadow-card">
      <div className="min-w-[700px]">
        <div className="grid grid-cols-[80px_repeat(5,1fr)] border-b">
          <div className="p-3" />
          {weekDays.map((d) => (
            <div
              key={d}
              className={`border-l p-3 text-center text-sm font-bold uppercase ${d === todayDayName ? "bg-gold-light text-primary" : "text-muted-foreground"}`}
            >
              {d}
            </div>
          ))}
        </div>
        {hours.map((h) => (
          <div key={h} className="grid grid-cols-[80px_repeat(5,1fr)] border-b last:border-b-0" style={{ minHeight: 56 }}>
            <div className="flex items-start justify-end border-r pr-3 pt-2 text-xs text-muted-foreground">{h}</div>
            {weekDays.map((d) => {
              const cls = classes.find((c) => c.startTime === h && c.days.includes(d));
              return (
                <div key={d} className={`relative border-l p-1 ${d === todayDayName ? "bg-gold-light/30" : ""}`}>
                  {cls && (
                    <div
                      className="rounded-lg px-2 py-1.5 text-xs font-semibold leading-tight"
                      style={{ backgroundColor: cls.color + "20", color: cls.color, borderLeft: `3px solid ${cls.color}` }}
                    >
                      <p className="truncate font-bold">{cls.name}</p>
                      <p className="text-[10px] opacity-75">{cls.startTime}–{cls.endTime} • {cls.teacher.split(" ").map(n => n[0]).join("")}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ClassMap;
