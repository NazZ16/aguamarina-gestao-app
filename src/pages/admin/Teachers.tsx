import { teachers } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const AdminTeachers = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-black">Professores</h1>

    <div className="overflow-auto rounded-lg bg-card shadow-card">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-panel-2 text-left">
            <th className="px-4 py-3 font-semibold">Nome</th>
            <th className="px-4 py-3 font-semibold">Email</th>
            <th className="px-4 py-3 font-semibold">Turmas atribuídas</th>
            <th className="px-4 py-3 font-semibold">Disponibilidade</th>
            <th className="px-4 py-3 font-semibold">Ações</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((t) => (
            <tr key={t.id} className="border-b last:border-b-0 hover:bg-secondary/50 transition-colors">
              <td className="px-4 py-3 font-medium">{t.name}</td>
              <td className="px-4 py-3">{t.email}</td>
              <td className="px-4 py-3 text-xs">{t.classes.length > 0 ? t.classes.join(", ") : <span className="text-muted-foreground">—</span>}</td>
              <td className="px-4 py-3 text-xs">{t.availability}</td>
              <td className="px-4 py-3">
                <Button variant="outline" size="sm" className="text-xs">Ver</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AdminTeachers;
