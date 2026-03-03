import { useParams, Link, useLocation } from "react-router-dom";
import { sessions, students, classes } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const SessionDetail = () => {
  const { id } = useParams();
  const loc = useLocation();
  const session = sessions.find((s) => s.id === id);
  const cls = session ? classes.find((c) => c.id === session.classId) : undefined;
  const enrolledStudents = session ? students.filter((s) => s.classes.includes(session.classId)) : [];
  const [attendance, setAttendance] = useState<Record<string, boolean>>(
    Object.fromEntries(enrolledStudents.map((s) => [s.id, Math.random() > 0.3]))
  );

  if (!session) return <div className="py-12 text-center text-muted-foreground">Sessão não encontrada.</div>;

  const toggle = (studentId: string) => setAttendance((prev) => ({ ...prev, [studentId]: !prev[studentId] }));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link to={loc.pathname.includes("teacher") ? "/teacher/classes" : "/admin/sessions"}>
          <Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button>
        </Link>
        <div>
          <h1 className="text-2xl font-black">{session.className}</h1>
          <p className="text-sm text-muted-foreground">{session.date} • {cls?.startTime}–{cls?.endTime} • {session.teacher}</p>
        </div>
      </div>

      <div className="rounded-lg bg-card shadow-card overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-panel-2">
              <th className="px-4 py-3 text-left font-semibold">Aluno</th>
              <th className="px-4 py-3 text-center font-semibold">Presença</th>
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map((s) => (
              <tr key={s.id} className="border-b last:border-b-0">
                <td className="px-4 py-3 font-medium">{s.name}</td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => toggle(s.id)}
                    className={cn(
                      "inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors",
                      attendance[s.id]
                        ? "bg-success/20 text-success"
                        : "bg-destructive/20 text-destructive"
                    )}
                  >
                    {attendance[s.id] ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
        Guardar presenças
      </Button>
    </div>
  );
};

export default SessionDetail;
