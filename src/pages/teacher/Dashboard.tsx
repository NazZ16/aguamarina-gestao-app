import { classes, sessions } from "@/data/mockData";
import StatCard from "@/components/StatCard";
import { CalendarDays, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const dayMap: Record<string, number> = { Seg: 1, Ter: 2, Qua: 3, Qui: 4, Sex: 5, "Sáb": 6, Dom: 0 };
const todayDayIndex = new Date().getDay();
const teacherClasses = classes.filter((c) => c.teacherId === "t3");
const todayClasses = teacherClasses.filter((c) => c.days.some((d) => dayMap[d] === todayDayIndex));

const TeacherDashboard = () => {
  const { userName } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black">Bom dia, {userName.split(" ")[0]}! 👋</h1>
        <p className="text-sm text-muted-foreground">Aqui está o resumo do seu dia.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Minhas turmas" value={teacherClasses.length} icon={Users} />
        <StatCard title="Aulas hoje" value={todayClasses.length} icon={CalendarDays} />
        <StatCard title="Próxima substituição" value="5 Mar" subtitle="Intermédio A" />
      </div>

      <div>
        <h2 className="mb-3 text-lg font-bold">As minhas aulas hoje</h2>
        {todayClasses.length === 0 && <p className="text-muted-foreground">Nenhuma aula hoje.</p>}
        <div className="grid gap-3 sm:grid-cols-2">
          {todayClasses.map((c) => (
            <div key={c.id} className="rounded-lg bg-card p-4 shadow-card border-l-4" style={{ borderLeftColor: c.color }}>
              <h3 className="font-bold">{c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.startTime}–{c.endTime} • {c.room}</p>
              <p className="text-xs text-muted-foreground">{c.enrolled}/{c.capacity} alunos</p>
              <Link to="/teacher/classes" className="mt-2 inline-block text-xs font-semibold text-primary hover:underline">
                Registar presenças →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
