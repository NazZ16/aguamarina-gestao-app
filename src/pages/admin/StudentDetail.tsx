import { useParams, Link } from "react-router-dom";
import { students, classes } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatusBadge from "@/components/StatusBadge";
import { ArrowLeft } from "lucide-react";

const StudentDetail = () => {
  const { id } = useParams();
  const student = students.find((s) => s.id === id);

  if (!student) return <div className="py-12 text-center text-muted-foreground">Aluno não encontrado.</div>;

  const enrolledClasses = classes.filter((c) => student.classes.includes(c.id));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link to="/admin/students"><Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button></Link>
        <div>
          <h1 className="text-2xl font-black">{student.name}</h1>
          <p className="text-sm text-muted-foreground">Inscrito desde {student.enrolledSince}</p>
        </div>
        <Button variant="outline" className="ml-auto">Editar</Button>
      </div>

      <div className="rounded-lg bg-card p-5 shadow-card grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div><p className="text-xs text-muted-foreground">Email</p><p className="font-semibold">{student.email}</p></div>
        <div><p className="text-xs text-muted-foreground">Telefone</p><p className="font-semibold">{student.phone}</p></div>
        <div><p className="text-xs text-muted-foreground">Data de nascimento</p><p className="font-semibold">{student.birthDate}</p></div>
        <div><p className="text-xs text-muted-foreground">Assiduidade global</p><StatusBadge variant={student.attendance >= 80 ? "success" : "warning"}>{student.attendance}%</StatusBadge></div>
      </div>

      <Tabs defaultValue="turmas">
        <TabsList>
          <TabsTrigger value="turmas">Turmas</TabsTrigger>
          <TabsTrigger value="assiduidade">Assiduidade</TabsTrigger>
          <TabsTrigger value="pagamentos">Pagamentos</TabsTrigger>
          <TabsTrigger value="relatorio">Relatório</TabsTrigger>
        </TabsList>
        <TabsContent value="turmas" className="mt-4">
          <div className="overflow-auto rounded-lg bg-card shadow-card">
            <table className="w-full text-sm">
              <thead><tr className="border-b bg-panel-2"><th className="px-4 py-3 text-left font-semibold">Turma</th><th className="px-4 py-3 text-left font-semibold">Horário</th><th className="px-4 py-3 text-left font-semibold">Nível</th><th className="px-4 py-3 text-left font-semibold">Professor</th></tr></thead>
              <tbody>
                {enrolledClasses.map((c) => (
                  <tr key={c.id} className="border-b last:border-b-0 hover:bg-secondary/50">
                    <td className="px-4 py-3 font-medium">{c.name}</td>
                    <td className="px-4 py-3">{c.schedule}</td>
                    <td className="px-4 py-3"><StatusBadge variant="gold">{c.level}</StatusBadge></td>
                    <td className="px-4 py-3">{c.teacher}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="assiduidade" className="mt-4"><div className="rounded-lg bg-card p-8 text-center text-muted-foreground shadow-card">Histórico de assiduidade (em desenvolvimento).</div></TabsContent>
        <TabsContent value="pagamentos" className="mt-4"><div className="rounded-lg bg-card p-8 text-center text-muted-foreground shadow-card">Histórico de pagamentos (em desenvolvimento).</div></TabsContent>
        <TabsContent value="relatorio" className="mt-4"><div className="rounded-lg bg-card p-8 text-center text-muted-foreground shadow-card">Relatório individual (em desenvolvimento).</div></TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentDetail;
