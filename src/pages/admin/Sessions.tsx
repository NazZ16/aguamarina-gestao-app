import { useState } from "react";
import { sessions, classes } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import StatusBadge from "@/components/StatusBadge";
import { Link } from "react-router-dom";

const AdminSessions = () => {
  const [dateFilter, setDateFilter] = useState("");
  const [classFilter, setClassFilter] = useState("Todas");
  const [statusFilter, setStatusFilter] = useState("Todos");

  const filtered = sessions.filter((s) => {
    if (dateFilter && !s.date.includes(dateFilter)) return false;
    if (classFilter !== "Todas" && s.className !== classFilter) return false;
    if (statusFilter !== "Todos" && s.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black">Sessões</h1>

      <div className="flex flex-wrap gap-3">
        <Input type="date" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} className="w-[180px]" />
        <Select value={classFilter} onValueChange={setClassFilter}>
          <SelectTrigger className="w-[180px]"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Todas">Todas as turmas</SelectItem>
            {classes.map((c) => <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[150px]"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Todos">Todos</SelectItem>
            <SelectItem value="Realizada">Realizada</SelectItem>
            <SelectItem value="Pendente">Pendente</SelectItem>
            <SelectItem value="Cancelada">Cancelada</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-auto rounded-lg bg-card shadow-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-panel-2 text-left">
              <th className="px-4 py-3 font-semibold">Data</th>
              <th className="px-4 py-3 font-semibold">Turma</th>
              <th className="px-4 py-3 font-semibold">Professor</th>
              <th className="px-4 py-3 font-semibold">Presenças</th>
              <th className="px-4 py-3 font-semibold">Estado</th>
              <th className="px-4 py-3 font-semibold">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-b last:border-b-0 hover:bg-secondary/50 transition-colors">
                <td className="px-4 py-3">{s.date}</td>
                <td className="px-4 py-3 font-medium">{s.className}</td>
                <td className="px-4 py-3">{s.teacher || <span className="text-destructive text-xs">Sem professor</span>}</td>
                <td className="px-4 py-3">{s.attendees}/{s.total}</td>
                <td className="px-4 py-3">
                  <StatusBadge variant={s.status === "Realizada" ? "success" : s.status === "Pendente" ? "warning" : "danger"}>
                    {s.status}
                  </StatusBadge>
                </td>
                <td className="px-4 py-3">
                  <Link to={`/admin/sessions/${s.id}`}>
                    <Button variant="outline" size="sm" className="text-xs">Detalhes</Button>
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

export default AdminSessions;
