import { useState } from "react";
import { Link } from "react-router-dom";
import { students, classes } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StatusBadge from "@/components/StatusBadge";

const AdminStudents = () => {
  const [search, setSearch] = useState("");

  const filtered = students.filter((s) =>
    !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase())
  );

  const getClassNames = (ids: string[]) => ids.map((id) => classes.find((c) => c.id === id)?.name || id).join(", ");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-black">Alunos</h1>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">+ Novo Aluno</Button>
      </div>

      <Input placeholder="Pesquisar aluno..." value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-xs" />

      <div className="overflow-auto rounded-lg bg-card shadow-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-panel-2 text-left">
              <th className="px-4 py-3 font-semibold">Nome</th>
              <th className="px-4 py-3 font-semibold">Email / Telefone</th>
              <th className="px-4 py-3 font-semibold">Turmas</th>
              <th className="px-4 py-3 font-semibold">Assiduidade</th>
              <th className="px-4 py-3 font-semibold">Inscrição</th>
              <th className="px-4 py-3 font-semibold">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-b last:border-b-0 hover:bg-secondary/50 transition-colors">
                <td className="px-4 py-3 font-medium">{s.name}</td>
                <td className="px-4 py-3">
                  <p>{s.email}</p>
                  <p className="text-xs text-muted-foreground">{s.phone}</p>
                </td>
                <td className="px-4 py-3 text-xs">{getClassNames(s.classes)}</td>
                <td className="px-4 py-3">
                  <StatusBadge variant={s.attendance >= 80 ? "success" : s.attendance >= 60 ? "warning" : "danger"}>
                    {s.attendance}%
                  </StatusBadge>
                </td>
                <td className="px-4 py-3">{s.enrolledSince}</td>
                <td className="px-4 py-3">
                  <Link to={`/admin/students/${s.id}`}>
                    <Button variant="outline" size="sm" className="text-xs">Ver</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminStudents;
