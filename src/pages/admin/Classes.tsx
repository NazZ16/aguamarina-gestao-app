import { useState } from "react";
import { Link } from "react-router-dom";
import { classes, levels } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SpotGauge from "@/components/SpotGauge";
import StatusBadge from "@/components/StatusBadge";

const daysOpts = ["Todos", "Seg", "Ter", "Qua", "Qui", "Sex"];

const AdminClasses = () => {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("Todos");
  const [day, setDay] = useState("Todos");

  const filtered = classes.filter((c) => {
    if (search && !c.name.toLowerCase().includes(search.toLowerCase()) && !c.teacher.toLowerCase().includes(search.toLowerCase())) return false;
    if (level !== "Todos" && c.level !== level) return false;
    if (day !== "Todos" && !c.days.includes(day)) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-black">Turmas</h1>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">+ Nova Turma</Button>
      </div>

      <div className="flex flex-wrap gap-3">
        <Input placeholder="Pesquisar turma ou professor..." value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-xs" />
        <Select value={level} onValueChange={setLevel}>
          <SelectTrigger className="w-[160px]"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Todos">Todos os níveis</SelectItem>
            {levels.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={day} onValueChange={setDay}>
          <SelectTrigger className="w-[120px]"><SelectValue /></SelectTrigger>
          <SelectContent>
            {daysOpts.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-auto rounded-lg bg-card shadow-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-panel-2 text-left">
              <th className="px-4 py-3 font-semibold">Nome da Turma</th>
              <th className="px-4 py-3 font-semibold">Professor</th>
              <th className="px-4 py-3 font-semibold">Horário</th>
              <th className="px-4 py-3 font-semibold">Nível</th>
              <th className="px-4 py-3 font-semibold">Alunos/Vagas</th>
              <th className="px-4 py-3 font-semibold">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-b last:border-b-0 hover:bg-secondary/50 transition-colors">
                <td className="px-4 py-3 font-medium">{c.name}</td>
                <td className="px-4 py-3">{c.teacher}</td>
                <td className="px-4 py-3">{c.schedule}</td>
                <td className="px-4 py-3">
                  <StatusBadge variant="gold">{c.level}</StatusBadge>
                </td>
                <td className="px-4 py-3 min-w-[120px]">
                  <SpotGauge enrolled={c.enrolled} capacity={c.capacity} />
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    <Link to={`/admin/classes/${c.id}`}>
                      <Button variant="outline" size="sm" className="text-xs">Ver</Button>
                    </Link>
                    <Button variant="outline" size="sm" className="text-xs">Editar</Button>
                    <Button variant="outline" size="sm" className="text-xs">Relatório</Button>
                    <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/10">Apagar</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{filtered.length} turma(s)</span>
        <div className="flex gap-1">
          <Button variant="outline" size="sm" disabled>Anterior</Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">1</Button>
          <Button variant="outline" size="sm" disabled>Seguinte</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminClasses;
