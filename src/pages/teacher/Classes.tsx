import { classes, sessions } from "@/data/mockData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SpotGauge from "@/components/SpotGauge";
import StatusBadge from "@/components/StatusBadge";

const teacherClasses = classes.filter((c) => c.teacherId === "t3");

const TeacherClasses = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-black">Minhas Turmas</h1>

    <div className="grid gap-4 sm:grid-cols-2">
      {teacherClasses.map((c) => {
        const nextSession = sessions.find((s) => s.classId === c.id && s.status === "Pendente");
        return (
          <div key={c.id} className="rounded-lg bg-card p-5 shadow-card border-l-4" style={{ borderLeftColor: c.color }}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.schedule} • {c.room}</p>
              </div>
              <StatusBadge variant="gold">{c.level}</StatusBadge>
            </div>
            <SpotGauge enrolled={c.enrolled} capacity={c.capacity} className="mt-3" />
            {nextSession && (
              <Link to={`/teacher/sessions/${nextSession.id}`}>
                <Button size="sm" className="mt-3 bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-bold">
                  Registar presenças ({nextSession.date})
                </Button>
              </Link>
            )}
          </div>
        );
      })}
    </div>
  </div>
);

export default TeacherClasses;
