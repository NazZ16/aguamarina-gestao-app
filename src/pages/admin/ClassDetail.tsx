import { useParams, Link } from "react-router-dom";
import { classes, students, sessions } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatusBadge from "@/components/StatusBadge";
import SpotGauge from "@/components/SpotGauge";
import { ArrowLeft } from "lucide-react";

const ClassDetail = () => {
  const { id } = useParams();
  const cls = classes.find((c) => c.id === id);

  if (!cls) return <div className="py-12 text-center text-muted-foreground">Turma não encontrada.</div>;

  const enrolledStudents = students.filter((s) => s.classes.includes(cls.id));
  const classSessions = sessions.filter((s) => s.classId === cls.id);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link to="/admin/classes">
          <Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button>
        </Link>
        <div>
          <h1 className="text-2xl font-black">{cls.name}</h1>
          <p className="text-sm text-muted-foreground">{cls.level} • {cls.room}</p>
        </div>
        <Button variant="outline" className="ml-auto">Editar</Button>
      </div>

      <div className="rounded-lg bg-card p-5 shadow-card">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          <div><p className="text-xs text-muted-foreground">Professor</p><p className="font-semibold">{cls.teacher}</p></div>
          <div><p className="text-xs text-muted-foreground">Horário</p><p className="font-semibold">{cls.schedule}</p></div>
          <div><p className="text-xs text-muted-foreground">Nível</p><StatusBadge variant="gold">{cls.level}</StatusBadge></div>
          <div><p className="text-xs text-muted-foreground">Vagas</p><SpotGauge enrolled={cls.enrolled} capacity={cls.capacity} /></div>
          <div><p className="text-xs text-muted-foreground">Sala</p><p className="font-semibold">{cls.room}</p></div>
        </div>
      </div>

      <Tabs defaultValue="alunos">
        <TabsList>
          <TabsTrigger value="alunos">Alunos</TabsTrigger>
          <TabsTrigger value="sessoes">Sessões</TabsTrigger>
          <TabsTrigger value="relatorio">Relatório</TabsTrigger>
        </TabsList>

        <TabsContent value="alunos" className="mt-4">
          <div className="overflow-auto rounded-lg bg-card shadow-card">
            <table className="w-full text-sm">
              <thead><tr className="border-b bg-panel-2"><th className="px-4 py-3 text-left font-semibold">Nome</th><th className="px-4 py-3 text-left font-semibold">Data inscrição</th><th className="px-4 py-3 text-left font-semibold">Assiduidade</th><th className="px-4 py-3 text-left font-semibold">Ações</th></tr></thead>
              <tbody>
                {enrolledStudents.map((s) => (
                  <tr key={s.id} className="border-b last:border-b-0 hover:bg-secondary/50">
                    <td className="px-4 py-3 font-medium">{s.name}</td>
                    <td className="px-4 py-3">{s.enrolledSince}</td>
                    <td className="px-4 py-3"><StatusBadge variant={s.attendance >= 80 ? "success" : s.attendance >= 60 ? "warning" : "danger"}>{s.attendance}%</StatusBadge></td>
                    <td className="px-4 py-3"><Link to={`/admin/students/${s.id}`}><Button variant="outline" size="sm" className="text-xs">Ver</Button></Link></td>
                  </tr>
                ))}
                {enrolledStudents.length === 0 && <tr><td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">Nenhum aluno inscrito.</td></tr>}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="sessoes" className="mt-4">
          <div className="overflow-auto rounded-lg bg-card shadow-card">
            <table className="w-full text-sm">
              <thead><tr className="border-b bg-panel-2"><th className="px-4 py-3 text-left font-semibold">Data</th><th className="px-4 py-3 text-left font-semibold">Presenças</th><th className="px-4 py-3 text-left font-semibold">Estado</th></tr></thead>
              <tbody>
                {classSessions.map((s) => (
                  <tr key={s.id} className="border-b last:border-b-0 hover:bg-secondary/50">
                    <td className="px-4 py-3">{s.date}</td>
                    <td className="px-4 py-3">{s.attendees}/{s.total}</td>
                    <td className="px-4 py-3"><StatusBadge variant={s.status === "Realizada" ? "success" : s.status === "Pendente" ? "warning" : "danger"}>{s.status}</StatusBadge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="relatorio" className="mt-4">
          <div className="rounded-lg bg-card p-8 text-center text-muted-foreground shadow-card">
            <p>Relatório detalhado da turma (em desenvolvimento).</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClassDetail;
