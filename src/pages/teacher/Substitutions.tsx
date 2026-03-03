import { useState } from "react";
import { substitutions } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/StatusBadge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const TeacherSubstitutions = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-black">Substituições</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              Pedir substituição
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Pedir substituição</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <Label>Data</Label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <Label>Turma</Label>
                <Input placeholder="Ex: Intermédio A" />
              </div>
              <div className="space-y-2">
                <Label>Motivo</Label>
                <Textarea placeholder="Descreva o motivo..." />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold" onClick={() => setOpen(false)}>
                Enviar pedido
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="overflow-auto rounded-lg bg-card shadow-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-panel-2 text-left">
              <th className="px-4 py-3 font-semibold">Data</th>
              <th className="px-4 py-3 font-semibold">Turma</th>
              <th className="px-4 py-3 font-semibold">Motivo</th>
              <th className="px-4 py-3 font-semibold">Estado</th>
            </tr>
          </thead>
          <tbody>
            {substitutions.map((s) => (
              <tr key={s.id} className="border-b last:border-b-0 hover:bg-secondary/50 transition-colors">
                <td className="px-4 py-3">{s.date}</td>
                <td className="px-4 py-3 font-medium">{s.className}</td>
                <td className="px-4 py-3">{s.reason}</td>
                <td className="px-4 py-3">
                  <StatusBadge variant={s.status === "Aprovada" ? "success" : s.status === "Pendente" ? "warning" : "danger"}>
                    {s.status}
                  </StatusBadge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherSubstitutions;
